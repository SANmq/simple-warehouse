<template>
    <div class="store-sale">
        <el-table :data="tableData" border height="500">
            <template slot="empty">
                <el-link type="primary" :underline="false" href="/mstore/upshelves">暂无商品,点此上架</el-link>
            </template>
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

            <el-table-column width="70" align="center" label="标价" prop="price"></el-table-column>

            <el-table-column width="70" align="center" label="折扣" prop="discount">
                <template slot-scope="scope">
                    {{scope.row.discount===1 ? '不打折':(scope.row.discount*10 + '折')}}
                </template>
            </el-table-column>
            <el-table-column align="center" min-width="200" label="细节描述" prop="detail"></el-table-column>

            <el-table-column align="center" width="95" label="上架时间">
                <template slot-scope="scope">
                    {{scope.row.onSaleT|formatTime}}
                </template>
            </el-table-column>

            <el-table-column align="center" width="190" label="操作">
                <template slot-scope="scope">
                    <template v-if="scope.row.state === 1">
                        <el-button type="success"
                                   icon="el-icon-forSale"
                                   @click="sendReq('/api/sale',
                               'state',
                               2,
                               scope.row,
                               `确定该商品已被拍下么?`)">拍下
                        </el-button>
                        <el-button type="primary"
                                   icon="el-icon-sold-out"
                                   @click="sendReq('/api/sale',
                               'state',
                               0,
                               scope.row,
                               `确定要将商品下架？`)">下架
                        </el-button>
                    </template>
                    <el-button v-else type="danger" icon="el-icon-refresh-left" @click="sendReq('/api/sale',
                               'state',
                               1,
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
        name: "Onsale",
        components: {
            EasyEdit
        },
        data() {
            return {
                tableData: [],
                searchId: '',
                limit: 8,
                currentPage: 1,
                total: 0,
            }
        },
        created() {
            this.getData()
        },
        computed: mapState('config', ['classifyList']),

        methods: {
            getData() {
                this.$http.get('/api/sale/state',
                    {
                        params:
                            {
                                limit: this.limit,
                                currentPage: this.currentPage,
                                state: 1,
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