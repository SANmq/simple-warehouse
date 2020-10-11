<template>
    <div :class="'container '+(isCollapse ? '':'open')">
        <aside class="side">
            <SideNav :collapse="isCollapse"></SideNav>
        </aside>
        <div class="main">
            <div class='nav'>
                <el-button type="diy"
                           :icon="isCollapse ?'el-icon-s-unfold' : 'el-icon-s-fold'"
                           style="height: 36px;margin: 6px;font-size: 20px"
                           @click="isCollapse=!isCollapse">
                </el-button>

                <el-breadcrumb separator="/">
                    <el-breadcrumb-item v-for="item in breadList" :key="item">{{routeDict[item]}}</el-breadcrumb-item>
                </el-breadcrumb>
                <div style="flex-grow: 1"></div>
                <el-dropdown
                        style="margin-right: 20px"
                        @command="handleCommand">
                  <span class="el-dropdown-link">
                    {{adminName}}<i class="el-icon-arrow-down el-icon--right"></i>
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
    import {mapState} from 'vuex'

    export default {
        name: "Admin",
        components: {
            SideNav,
        },
        data() {
            return {
                isCollapse: false,
            }
        },
        methods: {
            handleCommand(command) {
                if (command === 'logout') {
                    console.log('我要登出')
                }
            },
        },
        computed: {
            ...mapState(['routeDict', 'isLogin', 'adminName']),
            breadList() {
                return this.$route.path.split('/').slice(1)
            }
        },
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

            & > div:last-of-type {
                overflow-y: auto;
                height: calc(100vh - 48px);
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