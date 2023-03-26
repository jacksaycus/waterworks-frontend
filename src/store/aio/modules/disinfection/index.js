// 소독 store
import axios from 'axios'
import { DEV_SERVER } from '@/store/aio/modules/aio'
import { util } from '@/service/utils'

const OPEN_LSTM_DIALOG = 'OPEN_LSTM_DIALOG'
const CLOSE_LSTM_DIALOG = 'CLOSE_LSTM_DIALOG'
const OPEN_PRE_DIALOG = 'OPEN_PRE_DIALOG'
const URL = {
  DISINFECTION_LATEST: 'disinfection/latest',
  DISINFECTION_HISTORY_EVAPORATION: 'disinfection/history/evaporation',
  DISINFECTION_HISTORY_CORRECTED_POST: 'disinfection/history/corrected/post',
  DISINFECTION_CONTROL_OPERATION_PRE: 'disinfection/control/operation/pre',
  DISINFECTION_CONTROL_OPERATION_PERI: 'disinfection/control/operation/peri',
  DISINFECTION_CONTROL_OPERATION_POST: 'disinfection/control/operation/post',
  DISINFECTION_CONTROL_PRE: 'disinfection/control/pre',
  DISINFECTION_CONTROL_RERI: 'disinfection/control/peri',
  DISINFECTION_CONTROL_POST: 'disinfection/control/post'
}
export const GET_DISINFECTION_LATEST = URL.DISINFECTION_LATEST + '/get'
export const PUT_DISINFECTION_HISTORY_EVAPORATION = URL.DISINFECTION_HISTORY_EVAPORATION + '/put'
export const PUT_DISINFECTION_HISTORY_CORRECTED_POST = URL.DISINFECTION_HISTORY_CORRECTED_POST + '/put'
export const PUT_DISINFECTION_CONTROL_OPERATION_PRE = URL.DISINFECTION_CONTROL_OPERATION_PRE + '/put'
export const PUT_DISINFECTION_CONTROL_OPERATION_PERI = URL.DISINFECTION_CONTROL_OPERATION_PERI + '/put'
export const PUT_DISINFECTION_CONTROL_OPERATION_POST = URL.DISINFECTION_CONTROL_OPERATION_POST + '/put'
export const PUT_DISINFECTION_CONTROL_PRE = URL.DISINFECTION_CONTROL_PRE + '/put'
export const PUT_DISINFECTION_CONTROL_PERI = URL.DISINFECTION_CONTROL_RERI + '/put'
export const PUT_DISINFECTION_CONTROL_POST = URL.DISINFECTION_CONTROL_POST + '/put'
const GET_LATEST = GET_DISINFECTION_LATEST.substr(GET_DISINFECTION_LATEST.indexOf('/') + 1)
const PUT_HISTORY_EVAPORATION = PUT_DISINFECTION_HISTORY_EVAPORATION.substr(PUT_DISINFECTION_HISTORY_EVAPORATION.indexOf('/') + 1)
const PUT_HISTORY_CORRECTED_POST = PUT_DISINFECTION_HISTORY_CORRECTED_POST.substr(PUT_DISINFECTION_HISTORY_CORRECTED_POST.indexOf('/') + 1)
const PUT_CONTROL_OPERATION_PRE = PUT_DISINFECTION_CONTROL_OPERATION_PRE.substr(PUT_DISINFECTION_CONTROL_OPERATION_PRE.indexOf('/') + 1)
const PUT_CONTROL_OPERATION_PERI = PUT_DISINFECTION_CONTROL_OPERATION_PERI.substr(PUT_DISINFECTION_CONTROL_OPERATION_PERI.indexOf('/') + 1)
const PUT_CONTROL_OPERATION_POST = PUT_DISINFECTION_CONTROL_OPERATION_POST.substr(PUT_DISINFECTION_CONTROL_OPERATION_POST.indexOf('/') + 1)
const PUT_CONTROL_PRE = PUT_DISINFECTION_CONTROL_PRE.substr(PUT_DISINFECTION_CONTROL_PRE.indexOf('/') + 1)
const PUT_CONTROL_PERI = PUT_DISINFECTION_CONTROL_PERI.substr(PUT_DISINFECTION_CONTROL_PERI.indexOf('/') + 1)
const PUT_CONTROL_POST = PUT_DISINFECTION_CONTROL_POST.substr(PUT_DISINFECTION_CONTROL_POST.indexOf('/') + 1)
const SET_MODIFYED_FROM_LATEST = "setModifyedFromLatest"
import { CLOSE_AI_MODE_DIALOG } from '@/store/aio/modules/dialog'

