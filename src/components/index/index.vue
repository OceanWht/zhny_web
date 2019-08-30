<template>
  <el-container style="width: 100%;height: 100%">
    <my-header></my-header>
    <el-main>
      <el-row >
        <el-col :span="8"  class="water-index">
          <el-row type="flex">
            <el-col :span="1">
              <img src="./static/imgs/water-05.png"  class="img-water">
            </el-col>
            <el-col :span="16" style="margin-left: 10%">
              <el-row>
                <el-col> <h3>当月用水量（m³）</h3></el-col>
              </el-row>
              <el-row>
                <el-col> <h1>123 </h1></el-col>
              </el-row>
              <el-row>
                <el-col>
                  <hr width="170px">
                  <p >上月用水量：
                    <label>123</label></p>
                </el-col>
              </el-row>
            </el-col>
            <el-col>
              <img class="dian_bj" src="./static/imgs/water-01.png">
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>footer</el-footer>
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
  .water-index{
    background-color: #008000;
   /* background: url("./static/imgs/water-05.png") center no-repeat;
    background-size: cover;  背景图片填充*/
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    width: 400px;
    margin-left: 2%;
  }

  .img-water{
    margin-top: 350%;
    margin-left: -320%;
  }

  .dian_bj{
    margin-top: 20%;
    margin-left: -150%;
  }
  p{
    font-size: 16px;color: white;text-align: left;
  }
  h1{
    font-size: 30px;color: white;text-align: left;
  }
  h3{
    font-size: 20px;color: white;margin-top: 15%;text-align: left;
  }
</style>
