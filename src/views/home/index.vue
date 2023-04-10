<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <el-row>
          <el-col :span="8" class="ico" ><img src="../../assets/title.png"  ></el-col>
          <el-col :span="12"><div class="grid-content ep-bg-purple-light" /></el-col>
        </el-row>

      </el-header>
      <el-container class="container" >
        <el-aside class="aside" width="200px" >
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            default-active="2"
            text-color="#fff"
            :router="true"
          >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>员工</span>
            </template>
            <el-menu-item-group >
              <el-menu-item index="employee">员工考核</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>管理</template>
              <el-menu-item index="1-4-1">新加员工</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>

        </el-aside>
        <el-main class="main" >
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import { RouterView } from 'vue-router'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
</script>
<style>
.header{
  height: 100px;
  background-color:cornflowerblue;
}
.container{
  height: 100%;
}

.container .aside{
  width: 260px;
  height: 80vh;
  /* background-color: aqua; */
}
.container .main{
  height: 80vh;
  /* background-color:bisque; */
}
.ico{
  
}
.ico img{
  height: 60px; 
  margin-top: 10px;
}
</style>