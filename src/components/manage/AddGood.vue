<template>
    <div class="add-good">
        <el-steps :active="active" simple finish-status="success" style="padding: 20px 100px">
            <el-step title="基本信息"></el-step>
            <el-step title="参数信息"></el-step>
            <el-step title="商品图片"></el-step>
        </el-steps>
        <el-form :model="form"
                 @submit.prevent="submitFrom"
                 inline
                 label-width="80px">
            <template v-if="active===0">
                <el-form-item label="商品昵称">
                    <el-input v-model="form.nickname" maxlength="20" show-word-limit></el-input>
                </el-form-item>
                <el-form-item label="商品分类">
                    <el-select v-model="form.classify" placeholder="请选择">
                        <el-option
                                v-for="item in classifyList"
                                :key="item.id"
                                :label="item.name"
                                :value="item.name">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="商品描述">
                    <el-input type="textarea"
                              v-model="form.remark"
                              maxlength="200"
                              show-word-limit
                              style="width: 350px"
                              :autosize="{maxRows:10,minRows:10}"
                              resize="none">
                    </el-input>
                </el-form-item>
                <el-form-item label="商品数量">
                    <el-input-number v-model="form.number"></el-input-number>
                </el-form-item>
            </template>
            <template v-if="active===1">
                <div style="text-align: center" v-if="!form.classify">{{paramsTip}}</div>
                <el-form-item :label="item.name"
                              v-for="(item,i) in form.parameters"
                              :key="item.name">
                    <el-input v-model="item.value" style="width: auto"></el-input>
                    <el-button type="danger" icon="el-icon-remove" @click="form.parameters.splice(i,1)">删除</el-button>
                </el-form-item>
                <el-form-item style="display: block;text-align: center">
                    <el-button type="primary"
                               @click="addParamItem"
                               icon="el-icon-circle-plus">新增参数
                    </el-button>
                </el-form-item>
            </template>

            <template v-if="active===2">
                <el-form-item label="商品图片"
                              class="picture-upload"
                              label-width="100%">
                    <el-upload
                            class="upload-demo"
                            ref="upload"
                            :limit="8"
                            :on-exceed="exceed"
                            :multiple="true"
                            action="/"
                            :file-list="fileList"
                            :http-request="handleHttpRequest"
                            :on-remove="handleRemove"
                            list-type="picture-card"
                            :auto-upload="false">
                        <i slot="default" class="el-icon-plus"></i>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过2M,上传后此处暂时无法修改已上传图片</div>
                    </el-upload>
                    <el-button @click="submitUpload" type="primary">检查后点击这里确认上传图片</el-button>
                </el-form-item>
            </template>

            <template v-if="active===3">
                <div style="height: 100%;display: flex;justify-content: center;align-items: center;font-size: 40px">
                    <div>
                        <i :class="isLoading?'el-icon-loading':result ? 'el-icon-success':'el-icon-error'"
                           :style="'font-size: 50px;'+(isLoading?'':result?'color:green;':'color:red;')"></i>
                        {{isLoading ? '上传等待中。。。。':result ? '上传成功' : '上传失败'}}
                    </div>
                </div>

            </template>
        </el-form>
        <div style="text-align: center">
            <el-button @click="prev" v-if="active!==0&&active<3 ">上一项</el-button>
            <el-button @click="next" v-if="active!==2&&active<3">下一项</el-button>
            <el-button @click="submitFrom" v-if="active===2&&active<3">提交</el-button>
            <el-button @click="complete" v-if="active===3 && !isLoading">完成</el-button>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "AddGood",
        data() {
            return {
                active: 0,
                form: {
                    nickname: '',
                    classify: '',
                    number: 0,
                    remark: '',
                    parameters: [],
                    imageUrlList: [],
                },
                paramsTip: '请先添加分类',
                isLoading: true,
                result: false,
                fileList: []
            }
        },
        computed: {
            ...mapState('config', ['classifyList']),
        },

        watch: {
            'form.classify': {
                immediate: true,
                handler() {
                    let defaultParams = []
                    if (this.form.classify) {
                        defaultParams = this.classifyList.filter((value) => {
                            return value.name === this.form.classify
                        })[0].defaultParams
                    } else {
                        this.paramsTip = '请先设置商品的分类'
                    }
                    this.form.parameters = defaultParams.map((value) => {
                        return {name: value.name, "value": ''}
                    })
                    console.log(this.form.parameters)
                }
            },
        },

        methods: {
            // 提交创建商品表单
            submitFrom() {
                this.active++
                this.isLoading = true
                this.$http.put('/api/good/item', this.form).then(
                    (resp) => {
                        if (resp.status === 200) {
                            // 请求成功
                            this.isLoading = false
                            this.result = true
                            console.log(resp.data)
                        } else {
                            this.result = false
                        }
                    }
                    , () => {
                        this.result = false
                    })
                this.isLoading = false
            },
            next() {
                if (this.form.classify && this.form.nickname) {
                    if (this.active === 0) {
                        this.active++
                        return null
                    } else {
                        if (this.form.parameters.length > 0) {
                            this.active++
                            return null
                        }
                    }
                }
                this.$alert('请将当前表单添加完整后继续')
            },
            prev() {
                this.active--
            },
            addParamItem() {
                this.$prompt('请输入参数名称', '输入', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(({value}) => {
                    this.$message({
                        type: 'success',
                        message: '添加' + value + '参数成功'
                    }, () => {
                    })
                    this.form.parameters.push({
                        name: value,
                        value: ''
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消添加'
                    });
                });
            },

            async handleRemove(file) {
                // 文件被移除
                if (this.fileList.length === 0) {
                    return null
                }

                let i = 0
                for (let item of this.fileList) {
                    if (item.name === file.name) {
                        break;
                    }
                    i++
                }
                try {
                    const resp = await this.$http.delete('/api/upload', {params: {imageUrl: this.form.imageUrlList[i]}})
                    if (resp.status === 200) {
                        this.form.imageUrlList.splice(i, 1)
                        this.fileList.splice(i, 1)
                        this.$message({
                            message: '删除成功',
                            type: 'success',
                            duration: 2000
                        })
                        return null
                    }
                } catch (e) {

                }

                this.$message({
                    message: '删除失败',
                    type: 'info',
                    duration: 2000
                })
                const temp = this.fileList
                this.fileList = []
                this.fileList = temp
                // fileList.splice(i, 0, file)
                // console.log(file, fileList);
            },
            exceed() {
                this.$alert('文件数量超出8个,请重新选择')
            },

            submitUpload() {
                // 提交文件
                console.log('测试上传方法')
                this.imageForm = new FormData()
                this.$refs.upload.submit();
                this.$http.post('/api/upload', this.imageForm).then(
                    (resp) => {
                        if (resp.status === 200) {
                            this.$message({
                                type: 'success',
                                message: '成功'
                            })
                            for (let item of resp.data) {
                                this.form.imageUrlList.push(item.url)
                                this.fileList.push({name: item.name, url: 'http://localhost:8888/upload/' + item.url})
                            }
                        } else {
                            this.$message({
                                type: 'error',
                                message: '上传失败'
                            })
                        }
                    }, (err) => {
                        console.log(err)
                        this.$message({
                            type: 'error',
                            message: '上传失败'
                        })
                    }
                )
            },
            handleHttpRequest(req) {
                this.imageForm.append('imageUrl', req.file, req.file.name)
            },
            // 提交动作完成
            complete() {
                if (this.result) {
                    // 成功则清空表单并回到active=0
                    this.form = {
                        nickname: '',
                        classify: '',
                        remark: '',
                        parameters: [],
                        imageUrlList: [],
                    }
                }
                this.active = 0
            }
        }
    }
</script>

<style lang="less">

    .add-good {
        .el-form {
            margin: 10px auto auto;
            width: 500px;
            height: 400px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;


            .el-form-item:not([class*=picture-upload]) {
                width: 100%;
                display: flex;

                .el-form-item__content {
                    flex-grow: 1;
                    display: flex;

                    & > div:first-of-type {
                        flex-grow: 1;
                    }
                }
            }

            .picture-upload {
                height: 100%;

                .el-form-item__label {
                    width: 100%;
                    text-align: left;
                }

                .el-upload-list__item.is-ready {
                    width: 100px;
                    height: 100px;
                }

                .el-upload.el-upload--picture-card {
                    width: 100px;
                    height: 100px;
                    line-height: 106px;
                }

                .el-upload-list__item {
                    width: 100px;
                    height: 100px;
                }
            }
        }
    }


</style>