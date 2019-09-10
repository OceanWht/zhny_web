<template>
  <el-container style="width: 100%;height: 100%">
    <my-header></my-header>
    <el-main style="background-color: white">
      <el-container>
        <waterMenuTree/>
       <!-- 这个router-view一定要加，否则点击导航栏右侧页面不跳转-->
       <router-view/>
      </el-container>
    </el-main>
    <el-footer style="height: 0px"></el-footer>
  </el-container>
</template>

<script>
  export default {
    name: "water_index",
  }
</script>

<style scoped>

</style>
