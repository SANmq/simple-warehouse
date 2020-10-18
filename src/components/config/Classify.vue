<template>
    <div class="classify">
        <h2 class="tip-title">
            分类列表及参数配置
            <el-button type="primary" icon="el-icon-refresh" circle @click="handleGet(true)"></el-button>
        </h2>
        <el-table :data="classifyList" max-height="350" border>
            <el-table-column label="分类编号" align="center" width="100">
                <template slot-scope="scope">
                    {{scope.row.id}}
                </template>
            </el-table-column>
            <el-table-column label="分类名称" align="center" width="150">
                <template slot-scope="scope">
                    {{scope.row.name}}
                </template>
            </el-table-column>
            <el-table-column label="分类默认参数" align="center">
                <template slot-scope="scope">
                    {{scope.row.defaultParams|listToString}}
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center" width="120">
                <template slot-scope="scope">
                    <el-button
                            type="info"
                            @click="editDetail(scope.$index, scope.row)">
                        修改
                    </el-button>
                </template>
            </el-table-column>
            <el-table-column label="是否启用" align="center" width="100">
                <template slot-scope="scope">
                    <el-switch @change="sendReq('/api/classify','disabled',$event,scope.row)"
                               :value="scope.row.disabled">
                    </el-switch>
                </template>
            </el-table-column>
        </el-table>

        <div style="text-align: center;margin-top: 10px">
            <el-button @click="handleAdd" type="primary">新增分类</el-button>
        </div>

    </div>
</template>

<script>
    import Edit from "./Edit";
    import {mapState} from 'vuex'

    export default {
        name: "Classify",
        filters: {
            listToString(self) {
                return self.map((value, index) => {
                    return value.name
                }).join('，')
            }
        },
        computed: {
            ...mapState('config', ['classifyList']),
            ...mapState(['Dict'])
        },
        data() {
            return {
                classifyItem: {}
            }
        },
        created() {
            this.handleGet()
        },
        methods: {
            handleAdd() {
                const title = '新增分类'
                this.classifyItem = {name: '', defaultParams: []}
                const message = this.$createElement(Edit, {
                    props: {
                        form: this.classifyItem
                    }
                })
                const confirmCallback = async () => {
                    try {
                        const resp = await this.$http.put('/api/classify', this.classifyItem)
                        this.classifyItem = {}
                        if (resp.status === 200) {
                            this.handleGet(true)
                            return true
                        } else {
                            return false
                        }
                    } catch (e) {
                        this.classifyItem = {}
                        return false
                    }
                }
                this.reMsgBox(title, message, confirmCallback)
            },

            // 获取内容
            handleGet(refresh = false) {
                let temp = null
                if (!refresh) {
                    temp = this._getLocal('classifyList', 'config')
                }
                if (temp) {
                    return null
                }
                this.$http.get('/api/classify').then((resp) => {
                    if (resp.status === 401) {
                    } else if (resp.status === 200) {
                        this._setLocal('classifyList', resp.data, 'config')
                    }
                }, (err) => {
                    console.log(err)
                })
            },

            // 编辑修改操作
            editDetail(index, row) {
                // 创建一个编辑框进行操作
                const title = '编辑分类id:' + row.id
                // 被共同使用
                this.classifyItem = JSON.parse(JSON.stringify({name: row.name, defaultParams: row.defaultParams}))
                const message = this.$createElement(Edit, {
                    props: {
                        form: this.classifyItem,
                    }
                })
                const confirmCallback = async () => {
                    try {
                        const resp = await this.$http.post('/api/classify', {id: row.id, obj: this.classifyItem})
                        // 强制刷新一次
                        this.handleGet(true)
                        this.classifyItem = {}
                        return true
                    } catch (e) {
                        this.classifyItem = {}
                        return false
                    }
                }
                this.reMsgBox(title, message, confirmCallback)
            }
        }

    }
</script>

<style scoped>

</style>