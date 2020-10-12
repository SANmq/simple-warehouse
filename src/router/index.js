import Vue from "vue";
import VueRouter from "vue-router"
import routes from './config'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes,
})

router.beforeEach((to, from, next) => {
    const isLogin = eval(sessionStorage.getItem('isLogin'))
    if (to.path === '/') {
        next()
    } else {
        if (isLogin) {
            console.log('这里执行了么')
            next()
        } else {
            console.log('我没执行么')
            next('/')
        }
    }
})


export default router