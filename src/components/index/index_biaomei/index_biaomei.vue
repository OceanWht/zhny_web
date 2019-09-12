<template>
  <el-row>
    <el-col class="index-right-top">
      <el-row>
        <el-col class="index-right-top-title">
          {{content}}
        </el-col>
      </el-row>
      <el-row>
        <el-col class="index-right-top-num">
          {{num}}
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "index_biaomei",
    data() {
          return {
            num:9999.99,
            content:'当月消耗标煤总量（吨）'
          }
    }
  }
</script>

<style scoped>
  .index-right-top {
    width: 300px;
    height: 233px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: #32CD32;
  }

  .index-right-top-num {
    font-size: 42px;
    color: white;
    margin: 50px 0 0 20px;
    text-align: left;
  }

  .index-right-top-title {
    font-size: 20px;
    color: white;
    margin: 50px 0 0 20px;
    text-align: left;
  }
</style>
