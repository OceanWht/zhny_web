<template>
  <el-container :style="{background: 'url('+loginBackGround+')'}">
    <el-header style="margin-top: 5%">
    </el-header>
    <el-main>
      <el-form :model="form" ref="form" :rules="rules" >
        <el-form-item>
          <img src="./static/imgs/login_title.png">
        </el-form-item>
        <el-form-item prop="loginName">
          <el-input placeholder="请输入用户名" v-model="form.loginName"  @keyup.enter.native="login('form')"
                    clearable maxlength="15" style="width: 300px;height: 40px" show-word-limit></el-input>
        </el-form-item>
        <el-form-item prop="loginPass">
          <el-input placeholder="请输入密码" v-model="form.loginPass"
                    @keyup.enter.native="login('form')"
                     show-password style="width: 300px;height: 40px" maxlength="15"></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="form.rememberPass" style="margin-top: 1%"><span style="color: white">记住密码</span>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 300px;height: 40px;" type="primary" round @click="login('form')" ><span
            style="color: white">登录</span>
          </el-button>
        </el-form-item>
      </el-form>
    </el-main>
    <el-footer style="margin-top: 9%">
      <img src="./static/imgs/login_bottom.png">
    </el-footer>
  </el-container>
</template>

<script>
  import loginBackGroud1 from '../../assets/imgs/bg-24.png'

  let iurl = 'http://www.chinadny.com:8008/restful/'
  export default {
    name: "login",
    data() {
      return {
        backGround: Array(),
        loginBackGround: loginBackGroud1,
        timer: '',
        countbg: 0,
        form: {
          loginName: '',
          loginPass: '',
          rememberPass: false
        },
        rules: {
          loginName: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 3, max: 15, message: '长度3-15个字符', trigger: 'blur'}
          ],
          loginPass: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 3, max: 15, message: '长度3-15个字符', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      login: function (formName) {
        console.log(formName);
        let _that = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let name = this.form.loginName;
            let pwd = this.form.loginPass;
            let remember = this.form.rememberPass;

            this.$ajax({
              method: 'post',
              url: 'Account/Login',
              baseURL: iurl,
              responseType: 'json',
              data: {
                name: name,
                pwd: pwd,
                client_id: 'dny_power'
              }
            }).then(function (response) {
              console.log(response, 'response');
              let header = response.data.header;
              let body = response.data.body;
              if (header.status === 0) {
                //塞进缓存
                this.$cookies.set('uid', body[0].uid);
                this.$cookies.set('token', body[0].token);
                this.$cookies.set('userid', body[0].userid);
                this.$cookies.set('username', name);
                this.$cookies.set('pwd', pwd);


                this.$ajax({
                  method: 'post',
                  url: 'Account/SystemMenu',
                  baseURL: iurl,
                  responseType: 'json',
                  headers: {
                    'token': body[0].token,
                    'Content-Type': 'application/json'
                  },
                  data: { userid: body[0].userid },
                }).then(function (res) {
                  let ClientName = res.data.body.ClientName;
                  this.$cookies.set('ClientName', ClientName);
                  this.$message({
                    message: '登录成功',
                    type: 'success'
                  });

                  //页面跳转
                  let path = this.$router.currentRoute.fullPath;
                  this.$router.replace({
                    name: 'Index'
                  })

                }.bind(this)).catch(function (ret) {
                  console.log(ret, 'ret')
                });
              } else {
                this.$message.error('账户或密码错误');
              }

            }.bind(this)).catch(function (ret) {
              console.log(ret, 'ret')
            });

          } else {
            console.log('login error');
            return false;
          }
        });
      }
    },
    mounted() {
    },
    created() {
    },
    beforeDestroy() {
    }
  }
</script>

<style scoped>
</style>
