export default {
    namespaced: true,
    state: {
        // [{id:1,name:'xxx',defaultParams:[{name:'',defaultSelect:[value1,value2,value3]}]}]
        classifyList: [],
    },
    mutations: {
        // ...(function (...obj) {
        //     const m = {}
        //     for (let i of obj) {
        //         m[('set' + i.charAt(0).toUpperCase() + i.slice(1))] = (state, payload) => {
        //             state[i] = payload
        //         }
        //     }
        //     return m
        // })('dict', 'classifyList'),
        // setAdminMap(state, payload = {}) {
        //     for (let i of Object.keys(payload)) {
        //         if (Object.keys(state).includes(i)) {
        //             state[i] = payload[i]
        //         }
        //     }
        //     return true
        // },
        /**
         * 添加一个类别,payload是添加的对象
         * @param state
         * @param payload
         */
        setClassifyList(state, payload) {
            state.classifyList = payload
        },
    },
    actions: {},
}