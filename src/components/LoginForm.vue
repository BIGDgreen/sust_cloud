<template>
  <div class="LoginForm">
    <el-form ref="form" :model="form">
      <el-form-item>
        <el-input v-model="form.jobId" placeholder="请输入手机号/工号" clearable>
          <i slot="prefix" class="el-input__icon el-icon-user"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-tooltip content="首次登录输入初始密码" placement="right" :manual="true" v-model="showTip">
          <el-input v-model="form.password" placeholder="请输入密码" show-password clearable>
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
          <el-button type="primary" :loading="logining" @click="$emit('onLogin')" class="btn-width">登录</el-button>
          <el-button type="primary" plain @click="$emit('toPhoneLogin')">手机快捷登录</el-button>
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
    logining: Boolean,
  },
}
</script>

<style scoped lang="less">
.btn-width {
  width: 40%;
}
</style>
