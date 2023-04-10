<template>
   <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="ID"  />
    <el-table-column prop="username" label="员工姓名" />
    <el-table-column prop="role" label="角色" />
    <el-table-column prop="team" label="团队" />
    <el-table-column prop="quarter" label="考核季度" />
    <el-table-column prop="ranking" label="排名" />
    <el-table-column  label="操作" >
      <template #default="scope">
          <el-button size="small" type="warning">修改</el-button >
          <el-button size="small" type="danger">删除</el-button>
        </template>
      </el-table-column>
  </el-table>

</template>
 
<script setup>
 import { ref,onMounted } from "vue" 

 import { userlist } from '@/api/userRequest'

//  import {useListStore} from '../../stores/listdata'
//  const listStore = useListStore()
//  const tableData =ref(listStore.listdata)

  const tableData = ref([])

 onMounted( async ()=>{
   const a =  await userlist()
  //  console.log(a);
  tableData.value =  a.data 
 })

</script>

<style></style>