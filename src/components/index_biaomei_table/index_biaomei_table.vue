<template>
  <!--<el-row >
    <el-col class="index-right-mid1">-->
      <el-table :data="tableData" class="index_biaomei_table1" stripe max-height="230px">
        <el-table-column prop="name" label="各能源消耗标煤总量明细" width="180px"></el-table-column>
        <el-table-column prop="date"></el-table-column>
      </el-table>
   <!-- </el-col>
  </el-row>-->
</template>

<script>
  export default {
    name: "index_biaomei_table",
    data() {
      return {
        tableData: [{
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
      }
    }
  }
</script>

<style scoped>
  .index_biaomei_table1 {
  /*  height: 233px;*/
  }
</style>
