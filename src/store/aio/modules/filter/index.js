// 여과 store
import axios from 'axios'
import { DEV_SERVER } from '@/store/aio/modules/aio'
import { util } from '@/service/utils'
import numeral from 'numeral'
import moment from 'moment'

export const URL = {
  FILTER_LATEST: 'filter/latest',
  FILTER_LOCATION: 'filter/location',
  FILTER_CONTROL_OPERATION: 'filter/control/operation',
  FILTER_SCHEDULE: 'filter/schedule',
  FILTER_CONTROL_TI: 'filter/control/ti'
}
export const GET_FILTER_LATEST = URL.FILTER_LATEST + '/get'
export const GET_FILTER_LOCATION_BY_JI = URL.FILTER_LATEST + '/numJi/get'
export const PUT_FILTER_CONTROL_OPERATION = URL.FILTER_CONTROL_OPERATION + '/put'
export const GET_FILTER_SCHEDULE = URL.FILTER_SCHEDULE + '/get'
export const PUT_FILTER_CONTROL_TI = URL.FILTER_CONTROL_TI + '/put'
const GET_LATEST = GET_FILTER_LATEST.substr(GET_FILTER_LATEST.indexOf('/') + 1)
const GET_LOCATION_BY_JI = GET_FILTER_LOCATION_BY_JI.substr(GET_FILTER_LOCATION_BY_JI.indexOf('/') + 1)
const PUT_CONTROL_OPERATION = PUT_FILTER_CONTROL_OPERATION.substr(PUT_FILTER_CONTROL_OPERATION.indexOf('/') + 1)
const GET_SCHEDULE = GET_FILTER_SCHEDULE.substr(GET_FILTER_SCHEDULE.indexOf('/') + 1)
const PUT_CONTROL_TI = PUT_FILTER_CONTROL_TI.substr(PUT_FILTER_CONTROL_TI.indexOf('/') + 1)
const OPEN_POPUP = 'OPEN_POPUP'
export const CLOSE_POPUP = 'CLOSE_POPUP'

import { CLOSE_AI_MODE_DIALOG } from '@/store/aio/modules/dialog'

