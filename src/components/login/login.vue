<template>
  <el-container :style="{background: 'url('+loginBackGround+')'}">
    <el-header style="margin-top: 5%">
    </el-header>
    <el-main>

      <el-form>
        <el-form-item>
          <img src="./static/imgs/login_title.png">
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入用户名" v-model="form.loginName"
                    clearable style="width: 300px;height: 40px" maxlength="30" show-word-limit></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入密码" v-model="form.loginPass"
                    clearable show-password style="width: 300px;height: 40px" maxlength="10"></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="form.rememberPass" style="margin-top: 1%"><span style="color: white">记住密码</span>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 300px;height: 40px;" type="primary" round @click="login"><span style="color: white">登录</span>
          </el-button>
        </el-form-item>
      </el-form>
    </el-main>
    <el-footer style="margin-top: 10%">
    </el-footer>
  </el-container>
</template>

<script>
  import loginBackGroud1 from '../../assets/imgs/bg-24.png'
  import loginBackGroud2 from '../../assets/imgs/bg-25.png'
  import loginBackGroud3 from '../../assets/imgs/bg-26.png'

  let iurl = 'http://energy.chinadny.com:8008/restful/'
  export default {
    name: "login",
    data() {
      return {
        backGround: Array(),
        loginBackGround: loginBackGroud1,
        timer: '',
        countbg:0,
        form: {
          loginName: '',
          loginPass: '',
          rememberPass: false
        }
      }
    },
    methods:{
      login:function () {

      }
    },
    mounted() {
    },
    created() {
    },
    beforeDestroy() {
      clearInterval(this.timer)
    }
  }
</script>

<style scoped>

</style>
