import axios from 'axios'

Date.prototype.format = function (fmt) {
    let o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                    //日
        "h+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (let k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}

export default {
    install(Vue, options) {

        Vue.mixin({
            data() {
                return {
                    searchId: '',
                    oneData: []
                }
            },
            filters: {
                formatTime(self, fmt = 'yyyy-MM-dd hh:mm:ss') {
                    return new Date(self).format(fmt)
                }
            },
            methods: {
                searchById(url, id, state) {
                    if (id) {
                        this.$http.get(url, {params: {id, state}}).then(
                            resp => {
                                if (resp.status === 200) {
                                    this.oneData = resp.data
                                }
                            }, err => {
                                this.oneData = []
                            }
                        )
                    } else {
                        this.oneData = []
                    }
                },


                // 重写的文本框内容
                successMsg() {
                    this.$message({
                        type: 'success',
                        message: '操作成功',
                        duration: 2000
                    })
                },
                cancelMsg() {
                    this.$message({
                        type: 'info',
                        message: '操作取消',
                        duration: 2000
                    })
                },
                failMsg() {
                    this.$message({
                        type: 'error',
                        message: '操作失败',
                        duration: 2000
                    })
                },
                reMsgBox(title, message, confirmCallback) {
                    this.$msgbox({
                        title,
                        message,
                        showCancelButton: true,
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        showClose: false,
                        beforeClose: async (action, instance, done) => {
                            if (action === 'confirm') {
                                // 确认执行
                                instance.confirmButtonLoading = true;
                                instance.confirmButtonText = 'loading...';
                                const result = await confirmCallback()
                                instance.confirmButtonLoading = false;
                                if (result) {
                                    // 操作成功
                                    this.successMsg()
                                } else {
                                    this.failMsg()
                                }
                                done()
                            } else {
                                //取消执行
                                this.cancelMsg()
                                done();
                            }
                        }
                    }).catch(() => {
                    })
                },
                // 定向提交单个的数据修改
                sendReq(url, k, value, row, message) {
                    const type = typeof value
                    if (!message) {
                        if (type === 'number') {
                            message = `确定要将${k}的值${row[k]}修改为新${value}么`
                        } else if (type === 'string') {
                            message = `确定将原值修改为“${value}”么？`
                        } else if (type === 'boolean') {
                            message = `确定要${value ? '打开' : '停用'}么`
                        }
                    }
                    this.$confirm(message, '提示').then(
                        _ => {
                            this.$http.post(url, {id: row.id, obj: {[k]: value}}).then(
                                (resp) => {
                                    if (resp.status === 200) {
                                        row[k] = value
                                        this.successMsg()
                                    } else {
                                        this.failMsg()
                                    }
                                }
                                , () => {
                                    this.failMsg()
                                })
                        }, _ => this.cancelMsg()
                    )
                },


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
        // axios.defaults.baseURL = 'http://localhost:8081/'

        axios.defaults.validateStatus = (status) => {
            if (status === 401) {
                sessionStorage.setItem('isLogin', false)
            }
            return status >= 200 && status < 300 || status === 401 // default
        }
        Vue.prototype.$http = axios
    }
}