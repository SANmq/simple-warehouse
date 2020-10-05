import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/el-reset.css'
import router from './router'

Vue.use(ElementUI, {
    size: 'mini'
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})