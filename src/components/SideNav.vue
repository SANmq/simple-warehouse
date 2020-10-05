<template>
    <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            :collapse="collapse"
            text-color="#fff"
            style="border-right: none;"
            :router="true"
            active-text-color="#ffd04b">


        <el-menu-item index="/admin">
            <i class="el-icon-s-home"></i>
            <span slot="title">货品总览</span>
        </el-menu-item>


        <el-submenu index="">
            <template slot="title">
                <i class="el-icon-s-order"></i>
                <span slot="title">货品管理</span>
            </template>
            <el-menu-item index="/admin/in">
                <i class="el-icon-s-fold"></i>
                <span slot="title">入库</span>
            </el-menu-item>
            <el-menu-item index="/admin/out">
                <i class="el-icon-s-unfold"></i>
                <span slot="title">出库</span>
            </el-menu-item>
            <el-menu-item index="/admin/log">
                <i class="el-icon-date"></i>
                <span slot="title">日志</span>
            </el-menu-item>
        </el-submenu>

        <el-menu-item index="/admin/info">
            <i class="el-icon-document"></i>
            <span slot="title">货品信息</span>
        </el-menu-item>
        <el-menu-item index="/admin/analysis">
            <i class="el-icon-s-marketing"></i>
            <span slot="title">收益分析</span>
        </el-menu-item>
    </el-menu>
</template>
<script>
    export default {
        name: 'SideNav',
        props: {
            collapse: {
                style: Boolean,
                required: true
            }
        },
        created() {
            console.log(this.$route.path)
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
        },
        computed: {
            r() {
                return /^\/admin\//.test(this.$route.path)
            }
        },
        destroyed() {
            console.log('每次会渲染新的')
        }
    }
</script>
<style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 180px;
    }
</style>