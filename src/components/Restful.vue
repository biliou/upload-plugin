<template>
  <div class="hello">
    <h1>Restful 风格</h1>
    <!--Restful-->
    <div>
      <button @click="getFunc">GET 获取数据</button>
      <button @click="postFunc">POST 创建数据</button>
      <button @click="putFunc">PUT 更新数据</button>
      <button @click="deleteFunc">DELETE 删除数据</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            title:1
        }
    },
    methods: {
        getFunc() {
            console.log("GET")

            //发送GET请求
            axios.get('/title/' + this.title).then(function (response) {
                if (response) {
                    console.log("title名 = " + response.data)
                }
            }).catch(function (error) {
                console.log("error");
                console.log(error);
            })
        },
        postFunc() {
            console.log("POST")

            //发送POST请求
            axios.post('/title/' + this.title).then(function (response) {
                if (response) {
                    console.log("content = " + response.data)
                }
            }).catch(function (error) {
                console.log("error");
                console.log(error);
            })
        },
        putFunc() {
            console.log("PUT")

            //发送PUT请求
            axios.put('/title/' + this.title).then(function (response) {
                if (response) {
                    console.log("title名 = " + response.data)
                }
            }).catch(function (error) {
                console.log("error");
                console.log(error);
            })
        },
        deleteFunc() {
            console.log("DELETE")

            //发送DELETE请求
            axios.delete('/title/' + this.title).then(function (response) {
                if (response) {
                    console.log("title名 = " + response.data)
                }
            }).catch(function (error) {
                console.log("error");
                console.log(error);
            })
        },
    }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
