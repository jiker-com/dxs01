<template>
  <!-- <el-button :icon="Search" circle /> -->
  <el-button type="primary" @click="gotolist" >{{ btn.btnToList }}  <el-icon><TopRight /></el-icon> </el-button>
 
  <el-button type="success" :icon="Check" circle />
  <el-button type="info" :icon="Message" circle />
  <el-button type="warning" :icon="Star" circle />
  <el-button type="danger" :icon="Delete" circle />
</template>
 
<script setup>
 import { reactive } from "vue" 
 import {
  Check,
  Delete,
  Edit,
  Message,
  Star,
  TopRight
} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const btn = reactive({
  btnToList:'跳转到列表页'
})
const gotolist = async ()=>{
  router.push('/employee')
}

</script>

<style></style>