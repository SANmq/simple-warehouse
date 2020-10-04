<template>
    <el-card style="width: 300px;margin:100px auto">
        <el-form :model="form"
                 @submit.prevent="submit"
                 style="text-align: center"
                 :inline="true">
            <h2>后台管理</h2>
            <el-form-item label="账号">
                <el-input type="text"
                          prefix-icon="el-icon-user"
                          v-model="form.count">
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
                    count: '',
                    password: ''
                }
            }
        },
        methods: {
            submit() {
                console.log(this.form)
                this.$router.push('/admin')
            }
        }

    }
</script>

<style>

</style>