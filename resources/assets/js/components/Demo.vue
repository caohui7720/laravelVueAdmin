<template>
    <el-container style="height: 100%; overflow: hidden">
        <el-header style="height: 55px">Header</el-header>
        <el-container style="height: 100%">
            <el-aside width="200px" style="height: 100%">
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
            </el-aside>
            <el-container>
                <el-main>
                    <el-row>
                        <el-col :span="24">
                            <el-card shadow="always">
                                <div slot="header" class="clearfix">
                                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                                        <el-form-item label="审批人">
                                            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                                        </el-form-item>
                                        <el-form-item label="活动区域">
                                            <el-select v-model="formInline.region" placeholder="活动区域">
                                                <el-option label="区域一" value="shanghai"></el-option>
                                                <el-option label="区域二" value="beijing"></el-option>
                                            </el-select>
                                        </el-form-item>
                                        <el-form-item>
                                            <el-button type="primary" @click="onSubmit">查询</el-button>
                                        </el-form-item>
                                    </el-form>
                                </div>

                                <el-table
                                        :data="tableData"
                                        stripe
                                        border
                                        style="width: 100%">
                                    <el-table-column
                                            prop="date"
                                            label="日期"
                                            width="180">
                                    </el-table-column>
                                    <el-table-column
                                            prop="name"
                                            label="姓名"
                                            width="180">
                                    </el-table-column>
                                    <el-table-column
                                            prop="address"
                                            label="地址">
                                    </el-table-column>
                                </el-table>
                                <div class="block text-center" style="margin-top: 10px">
                                    <el-pagination
                                            background
                                            :page-size="20"
                                            :pager-count="11"
                                            layout="prev, pager, next"
                                            :total="1000">
                                    </el-pagination>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-main>
                <el-footer style="height: 40px">
                    <div class="pull-right hidden-xs">
                        <b>Version</b> 2.3.8
                    </div>
                    <strong>Copyright © 2014-2016 <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong> All rights reserved.
                </el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "demo",
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                formInline: {
                    user: '',
                    region: ''
                }
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style>
    .el-header {
        background-color: #3c8dbc;
        color: #333;
        text-align: center;
        line-height: 50px;
    }
    .el-footer {
        background-color: #ffffff;
        color: #444444;
        line-height: 40px;
        border-top: 1px solid #d2d6de;
    }

    .el-aside {
        background-color: #222d32;
        color: #333;
        text-align: left;
        height: 100%;
    }

    body > .el-container {
        margin-bottom: 40px;
    }
    .el-submenu__title{
        height: 50px;
        line-height: 50px;
    }
    .el-menu{
        border-right: none;
    }
    .el-menu-item-group__title{
        padding: 0;
    }
    .el-form-item{
        margin-bottom: 10px;
    }
</style>