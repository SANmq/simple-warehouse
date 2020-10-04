<template>
    <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="transparent"
            text-color="#fff"
            style="border-right: none"
            :router="true"
            active-text-color="#ffd04b">

        <el-menu-item :index="r ? 'all' : 'admin/all'">
            <template slot="title">
                <i class="el-icon-menu"></i>
                货品总览
            </template>
        </el-menu-item>

        <el-submenu index="admin">
            <template slot="title">
                <i class="el-icon-s-order"></i>
                货品管理
            </template>
            <el-menu-item :index="r ? 'in' : 'admin/in'">
                <i class="el-icon-s-fold"></i>
                <span slot="title">入库</span>
            </el-menu-item>
            <el-menu-item :index="r ? 'out' : 'admin/out'">
                <i class="el-icon-s-unfold"></i>
                <span slot="title">出库</span>
            </el-menu-item>
            <el-menu-item :index="r ? 'op' : 'admin/op'">
                <i class="el-icon-date"></i>
                <span slot="title">日志</span>
            </el-menu-item>

        </el-submenu>

        <el-menu-item :index="r ? 'info' : 'admin/info'">
            <i class="el-icon-document"></i>
            <span slot="title">货品信息</span>
        </el-menu-item>
        <el-menu-item :index="r ? 'analysis' : 'admin/analysis'">
            <i class="el-icon-s-marketing"></i>
            <span slot="title">收益分析</span>
        </el-menu-item>
    </el-menu>

</template>
<script>
    export default {
        name: 'SideNav',
        created() {
            console.log(this.$route.path)
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        computed: {
            r() {
                return /^\/admin\//.test(this.$route.path)
            }
        }
    }
</script>