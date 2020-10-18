<template>
    <el-card class="login" style="width: 283px;margin:100px auto">
        <el-form :model="form"
                 @submit.prevent="submit"
                 style="text-align: center"
                 :inline="true">
            <h2>后台管理</h2>
            <el-form-item label="账号">
                <el-input type="text"
                          prefix-icon="el-icon-user"
                          v-model="form.name">
                </el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password"
                          type="password"
                          prefix-icon="el-icon-lock">
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="success"
                           style="display:inline-block;width: 233px"
                           @click="submit">登录
                </el-button>
            </el-form-item>
        </el-form>
    </el-card>

</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                form: {
                    name: '',
                    password: ''
                }
            }
        },
        methods: {
            submit() {
                this.$http.post('/api/login', this.form).then(
                    (resp) => {
                        if (resp.status === 200) {
                            // 登录成功后的操作
                            this.$message({
                                message: resp.data,
                                type: 'success',
                                duration: 1000,
                            })
                            this._setSession(this.form.name)
                            this.$router.push('/msale')
                        }
                    }, (err) => {
                        this.$message({
                            message: err,
                            duration: 5000,
                            type: 'error',
                            showClose: true
                        })
                    }
                )
            }
        }
    }
</script>