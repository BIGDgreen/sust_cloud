<template>
  <div class="reset-pwd full-width center">
    <el-card shadow="hover" class="card-width">
      <el-steps :active="curStep" finish-status="success" simple class="step-line">
        <el-step title="手机号验证"></el-step>
        <el-step title="修改密码"></el-step>
      </el-steps>
      <phone-login-form
        v-if="curStep === 1"
        class="phone-form-width"
        :form="form1"
        :logining="false"
        confirmText="下一步"
        v-on:onLogin="toNext"
        v-on:toLogin="toLogin"
        v-on:onSendCode="sendCode"
      />
      <confirm-pwd-form
        v-if="curStep === 2"
        class="phone-form-width"
        :form="form2"
        v-on:onConfirm="onConfirm"
      />
    </el-card>
  </div>
</template>

<script>
import PhoneLoginForm from '../components/PhoneLoginForm';
import ConfirmPwdForm from '../components/ConfirmPwdForm';
import { getCode } from '@/api/user';
export default {
  name: 'ResetPwd',
  components: {
    PhoneLoginForm,
    ConfirmPwdForm
  },
  data() {
    return {
      form1: {
        telephone: '',
        otpCode: '',
      },
      form2: {
        password1: '',
        password2: '',
      },
      curStep: 1,
    }
  },
   methods: {
    async sendCode() {
      const { telephone } = this.form1;
      telephone && await getCode(telephone);
    },
    toNext() {
      console.log(this.curStep);
      this.curStep = 2;
    },
    toLogin() {
      this.$router.push('./login');
    },
    onConfirm() {
      this.$router.push('./');
    }
  }
}
</script>

<style lang="less" scoped>
.reset-pwd {
  height: 100vh;
  background-image: url('../assets/bg_bg.jpg');
  background-size: 280px;
  .card-width {
    width: 40%;
  }
  .phone-form-width {
    width: 260px;
    margin: 0 auto;
  }
  .step-line {
    margin-bottom: 40px;
    margin-top: 20px;
  }
}
</style>