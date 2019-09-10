import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Index from '@/components/index/index'
import WaterDetail from '@/components/water/water_detail/water_detail'
import WaterIndex from '@/components/water/water_index/water_index'
import WaterRealtime from '@/components/water/water_realtime/water_realtime'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/index', //少加了个 ‘/’，导致刷新变白，坑坑
      name:'Index',
      component:Index
    },
    {
      path:'/water/index',
      name:'WaterIndex',
      component:WaterIndex,
      children:[
        {
          path:'detail',
          name:'WaterDetail',
          component:WaterDetail
        },
        {
          path:'realtime',
          name:'WaterRealtime',
          component:WaterRealtime
        }
      ]
    }
  ]
})
