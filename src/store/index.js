import Vue from 'vue';
import Vuex from 'vuex';
import AioStore from './aio';
import common from '@/store/common'

Vue.use(Vuex)
Vue.use(common)
export default new Vuex.Store({
  ...AioStore,

  modules: {
    AioStore,
  }
})
