import Vue from 'vue'
import Router from 'vue-router'
import FileUpload from '@/components/FileUpload'
import Restful from '@/components/Restful'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: FileUpload
    }, {
        path: '/restful',
        component: Restful
    }]
})