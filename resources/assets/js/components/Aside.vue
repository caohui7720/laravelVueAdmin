<template>
    <div>
        <div class="site-logo">
            Logo
        </div>
        <el-row>
            <el-col :span="24">
                <!--<h5>自定义颜色</h5>-->
                <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#222d32"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1"><i class="el-icon-location"></i>选项1</el-menu-item>
                            <el-menu-item index="1-2"><i class="el-icon-location"></i>选项2</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>

</template>

<script>
    export  default {
        name: "myAside",
        data(){
            return {

            }
        },
        methods:{
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
        }
    }
</script>
<style>
    .el-menu{
        border-right: none;
    }
    .el-menu-item-group__title{
        padding: 0;
    }
    .el-form-item{
        margin-bottom: 10px;
    }
    .el-submenu__title, .el-menu-item{
        height: 45px;
        line-height: 45px;
    }
    .el-submenu .el-menu-item{
        height: 45px;
        line-height: 45px;
    }
</style>