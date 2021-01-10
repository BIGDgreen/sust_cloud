<template>
  <div class="phone-login-form">
    <el-form ref="form" :model="form">
      <el-form-item>
        <el-input v-model="form.telephone" placeholder="请输入手机号" clearable>
          <i slot="prefix" class="el-input__icon el-icon-phone"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.otpCode" maxlength="6" placeholder="请输入验证码" clearable>
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
          <el-button type="primary" :loading="logining" @click="$emit('onLogin')" class="login-btn-width">{{confirmText}}</el-button>
          <el-button type="primary" plain @click="$emit('toLogin')" class="btn-width">返回</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  props: {
    form: Object,
    confirmText: String,
    logining: Boolean,
  },
  data() {
    return {
      sending: false,
      countdown: 60,
    }
  },
  methods: {
    async sendCode() {
      await this.$emit('onSendCode');
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
    }
  }
}
</script>

<style scoped lang="less">
.phone-login-form {
  .login-btn-width {
    width: 60%;
  }
  .btn-width {
    width: 40%;
  }
  .send-btn {
    border-radius: 0;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    border-color: #409EFF !important;
    background-color: #409EFF !important;
    color: #FFF !important;
    &:hover {
      background: #66b1ff !important;
      border-color: #66b1ff !important;
      color: #FFF !important;
    }
  }
}
</style>