import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

let router=new VueRouter()

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
