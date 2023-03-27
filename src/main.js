import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import numeral from 'numeral'
import numFormat from 'vue-filter-number-format'
import Vuesax from 'vuesax';
import Highcharts from 'highcharts'
import HighchartsMore from "highcharts/highcharts-more"
import Exporting from "highcharts/modules/exporting"
import ExportingData from "highcharts/modules/export-data"
import OfflineExporting from "highcharts/modules/offline-exporting"
import xrangeInit from 'highcharts/modules/xrange'
import stockInit from 'highcharts/modules/stock'

// import quasarUserOptions from './quasar-user-options';
// import { Quasar } from 'quasar';
import ECharts from 'vue-echarts'
import { use } from "echarts/core"

import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  BarChart,
  PieChart
} from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent
} from 'echarts/components'
use([
  CanvasRenderer,
  BarChart,
  PieChart,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
])

HighchartsMore(Highcharts)
xrangeInit(Highcharts)
stockInit(Highcharts)
Exporting(Highcharts)
ExportingData(Highcharts)
OfflineExporting(Highcharts)

Vue.use(Vuesax);

Vue.config.productionTip = false;

// 하이차트 UTC설정
Highcharts.setOptions({
  global: {
    useUTC: false
  },
  lang: {
    thousandsSep: ','
  }
})
Vue.use(Highcharts)
// Vue.use(Quasar, quasarUserOptions)
Vue.component('v-chart', ECharts);
Vue.filter('numFormat', numFormat(numeral))
import '@/styles/common.scss';
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
