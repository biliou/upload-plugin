<template>
  <div>
    <h2>插件 —— 上传文件</h2>
    <div id="uploadBox">
      <input v-show="false" type="file" @change="upload" ref="uploadInput" />
      <button @click="chooseFile" class="btn btn-default btn-xs">
        <img :src="imgSrc" />
      </button>
    </div>
    <!-- 遮罩层 -->
    <div id="maskLayer" class="mask-layer" style="display:none;">
      <p>图片正在上传中...</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'

export default {
  data() {
    return {
      imgSrc: '/static/headImg/1.png'
    }
  },
  methods: {
    chooseFile() {
      this.$refs.uploadInput.click()
    },
    upload() {
      console.log('run input html')
      var that = this

      //组装一组用XMLHttpRequest发送请求的键/值对。数据存储格式
      var formData = new FormData()
      formData.append('ufile', this.$refs.uploadInput.files[0])

      console.log(Vue)
      //发送请求
      Vue.http.post('/service/extend/upload/file', formData).then(function (response) {
        console.log(response)
        // if (response.statusText == "OK") {
        //   console.log(response.data)
        // }
      }).catch(function (error) {
        console.log("error");
        console.log(error);
      })
    }
  }
}
</script>
