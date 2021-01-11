<template>
  <div class="search-table">
    <el-input placeholder="请输入内容" v-model="searchInput" class="input-with-select">
    <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <slot name="btns"></slot>
    <el-table :data="tableData" height="400">
      <el-table-column
        v-if="addCheckbox"
        width="40"
        label="">
        <template slot-scope="scope">
          <el-checkbox @change="handleCheck(scope.row)"></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column
        v-for="col in columns"
        :key="col.prop"
        :prop="col.prop"
        :label="col.label"
        :width="col.width">
      </el-table-column>
      <el-table-column
        v-if="addOperation"
        fixed="right"
        label="操作"
        width="80px"
      >
        <template slot-scope="scope">
          <el-popover
            placement="top"
            width="240"
            v-model="visible">
              <p>确定删除吗？</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
              </div>
              <el-button slot="reference" @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
          </el-popover>
          <el-button @click="handleClick(scope.row)" type="text" size="small">分享</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pagination"
      background
      small
      layout="total, sizes, prev, pager, next"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      :total="100"
      :current-page="1"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "FileList",
  props: {
    tableData: Array,
    searchInput: String,
    select: String,
    columns: Array,
    addOperation: Boolean,
    addCheckbox: Boolean,
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
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