<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "App",
        created() {
            this._refresh()
        }
    };
</script>

<style lang="less">
    .id-search {
        input {
            padding: 0;
            text-align: center;
        }
    }
</style>