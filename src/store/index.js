import Vue from 'vue'
import Vuex from 'vuex'
import config from "./config";

Vue.use(Vuex)

export default new Vuex.Store({
    namespaced: true,
    state: {
        isLogin: false,
        adminName: null,
        routeDict: {
            admin: '商品总览',
            manage: '货品管理',
            inbound: '商品入库',
            outbound: '商品出库',
            log: '操作日志',
            config: '货品参数控制',
            analysis: '分析',
            money: '收益分析',
            store: '仓库分析',
            classify: '分类控制'
        }


    },
    mutations: {
        setIsLogin(state, payload) {
            state.isLogin = payload
        },
        setAdminName(state, payload) {
            state.adminName = payload
        },
    },
    actions: {},
    modules: {
        config
    }
})
