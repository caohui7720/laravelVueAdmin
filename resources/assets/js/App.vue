<template>
    <div style="height: 100%">
        <el-container style="height: 100%; overflow: hidden">
            <el-aside width="200px" style="height: 100%">
                <my-aside></my-aside>
            </el-aside>
            <el-container>
                <el-header style="height: 55px">
                    <my-header></my-header>
                </el-header>
                <el-main style="padding: 10px">
                    <el-row>
                        <el-col :span="24">
                            <router-view></router-view>
                        </el-col>
                    </el-row>
                </el-main>
                <el-footer style="height: 40px">
                    <my-footer></my-footer>
                </el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import myAside from './components/Aside';
    import myHeader from './components/Header';
    import myFooter from './components/Footer';
    export default {
        components:{
            myAside, myHeader,myFooter
        },
        name: "App",
        data() {
            return {

            }
        }
    }
</script>