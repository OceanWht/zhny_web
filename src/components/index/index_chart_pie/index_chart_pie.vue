<template>
  <el-row >
    <el-col class="index-right-down-down">
      <div id="index_chart" class="index-chart"></div>
    </el-col>
  </el-row>
</template>

<script>
  import {EleResize} from "../../../assets/js/esresize";

  let echarts = require('echarts');
  export default {
    name: "index_chart_pie",
    data() {
      return {
        option: {
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} 元({d}%)"
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius:'95%',
              label: {
                normal: {
                  position: 'inner'
                }
              },
              data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'}

              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        },
      }
    },
    methods: {
      //变颜色
      tableRowClassName: function (row, rowIndex) {
        if (rowIndex / 2 === 0) {
          return 'warning-row'
        } else {
          return 'success-row'
        }

        return '';
      },
      initChart: function () {
        let mychart = echarts.init(document.getElementById('index_chart'));
        let resizeDiv = document.getElementById('index_chart');
        mychart.setOption(this.option);

        let listener = function () {
          mychart.resize();
        }

        EleResize.on(resizeDiv, listener);
      }
    },
    mounted() {
      this.initChart();
    }
  }
</script>

<style scoped>
  .index-right-down-down {
    width: 300px;
    height: 233px;
    background: white;
  }

  .index-chart {
    height: 230px;
  }
</style>
