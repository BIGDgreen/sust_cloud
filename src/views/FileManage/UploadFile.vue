<template>
  <div class="file-list flex-column center">
    <el-upload
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或 <em>点击上传</em> </div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: "FileList",
  data() {}
}
</script>
