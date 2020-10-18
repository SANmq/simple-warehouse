<template>
    <div class="store-sale">
        <el-table :data="tableData" border height="500">
            <el-table-column align="center" width="60">
                <template slot="header" slot-scope="scope">
                    <el-input class="id-search" v-model="searchId" size="mini" placeholder="检索" @change="searchById(searchId)"/>
                </template>
                <template slot-scope="scope">
                    <span>{{ scope.row.id }}</span>
                </template>
            </el-table-column>
            <el-table-column align="center" width="100" label="名称" prop="nickname"></el-table-column>
            <el-table-column align="center" width="100" label="分类" prop="classify"></el-table-column>
            <el-table-column label="参数" align="center" width="80">
                <template slot-scope="scope">
                    <el-button icon="el-icon-look" @click="showParams(scope.row.parameters)"></el-button>
                </template>
            </el-table-column>
            <el-table-column align="center" width="50" label="数量" prop="number"></el-table-column>
            <el-table-column align="center" width="80" label="简图">
                <template slot-scope="scope">
                    <el-image style="width: 40px; height: 40px;vertical-align: middle;"
                              :src="scope.row.imageUrlList.length ? scope.row.imageUrlList[0] : ''"
                              :preview-src-list="scope.row.imageUrlList"
                              fit="cover">
                    </el-image>
                </template>
            </el-table-column>

            <el-table-column width="70" align="center" label="售出价格">
                <template slot-scope="scope">
                    ￥{{scope.row.discount * scope.row.price}}
                </template>
            </el-table-column>
            <el-table-column width="70" align="center" label="总成本">
                <template slot-scope="scope">
                    ￥{{ scope.row.cost + scope.row.repairCost + scope.row.transCost}}
                </template>
            </el-table-column>

            <el-table-column align="center" min-width="180" label="细节描述" prop="detail"></el-table-column>
            <el-table-column align="center" width="95" label="售出时间" prop="createdAt">
                <template slot-scope="scope">
                    {{scope.row.overSaleT|formatTime}}
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
    import EasyEdit from "../EasyEdit";
    import {mapState} from 'vuex'

    export default {
        name: "SaleOver",
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
                this.$http.get('/api/sale/state',
                    {
                        params:
                            {
                                limit: this.limit,
                                currentPage: this.currentPage,
                                state: 5,
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
            showParams(params) {
                let message = ''
                for (let item of params) {
                    message = message + item.name + ':' + item.value + ';'
                }
                message = message.replace(/;$/, '')
                this.$confirm(message, '参数信息').then(_ => {
                }, _ => {
                })
            },

        }
    }
</script>

<style scoped>

</style>