<template>
    <div class="nav">
        <i class="el-icon-s-home" style="font-size: 48px"></i>
        <span class="title">二手仓库</span>
        <span style="flex-grow: 1"></span>
        <div>
            <el-switch
                    v-model="isLogin"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
            </el-switch>
        </div>
        <span class="user" v-if="isLogin">{{username}}</span>
        <span class="user" v-else>请登录。。。</span>
    </div>
</template>

<script>
    export default {
        name: "HeadNav",
        data() {
            return {
                isLogin: false,
                username: 'admin'
            }

        }
    }
</script>

<style lang="less">
    .nav {
        height: 48px;
        background-color: #545c64;
        padding-left: 20px;
        line-height: 48px;
        font-size: 28px;
        display: flex;
        box-shadow: inset 0 -1px 2px 0 #000;

        .title {
            margin-left: 10px;
        }

        .user {
            width: 180px;
            text-align: center;
        }
    }
</style>