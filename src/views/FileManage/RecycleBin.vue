<template>
  <div class="file-list">
    <search-table
      :isRestore="true"
      :addOperation="true"
      :tableData="tableData"
      :columns="columns"
      :searchInput="searchInput"
      :select="select"
      :total="total"
      v-on:changePageNumber="changePageNumber"
      v-on:onRestore="onRestoreFile"
    >
      <span class="extra-btns" slot="btns">
        <el-button type="danger" @click="onEmptyBin">清空</el-button>
      </span>
    </search-table>
  </div>
</template>

<script>
import SearchTable from '../../components/SearchTable.vue';
import { fileCols } from '../../utils/constants';
import { getDoc, emptyBin, restoreFromBin } from '../../api/doc';
export default {
  name: "FileList",
  components: {
    SearchTable,
  },
  data() {
    return {
      columns: fileCols,
      tableData: [],
      searchInput: '',
      select: '',
      total: 0,
    }
  },
  async mounted() {
    const { documentList, total } = await getDoc(1);
    this.tableData = documentList;
    this.total = total;
  },
  methods: {
    async changePageNumber(page) {
      this.tableData = (await getDoc(1, '', page)).documentList;
    },
    async onEmptyBin() {
      await emptyBin();
      this.$message.success('已清空');
      this.tableData = await getDoc(1).documentList;
    },
    async onSearch(searchInput) {
      const res = await getDoc(1, searchInput);
      this.tableData = res.documentList;
      this.total = res.total;
    },
    async onRestoreFile(row) {
      await restoreFromBin(row.docPath);
    }
  }
}
</script>

<style lang="less" scoped>
.file-list {
  .extra-btns {
    margin-left: 20px;
  }
}
</style>