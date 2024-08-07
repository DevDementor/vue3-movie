import {createApp} from 'vue'
import App from './App.vue'
import router from './routes'//index.js 경로 생략 가능
import store from './store/index'

createApp(App).use(router).use(store).mount('#app')