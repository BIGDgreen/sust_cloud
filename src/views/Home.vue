<template>
  <div class="home">
    <el-container style="border: 1px solid #eee; height: 100vh;">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['FileManage']" :default-active="$router.currentRoute.path" router>
        <el-submenu index="FileManage">
          <template slot="title">
            <i class="el-icon-folder"></i>
            <span>文件管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/fileList">文件列表</el-menu-item>
            <el-menu-item index="/uploadFile">文件上传</el-menu-item>
            <el-menu-item index="/recycleBin">回收站</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/member" v-if="isAdmin">
          <i class="el-icon-setting"></i>
          <span slot="title">成员管理</span>
        </el-menu-item>
        <el-menu-item index="/user">
          <i class="el-icon-user"></i>
          <span slot="title">个人中心</span>
        </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header class="space-between">
          <strong style="font-size: 18px">科大盘</strong>
            <el-popover
              placement="bottom"
              trigger="hover"
              popper-class="fix-width"
            >
              <el-button type="text" @click="logout">退出登录</el-button>
              <div slot="reference" style="font-size: 12px">欢迎您，{{ username }}</div>
            </el-popover>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { isAdmin, getUsername } from '../utils/utils';
export default {
  name: "Home",
  data() {
    return {
      isAdmin: isAdmin(),
      username: getUsername()
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('uid');
      localStorage.removeItem('user');
      this.$router.push('/login');
    }
  },
}
</script>

<style lang="less" scoped>
.home {
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }
}
</style>