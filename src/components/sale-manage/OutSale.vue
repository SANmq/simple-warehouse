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

            <el-table-column width="70" align="center" label="售价">
                <template slot-scope="scope">
                    ￥{{scope.row.price * scope.row.discount}}
                </template>
            </el-table-column>
            <el-table-column align="center" min-width="200" label="细节描述" prop="detail"></el-table-column>
            <el-table-column align="center" width="95" label="发出时间">
                <template slot-scope="scope">
                    {{scope.row.outSaleT|formatTime}}
                </template>
            </el-table-column>
            <el-table-column align="center" width="190" label="操作">
                <template slot-scope="scope">
                    <template v-if="scope.row.state === 3">
                        <el-button type="success"
                                   icon="el-icon-success"
                                   @click="sendReq('/api/sale',
                               'state',
                               5,
                               scope.row,
                               `确定该商品已被买家签收?`)">已收
                        </el-button>
                        <el-button type="primary"
                                   icon="el-icon-refresh-left"
                                   @click="sendReq('/api/sale',
                               'state',
                               4,
                               scope.row,
                               `确定商品要被买家退回？`)">退回
                        </el-button>
                    </template>
                    <el-button v-else type="danger" icon="el-icon-refresh-left" @click="sendReq('/api/sale',
                               'state',
                               3,
                               scope.row,
                               `确定要撤销操作么?`)">
                        撤回
                    </el-button>
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
        name: "OutSale",
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
                                state: 3,
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