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

            <el-table-column width="70" align="center">
                <template slot="header" slot-scope="scope">
                    标价<i class="el-icon-edit"></i>
                </template>
                <template slot-scope="scope">
                    <EasyEdit :value="scope.row.price"
                              @change="sendReq('/api/store','price',$event,scope.row)">
                    </EasyEdit>
                </template>
            </el-table-column>

            <el-table-column width="70" align="center">
                <template slot="header" slot-scope="scope">
                    折扣<i class="el-icon-edit"></i>
                </template>
                <template slot-scope="scope">
                    <EasyEdit :value="scope.row.discount"
                              :re="/(^1$|^0\.\d?$|^0$)/"
                              @change="sendReq('/api/store','discount',$event,scope.row)">
                    </EasyEdit>
                </template>
            </el-table-column>

            <el-table-column align="center" min-width="180">
                <template slot="header" slot-scope="scope">
                    细节描述<i class="el-icon-edit"></i>
                </template>
                <template slot-scope="scope">
                    <EasyEdit :value="scope.row.detail"
                              :re="/^[\s\S]{0,200}$/"
                              :textarea="true"
                              @change="sendReq('/api/store' ,'detail',$event,scope.row)">
                    </EasyEdit>
                </template>
            </el-table-column>
            <el-table-column align="center" width="95" label="退回时间">
                <template slot-scope="scope">
                    {{scope.row.rebackT|formatTime}}
                </template>
            </el-table-column>
            <el-table-column align="center" width="190" label="操作">
                <template slot-scope="scope">
                    <template v-if="scope.row.state === 4">
                        <el-button type="primary"
                                   icon="el-icon-refresh-left"
                                   @click="sendReq('/api/sale',
                               'state',
                               1,
                               scope.row,
                               `确定要将商品下架？`)">回架
                        </el-button>
                        <el-button type="primary"
                                   icon="el-icon-refresh-left"
                                   @click="sendReq('/api/sale',
                               'state',
                               0,
                               scope.row,
                               `确定要将商品下架？`)">回仓
                        </el-button>
                    </template>
                    <el-button v-else type="danger" icon="el-icon-refresh-left" @click="sendReq('/api/sale',
                               'state',
                               4,
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
        name: "Reback",
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
                                state: 4,
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