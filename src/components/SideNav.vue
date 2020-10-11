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
        <el-submenu index="manage">
            <template slot="title">
                <i class="el-icon-s-order"></i>
                <span slot="title">货品管理</span>
            </template>
            <el-menu-item index="/manage/add">
                <i class="el-icon-circle-plus"></i>
                <span slot="title">添加商品</span>
            </el-menu-item>
            <el-menu-item index="/manage/inbound">
                <i class="el-icon-inbound"></i>
                <span slot="title">商品入库</span>
            </el-menu-item>
            <el-menu-item index="/manage/outbound">
                <i class="el-icon-outbound"></i>
                <span slot="title">商品出库</span>
            </el-menu-item>
            <el-menu-item index="/manage/log">
                <i class="el-icon-date"></i>
                <span slot="title">操作日志</span>
            </el-menu-item>
        </el-submenu>

        <el-submenu index="info">
            <template slot="title">
                <i class="el-icon-s-tools"></i>
                <span slot="title">仓库配置</span>
            </template>
            <el-menu-item index="/config/classify">
                <i class="el-icon-menu"></i>
                <span slot="title">分类信息</span>
            </el-menu-item>
        </el-submenu>

        <el-submenu index="analysis">
            <template slot="title">
                <i class="el-icon-data-analysis"></i>
                <span slot="title">统计分析</span>
            </template>
            <el-menu-item index="/analysis/money">
                <i class="el-icon-rmb"></i>
                <span slot="title">收益分析</span>
            </el-menu-item>
            <el-menu-item index="/analysis/store">
                <i class="el-icon-commodity"></i>
                <span slot="title">仓库分析</span>
            </el-menu-item>
        </el-submenu>
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
        computed: {},
    }
</script>
<style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 180px;
    }
</style>