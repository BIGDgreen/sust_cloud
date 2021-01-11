<template>
  <div class="user-info center">
    <el-card class="info-card">
      <img :src="user.avatar" class="avatar">
      <div style="padding: 14px;">
        <div class="info-item">用户名：{{user.username}}</div>
        <div class="info-item">工号：{{user.jobId}}</div>
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
          v-on:onCancel="resetPwdVisible = false"
        />
    </el-dialog>
  </div>
</template>

<script>
import ConfirmPwdForm from '../components/ConfirmPwdForm';
export default {
  name: "UserInfo",
  components: {
    ConfirmPwdForm
  },
  data() {
    return {
      user: {
        avatar: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        username: '王小虎',
        jobId: '123',
        telephone: '123456',
        email: '123@qq.com'
      },
      resetPwdVisible: false,
      pwdForm: {
        pwd1: '',
        pwd2: ''
      },
    }
  },
  methods: {
    showResetPwdModal() {
      this.resetPwdVisible = true;
    },
    onRestPwd() {
      this.resetPwdVisible = false;
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
  /deep/ .el-dialog {
  margin-top: 10vh !important;
  width: 32%;
  }
  /deep/ .el-dialog__body {
    padding: 20px 60px 10px 40px;
  }
}
</style>
