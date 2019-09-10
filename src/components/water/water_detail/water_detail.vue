<template>
  <el-main class="elmain">
    <el-row class="elrow1">
      <el-col :span="24">
        <h3 class="neirongguanli">
          <i class="iconfont icon-neirongguanli"></i>&nbsp;总体用水
        </h3>
        <hr class="hr1">
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col style="margin-left: -10px" :span="6">
        <el-row style="background-color: #2f8ba2;height: 40px">
          <el-col :span="24">
            <p class="jichukaikuang">
              基础概况
            </p>
          </el-col>
        </el-row>
        <el-row style="background-color: #359cb5;height: 40px">
          <el-col :span="16">
            <p class="zongbiaoshuliang">
              总表数量
            </p>
          </el-col>
          <el-col :span="8">
            <p class="zongbiaoNum">
              123个
            </p>
          </el-col>
        </el-row>
        <el-row style="background-color: #359cb5;height: 40px">
          <el-col :span="16">
            <p class="zongbiaoshuliang">
              标煤折算
            </p>
          </el-col>
          <el-col :span="8">
            <p class="zongbiaoNum">
              123吨
            </p>
          </el-col>
        </el-row>
        <el-row style="background-color: #359cb5;height: 40px">
          <el-col :span="16">
            <p class="zongbiaoshuliang">
              水表路数
            </p>
          </el-col>
          <el-col :span="8">
            <p class="zongbiaoNum">
              123路
            </p>
          </el-col>
        </el-row>
      </el-col>
      <el-col style="margin-left: 13px" :span="6">
        <el-row style="background-color: #c64334;height: 40px">
          <el-col>
            <p class="jichukaikuang">
              用水概况
            </p>
          </el-col>
        </el-row>
        <el-row style="background-color: #dd4a39;height: 40px">
          <el-col :span="16">
            <p class="zongbiaoshuliang">
              本月累计用水量
            </p>
          </el-col>
          <el-col :span="8">
            <p class="zongbiaoNum">
              123m³
            </p>
          </el-col>
        </el-row>
        <el-row style="background-color: #dd4a39;height: 40px">
          <el-col :span="16">
            <p class="zongbiaoshuliang">
              上月总用水量
            </p>
          </el-col>
          <el-col :span="8">
            <p class="zongbiaoNum">
              123m³
            </p>
          </el-col>
        </el-row>
        <el-row style="background-color: #dd4a39;height: 40px">
          <el-col :span="16">
            <p class="zongbiaoshuliang">
              上上月总用水量
            </p>
          </el-col>
          <el-col :span="8">
            <p class="zongbiaoNum">
              123m³
            </p>
          </el-col>
        </el-row>
      </el-col>
      <el-col style="margin-left: 13px;" :span="6">
        <el-row style="background-color: #da8b13;height: 40px">
          <el-col>
            <p class="jichukaikuang">
              用量统计
            </p>
          </el-col>
        </el-row>
        <el-row style="background-color: #f39c12;height: 40px">
          <el-col :span="16">
            <p class="zongbiaoshuliang">
              本月最大用水量
            </p>
          </el-col>
          <el-col :span="8">
            <p class="zongbiaoNum">
              123m³
            </p>
          </el-col>
        </el-row>
        <el-row style="background-color: #f39c12;height: 40px">
          <el-col :span="16">
            <p class="zongbiaoshuliang">
              上月最大用水量
            </p>
          </el-col>
          <el-col :span="8">
            <p class="zongbiaoNum">
              123m³
            </p>
          </el-col>
        </el-row>
        <el-row style="background-color: #f39c12;height: 40px">
          <el-col :span="16">
            <p class="zongbiaoshuliang">
              上上月最大用水量
            </p>
          </el-col>
          <el-col :span="8">
            <p class="zongbiaoNum">
              123m³
            </p>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6" style="margin-left: 13px">
        <el-row style="background-color: #039452;height: 40px">
          <el-col>
            <p class="jichukaikuang">
              异常用水
            </p>
          </el-col>
        </el-row>
        <el-row style="background-color: #01a65a;height: 40px">
          <el-col :span="16">
            <p class="zongbiaoshuliang">
              本年异常用水
            </p>
          </el-col>
          <el-col :span="8">
            <p class="zongbiaoNum">
              123天
            </p>
          </el-col>
        </el-row>
        <el-row style="background-color: #01a65a;height: 40px">
          <el-col :span="16">
            <p class="zongbiaoshuliang">
              昨日异常用水
            </p>
          </el-col>
          <el-col :span="8">
            <p class="zongbiaoNum">
              123条
            </p>
          </el-col>
        </el-row>
        <el-row style="background-color:#01a65a;height: 40px">
          <el-col :span="16">
            <p class="zongbiaoshuliang">
              累计未读告警
            </p>
          </el-col>
          <el-col :span="8">
            <p class="zongbiaoNum">
              123条
            </p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="elrow2">
      <el-col :span="18">
        <el-row>
          <el-col :span="24">
            <h3 class="riyongshuiliang">
              <p>
                <i class="iconfont icon-fenxi"></i>&nbsp;日用水量对比图
              </p>
            </h3>
            <hr class="hr2">
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="22">
            <div id="riyongshuichart" class="riyongshuiChart"></div>
          </el-col>
          <el-col :span="2">
            <el-row>
              <el-col>
                <p class="benyueyongshui">
                  本月用水量
                </p>
                <p class="benyueyongshuiNum">
                  <el-row>
                    <el-col :span="4">
                      <img src="../static/imgs/water-04.png" class="img_third">
                    </el-col>
                    <el-col :span="2" class="elcol-benyueNum">
                      <span class="benyueyongshuiNum_Num">9999.99m³</span>
                    </el-col>
                  </el-row>
                </p>
                <hr class="hr3">
              </el-col>
            </el-row>
            <el-row>
              <el-col>
                <p class="benyueyongshui">
                  上月用水量
                </p>
                <p class="benyueyongshuiNum">
                  <el-row>
                    <el-col :span="4">
                      <img src="../static/imgs/water-04.png" class="img_third">
                    </el-col>
                    <el-col :span="2" class="elcol-benyueNum">
                      <span class="benyueyongshuiNum_Num">9999.99m³</span>
                    </el-col>
                  </el-row>
                </p>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <br/>
        <br/>
        <el-row>
          <el-col :span="24">
            <h3 class="riyongshuiliang">
              <p>
                <i class="iconfont icon-fenxi"></i>&nbsp;月用水量对比图
              </p>
            </h3>
            <hr class="hr2">
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="22">
            <div id="riyongshuichart2" class="riyongshuiChart"></div>
          </el-col>
          <el-col :span="2">
            <el-row>
              <el-col>
                <p class="benyueyongshui">
                  今年用水量
                </p>
                <p class="benyueyongshuiNum">
                  <el-row>
                    <el-col :span="4">
                      <img src="../static/imgs/water-04.png" class="img_third">
                    </el-col>
                    <el-col :span="2" class="elcol-benyueNum">
                      <span class="benyueyongshuiNum_Num">9999.99m³</span>
                    </el-col>
                  </el-row>
                </p>
                <hr class="hr3">
              </el-col>
            </el-row>
            <el-row>
              <el-col>
                <p class="benyueyongshui">
                  去年用水量
                </p>
                <p class="benyueyongshuiNum">
                  <el-row>
                    <el-col :span="4">
                      <img src="../static/imgs/water-04.png" class="img_third">
                    </el-col>
                    <el-col :span="2" class="elcol-benyueNum">
                      <span class="benyueyongshuiNum_Num">9999.99m³</span>
                    </el-col>
                  </el-row>
                </p>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row class="tijian_row">
          <el-col>
            <p style="" class="tijian">
              <i class="iconfont icon-fenxi2"></i>用水体检
            </p>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div id="liquidfill-chart" class="tijianchart"></div>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-button round class="tijianbutton">立即体检</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
  import {EleResize} from "../../../assets/js/esresize";
  import 'echarts-liquidfill/src/liquidFill'

  let echarts = require('echarts')
  export default {
    name: "water_detail",
    methods: {
      handleSelect: function (key, keyPath) {
        console.log(key, keyPath);
      },
      initChart: function () {
        let myChart1 = echarts.init(document.getElementById('riyongshuichart'));
        let div = document.getElementById('riyongshuichart');

        let myChart2 = echarts.init(document.getElementById('riyongshuichart2'));
        let div2 = document.getElementById('riyongshuichart2');

        // 绘制图表
        myChart1.setOption({
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

        let listener = function () {
          myChart1.resize();
        }

        EleResize.on(div, listener);

        // 绘制图表
        myChart2.setOption({
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

        let listener2 = function () {
          myChart2.resize();
        }

        EleResize.on(div2, listener2);

        let liquidfillchart = echarts.init(document.getElementById('liquidfill-chart'));
        let div3 = document.getElementById('liquidfill-chart');
        // 指定图表的配置项和数据
        let option = {
          series: [{
            type: 'liquidFill',
            color: ['#008000', '#fff', '#fff'],
            shape: "pin",
            data: [0.8],
            radius: '100%',
            outline: {
              show: false
            },
            backgroundStyle: {
              borderWidth: 5,
              borderColor: '#fff',
            },
            label: {
              normal: {
                textStyle: {
                  color: '#995B46',
                  insideColor: 'white',
                  fontSize: 30
                },
              }
            }

          }]
        };

        /*  let option= {
            series: [{
              type: 'liquidFill',
              data: [0.6, 0.5, 0.4, 0.3],
              itemStyle: {
                shadowBlur: 0
              },
              outline: {
                borderDistance: 0,
                itemStyle: {
                  borderWidth: 3,
                  borderColor: '#156ACF',
                  shadowBlur: 20,
                }
              },
              label: {
                normal: {
                  textStyle: {
                    color: 'red',
                    insideColor: 'yellow',
                    fontSize: 40
                  }
                }
              },
            }]
          }*/

        // 使用刚指定的配置项和数据显示图表。
        liquidfillchart.setOption(option);
        let listener3 = function () {
          liquidfillchart.resize();
        }

        EleResize.on(div3, listener3);
      }
    },
    mounted() {
      this.initChart();
    }
  }
</script>

<style scoped lang="css">
  .tijian_row {
    background-color: #dee9f0;
    height: 40px;
    margin-top: 15px;
    margin-left: 15px
  }

  .tijian {
    font-size: 18px;
    margin-top: 7px
  }

  .tijianchart {
    width: 100%;
    height: 300px;
    margin-left: 30px
  }

  .tijianbutton {
    margin-left: 60px;
    margin-top: 50px;
    background-color: green;
    color: white;
    width: 200px
  }

  .hr3 {
    margin-left: -100px;
    opacity: 0.5;
    width: 200px
  }

  .neirongguanli {
    text-align: left;
    margin-top: -19px;
    margin-left: 5px;
    font-size: 16px;
  }

  .jichukaikuang {
    text-align: center;
    font-size: 18px;
    margin-top: 6px;
    color: white
  }

  .elmain {
    background: white;
    margin: -5px -13px 0 0;
  }

  .elrow1 {
    margin-left: -15px
  }

  .elrow2 {
    margin: 50px 0 0 -20px
  }

  .hr1 {
    border: 2px green solid;
    margin-left: 5px
  }

  .hr2 {
    border: 2px green solid;
    margin-left: 10px;
    margin-right: 2px;
  }

  .zongbiaoshuliang {
    text-align: left;
    font-size: 15px;
    margin: 6px 0 0 10px;
    color: white
  }

  .zongbiaoNum {
    text-align: right;
    font-size: 15px;
    margin: 10px 10px;
    color: white
  }

  .riyongshuiliang {
    text-align: left;
    font-size: 16px;
    margin-top: -37px;
    margin-left: 10px;
  }

  .riyongshuiChart {
    max-width: 100%;
    height: 280px;
    margin-left: -60px;
    margin-top: -25px;
  }

  .benyueyongshui {
    margin-left: -100px;
    font-size: 20px;
    text-align: left
  }

  .benyueyongshuiNum {
    margin-left: -100px;
    text-align: left
  }

  .img_third {
    width: 32px;
    height: 32px;
  }

  .elcol-benyueNum {
    margin-top: 2px
  }

  .benyueyongshuiNum_Num {
    color: green;
    font-size: 24px
  }
</style>
