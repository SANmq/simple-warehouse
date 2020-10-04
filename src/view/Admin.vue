<template>
    <el-container>
        <el-aside style="height: calc(100vh - 48px);background-color: #545c64;width: 200px">
            <SideNav></SideNav>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
    import SideNav from "&/SideNav";

    export default {
        name: "Admin",
        components: {
            SideNav
        }
    }
</script>

<style lang="less">
    .el-aside {
        /* 这里是整体设置,必须设置 */

        &::-webkit-scrollbar {
            width: 5px;
            height: 0;
            background-color: grey;
            border-right: 1px solid black;
        }

        /* 这里是滚动槽的设置*/

        &::-webkit-scrollbar-track {
            background-color: #42b98399;
        }

        /* 这里是滚动滑块 */

        &::-webkit-scrollbar-thumb {
            border-radius: 2.5px;
            background-color: #3699;
        }

        /*&::-webkit-scrollbar-button {*/
        /*    background-color: red;*/
        /*    height: 10px;*/
        /*    cursor: pointer;*/
        /*}*/
    }


</style>