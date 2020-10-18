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
        <el-submenu index="msale">
            <template slot="title">
                <i class="el-icon-s-shop"></i>
                <span slot="title">销售管理</span>
            </template>
            <el-menu-item index="/msale/onsale">
                <i class="el-icon-onsale"></i>
                <span slot="title">在架商品</span>
            </el-menu-item>
            <el-menu-item index="/msale/forsale">
                <i class="el-icon-forSale"></i>
                <span slot="title">已拍商品</span>
            </el-menu-item>
            <el-menu-item index="/msale/outsale">
                <i class="el-icon-send"></i>
                <span slot="title">已发商品</span>
            </el-menu-item>
            <el-menu-item index="/msale/reback">
                <i class="el-icon-reback"></i>
                <span slot="title">退回商品</span>
            </el-menu-item>
            <el-menu-item index="/msale/saleover">
                <i class="el-icon-saleover"></i>
                <span slot="title">售出商品</span>
            </el-menu-item>
            <el-menu-item index="/msale/log">
                <i class="el-icon-s-order"></i>
                <span slot="title">销售日志</span>
            </el-menu-item>
        </el-submenu>

        <el-submenu index="mstore">
            <template slot="title">
                <i class="el-icon-s-home"></i>
                <span slot="title">仓库管理</span>
            </template>
            <el-menu-item index="/mstore/all">
                <i class="el-icon-store-all"></i>
                <span slot="title">库存一览</span>
            </el-menu-item>
            <el-menu-item index="/mstore/add">
                <i class="el-icon-circle-plus"></i>
                <span slot="title">添加商品</span>
            </el-menu-item>
            <el-menu-item index="/mstore/cost">
                <i class="el-icon-cost"></i>
                <span slot="title">成本记录</span>
            </el-menu-item>
            <el-menu-item index="/mstore/upshelves">
                <i class="el-icon-sale"></i>
                <span slot="title">商品上架</span>
            </el-menu-item>

        </el-submenu>

        <el-submenu index="config">
            <template slot="title">
                <i class="el-icon-s-tools"></i>
                <span slot="title">仓库配置</span>
            </template>
            <el-menu-item index="/config/classify">
                <i class="el-icon-menu"></i>
                <span slot="title">商品分类</span>
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
        methods: {
            handleOpen(key, keyPath) {
            },
            handleClose(key, keyPath) {
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