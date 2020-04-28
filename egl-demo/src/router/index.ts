import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/newsList',
    meta: {
      title: '旁听素材管理',
      icon: 'example'
    },
    children: [
      {
        path: '/newsList',
        name: 'newsList',
        component: () => import(/* webpackChunkName: "about" */ '../views/NewsList.vue')
      },
      {
        path: '/tools',
        name: 'tools',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Tools.vue')
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import(/* webpackChunkName: "about" */ '../views/Mine.vue')
      }
    ]
  },
  {
    path: '/hotPoster',
    name: 'hotPoster',
    component: () => import(/* webpackChunkName: "about" */ '../views/HotPoster.vue')
  },
  {
    path: '/marketingPoster',
    name: 'marketingPoster',
    component: () => import(/* webpackChunkName: "about" */ '../views/MarketingPoster.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
