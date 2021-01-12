<template>
  <div class="file-list flex-column center">
    <el-upload
      drag
      :action="`${apiPrefix}/file`"
      :data="data"
      ref="upload"
      :on-success="successUpload"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或 <em>点击上传</em> </div>
    </el-upload>
    <!-- <el-input class="file-textarea" type="textarea" :autosize="{ minRows: 4 }" placeholder="文件描述..."></el-input> -->
    <!-- <el-button type="primary" class="upload-btn" @click="uploadFile">确定上传</el-button> -->
  </div>
</template>

<script>
import { uploadFile, apiPrefix } from '../../api/doc';
export default {
  name: "FileList",
  data() {
    return {
      data: {
        uid: localStorage.getItem('uid'),
        apiPrefix: apiPrefix
      }
    }
  },
  methods: {
    successUpload(response, file) {
      this.file = file;
      this.name = file.name;
    },
    async uploadFile() {
      await uploadFile(this.file, this.name);
      this.$message.success('上传成功');
    }
  }
}
</script>

<style lang="less" scoped>
.file-textarea {
  width: 40%;
  margin-bottom: 20px;
}
.upload-btn {
  margin-top: 20px;
}
</style>
