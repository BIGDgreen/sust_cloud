<template>
  <div class="user-info center">
    <el-card class="info-card">
      <img :src="user.avatar" class="avatar">
      <div style="padding: 14px;">
        <div class="info-item">用户名：{{user.username}}</div>
        <div class="info-item">工号：{{user.jobId}}</div>
        <div class="info-item">手机号：{{user.telephone}}</div>
        <div class="bottom clearfix">
          <el-button type="text" class="button">修改密码</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  data() {
    return {
      user: {
        avatar: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        username: '王小虎',
        jobId: '123',
        telephone: '123456',
      },
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
}
</style>
