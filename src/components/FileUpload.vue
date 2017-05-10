<template>
  <div class="hello">
    <h1>upload file</h1>
    <!--上传图片-->
    <div id="wp" class="upload_warpper">
      <upload></upload>
    </div>
  </div>
</template>

<script>
import Upload from './extend/upload'
export default {
  components: {
    Upload
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
