<template>
    <div style="height: 100%">
        <router-view></router-view> <!--路由引入的组件将在这里被渲染-->
    </div>
</template>

<script>
    export default {
        name: "App",
        data() {
            return {
                msg: 'Vue'
            }
        }
    }
</script>

<style scoped>

</style>