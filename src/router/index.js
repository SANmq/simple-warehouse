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
            next()
        } else {
            next('/')
        }
    }
})


export default router