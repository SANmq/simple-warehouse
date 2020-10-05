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
        }
    };
</script>

<style>


</style>