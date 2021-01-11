<template>
  <div class="file-list">
    <search-table
      :addCheckbox="true"
      :tableData="tableData"
      :columns="columns"
      :searchInput="searchInput"
      :select="select"
    >
      <span class="extra-btns" slot="btns">
        <el-button type="primary" @click="onBatchRestore">批量恢复</el-button>
        <el-button type="danger" @click="onBatchDelete">批量删除</el-button>
      </span>
    </search-table>
  </div>
</template>

<script>
import SearchTable from '../../components/SearchTable.vue';
import { fileCols } from '../../utils/constants'
export default {
  name: "FileList",
  components: {
    SearchTable,
  },
  data() {
    const arr = [{
      "docId": 1,
      "docName": "《简存取云盘》数据字典.doc",
      "docPath": "weirwei/test/《简存取云盘》数据字典.doc",
      "docStatus": 0,
      "uploadTime": "2021-01-10 12:51:41",
      "docDescribe": "2021-01-10 12:51:41",
      "deleteTime": "2000-01-01 00:00:00",
      "uid": "201706020228",
      "docType": "UNKNOW",
      "docSize": 89
    },
    {
      "docId": 3,
      "docName": "plan.png",
      "docPath": "weirwei/test/plan.png",
      "docStatus": 0,
      "uploadTime": "2021-01-11 15:40:39",
      "docDescribe": "",
      "deleteTime": "2000-01-01 00:00:00",
      "uid": "201706020228",
      "docType": "UNKNOW",
      "docSize": 31
    },
    {
      "docId": 4,
      "docName": "成绩单.pdf",
      "docPath": "weirwei/test/成绩单.pdf",
      "docStatus": 0,
      "uploadTime": "2021-01-11 15:41:49",
      "docDescribe": "",
      "deleteTime": "2000-01-01 00:00:00",
      "uid": "201706020228",
      "docType": "pdf",
      "docSize": 762
    }];
    return {
      columns: fileCols,
      tableData: arr,
      searchInput: '',
      select: ''
    }
  },
  methods: {
    onBatchRestore() {

    },
    onBatchDelete() {

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