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
                              :src="'http://localhost:8888/upload/'+scope.row.imageUrlList[0]"
                              :preview-src-list="scope.row.imageUrlList.map(v=>'http://localhost:8888/upload/'+v)"
                              fit="cover">
                    </el-image>
                </template>
            </el-table-column>
            <el-table-column align="center" width="110">
                <template slot="header" slot-scope="scope">
                    商品成本<i class="el-icon-edit"></i>
                </template>
                <template slot-scope="scope">
                    <input style="width: 80%"
                           type="button"
                           class="edit-input"
                           v-model.number=scope.row.cost
                           @input="test($event,'cost',scope.row)"
                           @click="editOpen"
                           @change="sendReq(scope.row.id,{cost:scope.row.cost})"
                           @blur="editClose">
                </template>
            </el-table-column>
            <el-table-column align="center" width="110">
                <template slot="header" slot-scope="scope">
                    维修成本<i class="el-icon-edit"></i>
                </template>
                <template slot-scope="scope">
                    <input style="width: 80%"
                           type="button"
                           class="edit-input"
                           v-model.number=scope.row.repairCost
                           @input="test($event,'repairCost',scope.row)"
                           @click="editOpen"
                           @change="sendReq(scope.row.id,{repairCost:scope.row.repairCost})"
                           @blur="editClose">
                </template>
            </el-table-column>
            <el-table-column align="center" width="110">
                <template slot="header" slot-scope="scope">
                    运费成本<i class="el-icon-edit"></i>
                </template>
                <template slot-scope="scope">
                    <input style="width: 80%"
                           type="button"
                           class="edit-input"
                           v-model.number=scope.row.transCost
                           @input="test($event,'transCost',scope.row)"
                           @click="editOpen"
                           @change="sendReq(scope.row.id,{transCost:scope.row.transCost})"
                           @blur="editClose">
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
    export default {
        name: "setIn",
        components: {},
        watch: {
            currentPage: {
                immediate: true,
                handler() {
                    this.getData()
                }
            }
        },
        data() {
            return {
                currentPage: 1,
                total: 58,
                limit: 8,
                tableData: [],
                oneDate: [],
                searchId: '',
                editCost: true
            }
        },
        methods: {
            getData() {
                this.$http.get('/api/cost', {params: {limit: this.limit, currentPage: this.currentPage}}).then(
                    (resp) => {
                        if (resp.status === 200) {
                            this.total = resp.data.total
                            this.tableData = resp.data.rows
                        }
                    }
                )
            },

            editOpen(e) {
                e.target.type = 'text'
            },
            editClose(e) {
                e.target.type = 'button'
            },
            sendReq(id, data) {
                this.$http.post('/api/cost', {id, obj: data}).then(
                    (resp) => {
                        if (resp.status === 200) {
                            this.successMsg()
                        } else {
                            this.failMsg()
                        }
                    }
                    , () => {
                        this.failMsg()
                    })
            },
            // 用来处理数值验证问题
            test(e, k, d) {
                if (typeof d[k] === 'string') {
                    d[k] = 0
                } else {
                    if (/(^[1-9]\d*?|^0)\.\d\d/.test(e.target.value)) {
                        d[k] = Number(e.target.value.match(/(^[1-9]\d*?|^0)\.\d\d/)[0])
                    }
                    if (/(^[1-9]\d*?|^0)\.$/.test(e.target.value)) {
                    } else {
                        e.target.value = '' + d[k]
                    }
                }
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