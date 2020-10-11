<template>
    <div class="add-good">
        <el-steps :active="active" simple finish-status="success" style="padding: 20px 200px">
            <el-step title="基本信息" description=""></el-step>
            <el-step title="参数信息" description=""></el-step>
        </el-steps>
        <el-form :model="form" @submit.prevent="submitFrom" inline style="text-align: center">
            <el-form-item label="商品昵称">
                <el-input v-model="form.nickname"></el-input>
            </el-form-item>
            <el-form-item label="商品分类">
                <el-select v-model="form.classify" placeholder="请选择">
                    <el-option
                            v-for="item in classOp"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>

        </el-form>

    </div>
</template>

<script>
    export default {
        name: "AddGood",
        data() {
            return {
                active: 0,
                form: {
                    nickname: '商品昵称',
                    classify: '',
                },
                classOp: [
                    {
                        value: 1,
                        label: '电脑'
                    },
                    {
                        value: 2,
                        label: '打印机'
                    },
                    {
                        value: 3,
                        label: '显示器'
                    },
                    {
                        value: 4,
                        label: '服务器'
                    },
                    {
                        value: 5,
                        label: '交换器'
                    },
                    {
                        value: 6,
                        label: '配件'
                    },
                    {
                        value: 7,
                        label: '其他'
                    },
                ],
            }
        },
        methods: {
            // 提交创建商品表单
            submitFrom() {

            },
            next() {
                this.active++
            },
            prev() {
                this.active--
            }
        }
    }
</script>

<style scoped>

</style>