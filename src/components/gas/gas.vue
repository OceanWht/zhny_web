<template>
  <div @click="toGas">
    <el-row style="background-color: white;">
      <el-col :span="3" class="water-index">
        <el-row type="flex">
          <el-col :span="1">
            <img src="./static/imgs/krq-06.png" class="img-water">
          </el-col>
          <el-col :span="16" style="margin-left: 65px">
            <el-row>
              <el-col><h3>当月用气量（m³）</h3></el-col>
            </el-row>
            <el-row>
              <el-col><h1>123 </h1></el-col>
            </el-row>
            <el-row>
              <el-col>
                <hr>
                <h4>上月用气量：
                  <label>123</label></h4>
              </el-col>
            </el-row>
          </el-col>
          <el-col>
            <img class="dian_bj" src="./static/imgs/krq-08.png">
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="1" style="margin-left: 1%;">
        <el-row style="margin-top: 100%;">
          <el-col>
            <img src="./static/imgs/krq-09.png" class="img_second">
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <h5>日用气量</h5>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="14">
        <div id="gaschart" class="gaschart"></div>
      </el-col>
      <el-col :span="2" >
        <el-row>
          <el-col  class="gas_title_col"><span class="gas_title">当月最大用气量</span></el-col>
        </el-row>
        <el-row>
          <el-col  class="gas_time"><span class="krq-10-size">2019-08-01</span></el-col>
        </el-row>
        <el-row>
          <el-col :span="6"  class="krq-10">
            <img src="./static/imgs/krq-10.png" class="img_third">
          </el-col>
          <el-col :span="10" class="gas_num">
            <span class="content_gas">123</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col class="gas_title_col"><span  class="gas_title">上月最大用气量</span></el-col>
        </el-row>
        <el-row>
          <el-col class="gas_time"><span class="krq-10-size">2019-09-01</span></el-col>
        </el-row>
        <el-row>
          <el-col :span="6"   class="krq-10">
            <img src="./static/imgs/krq-10.png" class="img_third">
          </el-col>
          <el-col :span="10" class="gas_num">
            <span  class="content_gas">123</span>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>

</template>

<script>
  import {EleResize} from "../../assets/js/esresize";

  let echarts = require('echarts');
  export default {
    name: "air",
    mounted() {
      this.initChart();//要在mounted函数里初始化，如果需要得话，因为要保证dom元素已经挂载到页面中
    },
    methods: {
      toGas:function(){
        alert("页面跳转");
      },
      initChart: function () {
        let mychart = echarts.init(document.getElementById('gaschart'));
        // 绘制图表
        mychart.setOption({
          /*title: {
            text: 'ECharts 入门示例'
          },*/
          color: ['#993300'],
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
       /* 方法一，使用window.onresize，优点可根据窗口大小自动调整，但是缺点：1.多个
        图表自适应写法比较麻烦，如：
        let myChart1 = echarts.init(document.getElementById(dom1))
        let myChart2 = echarts.init(document.getElementById(dom2))
        window.onresize = function () {
          myChat1.resize()
          myChat2.resize()
        }
        2.多个Vue页面有onresize方法时，会被覆盖，
        3.当Vue页面由路由跳转到下一页面时，上一个页面得onresize方法还会继续执行，（这个时候下一个页面已经不需要执行onresize方法了，
      ，当图表过多时会造成页面卡顿）*/
        /*let mychart = echarts.init(document.getElementById(dom))
        window.onresize = function () {
          mychart.resize()
        }*/

      /*方法二,使用 window.addEventListener 可以根据窗口大小实现自适应；
        将图表方法封装以后，只需要执行一遍就可以实现多个图表的自适应；
        不会被覆盖   缺点：当vue页面路由跳转到下一个页面时，上一个页面的onresize方法会继续执行
      【造成这个问题的原因是因为vue是单页面应用，echarts中的操作都是基于window，
      当然也可以使用window.removeEventListener在下一个页面删除绑定的方法】*/
       /*window.addEventListener('resize',()=>{
         mychart.resize();
       })*/

       //所以为了更好得效果，用EleResize，实现div使用onresize方法
        let resizeDive = document.getElementById('gaschart');
        let listener = function () {
          mychart.resize();
        }

        EleResize.on(resizeDive,listener);
      }
    }
  }
</script>

<style scoped>
  .water-index {
    background-color: #993300;
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

  .img_second{
    width: 45px;
    height: 45px;
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

  .content_gas{
    font-size: 18px;color: #993300
  }

  .gas_time{
    margin-left: -12%;margin-top: 5%
  }

  .krq-10{
    margin-left: 12%;margin-top: 5%;

  }

  .img_third{
    width: 32px;
    height: 32px;
  }

  .krq-10-size{
    font-size: 14px;
  }

  .gas_num{
    margin-top: 13px;
  }

  .gaschart{
    width: 100%;height: 233px;
  }

  .gas_title{
    font-size: 16px;
  }

  .gas_title_col{
    margin-top: 10%;
  }
</style>
