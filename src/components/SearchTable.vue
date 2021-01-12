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
        width="120px"
      >
        <template slot-scope="scope">
          <el-popconfirm
            confirm-button-text='确定'
            cancel-button-text='删除'
            icon="el-icon-info"
            icon-color="red"
            :title="isFile ? '确定删除吗？' : '确定禁用该用户吗？'"
            @confirm="handleClick(scope.row)"
          >
            <el-button slot="reference" type="text" size="small">删除</el-button>
          </el-popconfirm>
          <el-button v-if="isFile" @click="handleShare(scope.row)" type="text" size="small" style="margin-left: 8px;">分享</el-button>
          <el-button v-if="isFile" @click="handlePreview(scope.row)" type="text" size="small">预览</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pagination"
      background
      small
      layout="prev, pager, next"
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
import { deleteUser } from '../api/user';
import { getShare, deleteFile } from '../api/doc';
export default {
  name: "FileList",
  props: {
    tableData: Array,
    searchInput: String,
    select: String,
    columns: Array,
    addOperation: Boolean,
    addCheckbox: Boolean,
    isFile: Boolean
  },
  data() {
    return {
      deleteVisible: false,
      checkedFiles: []
    }
  },
  methods: {
    async handleShare(row) {
      const link = await getShare(row.docPath);
      this.$alert(link, '分享链接', {
          confirmButtonText: '确定'
      });
    },
    async handlePreview(row) {
      const link = await getShare(row.docPath);
      window.open(link, '_blank');
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleCheck(row) {
      this.checkedFiles.push(row);
      localStorage.setItem('checkedFiles', JSON.stringify(this.checkedFiles));
    },
    async handleClick(row) {
      if(this.isFile) {
        await deleteFile(row.docId);
        this.$message.success('删除成功');
      } else {
        await deleteUser(row.uid);
        this.$message.success('禁用成功');
      }
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