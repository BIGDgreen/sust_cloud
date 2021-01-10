<template>
  <div class="member-manage">
    <search-table :tableData="tableData" :searchInput="searchInput" :select="select" />
  </div>
</template>

<script>
import SearchTable from '../components/SearchTable.vue';
export default {
  name: "MemberManage",
  components: {
    SearchTable,
  },
  data() {
    SearchTable
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(20).fill(item),
      searchInput: '',
      select: ''
    }
  }
}
</script>

<style lang="less" scoped>
</style>