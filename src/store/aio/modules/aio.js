import common from '@/store/aio/modules/common'

export const API_SERVER = '/api'
export const JSON_SERVER = '/json'
export const DEV_SERVER = '/api_xai'

export const LATEST_DASHBOARD_ID = 'dashboard/latest'
export const DASHBOARD = 'dashboard'
export const GET_DASHBOARD = 'getDashboard'
export const POST_DASHBOARD = 'postDashboard'
export const PUT_DASHBOARD = 'putDashboard'
export const DEL_DASHBOARD = 'delDashboard'

export const DASHBOARDS = 'dashboards'
export const POST_DASHBOARDS = 'postDashboards'
export const PUT_DASHBOARDS = 'putDashboards'
export const DEL_DASHBOARDS = 'delDashboards'


export const LISTS = 'lists'
export const DEL_LISTS = 'delLists'
export const PUT_LISTS = 'putLists'
export const POST_LISTS = 'postLists'
export const CLEAR_LISTS = 'clearLists'
export const CLEAR_SHAPES = 'clearShapes'

export const PATHS = 'paths'
export const POST_PATHS = 'postPaths'
export const PUT_PATHS = 'putPaths'
export const DEL_PATHS = 'delPaths'

export const SET_OVERLAY = 'SET_OVERLAY'
export const SERVICE_URL = {
  XAI: 'http://localhost:8080',
  EMS: 'http://localhost:8080',
  PMS: 'http://localhost:8080',
  // CCTV: 'http://10.231.21.230:20102/index'
}
export const COLOR_HIGH = 'rgba(212, 110, 250, 0.4)'
export const COLOR_MID = 'rgba(126, 110, 250, 0.4)'
export const PLOT_BANDS_SPRING = [{
  color: COLOR_MID,
  from: 9,
  to: 10,
  status: 'mid'
},{
  color: COLOR_MID,
  from: 12,
  to: 13,
  status: 'mid'
},{
  color: COLOR_MID,
  from: 17,
  to: 23,
  status: 'mid'
},{
  color: COLOR_HIGH,
  from: 10,
  to: 12,
  status: 'high'
},{
  color: COLOR_HIGH,
  from: 13,
  to: 17,
  status: 'high'
}]
export const PLOT_BANDS_SUMMER = [{
  color: COLOR_MID,
  from: 9,
  to: 10,
  status: 'mid'
},{
  color: COLOR_MID,
  from: 12,
  to: 13,
  status: 'mid'
},{
  color: COLOR_MID,
  from: 17,
  to: 23,
  status: 'mid'
},{
  color: COLOR_HIGH,
  from: 10,
  to: 12,
  status: 'high'
},{
  color: COLOR_HIGH,
  from: 13,
  to: 17,
  status: 'high'
}]
export const PLOT_BANDS_WINTER = [{
  color: COLOR_MID,
  from: 9,
  to: 10,
  status: 'mid'
},{
  color: COLOR_MID,
  from: 12,
  to: 17,
  status: 'mid'
},{
  color: COLOR_MID,
  from: 20,
  to: 22,
  status: 'mid'
},{
  color: COLOR_HIGH,
  from: 10,
  to: 12,
  status: 'high'
},{
  color: COLOR_HIGH,
  from: 17,
  to: 20,
  status: 'high'
},{
  color: COLOR_HIGH,
  from: 22,
  to: 23,
  status: 'high'
}]
export const SPRING = 0
export const SUMMER = 1
export const WINTER = 2

const state = {
    currentDashboardTitle: '스마트 정수장 AI 플랫폼', // 타이틀
    showConfirmDialog: false, // 확인 Dialog
    // App.vue router main css
    css: {
      content: {
        paddingLeft: '0px'
      }
    },
    overlay: false, // API 요청시 OverLay Loading Image
    backgroundIndex: 1, // 배경 상태 셀렉터

    selectedBuildingIndex: 0, // 현재 선택되어 있는 공정(default. 착수)
    isSelectedMainMenuIndex7AiOn: true, // Dashboard.vue 탈수기동 AI모드
    isSelectedMainMenuIndex9AiOn: true, // Dashboard.vue 농축조 AI모드
  }

  const getters = {
    /**
     * 상태에 따라 배경화면 선택
     * @param state 상태
     * @returns
     */
    backgroundImage: function (state) {
      if (state.backgroundIndex === 1) {
        return 'common'
      } else {
        return 'disinfection'
      }
    },
  }

  const mutations = {
    SET_OVERLAY (state, data) {
      state.overlay = data
    }
  }

  const actions = {
  }


const aio = {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};

export default aio;