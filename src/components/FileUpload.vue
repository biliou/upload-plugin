<template>
  <div class="hello">
    <h1>upload file</h1>
    <!--上传图片-->
    <div id="wp" class="upload_warpper">
      <axios-upload></axios-upload>
    </div>
  </div>
</template>

<script>
import VueUpload from './extend/vue-http-upload'
import AxiosUpload from './extend/axios-http-upload'
export default {
  components: {
    VueUpload,
    AxiosUpload
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
