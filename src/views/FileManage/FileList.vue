<template>
  <div class="file-list">
    <search-table
      :addOperation="true"
      :addCheckbox="true"
      :tableData="tableData"
      :columns="columns"
      :searchInput="searchInput"
      :select="select"
      :isFile="true"
      :total="total"
      v-on:onSearch="onSearch"
      v-on:changePageNumber="changePageNumber"
      v-on:onDelete="onDeleteFile"
    >
      <span class="extra-btns" slot="btns">
        <el-button type="primary" @click="onDownload">下载</el-button>
      </span>
    </search-table>
  </div>
</template>

<script>
import SearchTable from '../../components/SearchTable.vue';
import { fileCols, baseUrl } from '../../utils/constants'
import { getDoc, deleteFile } from "../../api/doc";
export default {
  name: "FileList",
  components: {
    SearchTable,
  },
  data() {
    return {
      columns: fileCols,
      tableData: [],
      total: 0,
      searchInput: '',
      select: ''
    }
  },
  async mounted() {
    const { documentList, total } = await getDoc(0);
    this.tableData = documentList;
    this.total = total;
  },
  methods: {
    async onDownload() {
      const checkedFiles = JSON.parse(localStorage.getItem('checkedFiles'));
      checkedFiles.forEach(item => {
        window.open(`${baseUrl}/file?objectKey=${item.docPath}&uid=${localStorage.getItem('uid')}`, '_blank');
      });
    },
    async changePageNumber(page) {
       this.tableData = (await getDoc(0, '', page)).documentList;
    },
    async onSearch(searchInput) {
      const res = await getDoc(0, searchInput);
      this.tableData = res.documentList;
      this.total = res.total;
    },
    async onDeleteFile(row) {
      await deleteFile(row.docPath);
      this.$message.success('删除成功');
      this.tableData = (await getDoc(0)).documentList;
    }
  },
}
</script>

<style lang="less" scoped>
.file-list {
  .extra-btns {
    margin-left: 20px;
  }
}
</style>