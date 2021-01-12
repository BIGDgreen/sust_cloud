<template>
  <div class="user-info center">
    <el-card class="info-card">
      <img :src="user.avatar" class="avatar">
      <div style="padding: 14px;">
        <div class="info-item">用户名：{{user.name}}</div>
        <div class="info-item">工号：{{user.uid}}</div>
        <div class="info-item">手机号：{{user.telephone}}</div>
        <div class="info-item">邮箱：{{user.email}}</div>
        <div class="bottom clearfix">
          <el-button type="text" class="button" @click="showResetPwdModal">修改密码</el-button>
        </div>
      </div>
    </el-card>
    <el-dialog title="修改密码" :visible.sync="resetPwdVisible">
       <confirm-pwd-form
          :form="pwdForm"
          confirmText="确认修改"
          v-on:onConfirm="onRestPwd"
          v-on:onCancel="closeModal"
        />
    </el-dialog>
  </div>
</template>

<script>
import { getUserInfo } from '../utils/utils';
import { resetPwd } from '../api/user';
import ConfirmPwdForm from '../components/ConfirmPwdForm';
export default {
  name: "UserInfo",
  components: {
    ConfirmPwdForm
  },
  data() {
    return {
      user: getUserInfo(),
      resetPwdVisible: false,
      pwdForm: {
        password1: '',
        password2: ''
      },
    }
  },
  methods: {
    closeModal() {
      this.resetPwdVisible = false;
      this.pwdForm.resetFields();
    },
    showResetPwdModal() {
      this.resetPwdVisible = true;
    },
    async onRestPwd() {
      const { password1, password2 } = this.pwdForm;
      const { uid, telephone } = this.user;
      if(password1 === password2) {
        await resetPwd(uid, password2, telephone);
        this.resetPwdVisible = false;
        this.$message.success('修改成功');
        this.pwdForm.resetFields();
      } else {
        this.$message.error('两次密码输入不一致');
      }
    }
  }
}
</script>

<style lang="less" scoped>
.user-info {
  .info-card {
    padding: 20px 40px 0 40px;
  }
  .avatar {
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }
  .info-item {
    color: #6e6e6e;
    line-height: 32px;
  }
  /deep/ .el-card__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  /deep/ .el-dialog {
    margin-top: 10vh !important;
    width: 32%;
  }
  /deep/ .el-dialog__body {
    padding: 20px 60px 10px 40px;
  }
}
</style>
