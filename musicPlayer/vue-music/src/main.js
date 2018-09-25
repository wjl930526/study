// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
// Vue.config.productionTip = false

import 'common/stylus/index.styl'

fastclick.attach(document.body)

Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: require('common/image/default.png'),
  loading: require('common/image/default.png'),
  attempt: 1
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
