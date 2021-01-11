<template>
  <div class="file-list flex-column center">
    <el-upload
      drag
      with-credentials
      action="https://jsonplaceholder.typicode.com/posts/"
      on-success="successUpload"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或 <em>点击上传</em> </div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: "FileList",
  methods: {
    successUpload(response, file, fileList) {
      console.log('file::', response, file, fileList);
    }
  }
}
</script>
