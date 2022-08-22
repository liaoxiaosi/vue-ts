<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <el-container>
      <el-header height="'60px">
        <el-row :gutter="20">
          <el-col :span="4">
            <div class="grid-content ep-bg-purple" /><img class="logo" alt="Vue logo" src="../assets/logo.png">
          </el-col>
          <el-col :span="16">
            <div class="grid-content ep-bg-purple" />
            <h2>后台系统</h2>
          </el-col>
          <el-col :span="4">
            <div class="grid-content ep-bg-purple" />
            <el-button type="primary" style="margin-top: 20px;">timi</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <!-- 开启路由：router -->
          <el-menu router active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
            :default-active="active" text-color="#fff" @open="handleOpen" @close="handleClose">
            <el-menu-item v-for="i in list" :key="i.path" :index="i.path">
              <el-icon>
                <icon-menu />
              </el-icon>
              <span>{{i.meta.title}}</span>
            </el-menu-item>
            
          </el-menu>
        </el-aside>
        <el-main>
          <!-- 添加路由渲染根节点 -->
          <router-view></router-view> 
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  //import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
 import { useRouter,useRoute } from 'vue-router'

  export default defineComponent({
    name: 'HomeView',
    components: {
      //  HelloWorld,
    },
    setup(){
      const router = useRouter()  //useRouter对象
      // const list = router.getRoutes() //获取到路由列表，所有路由实例
      const route = useRoute() //获取到当前路由
      const list = router.getRoutes().filter(item=>item.meta.isShow) //只显示 meta中 isShow存在的路由
      console.log('路由列表',list)

     console.log('获取到当前路由',route.path)

      //active 当前路由
      return {
        list,  //将数据暴露出去
        active:route.path //当前路由
      }
    }
  });
</script>
<style lang="scss" scoped>
  .logo {
    height: 60px;
  }

  h2 {
    line-height: 60px;
    font-size: 18px;
    color: #fff;
    text-align: center;
  }

  .el-header {
    background-color: #545c64;
  }


  .el-aside {
    .el-menu {
      height: calc(100vh - 60px);
      background-color: #545c64;
      /* background-color: #2a7dcf; */
    }
  }
</style>