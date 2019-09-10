// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icon/iconfont.css'
import VueCookies from 'vue-cookies'
import 'babel-polyfill' /*兼容IE*/
import Axios from 'axios'
import Header from '@/components/pageheader/pageheader'
import water from '@/components/water/water'
import gas from '@/components/gas/gas'
import air from '@/components/air/air'
import elec from '@/components/elec/elec'
import biaomei from '@/components/index_biaomei/index_biaomei'
import biaomeiTable from '@/components/index_biaomei_table/index_biaomei_table'
import indexFee from '@/components/index_fee/index_fee'
import indexChartPie from '@/components/index_chart_pie/index_chart_pie'
import waterMenuTree from '@/components/water/menu_tree/menutree'
import waterdetail from '@/components/water/water_detail/water_detail'
import 'lib-flexible'   /*将阿里自适应插件全局注册得到Vue*/

/*将头部那个组件封装然后注册到Vue实例中*/
Vue.component('my-header',Header)
Vue.component('water',water)
Vue.component('gas',gas)
Vue.component('air',air)
Vue.component('elec',elec)
Vue.component('biaomei',biaomei)
Vue.component('biaomeiTable',biaomeiTable)
Vue.component('indexFee',indexFee)
Vue.component('indexChartPie',indexChartPie)
Vue.component('waterMenuTree',waterMenuTree)
Vue.component('waterdetail',waterdetail)

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
