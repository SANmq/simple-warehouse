import axios from 'axios'


export default {
    install(Vue, options) {

        Vue.mixin({
            methods: {
                // 判断当前是否已有登录
                _refresh() {
                    this._getSession()
                    const queue = [{key: 'classifyList', store: 'config'}]
                    for (let item of queue) {
                        this._getLocal(item.key, item.store)
                    }
                },
                _setSession(adminName) {
                    sessionStorage.setItem('isLogin', true)
                    sessionStorage.setItem('adminName', adminName)
                    this._getSession()
                },

                _getSession() {
                    const isLogin = Boolean(sessionStorage.getItem('isLogin'))
                    if (isLogin) {
                        this.$store.commit('setIsLogin', true)
                        this.$store.commit('setAdminName', sessionStorage.getItem('adminName'))
                    } else {
                        this.$store.commit('setIsLogin', false)
                        this.$store.commit('setAdminName', null)
                    }
                },
                /**
                 * 本地仓库内容的存取
                 * @param key 存放内容的key
                 * @param store 存放内容本地仓库的位置
                 * @private
                 */
                _getLocal(key, store) {
                    const temp = JSON.parse(localStorage.getItem(key))
                    if (temp) {
                        this.$store.commit(`${store}/set${key.charAt(0).toUpperCase() + key.slice(1)}`, temp)
                    }
                    return temp
                },
                _setLocal(key, value, store) {
                    localStorage.setItem(key, JSON.stringify(value))
                    // 存放同时对应更新vuex仓库数据
                    this._getLocal(key, store)
                }
            }
        })

        axios.defaults.withCredentials = true
        axios.defaults.baseURL = 'http://localhost:8888/'

        axios.defaults.validateStatus = (status) => {
            if (status === 401) {
                sessionStorage.setItem('isLogin', false)
            }
            return status >= 200 && status < 300 || status === 401 // default
        }
        Vue.prototype.$http = axios
    }
}