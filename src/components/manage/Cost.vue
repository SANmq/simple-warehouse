<template>
    <div class="cost-manage">
        <el-table :data="oneDate.length ? oneDate : tableData" border style="margin: auto;min-width:1080px;" height="550px">
            <el-table-column align="center" width="100">
                <template slot="header" slot-scope="scope">
                    <el-input v-model="searchId" size="mini" placeholder="编号检索" @change="searchById(searchId)"/>
                </template>
                <template slot-scope="scope">
                    <span>{{ scope.row.id }}</span>
                </template>
            </el-table-column>
            <el-table-column align="center" width="100" label="商品昵称" prop="nickname"></el-table-column>
            <el-table-column align="center" width="100" label="商品数量" prop="number"></el-table-column>
            <el-table-column align="center" width="100" label="商品简图">
                <template slot-scope="scope">
                    <el-image style="width: 40px; height: 40px;vertical-align: middle;"
                              :src="scope.row.imageUrlList.length ? localhost+'/upload/'+scope.row.imageUrlList[0] : ''"
                              :preview-src-list="scope.row.imageUrlList.map(v=>localhost+'/upload/'+v)"
                              fit="cover">
                    </el-image>
                </template>
            </el-table-column>
            <el-table-column align="center" width="110">
                <template slot="header" slot-scope="scope">
                    商品成本<i class="el-icon-edit"></i>
                </template>
                <template slot-scope="scope">
                    <EasyEdit :value="scope.row.cost"
                              @change="sendReq($event,'cost',scope.row)">
                    </EasyEdit>
                </template>
            </el-table-column>
            <el-table-column align="center" width="110">
                <template slot="header" slot-scope="scope">
                    维修成本<i class="el-icon-edit"></i>
                </template>
                <template slot-scope="scope">
                    <EasyEdit :value="scope.row.repairCost"
                              @change="sendReq($event,'repairCost',scope.row)">
                    </EasyEdit>
                </template>
            </el-table-column>
            <el-table-column align="center" width="110">
                <template slot="header" slot-scope="scope">
                    运费成本<i class="el-icon-edit"></i>
                </template>
                <template slot-scope="scope">
                    <EasyEdit :value="scope.row.transCost"
                              @change="sendReq($event,'transCost',scope.row)">
                    </EasyEdit>
                </template>
            </el-table-column>
            <el-table-column align="center" width="" label="备注信息" prop="remark"></el-table-column>
            <el-table-column align="center" width="200" label="创建时间" prop="createdAt">
                <template slot-scope="scope">
                    <span>{{scope.row.createdAt|formatTime}}</span>
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
        name: "setIn",
        components: {EasyEdit},
        watch: {
            currentPage: {
                immediate: true,
                handler() {
                    this.getData()
                }
            }
        },
        computed: mapState(['localhost']),
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
                this.$http.get('/api/manage/cost', {params: {limit: this.limit, currentPage: this.currentPage}}).then(
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
                this.$confirm(`确定要将${k}的值${row[k]}修改为新值${value}吗`, '提示').then(
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
            searchById(id) {
                // 根据id检索内容
            }
        }
    }
</script>

<style lang="less">
    .cost-manage {
        .edit-input {
            outline: none;
            border: none;
            padding: 5px 0;
            text-align: center;

            &[type='button'] {
                cursor: pointer;
            }

            &:focus {
                box-shadow: inset 0 0 1px 1px #409EFF;
            }
        }
    }
</style>