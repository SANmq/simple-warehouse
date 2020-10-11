import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/el-reset.css'
import router from './router'
import store from './store'
import './vchart'
import plugins from './plugins'

Vue.use(ElementUI, {
    size: 'mini'
})

Vue.use(plugins)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})