// 침전 store
import axios from 'axios'
import { DEV_SERVER } from '@/store/aio/modules/aio'
import { util } from '@/service/utils'
import { Date } from 'core-js'

export const URL = {
  SEDIMENTATION_LATEST: 'sedimentation/latest',
  SEDIMENTATION_LOCATION: 'sedimentation/location',
  SEDIMENTATION_HISTORY_INTERFACE: 'sedimentation/history/interface',
  SEDIMENTATION_DISTRIBUTION_TB: 'sedimentation/distribution/tb',
  SEDIMENTATION_HISTORY_TB: 'sedimentation/history/tb',
  SEDIMENTATION_HISTORY_CL: 'sedimentation/history/cl',
  SEDIMENTATION_CONTROL_OPERATION: 'sedimentation/control/operation',
  SEDIMENTATION_CONTROL_SC: 'sedimentation/control/sc',
  SEDIMENTATION_CONTROL_LOCATION: 'sedimentation/control/location'
}
export const GET_SEDIMENTATION_LATEST = URL.SEDIMENTATION_LATEST + '/get'
export const GET_SEDIMENTATION_LOCATION_BY_JI = URL.SEDIMENTATION_LOCATION + '/numJi/get'
export const PUT_SEDIMENTATION_INTERFACE = URL.SEDIMENTATION_HISTORY_INTERFACE + '/numJi/put'
export const GET_SEDIMENTATION_DISTRIBUTION_TB = URL.SEDIMENTATION_DISTRIBUTION_TB + '/get'
export const PUT_SEDIMENTATION_HISTORY_TB = URL.SEDIMENTATION_HISTORY_TB + '/put'
export const PUT_SEDIMENTATION_HISTORY_CL = URL.SEDIMENTATION_HISTORY_CL + '/put'
export const PUT_SEDIMENTATION_CONTROL_OPERATION = URL.SEDIMENTATION_CONTROL_OPERATION + '/put'
export const PUT_SEDIMENTATION_CONTROL_SC = URL.SEDIMENTATION_CONTROL_SC + '/put'
export const PUT_SEDIMENTATION_CONTROL_LOCATION = URL.SEDIMENTATION_CONTROL_LOCATION + '/put'
const GET_LATEST = GET_SEDIMENTATION_LATEST.substr(GET_SEDIMENTATION_LATEST.indexOf('/') + 1)
const GET_LOCATION_BY_JI = GET_SEDIMENTATION_LOCATION_BY_JI.substr(GET_SEDIMENTATION_LOCATION_BY_JI.indexOf('/') + 1)
const PUT_INTERFACE = PUT_SEDIMENTATION_INTERFACE.substr(PUT_SEDIMENTATION_INTERFACE.indexOf('/') + 1)
const GET_DISTRIBUTION_TB = GET_SEDIMENTATION_DISTRIBUTION_TB.substr(GET_SEDIMENTATION_DISTRIBUTION_TB.indexOf('/') + 1)
const PUT_HISTORY_TB = PUT_SEDIMENTATION_HISTORY_TB.substr(PUT_SEDIMENTATION_HISTORY_TB.indexOf('/') + 1)
const PUT_HISTORY_CL = PUT_SEDIMENTATION_HISTORY_CL.substr(PUT_SEDIMENTATION_HISTORY_CL.indexOf('/') + 1)
const PUT_CONTROL_OPERATION = PUT_SEDIMENTATION_CONTROL_OPERATION.substr(PUT_SEDIMENTATION_CONTROL_OPERATION.indexOf('/') + 1)
const PUT_CONTROL_SC = PUT_SEDIMENTATION_CONTROL_SC.substr(PUT_SEDIMENTATION_CONTROL_SC.indexOf('/') + 1)
const PUT_CONTROL_LOCATION = PUT_SEDIMENTATION_CONTROL_LOCATION.substr(PUT_SEDIMENTATION_CONTROL_LOCATION.indexOf('/') + 1)
const OPEN_POPUP = 'OPEN_POPUP'
export const CLOSE_POPUP = 'CLOSE_POPUP'
const SET_MODIFYED_FROM_LATEST = "setModifyedFromLatest"
import { CLOSE_AI_MODE_DIALOG } from '@/store/aio/modules/dialog'
import { CLOSE_AI_MODE_OF_JI_DIALOG } from '@/store/aio/modules/dialog'

