<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.float-left {
  float: left;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
.space-between {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.full-width {
  width: 100%;
}
.fix-width {
  min-width: 0 !important;
}
</style>
