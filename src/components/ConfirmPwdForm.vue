<template>
  <div class="ConfirmPwdForm">
    <el-form ref="form" :model="form">
      <el-form-item>
        <el-input v-model="form.password" placeholder="请输入新密码" show-password clearable>
          <i slot="prefix" class="el-input__icon el-icon-lock"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.password" placeholder="再次输入密码" show-password clearable>
          <i slot="prefix" class="el-input__icon el-icon-lock"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <div class="space-between">
          <el-button type="primary" :loading="logining" @click="$emit('onConfirm')" class="login-btn-width">进入首页</el-button>
          <el-button type="primary" plain @click="$emit('toLogin')" class="btn-width">返回</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'ConfirmPwdForm',
  props: {
    form: Object,
    logining: Boolean,
  },
}
</script>

<style scoped lang="less">
.login-btn-width {
  width: 60%;
}
.btn-width {
  width: 40%;
}
</style>
