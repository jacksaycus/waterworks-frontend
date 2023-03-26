// dialog store
export const OPEN_AI_MODE_DIALOG = 'OPEN_AI_MODE_DIALOG'
export const CLOSE_AI_MODE_DIALOG = 'CLOSE_AI_MODE_DIALOG'
export const OPEN_ALARM_NOTIFY_POPUP = 'OPEN_ALARM_NOTIFY_POPUP'
export const CLOSE_ALARM_NOTIFY_POPUP = 'CLOSE_ALARM_NOTIFY_POPUP'
export const OPEN_AI_FILTER_AND_GAC_SCHEDULE_POPUP = 'OPEN_AI_FILTER_AND_GAC_SCHEDULE_POPUP'
export const CLOSE_AI_FILTER_AND_GAC_SCHEDULE_POPUP = 'CLOSE_AI_FILTER_AND_GAC_SCHEDULE_POPUP'
export const OPEN_AI_MODE_OF_JI_DIALOG = 'OPEN_AI_MODE_OF_JI_DIALOG'
export const CLOSE_AI_MODE_OF_JI_DIALOG = 'CLOSE_AI_MODE_OF_JI_DIALOG'
export default {
  namespaced: true,
  state: {
    aiMode: {
      visible: false,
      expectedValue: null,
      disinfectionIndex: null
    },
    aiModeOfJi: {
      visible: false,
      number: null
    },
    aiFilterNGACSchedule: {
      visible: false
    },
    alarmNotify: {
      visible: true
    }
  },
  mutations: {
    [OPEN_AI_MODE_DIALOG]: function(state, data) {
      state.aiMode.expectedValue = data
      state.aiMode.visible = true
    },
    [OPEN_AI_MODE_OF_JI_DIALOG]: function(state) {
      state.aiModeOfJi.visible = true
    },
    [CLOSE_AI_MODE_DIALOG]: function(state) {
      state.aiMode.visible = false
    },
    [CLOSE_AI_MODE_OF_JI_DIALOG]: function(state) {
      state.aiModeOfJi.visible = false
    },
    [OPEN_AI_FILTER_AND_GAC_SCHEDULE_POPUP]: function(state) {
      state.aiFilterNGACSchedule.visible = true
    },
    [CLOSE_AI_FILTER_AND_GAC_SCHEDULE_POPUP]: function(state) {
      state.aiFilterNGACSchedule.visible = false
    },
    [OPEN_ALARM_NOTIFY_POPUP]: function(state) {
      state.alarmNotify.visible = true
    },
    [CLOSE_ALARM_NOTIFY_POPUP]: function(state) {
      state.alarmNotify.visible = false
    },
  },
  actions: {
    [OPEN_AI_MODE_DIALOG]: function ({ commit }, value) {
      commit(OPEN_AI_MODE_DIALOG, value)
    },
    [OPEN_AI_MODE_OF_JI_DIALOG]: function ({ commit }) {
      commit(OPEN_AI_MODE_OF_JI_DIALOG)
    },
    [CLOSE_AI_MODE_DIALOG]: function ({ commit }) {
      commit(CLOSE_AI_MODE_DIALOG)
    },
    [OPEN_AI_FILTER_AND_GAC_SCHEDULE_POPUP]: function ({ commit }) {
      commit(OPEN_AI_FILTER_AND_GAC_SCHEDULE_POPUP)
    },
    [CLOSE_AI_FILTER_AND_GAC_SCHEDULE_POPUP]: function ({ commit }) {
      commit(CLOSE_AI_FILTER_AND_GAC_SCHEDULE_POPUP)
    },
    [OPEN_ALARM_NOTIFY_POPUP]: function ({ commit }) {
      commit(OPEN_ALARM_NOTIFY_POPUP)
    },
    [CLOSE_ALARM_NOTIFY_POPUP]: function ({ commit }) {
      commit(CLOSE_ALARM_NOTIFY_POPUP)
    },
    [CLOSE_AI_MODE_OF_JI_DIALOG]: function ({commit}) {
      commit(CLOSE_AI_MODE_OF_JI_DIALOG)
    }
  }
}