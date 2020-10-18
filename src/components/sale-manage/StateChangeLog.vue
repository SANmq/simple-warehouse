<template>
    <div class="sale-log">
        <el-form class="search-tool" inline :model="form" @submit.prevent="">
            <el-form-item label="商品id">
                <el-input placeholder="输入商品id" prefix-icon="el-icon-search" v-model="form.id"></el-input>
            </el-form-item>
            <el-form-item label="操作时间">
                <el-date-picker
                        v-model="form.range"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="el-icon-search" @click="search">查找</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="tableData">
            <el-table-column label="操作类型" align="center">
                <template slot-scope="scope">
                    {{scope.row.opType}}
                </template>
            </el-table-column>
            <el-table-column label="商品编号" align="center">
                <template slot-scope="scope">
                    {{scope.row.id}}
                </template>
            </el-table-column>
            <el-table-column label="商品名称" align="center">
                <template slot-scope="scope">
                    {{scope.row.nickName}}
                </template>
            </el-table-column>
            <el-table-column label="时间" align="center">
                <template slot-scope="scope">
                    {{scope.row.createdAt}}
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "OpLog",
        methods: {
            //根据条件进行检索
            search() {
                console.log(this.form)
            }
        },
        data() {
            return {
                form: {
                    id: '',
                    range: ''
                },
                tableData: [],
            }
        }
    }
</script>

<style scoped>
    .search-tool {
        padding-top: 16px;
        text-align: center;
        box-shadow: inset 0 -1px 0 0 #aaa;
    }
</style>