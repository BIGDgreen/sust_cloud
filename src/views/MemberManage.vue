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
        <el-form-item label="部门" prop="apartment" :label-width="formLabelWidth">
          <el-input v-model="form.apartment" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="telephone" :label-width="formLabelWidth">
          <el-input v-model="form.telephone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="工号" prop="uid" :label-width="formLabelWidth">
          <el-input v-model="form.uid" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="初始密码" prop="password" :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="importFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSingleImportMember">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import SearchTable from '../components/SearchTable.vue';
import { FORM_RULES, memberCols } from '../utils/constants';
import { singleImportMember, getAllUsers } from '../api/user';
export default {
  name: "MemberManage",
  components: {
    SearchTable,
  },
  data() {
    return {
      tableData: [],
      searchInput: '',
      select: '',
      columns: memberCols,
      importFormVisible: false,
      form: {
        name: '',
        email: '',
        apartment: '',
        telephone: '',
        uid: '',
        password: '',
      },
      rules: FORM_RULES,
      formLabelWidth: '100px'
    }
  },
  async mounted() {
    this.tableData = await getAllUsers(1);
  },
  methods: {
    showImportModal() {
      this.importFormVisible = true;
    },
    async onSingleImportMember() {
      await singleImportMember(this.form);
      this.importFormVisible = false;
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