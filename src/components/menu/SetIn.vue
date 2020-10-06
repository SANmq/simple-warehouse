<template>
    <div class="set-in">
        <div style="background-color: #F5F7FA;border-bottom: 1px dotted #aaa;">
            <el-steps :active="active" simple finish-status="success">
                <el-step title="基本信息" description=""></el-step>
                <el-step title="参数信息" description=""></el-step>
            </el-steps>
        </div>
        <el-form :model="form" label-width="80px" v-show="active===0">
            <el-form-item label="商品昵称">
                <el-input v-model="form.nickName"></el-input>
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
            <el-form-item label="商品成本">
                <el-input-number v-model.number="form.cost"></el-input-number>
            </el-form-item>
            <el-form-item label="商品数量">
                <el-input-number v-model.number="form.number"></el-input-number>
            </el-form-item>
            <el-form-item label="商品图片">
                <el-upload
                        class="upload-demo"
                        ref="upload"
                        :multiple="false"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-success="getImageUrl"
                        :on-remove="handleRemove"
                        :on-error="handleError"
                        list-type="picture-card"
                        :with-credentials="true"
                        :auto-upload="false">
                    <i slot="default" class="el-icon-plus"></i>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-form-item>
            <div style="text-align: center;">
                <el-button size="mini" type="success" @click="submitUpload">图片上传至服务器</el-button>
                <el-button type="primary" @click="next">下一步</el-button>
            </div>
        </el-form>

        <el-form :model="form.parameters" label-width="80px" v-show="active===1" @submit.prevent="submit">
            <el-form-item label="品牌信息">
                <el-input type="textarea" v-model="form.parameters.brand" :autosize="{ minRows: 10, maxRows: 15}" resize="none"></el-input>
            </el-form-item>


            <el-form-item style="text-align: center">
                <el-button type="primary" @click="prev">上一步</el-button>
                <el-button type="primary" @click="submit">确认提交</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
    export default {
        name: "setIn",
        data() {
            return {
                form: {
                    nickname: '',
                    classify: '',
                    parameters: {
                        brand: '',
                    },
                    cost: 0,
                    number: 1,
                    photo: '',
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
                active: 0
            }
        },
        methods: {
            next() {
                if (this.active++ > 2) this.active = 0;
            },
            prev() {
                if (this.active-- < 0) this.active = 2;
            },
            submit() {
                // 成功
                console.log(this.form)
                this.active++
                this.$msgbox('入库成功', () => {
                    this.active = 0
                })
            },
            submitUpload() {
                // 提交文件
                console.log('测试上传方法')
                this.$refs.upload.submit();
            },
            handleRemove(file, fileList) {
                // 文件被移除
                console.log(file, fileList);
            },
            handleError(err, file, fileList) {
                // 文件上传失败处理
                console.log('查看失败原因', err, file, fileList)
            },
            getImageUrl(response, file, fileList) {
                //上传成功钩子
                console.log('查看是否可以成功', response, file, fileList)
            }
        }
    }
</script>

<style lang="less">
    .set-in {
        .el-steps {
            width: 400px;
            margin: auto;
        }

        .el-form {
            width: 600px;
            margin: 20px auto;
        }
    }
</style>