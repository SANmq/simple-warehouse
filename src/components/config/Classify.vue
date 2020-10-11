<template>
    <div class="classify">
        <h2 class="tip-title">
            分类列表及参数配置
            <el-button type="primary" icon="el-icon-refresh" circle @click="handleGet(true)"></el-button>
        </h2>
        <el-table :data="classifyList" max-height="350">
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
                classifyItem: {name: '', defaultParams: []}
            }
        },
        computed: mapState('config', ['classifyList']),
        created() {
            this.handleGet()
        },
        methods: {
            handleAdd() {
                const _c = this.$createElement;
                this.$msgbox({
                    title: '新增分类',
                    message: _c(Edit, {
                        props: {
                            form: this.classifyItem
                        }
                    }),
                    showCancelButton: true,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    beforeClose: (action, instance, done) => {
                        if (action === 'confirm') {
                            instance.confirmButtonLoading = true;
                            instance.confirmButtonText = '提交中请等待...';
                            this.$http.put('/api/classify', this.classifyItem).then(
                                (resp) => {
                                    if (resp.status === 200) {
                                        // 表示提交成功,有点曲线救国了
                                        const temp = [].slice.call(this.classifyList, 0)
                                        temp.push(resp.data)
                                        this._setLocal('classifyList', temp, 'config')
                                        this.classifyItem = {name: '', defaultParams: []}
                                        done()
                                        instance.confirmButtonLoading = false;
                                        this.$message({
                                            type: 'success',
                                            message: '添加成功',
                                            duration: 1000,
                                        });
                                    }
                                }
                            ).catch((err) => {
                                done()
                                instance.confirmButtonLoading = false;
                                this.$message({
                                    type: 'error',
                                    message: '添加失败',
                                    duration: 1000,
                                });
                            })
                        } else {
                            done();
                            this.$message({
                                type: 'info',
                                message: '已取消',
                                duration: 1000,
                            });
                        }
                    }
                }).then().catch();
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
                        console.log(resp.data)
                    } else if (resp.status === 200) {
                        console.log(resp.data)
                        this._setLocal('classifyList', resp.data, 'config')
                    }
                }, (err) => {
                    console.log('我能得到错误信息')
                    console.log(err)
                })
            },
            // 删除内容
            handleDelete(index, row) {
                this.$msgbox({
                        title: '重点提示',
                        message: '请尽量不要随意删除分类,如果可以请尽量使用修改的方式,' +
                            '删除后将不可复原,但不会对已有分类的商品产生影响',
                        showCancelButton: true,
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        beforeClose: (action, instance, done) => {
                            if (action === 'confirm') {
                                instance.confirmButtonLoading = true;
                                instance.confirmButtonText = '提交中...';
                                this.$http.delete('/api/classify', {params: {id: row.id}}).then(
                                    (resp) => {
                                        if (resp.status === 200) {
                                            // 删除操作成功
                                            let temp = [].slice.call(this.classifyList)
                                            temp.splice(index, 1)
                                            console.log(temp)
                                            this._setLocal('classifyList', temp, 'config')
                                            done();
                                            instance.confirmButtonLoading = false;
                                        } else {
                                            done()
                                            instance.confirmButtonLoading = false;
                                            this.$message({
                                                type: 'error',
                                                message: '添加失败',
                                                duration: 1000,
                                            });
                                        }
                                    }
                                ).catch(
                                    () => {
                                        done()
                                        instance.confirmButtonLoading = false;
                                        this.$message({
                                            type: 'error',
                                            message: '添加失败',
                                            duration: 1000,
                                        });
                                    }
                                )
                            } else {
                                done()
                                this.$message({
                                    type: 'info',
                                    message: '已取消',
                                    duration: 1000,
                                });
                            }
                        }
                    }
                )


            },


            // 更新内容
            editDetail(index, row) {
                // 创建一个编辑框进行操作
                // 不保存副本,当用户放弃修改时复原
                const _c = this.$createElement;
                this.$msgbox({
                    title: '编辑分类',
                    message: _c(Edit, {
                        props: {
                            form: row
                        }
                    }),
                    showCancelButton: true,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    beforeClose: (action, instance, done) => {
                        if (action === 'confirm') {
                            instance.confirmButtonLoading = true;
                            instance.confirmButtonText = '提交中...';
                            this.$http.post('/api/classify', row).then(
                                (resp) => {
                                    if (resp.status === 200) {
                                        // 修改成功
                                        this.$message({
                                            type: 'success',
                                            message: '修改成功',
                                            duration: 1000,
                                        });
                                        this._setLocal('classifyList', this.classifyList, 'config')
                                    } else {
                                        this._getLocal('classifyList', 'config')
                                    }
                                }
                            ).catch(
                                (err) => {
                                    this.$message({
                                        type: 'error',
                                        message: '修改失败',
                                        duration: 1000,
                                    });
                                    this._getLocal('classifyList', 'config')
                                }
                            )
                            done()
                            instance.confirmButtonLoading = false;
                        } else {
                            done();
                            this.$message({
                                type: 'info',
                                message: '已取消',
                                duration: 1000,
                            });
                            this._getLocal('classifyList', 'config')
                        }
                    }
                }).then().catch();
            }
        }

    }
</script>

<style scoped>

</style>