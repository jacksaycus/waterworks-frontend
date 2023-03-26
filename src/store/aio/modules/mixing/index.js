// 혼화응집 store
import axios from 'axios'
import { DEV_SERVER } from '@/store/aio/modules/aio'
import { util } from '@/service/utils'

const URL = {
  MIXING_LATEST: 'mixing/latest',
  MIXING_HISTORY_FC_SP: 'mixing/history/fc/sp',
  MIXING_CONTROL_OPERATION: 'mixing/control/operation',
  MIXING_CONTROL_AI: 'mixing/control/ai'
}
export const GET_MIXING_LATEST = URL.MIXING_LATEST + '/get'
export const PUT_MIXING_HISTORY_FC_SP = URL.MIXING_HISTORY_FC_SP + '/put'
export const PUT_MIXING_CONTROL_OPERATION = URL.MIXING_CONTROL_OPERATION + '/put'
export const PUT_MIXING_CONTROL_AI = URL.MIXING_CONTROL_AI + '/put'
const GET_LATEST = GET_MIXING_LATEST.substr(GET_MIXING_LATEST.indexOf('/') + 1)
const PUT_HISTORY_FC_SP = PUT_MIXING_HISTORY_FC_SP.substr(PUT_MIXING_HISTORY_FC_SP.indexOf('/') + 1)
const PUT_CONTROL_OPERATION = PUT_MIXING_CONTROL_OPERATION.substr(PUT_MIXING_CONTROL_OPERATION.indexOf('/') + 1)
const PUT_CONTROL_AI = PUT_MIXING_CONTROL_AI.substr(PUT_MIXING_CONTROL_AI.indexOf('/') + 1)
const SET_MODIFYED_FROM_LATEST = "setModifyedFromLatest"

import { CLOSE_AI_MODE_DIALOG } from '@/store/aio/modules/dialog'
export default {
  namespaced: true,
  state: {
    isModifyMode: false,
    selectedFCLocation: 2,
    latest: {
      update_time: null,
      operation_mode: null,
      b_te: null,
      b_de: null,
      b_viscosity: null,
      d_fc_lt: null,
      d_rq: null,
      d_pn: null,
      d_g_value1: null,
      d_g_vlaue2: null,
      d_g_value3: null,
      d_fc_location_state2: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      d_fc_location_state3: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      d_fc_location_state4: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      d_fc_location_state5: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      d_fc_location_state6: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      d_fc_location_state7: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      d_fc_location_state8: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      d_fc_location_state9: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      d_fc_location_sp2: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      d_fc_location_sp3: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      d_fc_location_sp4: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      d_fc_location_sp5: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      d_fc_location_sp6: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      d_fc_location_sp7: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      d_fc_location_sp8: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      d_fc_location_sp9: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      ai_d_fc_location_sp2: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      ai_d_fc_location_sp3: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      ai_d_fc_location_sp4: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      ai_d_fc_location_sp5: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      ai_d_fc_location_sp6: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      ai_d_fc_location_sp7: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      ai_d_fc_location_sp8: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      ai_d_fc_location_sp9: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      }
    },
    latestModify: {
      update_time: null,
      operation_mode: null,
      b_te: null,
      b_de: null,
      b_viscosity: null,
      d_fc_lt: null,
      d_rq: null,
      d_pn: null,
      d_g_value1: null,
      d_g_vlaue2: null,
      d_g_value3: null,
      d_fc_location_state2: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      d_fc_location_state3: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      d_fc_location_state4: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      d_fc_location_state5: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      d_fc_location_state6: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      d_fc_location_state7: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      d_fc_location_state8: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      d_fc_location_state9: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      d_fc_location_sp2: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      d_fc_location_sp3: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      d_fc_location_sp4: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      d_fc_location_sp5: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      d_fc_location_sp6: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      d_fc_location_sp7: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      d_fc_location_sp8: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      d_fc_location_sp9: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      ai_d_fc_location_sp2: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      ai_d_fc_location_sp3: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      ai_d_fc_location_sp4: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      ai_d_fc_location_sp5: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      ai_d_fc_location_sp6: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      ai_d_fc_location_sp7: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      ai_d_fc_location_sp8: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      },
      ai_d_fc_location_sp9: {
        step1: {
          1: null,
          2: null,
          3: null
        },
        step2: {
          1: null,
          2: null,
          3: null
        },
        step3: {
          1: null,
          2: null,
          3: null
        }
      }
    },
    fc_sp: {
      location2: {
        step1: null,
        step2: null,
        step3: null
      },
      location3: {
        step1: null,
        step2: null,
        step3: null
      },
      location4: {
        step1: null,
        step2: null,
        step3: null
      },
      location5: {
        step1: null,
        step2: null,
        step3: null
      },
      location6: {
        step1: null,
        step2: null,
        step3: null
      },
      location7: {
        step1: null,
        step2: null,
        step3: null
      },
      location8: {
        step1: null,
        step2: null,
        step3: null
      },
      location9: {
        step1: null,
        step2: null,
        step3: null
      }
    }
  },
  getters: {
  },
  mutations: {
    [GET_LATEST]: function (state, data) {
      state.latest = data
      if (state.isModifyMode === false) {
        state.latestModify = Object.assign({}, data)
      }
    },
    [SET_MODIFYED_FROM_LATEST]: function (state) {
      state.latestModify = Object.assign({}, state.latest)
    },
    [PUT_HISTORY_FC_SP]: function (state, data) {
      state.fc_sp = data
    },
    [PUT_CONTROL_OPERATION]: function (state, data) {
      state.latest.operation_mode = data
    },
    [PUT_CONTROL_AI]: function(state, obj) {
      state.latest.d_g_value1 = obj.d_g_value_step1
      state.latest.d_g_value2 = obj.d_g_value_step2
      state.latest.d_g_value3 = obj.d_g_value_step3
    }
  },
  actions: {
    [GET_LATEST]: async function ({ commit }) {
      await axios.get(`${DEV_SERVER}/${URL.MIXING_LATEST}`)
        .then(({ data }) => {
          commit(GET_LATEST, data.latest)
        })
        .catch(error => {
          util.printError(error)
        })
    },
    [PUT_HISTORY_FC_SP]: async function ({ commit }) {
      let nowTimestamp = Date.now()
      let oneDayTimestamp = 1000 * 60 * 60 * 24
      await axios.put(`${DEV_SERVER}/${URL.MIXING_HISTORY_FC_SP}`, { 'start_time': new Date(nowTimestamp - oneDayTimestamp).toISOString(), 'end_time': new Date(nowTimestamp).toISOString() })
        .then(({ data }) => {
          commit(PUT_HISTORY_FC_SP, data.fc_sp)
        })
        .catch(error => {
          util.printError(error)
        })
    },
    [PUT_CONTROL_OPERATION]: async function ({ commit }, { operation }) {
      await axios.put(`${DEV_SERVER}/${URL.MIXING_CONTROL_OPERATION}`, { 'operation': operation })
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
      })
    },
    [PUT_CONTROL_AI]: async function ({ commit }, obj) {
      await axios.put(`${DEV_SERVER}/${URL.MIXING_CONTROL_AI}`, obj)
      .then(() => {
        commit(PUT_CONTROL_AI, obj)
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
  }
}