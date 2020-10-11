export default {
    namespaced: true,
    state: {
        classifyList: [],
        classifyItem: [
            {text: '电脑', value: '电脑'},
            {text: '打印机', value: '打印机'},
            {text: '交换机', value: '交换机'},
            {text: '显示器', value: '显示器'}
        ]
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


        pushClassifyItem(state, payload) {
            state.classifyList.push(payload)
        },
        /**
         * 删除一个类别,payload是删除的对应id
         * @param state
         * @param payload
         */
        deleteClassifyItem(state, payload) {
            state.classifyList.splice(payload, 1)
        }

    },
    actions: {},
}