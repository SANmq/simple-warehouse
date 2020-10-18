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
            msale: '销售管理',
            onsale: '在架商品',
            forsale: '拍下商品',
            outsale: '已发商品',
            reback: '退回商品',
            saleover: '售出商品',
            log: '销售日志',

            mstore: '仓库管理',
            all: '库存一览',
            add: '添加商品',
            cost: '成本记录',
            upshelves: '商品上架',

            config: '仓库配置',
            classify: '商品分类',

            analysis: '统计分析',
            money: '收益分析',
            store: '仓库分析',


        },
        stateDict: {
            0: '未上架',
            1: '已上架',
            2: '待发货',
            3: '已发货',
            4: '退回',
            5: '售出'
        },
        localhost: ''
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
