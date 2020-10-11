<template>
    <div class="Preview">
        <h2 class="tip-title">商品状态一览</h2>
        <el-table ref="filterTable"
                  :data="status">
            <el-table-column label="商品昵称" align="center">
                <template slot-scope="scope">
                    {{scope.row.nickName}}
                </template>
            </el-table-column>

            <el-table-column
                    label="商品简图"
                    align="center"
                    width="100">
                <template slot-scope="scope">
                    <el-image style="width: 40px; height: 40px;vertical-align: middle;"
                              :src="scope.row.imageUrl"
                              :preview-src-list="[scope.row.imageUrl]"
                              fit="cover">
                    </el-image>
                </template>
            </el-table-column>
            <el-table-column label="商品类别"
                             :filters="classifyItem"
                             :filter-method="classifyFilter"
                             align="center">
                <template slot-scope="scope">
                    {{scope.row.nickName}}
                </template>
            </el-table-column>
            <el-table-column label="商品细节描述" align="center">
                <template slot-scope="scope">
                    {{scope.row.detail}}
                </template>
            </el-table-column>
            <el-table-column label="上次上架时间" align="center">
                <template slot-scope="scope">
                    {{scope.row.lastOnSaleTime}}
                </template>
            </el-table-column>
            <el-table-column label="是否在售"
                             :filters="[{ text: '在售', value: true }, { text: '不在售', value: false }]"
                             :filter-method="filterSale"
                             align="center">
                <template slot-scope="scope">
                    {{scope.row.sale?'在售':'不在售'}}
                </template>
            </el-table-column>

            <el-table-column label="销售管理" align="center">
                <template slot-scope="scope">
                    <el-button
                            type="primary"
                            size="mini"
                            @click="changeSale(scope.row)">
                        {{scope.row.sale?'下架':'上架'}}
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "test",
        methods: {
            filterSale(value, row) {
                return row.sale === value;
            },
            classifyFilter(value, row) {
                row.classify = value
            },
            changeSale(row) {
                this.$confirm('确认要' + (row.sale ? '下架' : '上架') + '吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    row.sale = !row.sale
                    this.$message({
                        type: 'success',
                        message: (row.sale ? '上架' : '下架') + '成功'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                })
            }
        },
        computed: mapState('config', ['classifyItem']),
        data() {
            return {
                status: [
                    {
                        nickName: 'xxx',
                        imageUrl: 'http://49.235.228.244/img/timg.jpg',
                        sale: true,
                        classify: '电脑',
                        detail: '开关不是很好使',
                        lastOnSaleTime: '2020-08-30'
                    },
                    {
                        nickName: 'xxx',
                        imageUrl: 'http://49.235.228.244/img/timg.jpg',
                        sale: true,
                        classify: '电脑',
                        detail: '系统没有装好',
                        lastOnSaleTime: '2020-08-26'

                    },
                    {
                        nickName: 'xxx',
                        imageUrl: 'http://49.235.228.244/img/timg.jpg',
                        sale: false,
                        classify: '复印机',
                        detail: '有时候会卡纸',
                        lastOnSaleTime: '2020-08-15'

                    },
                    {
                        nickName: 'xxx',
                        imageUrl: 'http://49.235.228.244/img/timg.jpg',
                        sale: false,
                        classify: '复印机',
                        detail: '墨粉有问题',
                        lastOnSaleTime: '2020-08-20'

                    },
                    {
                        nickName: 'xxx',
                        imageUrl: 'http://49.235.228.244/img/timg.jpg',
                        sale: false,
                        classify: '其他',
                        detail: '完全ok',
                        lastOnSaleTime: '2020-08-25'

                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>