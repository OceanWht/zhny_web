// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueCookies from 'vue-cookies'
import 'babel-polyfill'
import Axios from 'axios'
import Header from '@/components/pageheader/pageheader'
import water from '@/components/water/water'
import gas from '@/components/gas/gas'
import air from '@/components/air/air'
import elec from '@/components/elec/elec'
import 'lib-flexible'   /*将阿里自适应插件全局注册得到Vue*/

/*将头部那个组件封装然后注册到Vue实例中*/
Vue.component('my-header',Header)
Vue.component('water',water)
Vue.component('gas',gas)
Vue.component('air',air)
Vue.component('elec',elec)

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueCookies)
Vue.prototype.$ajax = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
