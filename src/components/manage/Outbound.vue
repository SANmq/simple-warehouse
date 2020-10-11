<template>
    <div class="take-out">
        <h2 class="tip-title">待出库商品队列</h2>
        <div ref="cs"></div>
        <el-table
                :data="tableData"
                style="width: 90%;margin: auto;min-width: 1100px">
            <el-table-column
                    label="商品编号"
                    align="center"
                    width="100">
                <template slot="header" slot-scope="scope">
                    <el-input
                            v-model="searchId"
                            size="mini"
                            placeholder="编号检索"/>
                </template>
                <template slot-scope="scope">
                    <span>{{ scope.row.ID }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="商品昵称"
                    align="center"
                    width="140">
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

            <el-table-column width="100"
                             align="center"
                             label="下单时间">
                <template slot-scope="scope">
                    {{scope.row.date}}
                </template>
            </el-table-column>

            <el-table-column width="140"
                             align="center"
                             label="寄出地址">
                <template slot-scope="scope">
                    {{scope.row.address}}
                </template>
            </el-table-column>
            <el-table-column width="100"
                             align="center"
                             label="买家手机">
                <template slot-scope="scope">
                    {{scope.row.phone}}
                </template>
            </el-table-column>

            <el-table-column width="80"
                             align="center"
                             label="数量">
                <template slot-scope="scope">
                    {{scope.row.num}}
                </template>
            </el-table-column>

            <el-table-column width="80"
                             align="center"
                             label="成交价">
                <template slot-scope="scope">
                    {{scope.row.price}}
                </template>
            </el-table-column>

            <el-table-column width="80"
                             align="center"
                             label="运费">
                <template slot-scope="scope">
                    {{scope.row.fare}}
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button
                            type="primary"
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">
                        编辑
                    </el-button>
                    <el-button
                            size="mini"
                            type="success"
                            @click="handleDelete(scope.$index, scope.row)">
                        出货
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination style="width: 1000px" :total="200" :current-page.sycn="10" :page-size="8"></el-pagination>
    </div>
</template>

<script>
    import EasyEdit from "../EasyEdit";


    export default {
        name: "GetOut",

        data() {
            return {
                searchId: '',
                tableData: [{

                    ID: '#1036',
                    nickName: '针孔打印机',
                    address: '上海市普陀区金沙江路 1518 弄',
                    imageUrl: 'http://49.235.228.244/img/timg.jpg',
                    date: '2020-05-09',
                    num: 5,
                    price: 0,
                    fare: 0,
                    phone: '12345678912'

                }, {
                    ID: '#1037',
                    nickName: '联想E40',
                    address: '上海市普陀区金沙江路 1517 弄',
                    imageUrl: '',
                    date: '',
                    num: 5,
                    price: 0,
                    fare: 0,
                    phone: '12345678912'
                }, {
                    ID: '#1038',
                    nickName: '华硕平板',
                    address: '上海市普陀区金沙江路 1519 弄',
                    imageUrl: '',
                    date: '',
                    num: 5,
                    price: 0,
                    fare: 0,
                    phone: '12345678912'
                }]
            }
        },
        methods: {
            handleEdit(index, row) {
                const _c = this.$createElement;
                this.$msgbox({
                    title: '编辑金额',
                    message: _c(EasyEdit, {
                        nativeOn: {
                            update: function (row) {
                                console.log('我发生了', row)
                            }
                        },
                        props: {
                            row,
                            k: ['price', 'fare']
                        }
                    }),
                    showCancelButton: true,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    beforeClose: (action, instance, done) => {
                        if (action === 'confirm') {
                            instance.confirmButtonLoading = true;
                            instance.confirmButtonText = '修改中...';
                            console.log(row)
                            done()
                            instance.confirmButtonLoading = false;
                        } else {
                            done();
                        }
                    }
                }).then(action => {
                    this.$message({
                        type: 'info',
                        message: '修改完成'
                    });
                }, err => console.log(err));
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        }
    }
</script>

<style lang="less">
    .take-out {
        text-align: center;
    }
</style>