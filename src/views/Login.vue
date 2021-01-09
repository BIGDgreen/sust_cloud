<template>
  <div class="login full-width center">
    <el-card shadow="hover">
      <div class="float-left">
        <img src="../assets/bg.jpg" alt="背景图片" width="400px" style="vertical-align: bottom">
      </div>
      <div class="login-form">
        <h1>科大盘</h1>
        <el-form v-if="!phoneLogin" ref="form1" :model="form1">
          <el-form-item>
            <el-input v-model="form1.jobId" placeholder="请输入手机号/工号" clearable>
              <i slot="prefix" class="el-input__icon el-icon-user"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-tooltip content="首次登录输入初始密码" placement="right" :manual="true" v-model="showTip">
              <el-input v-model="form1.password" placeholder="请输入密码" show-password clearable>
                <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                <i
                  slot="suffix"
                  class="el-input__icon el-icon-question"
                  @mouseenter="showTip=true"
                  @mouseleave="showTip=false">
                </i>
              </el-input>
            </el-tooltip>
          </el-form-item>
          <el-form-item>
            <div class="space-between">
              <el-button type="primary" :loading="logining" @click="onLogin" class="btn-width">登录</el-button>
              <el-button type="primary" plain @click="toPhoneLogin">手机快捷登录</el-button>
            </div>
          </el-form-item>
        </el-form>
        <el-form v-else ref="form2" :model="form2">
          <el-form-item>
            <el-input v-model="form2.telephone" placeholder="请输入手机号" clearable>
              <i slot="prefix" class="el-input__icon el-icon-phone"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form2.otpCode" maxlength="6" placeholder="请输入验证码" clearable>
              <el-button
                v-if="!sending"
                slot="append"
                type="primary"
                icon="el-icon-s-promotion"
                class="send-btn"
                @click="sendCode"
                >
              </el-button>
              <el-button v-else slot="append">{{countdown + 's'}}</el-button>
            </el-input>
          </el-form-item>
          <el-form-item>
            <div class="space-between">
              <el-button type="primary" :loading="logining" @click="onLogin" class="login-btn-width">登录</el-button>
              <el-button type="primary" plain @click="toLogin" class="btn-width">返回</el-button>
            </div>
          </el-form-item>
        </el-form>
        <footer class="footer-text">
          <center>开发团队：生产实习第六组</center>
        </footer>
      </div>
    </el-card>
  </div>
</template>

<script>
// @ is an alias to /src
import { login, phoneLogin } from '@/api/user';
export default {
  name: 'Home',
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
      logining: false,
      showTip: false,
      phoneLogin: false,
      sending: false,
      countdown: 60,
    }
  },
  methods: {
    sendCode() {
      this.$message({
        showClose: true,
        message: '验证码已发送，请注意查收',
        type: 'success'
      });
      if(!this.sending && this.countdown > 0) {
        this.sending = true;
        const timer = setInterval(() => {
          this.countdown > 0 && this.countdown --;
        }, 1000);
        setTimeout(() => {
          this.sending = false;
          this.countdown = 60;
          clearInterval(timer);
        }, 60000);
      }
    },
    async onLogin() {
      if(this.phoneLogin) {
        const { telephone, otpCode } = this.form2;
        await phoneLogin(telephone, otpCode);
      } else {
        const { password, jobId } = this.form1;
        await login(password, jobId);
      }
      this.$router.push('./')
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
  background-size: 280px;
  .login-form {
    margin: 60px;
    width: 232px;
  }
  /deep/ .el-card__body {
    display: flex;
    padding: 0;
    width: 100%;
  }
  .send-btn {
    border-radius: 0;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    border-color: #409EFF;
    background-color: #409EFF;
    color: #FFF;
    &:hover {
        background: #66b1ff !important;
        border-color: #66b1ff !important;
        color: #FFF !important;
    }
  }
  /deep/ .el-card__body {
    display: flex;
    padding: 0;
    width: 100%;
  }
  .login-btn-width {
    width: 60%;
  }
  .btn-width {
    width: 40%;
  }
  .footer-text {
    font-size: 12px;
    color: #aaa;
    margin-top: 60px;
  }
}
</style>
