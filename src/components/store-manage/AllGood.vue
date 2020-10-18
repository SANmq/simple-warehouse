<template>
    <div class="store-cost table-p">
        <el-table :data="oneDate.length ? oneDate : tableData" border height="500">
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

            <el-table-column align="center" width="80" label="固有成本">
                <template slot-scope="scope">
                    {{scope.row.cost + scope.row.repairCost}}
                </template>
            </el-table-column>

            <el-table-column align="center" width="80" label="状态">
                <template slot-scope="scope">
                    {{stateDict[scope.row.state]}}
                </template>
            </el-table-column>

            <el-table-column label="备注" align="center">
                <template slot="header" slot-scope="scope">
                    备注<i class="el-icon-edit"></i>
                </template>
                <template slot-scope="scope">
                    <EasyEdit :value="scope.row.remark"
                              :re="/^[\s\S]{0,200}$/"
                              :textarea="true"
                              @change="sendReq('/api/good/item' ,'remark',$event,scope.row)">
                    </EasyEdit>
                </template>
            </el-table-column>

            <el-table-column align="center" width="95" label="入库时间">
                <template slot-scope="scope">
                    {{scope.row.createdAt|formatTime}}
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
        name: "AllGood",
        components: {EasyEdit},
        watch: {
            currentPage: {
                immediate: true,
                handler() {
                    this.getData()
                }
            }
        },
        computed: mapState(['stateDict']),
        data() {
            return {
                currentPage: 1,
                total: 0,
                limit: 8,
                tableData: [],
                oneDate: [],
                searchId: '',
            }
        },
        methods: {
            getData() {
                this.$http.get('/api/store/cost', {params: {limit: this.limit, currentPage: this.currentPage}}).then(
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

            searchById(id) {
                // 根据id检索内容
            }
        }
    }
</script>

<style lang="less">
    .table-p {
        overflow-y: auto;
    }
</style>