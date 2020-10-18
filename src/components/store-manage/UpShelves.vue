<template>
    <div class="store-sale">
        <el-table :data="tableData" border height="500">
            <template slot="empty">
                <el-link type="primary" :underline="false" href="/mstore/add">暂无商品,点此添加</el-link>
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

            <el-table-column width="80" align="center">
                <template slot="header" slot-scope="scope">
                    标价<i class="el-icon-edit"></i>
                </template>
                <template slot-scope="scope">
                    <EasyEdit :value="scope.row.price"
                              @change="sendReq('/api/store','price',$event,scope.row)">
                    </EasyEdit>
                </template>
            </el-table-column>

            <el-table-column width="80" align="center">
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
            <el-table-column align="center" min-width="150">
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

            <el-table-column align="center" width="180" label="备注" prop="remark"></el-table-column>


            <el-table-column align="center" width="80" label="上架">
                <template slot-scope="scope">
                    <el-button type="success"
                               icon="el-icon-sell"
                               v-if="scope.row.state===0"
                               @click="sendReq('/api/store',
                               'state',
                               1,
                               scope.row,
                               `确认商品以￥${scope.row.price}售价且${scope.row.discount===1?'不打折': ('以'+scope.row.discount*10+'折的折扣')}上架么`)">
                    </el-button>
                    <el-button type="danger"
                               v-else
                               icon="el-icon-refresh-left"
                               @click="sendReq('/api/store',
                               'state',
                               0,
                               scope.row,
                               `确定要撤销上架商品?`)">
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
        name: "UpShelves",
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
                this.$http.get('/api/store/sale',
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