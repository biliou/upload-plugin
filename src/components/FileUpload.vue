<template>
  <div class="hello">
    <h1>upload file</h1>
    <!--上传图片-->
    <div id="wp" class="upload_warpper">
      <vue-upload></vue-upload>
    </div>
  </div>
</template>

<script>
import VueUpload from './extend/vue-http-upload'
export default {
  components: {
    VueUpload
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
