import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './Home'
import About from './About.vue'

export default createRouter({
    // hash, history 2가지 모드 
    history:createWebHashHistory(),
    routes:[
        {
            path : '/',
            component: Home
        },
        {
            path:'/about',
            component: About
        }
    ]
})