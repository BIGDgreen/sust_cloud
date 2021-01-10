<template>
  <div class="search-table">
    <el-input placeholder="请输入内容" v-model="searchInput" class="input-with-select">
      <el-select v-model="select" slot="prepend" placeholder="请选择">
        <el-option label="餐厅名" value="1"></el-option>
        <el-option label="订单号" value="2"></el-option>
        <el-option label="用户电话" value="3"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <el-table :data="tableData" height="400">
      <el-table-column prop="date" label="日期" width="140">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
    <el-pagination
      class="pagination"
      background
      small
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "FileList",
   props: {
    tableData: Array,
    searchInput: String,
    select: String
  },
}
</script>

<style lang="less" scoped>
.search-table {
  .input-with-select {
    width: 460px;
  }
  /deep/ .el-select {
    width: 120px;
  }
  .pagination {
    float: right;
    padding-top: 12px;
    padding-bottom: 0;
  }
}
</style>