import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

import Layout from './components/layout.vue'
import IndexPage from './pages/index'
import DetailPage from './pages/detail.vue'
import DetailAnaPage from './pages/detail/analysis.vue'
import DetailCouPage from './pages/detail/count.vue'
import DetailForPage from './pages/detail/forecast.vue'
import DetailPubPage from './pages/detail/publish.vue'

import Store from './store/index'
Vue.use(VueRouter)

Vue.prototype.$http = axios

let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path:'/detail',
      component:DetailPage,
      redirect:'/detail/analysis',
      children:[
        {
          path:'analysis',
          component:DetailAnaPage
        },
        {
          path:'count',
          component:DetailCouPage
        },
        {
          path:'forecast',
          component:DetailForPage
        },
        {
          path:'publish',
          component:DetailPubPage
        },
      ]
    }
  ]

})
new Vue({
  el: '#app',
  router,
  store:Store,
  template: '<Layout/>',
  components: {
    Layout
  }
  // render: h => h(App)
})
