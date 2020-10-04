<template>
    <div id="app">
        <HeadBar></HeadBar>
        <router-view></router-view>
    </div>
</template>

<script>
    import HeadBar from "&/HeadBar";

    export default {
        name: "App",
        components: {
            HeadBar
        }
    };
</script>

<style>


</style>