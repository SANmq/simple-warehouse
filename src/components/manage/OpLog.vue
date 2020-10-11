<template>
    <div class="op-log">
        <h2 class="tip-title">最近操作</h2>
        <el-table :data="opData">
            <el-table-column label="操作类型" align="center">
                <template slot-scope="scope">
                    {{scope.row.opType}}
                </template>
            </el-table-column>
            <el-table-column label="商品编号" align="center">
                <template slot-scope="scope">
                    {{scope.row.ID}}
                </template>
            </el-table-column>
            <el-table-column label="商品简称" align="center">
                <template slot-scope="scope">
                    {{scope.row.nickName}}
                </template>
            </el-table-column>
            <el-table-column label="操作日期" align="center">
                <template slot-scope="scope">
                    {{scope.row.opTime}}
                </template>
            </el-table-column>
            <el-table-column label="撤销操作" align="center">
                <template slot-scope="scope">
                    <el-button type="danger"
                               @click="back(scope.row)"
                               icon="el-icon-refresh-left">
                        撤销
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
    export default {
        name: "OpLog",
        methods: {
            back() {
                this.$confirm('撤销后会删除该记录! 确认要撤销该操作么?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    // 确认后进行操作

                    this.$message({
                        type: 'success',
                        message: '操作成功'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                })

            }
        },
        data() {
            return {
                opData: [
                    {opType: '出库', ID: '#1233', nickName: '商品昵称xxx', opTime: '操作时间xxx'},
                    {opType: '入库', ID: '#1243', nickName: '商品昵称xxx', opTime: '操作时间xxx'},
                    {opType: '入库', ID: '#1253', nickName: '商品昵称xxx', opTime: '操作时间xxx'},
                    {opType: '出库', ID: '#1263', nickName: '商品昵称xxx', opTime: '操作时间xxx'},
                ]
            }
        }
    }
</script>

<style scoped>

</style>