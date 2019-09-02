<template>
  <el-container style="width: 100%;height: 100%">
    <my-header></my-header>
    <el-main>
      <el-row>
        <el-col :span="20">
          <elec/>
          <br>
          <water/>
          <br>
          <gas/>
          <br>
          <air/>
        </el-col>
      </el-row>
    </el-main>
    <el-footer height="0px">
    </el-footer>
  </el-container>
</template>

<script>

  export default {
    name: "index",
    data() {
        return {
        }
    },
    methods:{

    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>
