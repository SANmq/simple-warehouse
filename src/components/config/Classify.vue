<template>
    <div class="classify">
        <h2 class="tip-title">
            分类列表及参数配置
            <el-button type="primary" icon="el-icon-refresh" circle @click="handleGet(true)"></el-button>
        </h2>
        <el-table :data="classifyList" max-height="350" border>
            <el-table-column label="分类编号" align="center" width="100px">
                <template slot-scope="scope">
                    {{scope.row.id}}
                </template>
            </el-table-column>
            <el-table-column label="分类名称" align="center">
                <template slot-scope="scope">
                    {{scope.row.name}}
                </template>
            </el-table-column>
            <el-table-column label="分类默认参数" align="center">
                <template slot-scope="scope">
                    {{scope.row.defaultParams|listToString}}
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button
                            type="info"
                            @click="editDetail(scope.$index, scope.row)">
                        编辑详细
                    </el-button>
                    <el-button
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">
                        删除分类
                    </el-button>
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
        data() {
            return {
                classifyItem: {},
            }
        },
        computed: mapState('config', ['classifyList']),
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
            // 删除内容
            handleDelete(index, row) {
                const title = '重点提示'
                const message = '请尽量不要删除已有分类,分类编号将无法恢复,删除分类对已有商品的分类结果不会产生影响,修改分类名称也不会产生影响,仅对创建新商品有影响'
                const confirmCallback = async () => {
                    try {
                        const resp = await this.$http.delete('/api/classify', {params: {id: row.id}});
                        if (resp.status === 200) {
                            this.handleGet(true)
                            return true
                        }
                        return false
                    } catch (e) {
                        return false
                    }
                }
                this.reMsgBox(title, message, confirmCallback)
            },
            // 编辑修改操作
            editDetail(index, row) {
                // 创建一个编辑框进行操作
                const title = '编辑分类id:' + row.id
                // 被共同使用
                this.classifyItem = JSON.parse(JSON.stringify(row))

                const message = this.$createElement(Edit, {
                    props: {
                        form: this.classifyItem,
                    }
                })
                const confirmCallback = async () => {
                    try {
                        const resp = await this.$http.post('/api/classify', this.classifyItem)
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