export default {
  namespaced: true,
  state: {
    isModifyMode: false,
    dialog: {
      lstm: {
        visible: false
      },
      pre: {
        visible: false
      }
    },
    selectedDisinfectionIndex: 1,
    latest: {
      update_time: null,
      pre_operation_mode: null,
      peri_operation_mode: null,
      post_operation_mode: null,
      d1_target_cl: null,
      d2_target_cl: null,
      d1_cl: null,
      d2_cl: null,
      d1_in_fr: null,
      d2_in_fr: null,
      e1_target_cl: null,
      e2_target_cl: null,
      h_target_cl: null,
      e1_cl: null,
      e2_cl: null,
      h_in_cl: null,
      h_out_cl: null,
      h_ph: null,
      h_tb: null,
      g_pre1_chlorination: null,
      g_pre1_set_max: null,
      g_pre1_set_min: null,
      g_pre1_chg_limit_for_onetime: null,
      g_pre2_chlorination: null,
      g_pre2_set_max: null,
      g_pre2_set_min: null,
      g_pre2_chg_limit_for_onetime: null,
      g_peri1_chlorination: null,
      g_peri1_set_max: null,
      g_peri1_set_min: null,
      g_peri1_chg_limit_for_onetime: null,
      g_peri2_chlorination: null,
      g_peri2_set_max: null,
      g_peri2_set_min: null,
      g_peri2_chg_limit_for_onetime: null,
      g_post_chlorination: null,
      g_post_set_max: null,
      g_post_set_min: null,
      g_post_chg_limit_for_onetime: null,
      ai_g_pre1_corrected: null,
      ai_g_pre2_corrected: null,
      ai_g_peri1_corrected: null,
      ai_g_peri2_corrected: null,
      ai_g_post_corrected: null,
      ai_g_pre1_evaporation: null,
      ai_g_pre2_evaporation: null,
      ai_g_pre1_chlorination: null,
      ai_g_pre2_chlorination: null,
      ai_g_peri1_chlorination: null,
      ai_g_peri2_chlorination: null,
      ai_g_post_chlorination: null,
    },
    latestModify: {
      update_time: null,
      pre_operation_mode: null,
      peri_operation_mode: null,
      post_operation_mode: null,
      d1_target_cl: null,
      d2_target_cl: null,
      d1_cl: null,
      d2_cl: null,
      d1_in_fr: null,
      d2_in_fr: null,
      e1_target_cl: null,
      e2_target_cl: null,
      h_target_cl: null,
      e1_cl: null,
      e2_cl: null,
      h_in_cl: null,
      h_out_cl: null,
      h_ph: null,
      h_tb: null,
      g_pre1_chlorination: null,
      g_pre1_set_max: null,
      g_pre1_set_min: null,
      g_pre1_chg_limit_for_onetime: null,
      g_pre2_chlorination: null,
      g_pre2_set_max: null,
      g_pre2_set_min: null,
      g_pre2_chg_limit_for_onetime: null,
      g_peri1_chlorination: null,
      g_peri1_set_max: null,
      g_peri1_set_min: null,
      g_peri1_chg_limit_for_onetime: null,
      g_peri2_chlorination: null,
      g_peri2_set_max: null,
      g_peri2_set_min: null,
      g_peri2_chg_limit_for_onetime: null,
      g_post_chlorination: null,
      g_post_set_max: null,
      g_post_set_min: null,
      g_post_chg_limit_for_onetime: null,
      ai_g_pre1_corrected: null,
      ai_g_pre2_corrected: null,
      ai_g_peri1_corrected: null,
      ai_g_peri2_corrected: null,
      ai_g_post_corrected: null,
      ai_g_pre1_evaporation: null,
      ai_g_pre2_evaporation: null,
      ai_g_pre1_chlorination: null,
      ai_g_pre2_chlorination: null,
      ai_g_peri1_chlorination: null,
      ai_g_peri2_chlorination: null,
      ai_g_post_chlorination: null,
    },
    pre_evaporation: {
      series1: null,
      series2: null
    },
    correctedTrend: null
  },
  getters: {
    isAiOperationMode: function (state) {
      if (state.latest.pre_operation_mode === 2 && state.latest.peri_operation_mode === 2 && state.latest.post_operation_mode === 2) {
        return true
      } else {
        return false
      }
    }
  },
  mutations: {
    [OPEN_PRE_DIALOG]: function(state) {
      state.dialog.pre.visible = true
    },
    [OPEN_LSTM_DIALOG]: function(state) {
      state.dialog.lstm.visible = true
    },
    [CLOSE_LSTM_DIALOG]: function(state) {
      state.dialog.lstm.visible = false
    },
    [GET_LATEST]: function (state, data) {
      state.latest = data
      if (state.isModifyMode === false) {
        state.latestModify = Object.assign({}, data)
      }
    },
    [SET_MODIFYED_FROM_LATEST]: function (state) {
      state.latestModify = Object.assign({}, state.latest)
    },
    [PUT_HISTORY_EVAPORATION]: function (state, data) {
      state.pre_evaporation = data
    },
    [PUT_HISTORY_CORRECTED_POST]: function (state, data) {
      state.correctedTrend = data
    },
  },
  actions: {
    [OPEN_PRE_DIALOG]: function ({ commit }) {
      commit(OPEN_PRE_DIALOG)
    },
    [OPEN_LSTM_DIALOG]: function ({ commit }) {
      commit(OPEN_LSTM_DIALOG)
    },
    [CLOSE_LSTM_DIALOG]: function ({ commit }) {
      commit(CLOSE_LSTM_DIALOG)
    },
    [GET_LATEST]: async function ({ commit }) {
      await axios.get(`${DEV_SERVER}/${URL.DISINFECTION_LATEST}`)
        .then(({ data }) => {
          commit(GET_LATEST, data.latest)
        })
        .catch(error => {
          util.printError(error)
        })
    },
    [PUT_HISTORY_EVAPORATION]: async function ({ commit }) {
      let yesterDayTimestamp = new Date().getTime() - 1000 * 60 * 60 * 24
      let yesterDay = new Date(yesterDayTimestamp)
      let year = yesterDay.getFullYear()
      let month = yesterDay.getMonth()
      let day = yesterDay.getDate()
      await axios.put(`${DEV_SERVER}/${URL.DISINFECTION_HISTORY_EVAPORATION}`, { 'start_time': new Date(year, month, day, 0, 0, 0).toISOString(), 'end_time': new Date().toISOString() })
        .then(({ data }) => {
          commit(PUT_HISTORY_EVAPORATION, data.pre_evaporation)
        })
        .catch(error => {
          util.printError(error)
        })
    },
    [PUT_HISTORY_CORRECTED_POST]: async function ({ commit }) {
      let nowTimestamp = Date.now()
      let oneDayTimestamp = 1000 * 60 * 60 * 24
      await axios.put(`${DEV_SERVER}/${URL.DISINFECTION_HISTORY_CORRECTED_POST}`, { 'start_time': new Date(nowTimestamp - oneDayTimestamp).toISOString(), 'end_time': new Date(nowTimestamp).toISOString() })
        .then(({ data }) => {
          commit(PUT_HISTORY_CORRECTED_POST, data.corrected)
        })
        .catch(error => {
          util.printError(error)
        })
    },
    [PUT_CONTROL_OPERATION_PRE]: async function ({ commit }, { operation }) {
      await axios.put(`${DEV_SERVER}/${URL.DISINFECTION_CONTROL_OPERATION_PRE}`, { 'operation': operation })
      .then(() => {
        commit('dialog/' +CLOSE_AI_MODE_DIALOG, null, { root: true })
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
        commit(SET_MODIFYED_FROM_LATEST)
      })
    },
    [PUT_CONTROL_OPERATION_PERI]: async function ({ commit }, { operation }) {
      await axios.put(`${DEV_SERVER}/${URL.DISINFECTION_CONTROL_OPERATION_PERI}`, { 'operation': operation })
      .then(() => {
        commit('dialog/' +CLOSE_AI_MODE_DIALOG, null, { root: true })
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
        commit(SET_MODIFYED_FROM_LATEST)
      })
    },
    [PUT_CONTROL_OPERATION_POST]: async function ({ commit }, { operation }) {
      await axios.put(`${DEV_SERVER}/${URL.DISINFECTION_CONTROL_OPERATION_POST}`, { 'operation': operation })
      .then(() => {
        commit('dialog/' +CLOSE_AI_MODE_DIALOG, null, { root: true })
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
        commit(SET_MODIFYED_FROM_LATEST)
      })
    },
    [PUT_CONTROL_PRE]: async function ({ commit }, { g_pre1_set_max, g_pre1_set_min, g_pre1_chg_limit_for_onetime, d1_target_cl, e1_target_cl, g_pre2_set_max, g_pre2_set_min, g_pre2_chg_limit_for_onetime, d2_target_cl, e2_target_cl }) { // eslint-disable-line no-unused-vars
      await axios.put(`${DEV_SERVER}/${URL.DISINFECTION_CONTROL_PRE}`, { g_pre1_set_max, g_pre1_set_min, g_pre1_chg_limit_for_onetime, d1_target_cl, e1_target_cl, g_pre2_set_max, g_pre2_set_min, g_pre2_chg_limit_for_onetime, d2_target_cl, e2_target_cl })
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
    [PUT_CONTROL_PERI]: async function ({ commit }, { g_peri1_set_max, g_peri1_set_min, g_peri1_chg_limit_for_onetime, d1_target_cl, e1_target_cl, g_peri2_set_max, g_peri2_set_min, g_peri2_chg_limit_for_onetime, d2_target_cl, e2_target_cl }) { // eslint-disable-line no-unused-vars
      await axios.put(`${DEV_SERVER}/${URL.DISINFECTION_CONTROL_RERI}`, { g_peri1_set_max, g_peri1_set_min, g_peri1_chg_limit_for_onetime, d1_target_cl, e1_target_cl, g_peri2_set_max, g_peri2_set_min, g_peri2_chg_limit_for_onetime, d2_target_cl, e2_target_cl })
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
    [PUT_CONTROL_POST]: async function ({ commit }, { g_post_set_max, g_post_set_min, g_post_chg_limit_for_onetime, h_target_cl }) { // eslint-disable-line no-unused-vars
      await axios.put(`${DEV_SERVER}/${URL.DISINFECTION_CONTROL_POST}`, { g_post_set_max, g_post_set_min, g_post_chg_limit_for_onetime, h_target_cl })
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
    }
  }
}