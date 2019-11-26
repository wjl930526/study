import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '../layout/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/newsList',
    component: Layout,
    children: [
      {
        path: '/newsList',
        name: 'newsList',
        component: () => import('../views/NewsList.vue'),
      },
      {
        path: '/tools',
        name: 'tools',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/Tools.vue'),
      },
      {
        path: '/mine',
        name: 'mine',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/Mine.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
