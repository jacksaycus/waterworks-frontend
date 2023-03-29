import Vue from 'vue';
import Vuex from 'vuex'
import vueMoment from 'vue-moment'
import moment from 'moment-timezone'
import drawer from './aio/modules/drawer'
import HighchartsVue from 'highcharts-vue'
import common from './aio/modules/common'
import aio from './aio/modules/aio'
import dialog from './aio/modules/dialog'
import receiving from './aio/modules/receiving'
import coagulants from './aio/modules/coagulants'
import filter from './aio/modules/filter'
import gac from './aio/modules/gac'
import mixing from './aio/modules/mixing'
import ozone from './aio/modules/ozone'
import sedimentation from './aio/modules/sedimentation'
import disinfection from './aio/modules/disinfection'
import clear from './aio/modules/clear'
import ems from './aio/modules/ems'
import pms from './aio/modules/pms'
import raw from './aio/modules/raw'
import PmsModule from './pms'

Vue.use(Vuex)
Vue.use(common)
Vue.use(HighchartsVue)
Vue.use(vueMoment, {
  moment
})

export default new Vuex.Store({
  modules: {
        drawer,
        aio,
        clear,
        dialog,
        receiving,
        coagulants,
        filter,
        gac,
        mixing,
        ozone,
        sedimentation,
        disinfection,
        ems,
        pms,
        raw,
        
        PmsModule,
    },
    
});
