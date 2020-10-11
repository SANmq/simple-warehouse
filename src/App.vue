<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import Test from "./view/Test";

    export default {
        name: "App",
        components: {
            Test
        },
        created() {
            this._refresh()
        }
    };
</script>

<style>


</style>