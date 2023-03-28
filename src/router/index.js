import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/components/aio/dashboard/Dashboard'),
  },
  {
    path: '/pms',
    name: 'pmsDashboard',
    component: () => import('@/components/pms/dashboard/Dashboard'),
  },
  {
    path: '/monitor4',
    name: 'monitor4',
    component: () => import('@/components/pms/component/Monitor4'),
  },
  {
    path: '*',
    component: () => import('@/views/NotFound'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
