<template>
    <div :class="'container '+(isCollapse ? '':'open')">
        <aside class="side">
            <SideNav :collapse="isCollapse"></SideNav>
        </aside>
        <div class="main">
            <div class='nav'>
                <el-button type="diy"
                           style="height: 36px;margin: 6px"
                           @click="isCollapse=!isCollapse">
                    {{isCollapse?'展开':'收起'}}
                </el-button>

                <el-breadcrumb separator="/">
                    <el-breadcrumb-item v-for="item in breadList" :key="item">{{routeDict[item]}}</el-breadcrumb-item>
                </el-breadcrumb>
                <div style="flex-grow: 1"></div>
                <el-dropdown
                        style="margin-right: 20px"
                        @command="handleCommand">
                  <span class="el-dropdown-link">
                    {{'admin'}}<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item style="width: 40px" command="logout">登出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>

            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import SideNav from "&/SideNav";


    export default {
        name: "Admin",
        components: {
            SideNav,
        },
        data() {
            return {
                isCollapse: false,
                routeDict: {
                    admin: '商品总览',
                    in: '商品入库',
                    out: '商品出库',
                    log: '操作日志',
                    info: '货品信息',
                    analysis: '收益分析'
                }
            }
        },
        methods: {
            handleCommand(command) {
                if (command === 'logout') {
                    console.log('我要登出')
                }

            }
        },
        computed: {
            breadList() {
                return this.$route.path.split('/').slice(1)
            }
        },
        watch: {}
    }
</script>

<style lang="less">
    .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;
    }

    .el-icon-arrow-down {
        font-size: 12px;
    }


    .container {

        .side {
            width: 64px;
            overflow-x: hidden;
            overflow-y: auto;
            height: 100vh;
            background-color: #545c64;
            position: fixed;
            transition: width .3s linear;


            &::-webkit-scrollbar {
                width: 5px;
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
        }

        .main {
            transition: all .3s linear;
            margin-left: 64px;

            .nav {
                display: flex;
                justify-content: space-between;
                height: 48px;
                background-color: white;
                border-bottom: 1px solid #aaa;
                line-height: 48px;
                text-align: center;
            }
        }
    }

    .open {
        .side {
            width: 180px;
            transition: width .3s linear;
        }

        .main {
            margin-left: 180px;
            transition: all .3s linear;
        }
    }


</style>