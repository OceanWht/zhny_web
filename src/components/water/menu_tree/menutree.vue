<template>
  <el-aside style="margin: -5px 0 0 -25px;width: 200px;height: 650px;overflow-x: hidden">
    <el-scrollbar style="height: 100%;overflow-x: hidden;">
      <el-menu text-color="#000000" :default-active="$route.path" @select="handleSelect" router>
        <el-menu-item  class="el-menu-item1" index="/water/index/detail">
          <i class="iconfont icon-kanban" style="margin-left: -80px"></i>
          <span slot="title" style="font-size: 14px">用水概览</span>
        </el-menu-item>
        <!--  </div>-->
        <el-menu-item index="2" class="el-menu-item2">
          <i class="iconfont icon-zhujiexiantu" style="margin-left: -93px"></i>
          <span slot="title" style="font-size: 14px">管网图</span>
        </el-menu-item>
        <el-submenu index="3">
          <template slot="title">
            <i class="iconfont icon-icon-humidity" style="margin-left: -85px"></i>
            <span slot="title" style="font-size: 14px">分路用水</span>
          </template>
          <el-menu-item index="/water/index/realtime" class="el-menu-item3">
            <i class="el-icon-tickets"></i>
            <span slot="title" style="font-size: 14px">实时用水数据</span>
          </el-menu-item>
          <el-menu-item index="3-2" class="el-menu-item4">
            <i class="el-icon-tickets" style="margin-left: -15px"></i>
            <span slot="title" style="font-size: 14px;">日用水数据</span>
          </el-menu-item>
          <el-menu-item index="3-3" class="el-menu-item5">
            <i class="el-icon-tickets" style="margin-left: -15px"></i>
            <span slot="title" style="font-size: 14px">月用水数据</span>
          </el-menu-item>
          <el-menu-item index="3-4" class="el-menu-item6">
            <i class="el-icon-tickets" style="margin-left: -15px"></i>
            <span slot="title" style="font-size: 14px">年用水数据</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="iconfont icon-fenxi4" style="margin-left: -85px"></i>
            <span slot="title" style="font-size: 14px">用水分析</span>
          </template>
          <el-menu-item index="4-1" class="el-menu-item7">
            <i class="el-icon-tickets" style="margin-left: -30px"></i>
            <span slot="title" style="font-size: 14px">同比环比</span>
          </el-menu-item>
          <el-menu-item index="4-2" class="el-menu-item8">
            <i class="el-icon-tickets" style="margin-left: -30px"></i>
            <span slot="title" style="font-size: 14px">对比分析</span>
          </el-menu-item>
          <el-menu-item index="4-3" class="el-menu-item9">
            <i class="el-icon-tickets" style="margin-left: -5px"></i>
            <span slot="title" style="font-size: 14px">单位产值分析</span>
          </el-menu-item>
          <el-menu-item index="4-4" class="el-menu-item10">
            <i class="el-icon-tickets" style="margin-left: -30px"></i>
            <span slot="title" style="font-size: 14px">水费分析</span>
          </el-menu-item>
          <el-menu-item index="4-5" class="el-menu-item11">
            <i class="el-icon-tickets" style="margin-left: -30px"></i>
            <span slot="title" style="font-size: 14px">标煤分析</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="iconfont icon-icon-ml" style="margin-left: -110px"></i>
            <span slot="title" style="font-size: 14px">告警</span>
          </template>
          <el-menu-item index="5-1" class="el-menu-item12">
            <i class="el-icon-tickets" style="margin-left: -30px"></i>
            <span slot="title" style="font-size: 14px">越限告警</span>
          </el-menu-item>
          <el-menu-item index="5-2" class="el-menu-item13">
            <i class="el-icon-tickets" style="margin-left: -30px"></i>
            <span slot="title" style="font-size: 14px">趋势告警</span>
          </el-menu-item>
          <el-menu-item index="5-3" class="el-menu-item14">
            <i class="el-icon-tickets" style="margin-left: -30px"></i>
            <span slot="title" style="font-size: 14px">限值设置</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <i class="iconfont icon-baobiaobiaoweiguanli" style="margin-left: -85px"></i>
            <span slot="title" style="font-size: 14px">用水报表</span>
          </template>
          <el-menu-item index="6-1" class="el-menu-item15">
            <i class="el-icon-tickets" style="margin-left: -30px"></i>
            <span slot="title" style="font-size: 14px">示数日报</span>
          </el-menu-item>
          <el-menu-item index="6-2" class="el-menu-item16">
            <i class="el-icon-tickets" style="margin-left: -30px"></i>
            <span slot="title" style="font-size: 14px">示数月报</span>
          </el-menu-item>
          <el-menu-item index="6-3" class="el-menu-item17">
            <i class="el-icon-tickets" style="margin-left: -30px"></i>
            <span slot="title" style="font-size: 14px">用水日报</span>
          </el-menu-item>
          <el-menu-item index="6-4" class="el-menu-item18">
            <i class="el-icon-tickets" style="margin-left: -30px"></i>
            <span slot="title" style="font-size: 14px">用水月报</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="7" class="el-menu-item19">
          <i class="iconfont icon-jifei" style="margin-left: -85px"></i>
          <span slot="title" style="font-size: 14px">计费方案</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>

  </el-aside>
