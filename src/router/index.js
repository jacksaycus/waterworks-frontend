import Vue from 'vue';
import VueRouter from 'vue-router';
import ReceivingAlgorithm from '@/components/aio/receiving/ReceivingAlgorithm' 
import CgAlgorithm from '@/components/aio/coagulants/CgAlgorithm'
import CgSimulation from '@/components/aio/coagulants/CgSimulation'
import MtccAlgorithm from '@/components/aio/mixingTank/MtccAlgorithm'
import SedimentationAlgorithm from '@/components/aio/sedimentation/SedimentationAlgorithm'
import FilterAlgorithm from '@/components/aio/filter/FilterAlgorithm'
import OzoneAlgorithm from '@/components/aio/ozone/OzoneAlgorithm'
import GACAlgorithm from '@/components/aio/gac/GACAlgorithm'
import DisinfectionAlgorithm from '@/components/aio/disinfection/DisinfectionAlgorithm'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/components/aio/dashboard/Dashboard'),
  },
  { path: '/receivingAlgorithm', component: ReceivingAlgorithm, name: 'ReceivingAlgorithm' },
  { path: '/cgAlgorithm', component: CgAlgorithm, name: 'CgAlgorithm' },
  { path: '/cgSimulation', component: CgSimulation, name: 'CgSimulation' },
  { path: '/mtccAlgorithm', component: MtccAlgorithm, name: 'MtccAlgorithm'},
  { path: '/sedimentationAlgorithm', component: SedimentationAlgorithm, name: 'SedimentationAlgorithm' },
  { path: '/filterAlgorithm', component: FilterAlgorithm, name: 'FilterAlgorithm' },
  { path: '/ozoneAlgorithm', component: OzoneAlgorithm, name: 'OzoneAlgorithm' },
  { path: '/gacAlgorithm', component: GACAlgorithm, name: 'GACAlgorithm' },
  { path: '/disinfectionAlgorithm', component: DisinfectionAlgorithm, name: 'DisinfectionAlgorithm' },
  {
    path: '/pms',
    name: 'pmsDashboard',
    component: () => import('@/components/pms/dashboard/Dashboard'),
  },
  {
    path: '/monitor1',
    name: 'Monitor1',
    component: () => import('@/components/pms/component/Monitor1.vue'),
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
