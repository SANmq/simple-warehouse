<template>
    <div class="sale-manage">
        <el-table :data="tableData" border>
            <el-table-column
                    label="商品编号"
                    align="center"
                    width="100">
                <template slot="header" slot-scope="scope">
                    <el-input v-model="searchId" size="mini" placeholder="编号检索"/>
                </template>
                <template slot-scope="scope">
                    <span>{{ scope.row.id }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="商品昵称"
                    align="center"
                    width="140">
                <template slot-scope="scope">
                    {{scope.row.nickname}}
                </template>
            </el-table-column>
            <el-table-column align="center" width="100" label="商品数量" prop="number"></el-table-column>

            <el-table-column
                    label="商品简图"
                    align="center"
                    width="100">
                <template slot-scope="scope">
                    <el-image style="width: 40px; height: 40px;vertical-align: middle;"
                              :src="scope.row.imageUrlList.length ? localhost+'/upload/'+scope.row.imageUrlList[0] : ''"
                              :preview-src-list="scope.row.imageUrlList.map(v=>localhost+'/upload/'+v)"
                              fit="cover">
                    </el-image>
                </template>
            </el-table-column>

            <el-table-column width="100" align="center">
                <template slot="header" slot-scope="scope">
                    销售标价<i class="el-icon-edit"></i>
                </template>
                <template slot-scope="scope">
                    <EasyEdit :value="scope.row.price"
                              @change="sendReq($event,'price',scope.row)">
                    </EasyEdit>
                </template>
            </el-table-column>

            <el-table-column width="100" align="center">
                <template slot="header" slot-scope="scope">
                    销售折扣<i class="el-icon-edit"></i>
                </template>
                <template slot-scope="scope">
                    <EasyEdit :value="scope.row.discount"
                              :re="/(^1$|^0\.\d?$|^0$)/"
                              @change="sendReq($event,'discount',scope.row)">
                    </EasyEdit>
                </template>
            </el-table-column>

            <el-table-column align="center" min-width="200">
                <template slot="header" slot-scope="scope">
                    细节描述<i class="el-icon-edit"></i>
                </template>
                <template slot-scope="scope">
                    <EasyEdit :value="scope.row.detail"
                              :re="/^.{0,200}$/"
                              :textarea="true"
                              @change="sendReq($event,'detail',scope.row,false)">
                    </EasyEdit>
                </template>
            </el-table-column>

            <el-table-column width="100" align="center">
                <template slot="header" slot-scope="scope">
                    是否上架<i class="el-icon-edit"></i>
                </template>
                <template slot-scope="scope">
                    <el-switch
                            @change="sendReq($event,'isOnSale',scope.row,false)"
                            :value="scope.row.isOnSale"
                            :disabled="scope.row.isSale"
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                    </el-switch>
                </template>
            </el-table-column>
            <el-table-column label="出售状态" width="100">
                <template slot-scope="scope">
                    {{scope.row.isSale?'已售出':'未售出'}}
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                style="display: flex;justify-content: center"
                background
                :hide-on-single-page="true"
                :current-page.sync="currentPage"
                :page-size="limit"
                layout="prev, pager, next"
                :total="total">
        </el-pagination>
    </div>
</template>

<script>
    import EasyEdit from "./EasyEdit";
    import {mapState} from 'vuex'

    export default {
        name: "Sale",
        components: {
            EasyEdit
        },
        data() {
            return {
                tableData: [],
                oneDate: [],
                searchId: '',
                limit: 8,
                currentPage: 1,
                total: 0,
            }
        },
        created() {
            this.getData()
        },
        computed: mapState(['localhost']),

        methods: {
            getData() {
                this.$http.get('/api/manage/sale',
                    {
                        params:
                            {
                                limit: this.limit,
                                currentPage: this.currentPage
                            }
                    }).then(
                    (resp) => {
                        if (resp.status === 200) {
                            this.total = resp.data.total
                            this.tableData = resp.data.rows
                        }
                    }
                )
            },

            sendReq(value, k, row, isNum = true) {
                if (isNum) {
                    value = Number(value)
                }
                console.log(value, row.isOnSale, {id: row.id, obj: {[k]: value}})
                let message = ''
                if (typeof value === 'boolean') {
                    message = `确定要` + (value ? '打开' : '关闭') + '该选项么？'
                } else if (typeof value === 'number') {
                    message = `确定要将${row[k]}修改为${value}`
                } else {
                    message = `是否要将原有结果修改为（“${value}”）么？`
                }

                this.$confirm(message, '提示').then(
                    (a) => {
                        this.$http.post('/api/manage', {id: row.id, obj: {[k]: value}}).then(
                            (resp) => {
                                if (resp.status === 200) {
                                    row[k] = value
                                    this.successMsg()
                                } else {
                                    this.failMsg()
                                }
                            }
                            , () => {
                                this.failMsg()
                            })
                    },
                    (err) => {
                        this.cancelMsg()
                    })
            },
            // 用来处理数值验证问题

        }
    }
</script>

<style scoped>

</style>