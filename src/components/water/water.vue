<template>
  <div @click="toWater">
    <el-row style="background-color: white;">
      <el-col :span="3" class="water-index">
        <el-row type="flex">
          <el-col :span="1">
            <img src="./static/imgs/water-05.png" class="img-water">
          </el-col>
          <el-col :span="16" style="margin-left: 65px">
            <el-row>
              <el-col><h3>当月用水量（m³）</h3></el-col>
            </el-row>
            <el-row>
              <el-col><h1>123 </h1></el-col>
            </el-row>
            <el-row>
              <el-col>
                <hr>
                <h4>上月用水量：
                  <label>123</label></h4>
              </el-col>
            </el-row>
          </el-col>

          <el-col>
            <img class="dian_bj" src="./static/imgs/water-01.png">
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="1" style="margin-left: 1%;">
        <el-row style="margin-top: 100%;">
          <el-col>
            <img src="./static/imgs/water-02.png" class="img_second">
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <h5>日用水量</h5>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="14">
        <div id="waterchart" class="gaschart"></div>
      </el-col>
      <el-col :span="2">
        <el-row>
          <el-col class="gas_title_col"><span class="gas_title">当月最大用水量</span></el-col>
        </el-row>
        <el-row>
          <el-col class="gas_time"><span class="krq-10-size">2019-08-01</span></el-col>
        </el-row>
        <el-row>
          <el-col :span="6" class="krq-10">
            <img src="./static/imgs/water-04.png" class="img_third">
          </el-col>
          <el-col :span="10" class="gas_num">
            <span class="content_gas">123</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col class="gas_title_col"><span class="gas_title">上月最大用水量</span></el-col>
        </el-row>
        <el-row>
          <el-col class="gas_time"><span class="krq-10-size">2019-09-01</span></el-col>
        </el-row>
        <el-row>
          <el-col :span="6" class="krq-10">
            <img src="./static/imgs/water-04.png" class="img_third">
          </el-col>
          <el-col :span="10" class="gas_num">
            <span class="content_gas">123</span>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {EleResize} from "../../assets/js/esresize.js";

  let echarts = require('echarts');
  export default {
    name: "water",
    data() {
      return {}
    },
    mounted() {
      this.initChart();//要在mounted函数里初始化，如果需要得话，因为要保证dom元素已经挂载到页面中
    },
    methods: {
      toWater: function () {
          this.$router.push({
            name:'WaterDetail' //这里使用detail不适用waterindex，是因为menu里默认需要展示deatil组件，:default-active="$route.path"对应这里
          });
      },
      initChart: function () {
        let mychart = echarts.init(document.getElementById('waterchart'));
        let resizeDiv = document.getElementById('waterchart');
        // 绘制图表
        mychart.setOption({
          color: ['#008000'],
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
        let linstener = function () {
          console.log('resize');
          mychart.resize();
        };

        EleResize.on(resizeDiv, linstener);
      }
    }
  }
</script>

<style scoped>
  .water-index {
    background-color: #008000;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    width: 25%;
    margin-left: 1%;
  }

  .img-water {
    margin-top: 65px;
    margin-left: -30px;
    width: 95px;
    height: 96px;
  }

  .dian_bj {
    margin: 60px 0px 0px -300px;
    width: 120px;
    height: 120px;
  }

  .img_third {
    width: 32px;
    height: 32px;
  }

  p {
    font-size: 16px;
    color: white;
    text-align: left;
  }

  h1 {
    font-size: 30px;
    color: white;
    text-align: left;
  }

  h3 {
    font-size: 20px;
    color: white;
    margin-top: 15%;
    text-align: left;
  }

  hr {
    width: 170px;
  }


  h4 {
    color: white;
    margin-top: 15%;
    text-align: left;
  }

  .img_second {
    width: 45px;
    height: 45px;
  }

  .content_gas {
    font-size: 18px;
    color: #008000
  }

  .gas_time {
    margin-left: -12%;
    margin-top: 5%
  }

  .krq-10 {
    margin-left: 12%;
    margin-top: 5%;
  }

  .krq-10-size {
    font-size: 14px;
  }

  .gas_num {
    margin-top: 13px;
  }

  .gaschart {
    min-width: 100%;
    min-height: 233px;
  }

  .gas_title {
    font-size: 16px;
  }

  .gas_title_col {
    margin-top: 10%;
  }
</style>
