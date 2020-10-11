<template>
    <el-form :model="form" inline label-width="80px" style="max-height: 400px;overflow-y: auto">
        <h3>提示:确认前请仔细核对表单信息</h3>
        <el-form-item label="分类名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item :label="'参数'+i" v-for="(v,i) in form.defaultParams" :key="i">
            <el-input v-model="form.defaultParams[i].name" style="width: auto"></el-input>
            <el-button type="danger" @click="delParamItem(form.defaultParams,i)">删除参数</el-button>
        </el-form-item>
        <el-button style="display: block;margin-left: 90px"
                   type="primary"
                   @click="addParamItem"
                   icon="el-icon-circle-plus">新增参数
        </el-button>
    </el-form>
</template>

<script>
    export default {
        name: "Edit",
        props: {
            form: {
                type: Object,
                default() {
                    return {
                        name: '',
                        defaultParams: []
                    }
                }
            }
        },
        methods: {
            delParamItem(self, index) {
                self.splice(index, 1)
            },
            addParamItem() {
                this.form.defaultParams.push({name: ''})
            }
        }
    }
</script>

<style scoped>

</style>