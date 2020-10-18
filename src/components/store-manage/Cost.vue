<template>
    <div class="store-cost">
        <el-table :data="oneDate.length ? oneDate : tableData" border style="margin: auto;min-width:1080px;" height="500">
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
            <el-table-column align="center" width="100" label="购入花费">
                <template slot="header" slot-scope="scope">
                    商品成本<i class="el-icon-edit"></i>
                </template>
                <template slot-scope="scope">
                    <EasyEdit :value="scope.row.cost"
                              @change="sendReq('/api/store','cost',$event,scope.row)">
                    </EasyEdit>
                </template>
            </el-table-column>
            <el-table-column align="center" width="100" label="维修花费">
                <template slot="header" slot-scope="scope">
                    维修成本<i class="el-icon-edit"></i>
                </template>
                <template slot-scope="scope">
                    <EasyEdit :value="scope.row.repairCost"
                              @change="sendReq('/api/store','repairCost',$event,scope.row)">
                    </EasyEdit>
                </template>
            </el-table-column>
            <el-table-column align="center" width="100" label="运输花费">
                <template slot="header" slot-scope="scope">
                    运输成本<i class="el-icon-edit"></i>
                </template>
                <template slot-scope="scope">
                    <EasyEdit :value="scope.row.transCost"
                              v-if="scope.row.state === 3 || scope.row.state === 4"
                              @change="sendReq('/api/store','transCost', $event,scope.row)">
                    </EasyEdit>
                    <span v-else>{{scope.row.transCost}}</span>
                </template>
            </el-table-column>

            <el-table-column align="center" width="100" label="商品状态">
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

<style>

</style>