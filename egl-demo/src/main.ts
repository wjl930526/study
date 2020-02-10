import 'amfe-flexible';
import 'babel-polyfill';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Lazyload } from 'vant';

Vue.use(Lazyload, {
  lazyComponent: true
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
