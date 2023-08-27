import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import './style/init.css'
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';
import router from "./router";

// 设置title
router.beforeEach((to, from, next) => {
    document.title = <string>to.meta.title
    next()
})

const app=createApp(App)
app.use(ArcoVue);
app.use(router)
app.mount('#app')
