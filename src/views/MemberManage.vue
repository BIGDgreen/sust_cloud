<template>
  <div class="member-manage">
    <search-table
      :tableData="tableData"
      :columns="columns"
      :searchInput="searchInput"
      :select="select"
      :addOperation="true"
    >
      <span class="extra-btns" slot="btns">
        <el-button type="primary" @click="showImportModal">单个导入</el-button>
        <el-button type="primary" plain @click="showImportModal">批量导入</el-button>
      </span>
    </search-table>
    <el-dialog title="导入成员" :visible.sync="importFormVisible">
      <el-form :model="form" :rules="rules">
        <el-form-item label="姓名" prop="name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email" :label-width="formLabelWidth">
          <el-input v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="telephone" :label-width="formLabelWidth">
          <el-input v-model="form.telephone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="工号" prop="jobId" :label-width="formLabelWidth">
          <el-input v-model="form.jobId" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="初始密码" prop="password" :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="importFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="importFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import SearchTable from '../components/SearchTable.vue';
import { FORM_RULES, memberCols } from '../utils/constants'
export default {
  name: "MemberManage",
  components: {
    SearchTable,
  },
  data() {
    SearchTable
    const arr = [
    {
      "uid": "A0101D01",
      "name": "王二",
      "telephone": "13609886654",
      "email": "18222443511@qq.com",
      "avatar": "https://img2.woyaogexing.com/2021/01/03/dcf67427410140e0a50656da1b03e451!400x400.jpeg",
      "apartment": "后端"
    },
    {
      "uid": "A0101D02",
      "name": "张三",
      "telephone": "13539110850",
      "email": "13609886654@qq.com",
      "avatar": "https://img2.woyaogexing.com/2021/01/03/dcf67427410140e0a50656da1b03e451!400x401.jpeg",
      "apartment": "后端"
    },
    {
      "uid": "A0102123",
      "name": "乔",
      "telephone": "15336155900",
      "email": "1491195822@qq.com",
      "avatar": "https://www.woyaogexing.com/touxiang/katong/2021/1086622.html",
      "apartment": "后端"
    },
    {
      "uid": "C0103D13",
      "name": "王一",
      "telephone": "18222443511",
      "email": "18312573526@qq.com",
      "avatar": "https://img2.woyaogexing.com/2021/01/03/dcf67427410140e0a50656da1b03e451!400x400.jpeg",
      "apartment": "后端"
    }
  ];
    return {
      tableData: arr,
      searchInput: '',
      select: '',
      columns: memberCols,
      importFormVisible: false,
      form: {
        name: '',
        email: '',
        telephone: '',
        jobId: '',
        password: '',
      },
      rules: FORM_RULES,
      formLabelWidth: '100px'
    }
  },
  methods: {
    showImportModal() {
      this.importFormVisible = true;
    }
  }
}
</script>

<style lang="less" scoped>
.member-manage {
  .extra-btns {
    margin-left: 20px;
  }
  /deep/ .el-dialog {
    margin-top: 10vh !important;
    width: 40%;
  }
  /deep/ .el-dialog__body {
    padding: 20px 60px 10px 40px;
  }
}
</style>