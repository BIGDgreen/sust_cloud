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
    >
      <span class="extra-btns" slot="btns">
        <el-button type="primary" @click="onDownload">下载</el-button>
      </span>
    </search-table>
  </div>
</template>

<script>
import SearchTable from '../../components/SearchTable.vue';
import { fileCols } from '../../utils/constants'
import { getDoc, apiPrefix } from "../../api/doc";
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
      select: ''
    }
  },
  async mounted() {
    this.tableData = await getDoc(2);
  },
  methods: {
    async onDownload() {
      const checkedFiles = JSON.parse(localStorage.getItem('checkedFiles'));
      checkedFiles.forEach(item => {
        window.open(`${apiPrefix}file?objectKey=${item.docPath}&uid=${localStorage.getItem('uid')}`, '_blank');
      });
    },
    onPreview() {
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