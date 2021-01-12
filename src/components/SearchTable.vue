<template>
  <div class="search-table">
    <el-input v-if="isFile || isRestore" placeholder="请输入内容" v-model="searchInput" class="input-with-select">
      <el-button slot="append" icon="el-icon-search" @click="$emit('onSearch', searchInput)"></el-button>
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
            cancel-button-text='取消'
            icon="el-icon-info"
            icon-color="red"
            :title="isFile ? '确定删除吗？' : '确定禁用该用户吗？'"
            @confirm="handleClick(scope.row)"
          >
            <el-button slot="reference" type="text" size="small">删除</el-button>
          </el-popconfirm>
          <el-button v-if="isFile" @click="handleShare(scope.row)" style="margin-left: 8px;" type="text" size="small">分享</el-button>
          <el-button v-if="isFile" @click="handlePreview(scope.row)" type="text" size="small">预览</el-button>
          <el-button v-if="isRestore" @click="handleRestore(scope.row)" style="margin-left: 8px;" type="text" size="small">恢复</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pagination"
      background
      small
      layout="prev, pager, next"
      :page-size="6"
      :total="total"
      :current-page="1"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getShare } from '../api/doc';
export default {
  name: "FileList",
  props: {
    tableData: Array,
    searchInput: String,
    select: String,
    columns: Array,
    addOperation: Boolean,
    addCheckbox: Boolean,
    isRestore: Boolean,
    isFile: Boolean,
    total: Number,
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
      const aNode = this.$createElement('a', {
        attrs: {
          href: link,
          target: '_blank'
        },
        style: {
          width: '380px',
          wordBreak: 'break-all'
        },
        }, link);
      this.$msgbox({
          title: '分享链接',
          message: aNode,
          confirmButtonText: '确定'
      });
    },
    async handlePreview(row) {
      const link = await getShare(row.docPath);
      window.open(link, '_blank');
    },
    handleCurrentChange(val) {
      this.$emit('changePageNumber', val);
    },
    handleCheck(row) {
      this.checkedFiles.push(row);
      localStorage.setItem('checkedFiles', JSON.stringify(this.checkedFiles));
    },
    handleClick(row) {
      this.$emit('onDelete', row);
    },
    handleRestore(row) {
      this.$emit('onRestore', row);
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