export default {
  namespaced: true,
  state: {
    isModifyMode: false,
    latest: {
      update_time: null,
      operation_mode: null,
      b_in_fr: null,
      b_tb: null,
      d1_mm_coagulant: null,
      d1_mm_fr: null,
      d2_mm_coagulant: null,
      d2_mm_fr: null,
      ai_e1_sludge: null,
      ai_e2_sludge: null,
      e1_interface_le: null,
      e2_interface_le: null,
      e_drawing_vv2_1: null,
      e_drawing_vv2_2: null,
      e_drawing_vv2_3: null,
      e_drawing_vv2_4: null,
      e_sc2_f: null,
      e_sc2_b: null,
      e_sc2_schedule: {
        next: null,
        inbal: null,
        stop: null,
        start: null,
        latest: null
      },
      e_drawing_vv3_1: null,
      e_drawing_vv3_2: null,
      e_drawing_vv3_3: null,
      e_drawing_vv3_4: null,
      e_sc3_f: null,
      e_sc3_b: null,
      e_sc3_schedule: {
        next: null,
        inbal: null,
        stop: null,
        start: null,
        latest: null
      },
      e_drawing_vv4_1: null,
      e_drawing_vv4_2: null,
      e_drawing_vv4_3: null,
      e_drawing_vv4_4: null,
      e_sc4_f: null,
      e_sc4_b: null,
      e_sc4_schedule: {
        next: null,
        inbal: null,
        stop: null,
        start: null,
        latest: null
      },
      e_drawing_vv5_1: null,
      e_drawing_vv5_2: null,
      e_drawing_vv5_3: null,
      e_drawing_vv5_4: null,
      e_sc5_f: null,
      e_sc5_b: null,
      e_sc5_schedule: {
        next: null,
        inbal: null,
        stop: null,
        start: null,
        latest: null
      },
      e_drawing_vv6_1: null,
      e_drawing_vv6_2: null,
      e_drawing_vv6_3: null,
      e_drawing_vv6_4: null,
      e_sc6_f: null,
      e_sc6_b: null,
      e_sc6_schedule: {
        next: null,
        inbal: null,
        stop: null,
        start: null,
        latest: null
      },
      e_drawing_vv7_1: null,
      e_drawing_vv7_2: null,
      e_drawing_vv7_3: null,
      e_drawing_vv7_4: null,
      e_sc7_f: null,
      e_sc7_b: null,
      e_sc7_schedule: {
        next: null,
        inbal: null,
        stop: null,
        start: null,
        latest: null
      },
      e_drawing_vv8_1: null,
      e_drawing_vv8_2: null,
      e_drawing_vv8_3: null,
      e_drawing_vv8_4: null,
      e_sc8_f: null,
      e_sc8_b: null,
      e_sc8_schedule: {
        next: null,
        inbal: null,
        stop: null,
        start: null,
        latest: null
      },
      e_drawing_vv9_1: null,
      e_drawing_vv9_2: null,
      e_drawing_vv9_3: null,
      e_drawing_vv9_4: null,
      e_sc9_f: null,
      e_sc9_b: null,
      e_sc9_schedule: {
        next: null,
        inbal: null,
        stop: null,
        start: null,
        latest: null
      },
      ai_e_total_sludge: null,
      e_sc_set_sludge_q: null,
      e_sc_set_max_wait: null,
      e_set_lt: null,
      e_sc_set_ti: null
    },
    latestModify: {
      update_time: null,
      operation_mode: null,
      b_in_fr: null,
      b_tb: null,
      d1_mm_coagulant: null,
      d1_mm_fr: null,
      d2_mm_coagulant: null,
      d2_mm_fr: null,
      ai_e1_sludge: null,
      ai_e2_sludge: null,
      e1_interface_le: null,
      e2_interface_le: null,
      e_drawing_vv2_1: null,
      e_drawing_vv2_2: null,
      e_drawing_vv2_3: null,
      e_drawing_vv2_4: null,
      e_sc2_f: null,
      e_sc2_b: null,
      e_sc2_schedule: {
        next: null,
        inbal: null,
        stop: null,
        start: null,
        latest: null
      },
      e_drawing_vv3_1: null,
      e_drawing_vv3_2: null,
      e_drawing_vv3_3: null,
      e_drawing_vv3_4: null,
      e_sc3_f: null,
      e_sc3_b: null,
      e_sc3_schedule: {
        next: null,
        inbal: null,
        stop: null,
        start: null,
        latest: null
      },
      e_drawing_vv4_1: null,
      e_drawing_vv4_2: null,
      e_drawing_vv4_3: null,
      e_drawing_vv4_4: null,
      e_sc4_f: null,
      e_sc4_b: null,
      e_sc4_schedule: {
        next: null,
        inbal: null,
        stop: null,
        start: null,
        latest: null
      },
      e_drawing_vv5_1: null,
      e_drawing_vv5_2: null,
      e_drawing_vv5_3: null,
      e_drawing_vv5_4: null,
      e_sc5_f: null,
      e_sc5_b: null,
      e_sc5_schedule: {
        next: null,
        inbal: null,
        stop: null,
        start: null,
        latest: null
      },
      e_drawing_vv6_1: null,
      e_drawing_vv6_2: null,
      e_drawing_vv6_3: null,
      e_drawing_vv6_4: null,
      e_sc6_f: null,
      e_sc6_b: null,
      e_sc6_schedule: {
        next: null,
        inbal: null,
        stop: null,
        start: null,
        latest: null
      },
      e_drawing_vv7_1: null,
      e_drawing_vv7_2: null,
      e_drawing_vv7_3: null,
      e_drawing_vv7_4: null,
      e_sc7_f: null,
      e_sc7_b: null,
      e_sc7_schedule: {
        next: null,
        inbal: null,
        stop: null,
        start: null,
        latest: null
      },
      e_drawing_vv8_1: null,
      e_drawing_vv8_2: null,
      e_drawing_vv8_3: null,
      e_drawing_vv8_4: null,
      e_sc8_f: null,
      e_sc8_b: null,
      e_sc8_schedule: {
        next: null,
        inbal: null,
        stop: null,
        start: null,
        latest: null
      },
      e_drawing_vv9_1: null,
      e_drawing_vv9_2: null,
      e_drawing_vv9_3: null,
      e_drawing_vv9_4: null,
      e_sc9_f: null,
      e_sc9_b: null,
      e_sc9_schedule: {
        next: null,
        inbal: null,
        stop: null,
        start: null,
        latest: null
      },
      ai_e_total_sludge: null,
      e_sc_set_sludge_q: null,
      e_sc_set_max_wait: null,
      e_set_lt: null,
      e_sc_set_ti: null
    },
    popup: {
      visible: false,
      location: {
        update_time: null,
        b_in_fr: null,
        b_tb: null,
        d_mm_coagulant: null,
        d_mm_fr: null,
        e_interface_le: null,
        e_tb_f: null,
        e_tb_b: null,
        e_sc_latest: null,
        ai_e_sc_next: null,
        e_location_sludge: null,
        e_sc_f: null,
        e_sc_b: null,
        e_drawing_vv_1: null,
        e_drawing_vv_2: null,
        e_drawing_vv_3: null,
        e_drawing_vv_4: null,
        e_location_sludge_trend: null
      },
      numJi: null,
      interface: {
        series: null
      }
    },
    interface: {
      series1: null,
      series2: null
    },
    tbScatter: {
      series1: null,
      series2: null
    },
    tbTrend: {
      series1: null,
      series2: null
    },
    clTrend: {
      series1: null,
      series2: null
    }
  },
  getters: {
    // 침전 전체현황 인발벨브 상태
    isOpenInBalValve2: function (state) {
      if (state.latest.e_drawing_vv2_1 === 1 || state.latest.e_drawing_vv2_2 === 1 || state.latest.e_drawing_vv2_3 === 1 || state.latest.e_drawing_vv2_4 === 1) {
        return true
      } else {
        return false
      }
    },
    isOpenInBalValve3: function (state) {
      if (state.latest.e_drawing_vv3_1 === 1 || state.latest.e_drawing_vv3_2 === 1 || state.latest.e_drawing_vv3_3 === 1 || state.latest.e_drawing_vv3_4 === 1) {
        return true
      } else {
        return false
      }
    },
    isOpenInBalValve4: function (state) {
      if (state.latest.e_drawing_vv4_1 === 1 || state.latest.e_drawing_vv4_2 === 1 || state.latest.e_drawing_vv4_3 === 1 || state.latest.e_drawing_vv4_4 === 1) {
        return true
      } else {
        return false
      }
    },
    isOpenInBalValve5: function (state) {
      if (state.latest.e_drawing_vv5_1 === 1 || state.latest.e_drawing_vv5_2 === 1 || state.latest.e_drawing_vv5_3 === 1 || state.latest.e_drawing_vv5_4 === 1) {
        return true
      } else {
        return false
      }
    },
    isOpenInBalValve6: function (state) {
      if (state.latest.e_drawing_vv6_1 === 1 || state.latest.e_drawing_vv6_2 === 1 || state.latest.e_drawing_vv6_3 === 1 || state.latest.e_drawing_vv6_4 === 1) {
        return true
      } else {
        return false
      }
    },
    isOpenInBalValve7: function (state) {
      if (state.latest.e_drawing_vv7_1 === 1 || state.latest.e_drawing_vv7_2 === 1 || state.latest.e_drawing_vv7_3 === 1 || state.latest.e_drawing_vv7_4 === 1) {
        return true
      } else {
        return false
      }
    },
    isOpenInBalValve8: function (state) {
      if (state.latest.e_drawing_vv8_1 === 1 || state.latest.e_drawing_vv8_2 === 1 || state.latest.e_drawing_vv8_3 === 1 || state.latest.e_drawing_vv8_4 === 1) {
        return true
      } else {
        return false
      }
    },
    isOpenInBalValve9: function (state) {
      if (state.latest.e_drawing_vv9_1 === 1 || state.latest.e_drawing_vv9_2 === 1 || state.latest.e_drawing_vv9_3 === 1 || state.latest.e_drawing_vv9_4 === 1) {
        return true
      } else {
        return false
      }
    }
  },
  mutations: {
    [GET_LATEST]: function(state, data) {
      state.latest = data
      if (state.isModifyMode === false) {
        state.latestModify = Object.assign({}, data)
      }
    },
    [SET_MODIFYED_FROM_LATEST]: function (state) {
      state.latestModify = Object.assign({}, state.latest)
    },
    [GET_LOCATION_BY_JI]: function(state, data) {
      state.popup.location = data
    },
    [GET_DISTRIBUTION_TB]: function (state, data) {
      state.tbScatter = data
    },
    [PUT_HISTORY_TB]: function (state, data) {
      state.tbTrend = data
    },
    [PUT_HISTORY_CL]: function (state, data) {
      state.clTrend = data
    },
    [PUT_CONTROL_LOCATION]: function (state, { numJi, ai }) {
      state.latest['e_sc_set' + numJi] = ai
    },
    [OPEN_POPUP]: function (state, data) {
      state.popup.visible = true
      state.popup.numJi = data
    },
    [PUT_INTERFACE]: function (state, data) {
      if (data.numJi === 0) {
        state.interface.series1 = data.interface.series1
        state.interface.series2 = data.interface.series2
      } else {
        let keys = Object.keys(data.interface)
        state.popup.interface.series = data.interface[keys[0]]
      }
    },
    [PUT_CONTROL_OPERATION]: function (state, data) {
      state.latest.operation_mode = data
    },
    [CLOSE_POPUP]: function (state) {
      // console.log(state.popup.location.e_location_sludge_trend)
      state.popup = {
        visible: false,
        location: {
          update_time: null,
          b_in_fr: null,
          b_tb: null,
          d_mm_coagulant: null,
          d_mm_fr: null,
          e_interface_le: null,
          e_tb_f: null,
          e_tb_b: null,
          ai_e_sc_next: null,
          e_location_sludge: null,
          e_sc_f: null,
          e_sc_b: null,
          e_drawing_vv_1: null,
          e_drawing_vv_2: null,
          e_drawing_vv_3: null,
          e_drawing_vv_4: null,
          e_location_sludge_trend: null
        },
        numJi: null,
        interface: {
          series: null
        }
      }
      // console.log(state.popup.location.e_location_sludge_trend)
    }
  },
  actions: {
    [GET_LATEST]: async function ({ commit }) {
      await axios.get(`${DEV_SERVER}/${URL.SEDIMENTATION_LATEST}`)
        .then(({ data }) => {
          commit(GET_LATEST, data.latest)
        })
        .catch(error => {
          util.printError(error)
        })
    },
    [GET_LOCATION_BY_JI]: async function ({ commit }, obj) {
      await axios.get(`${DEV_SERVER}/${URL.SEDIMENTATION_LOCATION}/${obj.numJi}`)
        .then(({ data }) => {
          commit(GET_LOCATION_BY_JI, data.location)
          commit(OPEN_POPUP, obj.numJi)
        })
        .catch(error => {
          util.printError(error)
        })
    },
    [PUT_INTERFACE]: async function ({ commit }, obj) {
      let nowTimestamp = Date.now()
      let oneDayTimestamp = 1000 * 60 * 60 * 24
      await axios.put(`${DEV_SERVER}/${URL.SEDIMENTATION_HISTORY_INTERFACE}/${obj.numJi}`, { 'start_time': new Date(nowTimestamp - oneDayTimestamp).toISOString(), 'end_time': new Date(nowTimestamp).toISOString() })
      // await axios.put(`${DEV_SERVER}/${URL.SEDIMENTATION_HISTORY_INTERFACE}/${obj.numJi}`, { 'start_time': new Date(2021, 9, 17, 18, 0, 0).toISOString(), 'end_time': new Date(nowTimestamp).toISOString() })
        .then(({ data }) => {
          commit(PUT_INTERFACE, { interface: data.interface, numJi: obj.numJi })
        })
        .catch(error => {
          util.printError(error)
        })
    },
    [GET_DISTRIBUTION_TB]: async function ({ commit }) {
      await axios.get(`${DEV_SERVER}/${URL.SEDIMENTATION_DISTRIBUTION_TB}`)
        .then(({ data }) => {
          commit(GET_DISTRIBUTION_TB, data.tb)
        })
        .catch(error => {
          util.printError(error)
        })
    },
    [PUT_HISTORY_TB]: async function ({ commit }) {
      let nowTimestamp = Date.now()
      let oneDayTimestamp = 1000 * 60 * 60 * 24
      await axios.put(`${DEV_SERVER}/${URL.SEDIMENTATION_HISTORY_TB}`, { 'start_time': new Date(nowTimestamp - oneDayTimestamp).toISOString(), 'end_time': new Date(nowTimestamp).toISOString() })
        .then(({ data }) => {
          commit(PUT_HISTORY_TB, data.tb)
        })
        .catch(error => {
          util.printError(error)
        })
    },
    [PUT_HISTORY_CL]: async function ({ commit }) {
      let nowTimestamp = Date.now()
      let oneDayTimestamp = 1000 * 60 * 60 * 24
      await axios.put(`${DEV_SERVER}/${URL.SEDIMENTATION_HISTORY_CL}`, { 'start_time': new Date(nowTimestamp - oneDayTimestamp).toISOString(), 'end_time': new Date(nowTimestamp).toISOString() })
        .then(({ data }) => {
          commit(PUT_HISTORY_CL, data.cl)
        })
        .catch(error => {
          util.printError(error)
        })
    },
    [PUT_CONTROL_OPERATION]: async function ({ commit }, { operation }) {
      await axios.put(`${DEV_SERVER}/${URL.SEDIMENTATION_CONTROL_OPERATION}`, { 'operation': operation })
      .then(() => {
        // commit(PUT_CONTROL_OPERATION, operation)
        commit('dialog/'+ CLOSE_AI_MODE_DIALOG, null, { root: true })
        let _data = {
          visible: true,
          title: '제어 성공',
          text1: '운전모드 변경요청 완료'
        }
        commit('alertDialog/OPEN_DIALOG', _data, { root: true })
      })
      .catch(error => {
        util.printError(error)
        let _data = {
          visible: true,
          title: '제어 실패',
          text1: '관리자에게 문의해주세요'
        }
        commit('alertDialog/OPEN_DIALOG', _data, { root: true })
      })
    },
    [PUT_CONTROL_SC]: async function ({ commit }, { e_sc_set_sludge_q, e_sc_set_max_wait, e_set_lt, e_sc_set_ti }) {
      await axios.put(`${DEV_SERVER}/${URL.SEDIMENTATION_CONTROL_SC}`, { e_sc_set_sludge_q, e_sc_set_max_wait, e_set_lt, e_sc_set_ti })
      .then(() => {
        let _data = {
          visible: true,
          title: '설정 성공',
          text1: '설정값이 변경되었습니다'
        }
        commit('alertDialog/OPEN_DIALOG', _data, { root: true })
      })
      .catch(error => {
        util.printError(error)
        let _data = {
          visible: true,
          title: '설정 실패',
          text1: '관리자에게 문의해주세요'
        }
        commit('alertDialog/OPEN_DIALOG', _data, { root: true })
        commit(SET_MODIFYED_FROM_LATEST)
      })
    },
    [PUT_CONTROL_LOCATION]: async function ({ commit }, { numJi, ai }) {
      await axios.put(`${DEV_SERVER}/${URL.SEDIMENTATION_CONTROL_LOCATION}` + '/' + numJi, { ai })
      .then(() => {
        commit(PUT_CONTROL_LOCATION, { numJi, ai })
        commit('dialog/'+ CLOSE_AI_MODE_OF_JI_DIALOG, null, { root: true })
        let _data = {
          visible: true,
          title: '설정 성공',
          text1: '설정값이 변경되었습니다'
        }
        commit('alertDialog/OPEN_DIALOG', _data, { root: true })
      })
      .catch(error => {
        util.printError(error)
        let _data = {
          visible: true,
          title: '설정 실패',
          text1: '관리자에게 문의해주세요'
        }
        commit('alertDialog/OPEN_DIALOG', _data, { root: true })
        commit(SET_MODIFYED_FROM_LATEST)
      })
    }
  }
}