const LOCATION_STATE = {
  0: '',
  1: '여과중',
  2: '휴지중',
  3: '역세중',
  4: '역세 후 휴지중',
  5: '순환중',
  6: '순환 후 휴지중',
  7: '순환 후 대기중'
}
export default {
  namespaced: true,
  state: {
    latest: {
      update_time: null,
      operation_mode: null,
      peak_mode: null,
      d1_in_fr: null,
      d2_in_fr: null,
      e1_tb_b: null,
      e2_tb_b: null,
      f_sp: null,
      f_out_fr: null,
      f_location_ti_set_max: null,
      f_location_state: {
        location7: null,
        location9: null,
        location11: null,
        location13: null,
        location15: null,
        location17: null,
        location19: null,
        location8: null,
        location10: null,
        location12: null,
        location14: null,
        location16: null,
        location18: null,
        location20: null
      },
      ai_f_location_le: {
        location7: null,
        location9: null,
        location11: null,
        location13: null,
        location15: null,
        location17: null,
        location19: null,
        location8: null,
        location10: null,
        location12: null,
        location14: null,
        location16: null,
        location18: null,
        location20: null
      },
      f_location_le: {
        location7: null,
        location9: null,
        location11: null,
        location13: null,
        location15: null,
        location17: null,
        location19: null,
        location8: null,
        location10: null,
        location12: null,
        location14: null,
        location16: null,
        location18: null,
        location20: null
      },
      f_location_tb: {
        location7: null,
        location9: null,
        location11: null,
        location13: null,
        location15: null,
        location17: null,
        location19: null,
        location8: null,
        location10: null,
        location12: null,
        location14: null,
        location16: null,
        location18: null,
        location20: null
      },
      f_location_ti: {
        location7: null,
        location9: null,
        location11: null,
        location13: null,
        location15: null,
        location17: null,
        location19: null,
        location8: null,
        location10: null,
        location12: null,
        location14: null,
        location16: null,
        location18: null,
        location20: null
      },
      ai_f_location_ti: {
        location7: null,
        location9: null,
        location11: null,
        location13: null,
        location15: null,
        location17: null,
        location19: null,
        location8: null,
        location10: null,
        location12: null,
        location14: null,
        location16: null,
        location18: null,
        location20: null
      },
      ai_f_location_bw_start_ti: {
        location7: null,
        location9: null,
        location11: null,
        location13: null,
        location15: null,
        location17: null,
        location19: null,
        location8: null,
        location10: null,
        location12: null,
        location14: null,
        location16: null,
        location18: null,
        location20: null
      },
      ai_f_location_schedule: {
        location7: {
          start: null,
          end: null,
          bw_start: null,
          bw_end: null,
          next_start: null,
          next_end: null
        },
        location9: {
          start: null,
          end: null,
          bw_start: null,
          bw_end: null,
          next_start: null,
          next_end: null
        },
        location11: {
          start: null,
          end: null,
          bw_start: null,
          bw_end: null,
          next_start: null,
          next_end: null
        },
        location13: {
          start: null,
          end: null,
          bw_start: null,
          bw_end: null,
          next_start: null,
          next_end: null
        },
        location15: {
          start: null,
          end: null,
          bw_start: null,
          bw_end: null,
          next_start: null,
          next_end: null
        },
        location17: {
          start: null,
          end: null,
          bw_start: null,
          bw_end: null,
          next_start: null,
          next_end: null
        },
        location19: {
          start: null,
          end: null,
          bw_start: null,
          bw_end: null,
          next_start: null,
          next_end: null
        },
        location8: {
          start: null,
          end: null,
          bw_start: null,
          bw_end: null,
          next_start: null,
          next_end: null
        },
        location10: {
          start: null,
          end: null,
          bw_start: null,
          bw_end: null,
          next_start: null,
          next_end: null
        },
        location12: {
          start: null,
          end: null,
          bw_start: null,
          bw_end: null,
          next_start: null,
          next_end: null
        },
        location14: {
          start: null,
          end: null,
          bw_start: null,
          bw_end: null,
          next_start: null,
          next_end: null
        },
        location16: {
          start: null,
          end: null,
          bw_start: null,
          bw_end: null,
          next_start: null,
          next_end: null
        },
        location18: {
          start: null,
          end: null,
          bw_start: null,
          bw_end: null,
          next_start: null,
          next_end: null
        },
        location20: {
          start: null,
          end: null,
          bw_start: null,
          bw_end: null,
          next_start: null,
          next_end: null
        }
      }
    },
    popup: {
      visible: false,
      numJi: null,
      location: {
        update_time: null,
        d1_in_fr: null,
        d2_in_fr: null,
        f_out_fr: null,
        f_sp: null,
        f_location_le: null,
        ai_f_location_le: null,
        f_location_tb: null,
        f_location_ti: null,
        ai_f_location_ti: null,
        ai_f_location_bw_start_ti: null,
        ai_f_location_end_ti: null,
        f_location_bw_wait_ti: null,
        ai_f_location_schedule: {
          location7: {
            start: null,
            end: null,
            bw_start: null,
            bw_end: null,
            next_start: null,
            next_end: null
          },
          location9: {
            start: null,
            end: null,
            bw_start: null,
            bw_end: null,
            next_start: null,
            next_end: null
          },
          location11: {
            start: null,
            end: null,
            bw_start: null,
            bw_end: null,
            next_start: null,
            next_end: null
          },
          location13: {
            start: null,
            end: null,
            bw_start: null,
            bw_end: null,
            next_start: null,
            next_end: null
          },
          location15: {
            start: null,
            end: null,
            bw_start: null,
            bw_end: null,
            next_start: null,
            next_end: null
          },
          location17: {
            start: null,
            end: null,
            bw_start: null,
            bw_end: null,
            next_start: null,
            next_end: null
          },
          location19: {
            start: null,
            end: null,
            bw_start: null,
            bw_end: null,
            next_start: null,
            next_end: null
          },
          location8: {
            start: null,
            end: null,
            bw_start: null,
            bw_end: null,
            next_start: null,
            next_end: null
          },
          location10: {
            start: null,
            end: null,
            bw_start: null,
            bw_end: null,
            next_start: null,
            next_end: null
          },
          location12: {
            start: null,
            end: null,
            bw_start: null,
            bw_end: null,
            next_start: null,
            next_end: null
          },
          location14: {
            start: null,
            end: null,
            bw_start: null,
            bw_end: null,
            next_start: null,
            next_end: null
          },
          location16: {
            start: null,
            end: null,
            bw_start: null,
            bw_end: null,
            next_start: null,
            next_end: null
          },
          location18: {
            start: null,
            end: null,
            bw_start: null,
            bw_end: null,
            next_start: null,
            next_end: null
          },
          location20: {
            start: null,
            end: null,
            bw_start: null,
            bw_end: null,
            next_start: null,
            next_end: null
          }
        }
      }
    },
    schedule: {
      filter: {
        location7: null,
        location8: null,
        location9: null,
        location10: null,
        location11: null,
        location12: null,
        location13: null,
        location14: null,
        location15: null,
        location16: null,
        location17: null,
        location18: null,
        location19: null,
        location20: null,
      },
      gac: {
        location5: null,
        location6: null,
        location7: null,
        location8: null,
        location9: null,
        location10: null,
        location11: null,
        location12: null,
        location13: null,
        location14: null,
        location15: null,
        location16: null,
        location17: null,
        location18: null
      }
    }
  },
  getters: {
    getPopupFilterStartTime: function (state) {
      if (state.popup.location.ai_f_location_schedule.start !== null && state.popup.location.ai_f_location_schedule.start !== '0' ) {
        return moment(state.popup.location.ai_f_location_schedule.start).format('MM-DD HH:mm')
      } else {
        return '--'
      }
    },
    getPopupFilterEndTime: function (state) {
      if (state.popup.location.ai_f_location_schedule.end !== null && state.popup.location.ai_f_location_schedule.end !== '0' ) {
        return moment(state.popup.location.ai_f_location_schedule.end).format('MM-DD HH:mm')
      } else {
        return '--'
      }
    },
    getPopupBWStartTime: function (state) {
      if (state.popup.location.ai_f_location_schedule.bw_start !== null && state.popup.location.ai_f_location_schedule.bw_start !== '0' ) {
        return moment(state.popup.location.ai_f_location_schedule.bw_start).format('MM-DD HH:mm')
      } else {
        return '--'
      }
    },
    getAiLocationWaterLevelLater10Minutes: function (state) {
      if (state.popup.location.ai_f_location_le !== null) {
        let key = Object.keys(state.popup.location.ai_f_location_le)[0]
        let value = state.popup.location.ai_f_location_le[key]
        if (value !== null) {
          value = value > 2.1 ? 2.1 : value
          return numeral(value).format('0.00')
        }
        return '--'
      } else {
        return null
      }
    },
    getAiLocationWaterLevelLater24Hours: function (state) {
      if (state.popup.location.ai_f_location_le !== null) {
        // 10분(index: 0) 1시간(index: 5)
        let hour = 24
        let key = Object.keys(state.popup.location.ai_f_location_le)[(hour * 6) - 1]
        let value = state.popup.location.ai_f_location_le[key]
        if (value !== null) {
          value = value > 2.1 ? 2.1 : value
          return numeral(value).format('0.00')
        }
        return '--'
      } else {
        return null
      }
    },
    getMinAiFLocationBwStartTi: function (state) {
      let minVal = 0
      let minIndex = 0
      let isFirst = true
      for (let i = 7; i <= 20; i++) {
        if (state.latest.ai_f_location_bw_start_ti !== null) {
          let locationVal = state.latest.ai_f_location_bw_start_ti['location'+i]
          if (locationVal !== null) {
            if (isFirst) {
                if (locationVal > 0) {
                  minVal = locationVal
                  minIndex = i
                  isFirst = false
                }
            } else {
              if (locationVal < minVal) {
                if (locationVal > 0) {
                  minVal = locationVal
                  minIndex = i
                }
              }
            }
          }
        }
      }
      minVal = minVal < 0 ? 0 : minVal
      return { 'minVal': numeral(minVal / 60).format('0'), 'minIndex': minIndex }
    },
    getLocationState7: function (state) {
      if (state.latest.f_location_state && state.latest.f_location_state.location7) {
        return LOCATION_STATE[state.latest.f_location_state.location7]
      } else {
        return '--'
      }
    },
    getLocationState8: function (state) {
      if (state.latest.f_location_state && state.latest.f_location_state.location8) {
        return LOCATION_STATE[state.latest.f_location_state.location8]
      } else {
        return '--'
      }
    },
    getLocationState9: function (state) {
      if (state.latest.f_location_state && state.latest.f_location_state.location9) {
        return LOCATION_STATE[state.latest.f_location_state.location9]
      } else {
        return '--'
      }
    },
    getLocationState10: function (state) {
      if (state.latest.f_location_state && state.latest.f_location_state.location10) {
        return LOCATION_STATE[state.latest.f_location_state.location10]
      } else {
        return '--'
      }
    },
    getLocationState11: function (state) {
      if (state.latest.f_location_state && state.latest.f_location_state.location11) {
        return LOCATION_STATE[state.latest.f_location_state.location11]
      } else {
        return '--'
      }
    },
    getLocationState12: function (state) {
      if (state.latest.f_location_state && state.latest.f_location_state.location12) {
        return LOCATION_STATE[state.latest.f_location_state.location12]
      } else {
        return '--'
      }
    },
    getLocationState13: function (state) {
      if (state.latest.f_location_state && state.latest.f_location_state.location13) {
        return LOCATION_STATE[state.latest.f_location_state.location13]
      } else {
        return '--'
      }
    },
    getLocationState14: function (state) {
      if (state.latest.f_location_state && state.latest.f_location_state.location14) {
        return LOCATION_STATE[state.latest.f_location_state.location14]
      } else {
        return '--'
      }
    },
    getLocationState15: function (state) {
      if (state.latest.f_location_state && state.latest.f_location_state.location15) {
        return LOCATION_STATE[state.latest.f_location_state.location15]
      } else {
        return '--'
      }
    },
    getLocationState16: function (state) {
      if (state.latest.f_location_state && state.latest.f_location_state.location16) {
        return LOCATION_STATE[state.latest.f_location_state.location16]
      } else {
        return '--'
      }
    },
    getLocationState17: function (state) {
      if (state.latest.f_location_state && state.latest.f_location_state.location17) {
        return LOCATION_STATE[state.latest.f_location_state.location17]
      } else {
        return '--'
      }
    },
    getLocationState18: function (state) {
      if (state.latest.f_location_state && state.latest.f_location_state.location18) {
        return LOCATION_STATE[state.latest.f_location_state.location18]
      } else {
        return '--'
      }
    },
    getLocationState19: function (state) {
      if (state.latest.f_location_state && state.latest.f_location_state.location19) {
        return LOCATION_STATE[state.latest.f_location_state.location19]
      } else {
        return '--'
      }
    },
    getLocationState20: function (state) {
      if (state.latest.f_location_state && state.latest.f_location_state.location20) {
        return LOCATION_STATE[state.latest.f_location_state.location20]
      } else {
        return '--'
      }
    }
  },
  mutations: {
    [GET_LATEST]: function (state, data) {
      state.latest = data
    },
    [GET_LOCATION_BY_JI]: function (state, data) {
      state.popup.location = data
    },
    [GET_SCHEDULE]: function (state, data) {
      state.schedule = data
    },
    [OPEN_POPUP]: function (state, data) {
      state.popup.visible = true
      state.popup.numJi = data
    },
    [PUT_CONTROL_OPERATION]: function (state, data) {
      state.latest.operation_mode = data
    },
    [CLOSE_POPUP]: function (state) {
      state.popup = {
        visible: false,
        numJi: null,
        location: {
          update_time: null,
          d1_in_fr: null,
          d2_in_fr: null,
          f_out_fr: null,
          f_sp: null,
          f_location_le: null,
          ai_f_location_le: null,
          f_location_tb: null,
          f_location_ti: null,
          ai_f_location_ti: null,
          ai_f_location_bw_start_ti: null,
          ai_f_location_end_ti: null,
          f_location_bw_wait_ti: null,
          ai_f_location_schedule: {
            start: null,
            end: null,
            bw_start: null,
            bw_end: null
          }
        }
      }
    },
    [PUT_CONTROL_TI]: function (state, data) {
      state.latest.f_location_ti_set_max = data
    }
  },
  actions: {
    [GET_LATEST]: async function ({ commit }) {
      await axios.get(`${DEV_SERVER}/${URL.FILTER_LATEST}`)
        .then(({ data }) => {
          commit(GET_LATEST, data.latest)
        })
        .catch(error => {
          util.printError(error)
        })
    },
    [GET_LOCATION_BY_JI]: async function ({ commit }, obj) {
      await axios.get(`${DEV_SERVER}/${URL.FILTER_LOCATION}/${obj.numJi}`)
        .then(({ data }) => {
          commit(GET_LOCATION_BY_JI, data.location)
          commit(OPEN_POPUP, obj.numJi)
        })
        .catch(error => {
          util.printError(error)
        })
    },
    [GET_SCHEDULE]: async function ({ commit }) {
      await axios.get(`${DEV_SERVER}/${URL.FILTER_SCHEDULE}`)
        .then(({ data }) => {
          commit(GET_SCHEDULE, data.schedule)
        })
        .catch(error => {
          util.printError(error)
        })
    },
    [PUT_CONTROL_OPERATION]: async function ({ commit }, { operation }) {
      await axios.put(`${DEV_SERVER}/${URL.FILTER_CONTROL_OPERATION}`, { 'operation': operation })
      .then(() => {
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
    [PUT_CONTROL_TI]: async function ({ commit }, { f_location_ti_set_max }) {
      await axios.put(`${DEV_SERVER}/${URL.FILTER_CONTROL_TI}`, { 'f_location_ti_set_max': f_location_ti_set_max })
      .then(() => {
        commit(PUT_CONTROL_TI, f_location_ti_set_max)
        commit('dialog/'+ CLOSE_AI_MODE_DIALOG, null, { root: true })
        let _data = {
          visible: true,
          title: '제어 성공',
          text1: '최대 여과지속시간 설정 완료'
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
    }
  }
}