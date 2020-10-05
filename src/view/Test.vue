<template>
    <div>
        <div>
            <button @click="tz">点击跳转</button>
        </div>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                :collapse="isCollapse"
                text-color="#fff"
                style="border-right: none;"
                :router="true"
                active-text-color="#ffd04b">

            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-s-order"></i>
                    <span slot="title">货品管理</span>
                </template>
                <el-menu-item index="1-1">
                    <i class="el-icon-s-fold"></i>
                    <span slot="title">入库</span>
                </el-menu-item>
                <el-menu-item index="1-2">
                    <i class="el-icon-s-unfold"></i>
                    <span slot="title">出库</span>
                </el-menu-item>
                <el-menu-item index="1-3">
                    <i class="el-icon-date"></i>
                    <span slot="title">日志</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-s-order"></i>
                    <span slot="title">货品管理</span>
                </template>
                <el-menu-item index="2-1">
                    <i class="el-icon-s-fold"></i>
                    <span slot="title">入库</span>
                </el-menu-item>
                <el-menu-item index="2-2">
                    <i class="el-icon-s-unfold"></i>
                    <span slot="title">出库</span>
                </el-menu-item>
                <el-menu-item index="2-3">
                    <i class="el-icon-date"></i>
                    <span slot="title">日志</span>
                </el-menu-item>
            </el-submenu>
            <el-menu-item index="3">
                <i class="el-icon-date"></i>
                <span slot="title">日志</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-date"></i>
                <span slot="title">测试用</span>
            </el-menu-item>

        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "Test",
        data() {
            return {
                isCollapse: false
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            tz() {
                // this.$router.push('keyi')
            }
        }
    }
</script>

<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 180px;
    }
</style>