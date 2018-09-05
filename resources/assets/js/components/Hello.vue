<template>
    <div>
        <h1>Hello LaravelVue</h1>
        <p class="hello">{{message}}</p>
    </div>
</template>

<script>
    export default {
        name: "hello",
        data(){
            return {
                message:'This is a laravel vue hello world page'
            }
        }
    }
</script>

<style scoped>
    .hello {
        font-size: 2em;
        color: green;
    }
</style>