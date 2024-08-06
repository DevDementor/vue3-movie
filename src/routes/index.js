import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './Home'
import About from './About'
import Movie from './Movie'

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
        ,
        {
            path:'/movie',
            component: Movie
        }
    ]
})