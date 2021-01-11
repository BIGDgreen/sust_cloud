<template>
  <div class="login full-width center">
    <el-card shadow="hover">
      <div class="float-left">
        <img src="../assets/bg.jpg" alt="背景图片" width="400px" style="vertical-align: bottom">
      </div>
      <div class="login-form">
        <h1>科大盘</h1>
        <login-form
          v-if="!phoneLogin"
          :form="form1"
          v-on:onLogin="onLogin"
          v-on:toPhoneLogin="toPhoneLogin"
        />
        <phone-login-form
          v-else
          confirmText="登录"
          :form="form2"
          v-on:onLogin="onLogin"
          v-on:toLogin="toLogin"
          v-on:onSendCode="sendCode"
        />
        <footer class="footer-text">
          <center v-if="!phoneLogin" class="forget-link">忘记密码？</center>
          <center>开发团队：生产实习第六组</center>
        </footer>
      </div>
    </el-card>
  </div>
</template>

<script>
import { login, phoneLogin, getCode } from '@/api/user';
import LoginForm from '../components/LoginForm';
import PhoneLoginForm from '../components/PhoneLoginForm';
export default {
  name: 'Home',
  components: {
    LoginForm,
    PhoneLoginForm,
  },
  data() {
    return {
      form1: {
        jobId: '',
        password: '',
      },
      form2: {
        telephone: '',
        otpCode: '',
      },
      showTip: false,
      phoneLogin: false,
    }
  },
  methods: {
    async sendCode() {
      const { telephone } = this.form2;
      telephone && await getCode(telephone);
    },
    _toHome(isFirstLogin) {
      const path = isFirstLogin ? './resetPwd' : './';
      this.$router.push(path);
    },
    async onLogin() {
      const { password, jobId } = this.form1;
      const { isFirstLogin } = await login(password, jobId);
      this._toHome(isFirstLogin);
    },
    async onPhoneLogin() {
      const { telephone, otpCode } = this.form2;
      const { isFirstLogin } = await phoneLogin(telephone, otpCode);
      this._toHome(isFirstLogin);
    },
    toPhoneLogin() {
      this.phoneLogin = true;
    },
    toLogin() {
      this.phoneLogin = false;
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  height: 100vh;
  background-image: url('../assets/bg_bg.jpg');
  background-size: 320px;
  .login-form {
    margin: 60px;
    width: 232px;
  }
  /deep/ .el-card__body {
    display: flex;
    padding: 0;
    width: 100%;
  }
  .footer-text {
    font-size: 12px;
    color: #aaa;
    margin-top: 40px;
    .forget-link {
      color: #409EFF;
      cursor: pointer;
      margin-bottom: 20px;
    }
  }
}
</style>
