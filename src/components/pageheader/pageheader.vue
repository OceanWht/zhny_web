<template>
  <el-header class="layui-logo">
    <el-row>
      <el-col :span="12" style="margin-top: 0.5%">
        <label style="color: #ffffff;">{{ClientName}}</label> <label style="color: #ffffff">·综合能源管理系统</label>
      </el-col>
      <el-col :span="1" :offset="9" style="margin-top: 0.8%;">
        <span class="welcome">欢迎登录</span>
      </el-col>
      <el-col :span="1" style="margin-top: 0.8%;width: 45px">
        <!--<el-avatar :size="30" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    class="login_avatar"></el-avatar>-->
        <img src="./static/imgs/touxiang-13.png" class="login_avatar">
      </el-col>
      <el-col :span="1" style="margin-top: 0.8%;">
        <el-dropdown @command="loginOut">
          <span class="loginName">{{loginName}}</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="1">安全退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
  export default {
    name: "pageheader",
    data() {
      return {
        ClientName: this.$cookies.get('ClientName'),
        loginName: this.$cookies.get('username'),
      }
    },
    methods: {
      loginOut: function (command) {
        this.$router.replace({
          name:'Login'
        });
      }
    }
  }
</script>

<style scoped>
  .layui-logo {
    position: relative;
    z-index: 1002;
    left: -8px;
    width: 100%;
    height: 100%;
    overflow: auto;
    font-weight: 500;
    background-repeat: no-repeat;
    background-image: url('./static/imgs/top-bj-12.png');
    font-size: 26px;
    text-align: left;
  }

  .welcome{
    font-size: 14px;font-weight: 200;color: #ffffff
  }

  .loginName{
    font-size: 14px;font-weight: 200;color: #ffffff
  }

  .login_avatar{
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
</style>
