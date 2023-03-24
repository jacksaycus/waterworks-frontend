import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/components/dashboard/Dashboard'),
    meta: {
      authenticated: false,
    },
  },

  {
    path: '*',
    component: () => import('@/views/NotFound'),
    meta: {
      authenticated: false,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
