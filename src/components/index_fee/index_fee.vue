<template>
  <el-row>
    <el-col class="index-right-down">
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
    name: "index_fee",
    data() {
      return {
        content: ' 当月消耗能源费用总计（万元）',
        num: 9999.99
      }
    }
  }
</script>

<style scoped>
  .index-right-down {
    width: 300px;
    height: 233px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: #38b37c;
  }

  .index-right-top-title {
    font-size: 20px;
    color: white;
    margin: 50px 0 0 20px;
    text-align: left;
  }

  .index-right-top-num {
    font-size: 42px;
    color: white;
    margin: 50px 0 0 20px;
    text-align: left;
  }
</style>
