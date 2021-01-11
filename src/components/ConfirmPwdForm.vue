<template>
  <div class="ConfirmPwdForm">
    <el-form ref="form" :model="form">
      <el-form-item>
        <el-input v-model="form.password" prop="pass" placeholder="请输入新密码" show-password clearable>
          <i slot="prefix" class="el-input__icon el-icon-lock"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.password" prop="checkPass" placeholder="再次输入密码" show-password clearable>
          <i slot="prefix" class="el-input__icon el-icon-lock"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <div class="space-between">
          <el-button type="primary" :loading="logining" @click="$emit('onConfirm')" class="login-btn-width">{{confirmText || "确定"}}</el-button>
          <el-button type="primary" plain @click="$emit('onCancel')" class="btn-width">{{cancelText || '取消'}}</el-button>
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
    confirmText: String,
    cancelText: String,
  },
  data() {
     const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      const validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
      }
    }
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