</template>

<script>
  export default {
    name: "menutree",
    methods: {
      handleSelect: function (key, keyPath) {
        console.log(key, 'key');
        console.log(keyPath,'keyPath');
      },
    }
  }
</script>

<style scoped lang="stylus">
  .el-scrollbar .el-scrollbar__wrap {
    overflow-x: hidden;
  }

  .el-submenu__title:focus, .el-submenu__title:hover {
    outline: 0;
    background-color: #008000
  }

  /*完美解决 选中变色问题*/
  .el-menu-item.is-active {
    color: #ffffff;
    background-color: #008000;
  }

  .el-menu-item1:hover {
    background-color: green;

    i {
      color: white;
    }

    span {
      color: white;
    }
  }

  .el-menu-item1:hover {
    background-color: green;

    i {
      color: white;
    }

    span {
      color: white;
    }
  }

  .el-menu-item2:hover {
    background-color: green;

    i {
      color: white;
    }

    span {
      color: white;
    }
  }

  .el-menu-item3:hover {
    background-color: green;

    i {
      color: white;
    }

    span {
      color: white;
    }
  }

  .el-menu-item4:hover {
    background-color: green;

    i {
      color: white;
    }

    span {
      color: white;
    }
  }

  .el-menu-item5:hover {
    background-color: green;

    i {
      color: white;
    }

    span {
      color: white;
    }
  }

  .el-menu-item6:hover {
    background-color: green;

    i {
      color: white;
    }

    span {
      color: white;
    }
  }

  .el-menu-item7:hover {
    background-color: green;

    i {
      color: white;
    }

    span {
      color: white;
    }
  }

  .el-menu-item8:hover {
    background-color: green;

    i {
      color: white;
    }

    span {
      color: white;
    }
  }

  .el-menu-item9:hover {
    background-color: green;

    i {
      color: white;
    }

    span {
      color: white;
    }
  }

  .el-menu-item10:hover {
    background-color: green;

    i {
      color: white;
    }

    span {
      color: white;
    }
  }

  .el-menu-item11:hover {
    background-color: green;

    i {
      color: white;
    }

    span {
      color: white;
    }
  }

  .el-menu-item12:hover {
    background-color: green;

    i {
      color: white;
    }

    span {
      color: white;
    }
  }

  .el-menu-item13:hover {
    background-color: green;

    i {
      color: white;
    }

    span {
      color: white;
    }
  }

  .el-menu-item14:hover {
    background-color: green;

    i {
      color: white;
    }

    span {
      color: white;
    }
  }

  .el-menu-item15:hover {
    background-color: green;

    i {
      color: white;
    }

    span {
      color: white;
    }
  }

  .el-menu-item16:hover {
    background-color: green;

    i {
      color: white;
    }

    span {
      color: white;
    }
  }

  .el-menu-item17:hover {
    background-color: green;

    i {
      color: white;
    }

    span {
      color: white;
    }
  }

  .el-menu-item18:hover {
    background-color: green;

    i {
      color: white;
    }

    span {
      color: white;
    }
  }

  .el-menu-item19:hover {
    background-color: green;

    i {
      color: white;
    }

    span {
      color: white;
    }
  }
</style>
