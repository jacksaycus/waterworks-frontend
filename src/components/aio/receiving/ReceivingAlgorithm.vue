<template>
  <div class="main">
    <!-- 공정 제목, 네비게이터, AI 운전모드, EMS 운전모드 제어 -->
    <div class="top">
      <!-- 탑 네비게이터 -->
      <div class="top-center">
        <div class="top-center__contents">
          <TopNavigator/>
        </div>
      </div>
      <!-- 제목 -->
      <div class="title">착수 세부 현황</div>
      <!-- 우측 AI & EMS 운전 모드 -->
      <div class="right">
        <div class="right-contents">
          <div class="right-contents__text-first">AI 운전 모드</div>
          <div class="right-contents__btn-first">
            <div class="control_box_operation">
              <div v-if="$store.state.receiving.latest.operation_mode === 2" class="control_box_operation__btn control_box_operation__btn--on">AI</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(1, 2)">AI</div>
              <div v-if="$store.state.receiving.latest.operation_mode === 1" class="control_box_operation__btn control_box_operation__btn--on">부분AI</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(1, 1)">부분AI</div>
              <div v-if="$store.state.receiving.latest.operation_mode === 0" class="control_box_operation__btn control_box_operation__btn--on">AI분석</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(1, 0)">AI분석</div>
            </div>
          </div>
        </div>
        
        <!-- 정수지 목표 수위 -->
        <div class="contents-purify">
          <div class="flex-container">
            <div class="contents-purify__text--title">정수지 최대 목표 수위</div>
            <div class="contents-purify__input-box" :class="{'': this.$store.state.receiving.isModifyMode}">
              <input v-if="this.$store.state.receiving.isModifyMode" type="text" 
              :value="this.$store.state.receiving.latestModify.h_target_le_max" v-on:input="updateInput($event, 'h_target_le_max')"/>
              <span class="contents-purify__text--num" v-else>
                {{ this.$store.state.receiving.latestModify.h_target_le_max | numFormat('0.0') }}
                </span>
                <span class="contents-purify__text--degree">m</span>
            </div>
          </div>
          <div class="flex-container">
            <div class="contents-purify__text--title">정수지 최저 목표 수위</div>
            <div class="contents-purify__input-box" :class="{'': this.$store.state.receiving.isModifyMode}">
              <input v-if="this.$store.state.receiving.isModifyMode" type="text" 
              :value="this.$store.state.receiving.latestModify.h_target_le_min" v-on:input="updateInput($event, 'h_target_le_min')"/>
              <span class="contents-purify__text--num" v-else>
                {{ this.$store.state.receiving.latestModify.h_target_le_min | numFormat('0.0') }}
              </span>
              <span class="contents-purify__text--degree">m</span>
            </div>
          </div>
          <!-- <div v-if="$store.state.login.user.accessToken !== null" class="modify-button">
            <div class="custom-icon" @click="updateControl">
              <div :class="[ this.$store.state.receiving.isModifyMode ? 'custom-icon__checkbox' : 'custom-icon__pencil' ]"></div>
            </div>
            <div v-if="this.$store.state.receiving.isModifyMode" class="custom-cancel-icon" style="margin-top: 8px;" @click="cancelControl">
              <div class='custom-cancel-icon__cancel'></div>
            </div>
          </div> -->
        </div>
        <!-- <div class="right-contents">
          <div class="right-contents__text-second">EMS 운전 모드</div>
          <div class="right-contents__btn-second">
            <div class="checkbox" :class="{ 'checked': $store.state.receiving.latest.ems_mode }"></div>
          </div>
        </div> -->
      </div>
    </div>
    <!-- 중앙 컨텐츠 -->
    <div class="contents">
      <ReceivingRightContents/>
    </div>
    <!-- 하단 차트 -->
    <div class="bottom">
      <ReceivingHighchart/>
    </div>
  </div>  
</template>

<script>
import ReceivingRightContents from '@/components/aio/receiving/ReceivingRightContents' 
import ReceivingHighchart from '@/components/aio/receiving/ReceivingHighchart'
import { SET_OVERLAY } from '@/store/aio/modules/aio'
import { GET_RECEIVING_LATEST, PUT_RECEIVING_HISTORY_FLOW_OUT, PUT_RECEIVING_CONTROL_LEVEL } from '@/store/aio/modules/receiving' 
import { PUT_CLEAR_HISTORY_LEVEL } from '@/store/aio/modules/clear' 
import { OPEN_AI_MODE_DIALOG } from '@/store/aio/modules/dialog'
import TopNavigator from '@/components/aio/core/TopNavigator'
export default {
  name:'ReceivingAlgorithm',
  data: () => ({
    timer: null, // API 요청 타이머
  }),
  components: {
    ReceivingRightContents,
    ReceivingHighchart,
    TopNavigator
  },
  methods: {
    /**
     * AI 운전모드 변경시 실행되는 함수
     * 운전모드 변경 확인 Dialog를 띄움
     */
    onClickAICheckbox: function(index, expectedValue) {
      if( this.$store.state.login.user.accessToken !== null ) {
        this.$store.state.selectedBuildingIndex = index
        this.$store.dispatch('dialog/' + OPEN_AI_MODE_DIALOG, expectedValue)
      }
    },
    updateInput: function (event, key) {
      this.$store.state.receiving.latestModify[key] = event.target.value
    },
    updateControl: function() {      
      let waterLevel_min = 0
      let waterLevel_max = 10
      if (this.$store.state.receiving.isModifyMode) {
        if (this.$store.state.receiving.latestModify.h_target_le_max === ''
          || this.$store.state.receiving.latestModify.h_target_le_min === '') {
          this.$store.dispatch('alertDialog/OPEN_DIALOG', { title: '경고', text1: '값을 입력해주세요' })
        } else if (parseFloat(this.$store.state.receiving.latestModify.h_target_le_max) < waterLevel_min || parseFloat(this.$store.state.receiving.latestModify.h_target_le_max) > waterLevel_max) {
          this.$store.dispatch('alertDialog/OPEN_DIALOG', { title: '경고', text1: '정수지 목표 수위 설정 범위', text2: waterLevel_min + ' ~ ' + waterLevel_max })
        
        }else {
          let obj = {}
          obj.h_target_le_max = parseFloat(this.$store.state.receiving.latestModify.h_target_le_max).toFixed(1)
          obj.h_target_le_min = parseFloat(this.$store.state.receiving.latestModify.h_target_le_min).toFixed(1)
          this.$store.dispatch(PUT_RECEIVING_CONTROL_LEVEL, obj)
          this.$store.state.receiving.isModifyMode = !this.$store.state.receiving.isModifyMode
          this.$store.state.receiving.latest.h_target_le_max = parseFloat(this.$store.state.receiving.latestModify.h_target_le_max).toFixed(1)
          this.$store.state.receiving.latest.h_target_le_min = parseFloat(this.$store.state.receiving.latestModify.h_target_le_min).toFixed(1)
        }
      } else {
        this.$store.state.receiving.isModifyMode = !this.$store.state.receiving.isModifyMode
      }
    },
    clickControl: function() {
      this.$store.state.receiving.isModifyMode = !this.$store.state.receiving.isModifyMode
    },
    cancelControl: function() {
      this.$store.state.receiving.latestModify = Object.assign({}, this.$store.state.receiving.latest)
      this.$store.state.receiving.isModifyMode = !this.$store.state.receiving.isModifyMode
    },
  },

  /**
   * 마운트 되는 경우 실행되는 함수
   * 1분 간격으로 API 요청하는 타이머 설정
   */
   created() {
    this.$store.state.selectedBuildingIndex = 1;
  }
  ,
  mounted: function() {
    
    // this.$store.commit('aio/SET_OVERLAY', true)
    // Promise.all([
    //   this.$store.dispatch(GET_RECEIVING_LATEST),
    //   this.$store.dispatch(PUT_RECEIVING_HISTORY_FLOW_OUT),
    //   this.$store.dispatch(PUT_CLEAR_HISTORY_LEVEL)
    // ]).finally(() => {
    //   this.$store.commit('aio/SET_OVERLAY', false)
    // })
    
    // this.timer = setInterval(() => {
    //   this.$store.dispatch(GET_RECEIVING_LATEST),
    //   this.$store.dispatch(PUT_RECEIVING_HISTORY_FLOW_OUT),
    //   this.$store.dispatch(PUT_CLEAR_HISTORY_LEVEL)
    // }, 60 * 1000)
  },
  /**
   * 헤제되는 경우 타이머 해제
   */
  // destroyed: function () {
  //   clearInterval(this.timer)
  // }
}
</script>

<style lang="scss" scoped>
// 상단 컨테이너
.top{
  display: flex;
  width: 100%;
  height: 173px;
  // 네비게이터
  .top-center{
    display: flex;
    justify-content: center;
    position: absolute;
    top:-76px;
    left: 159px;
    width: 1692px;
    height: 249px;
    background-image: url('../../../assets/splashdown/top_center_background.png');
    &__contents {
      margin-top: 100px;
    }
  }
  // 제목
  .title{
    width: 261px;
    height: 100%;
    background-image: url('../../../assets/percolation/main_title.png');
    text-shadow: 0 0 9px #5cafff;
    font-family: "KHNPHUotfR";
    font-size: 30px !important;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
    margin-left: 55px;
    margin-top: 35px;
    background-position-x: right;
  }
}

// 중앙 컨텐츠
.contents{
  display: flex;
  width: 100%;
  height: 430px;
}

// AI 운전모드, EMS 운전모드 제어 박스
.control_box_operation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 140px;
  height: 28px;
  padding: 0px 1px;
  border-radius: 14px;
  background-color: rgba(139, 194, 240, 0.25);
  &__btn {
    height: 22px;
    color: #19274e;
    font-size: 11px;
    margin: 0px 1px;
    padding: 4px 10px 4px 10px;
    border-radius: 11px;
    cursor: pointer;
    &--on {
      box-shadow: 0 0 6px 0 #e8faff;
      background-color: #b4dffa;
    }
    &--off {
      background-color: #417290;
    }
  }
}
// 정수지 목표 수위 박스
.contents-purify {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 87%;
  margin: 15px 0 0 0;
  &__input-box {
    > input {
      width: 65px;
      height: 28px;
      margin: 0 4px 0 0;
      padding: 0 10px 0 0;
      border: solid 1px rgba(157, 191, 255, 0.3);
      outline: none;
      font-family: "LAB디지털" !important;
      text-shadow: 0 0 5px rgba(209, 250, 255, 0.5);
      color: #ccf1ff;
      font-size: 24px;
      text-align: right;
    }
  }
  &__text {
    font-family: KHNPHUotfR;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    &--title {
      text-shadow: 0 0 9px #5cafff;
      line-height: 1.07;
      color: #fff;
    }
    &--num {
      padding: 0 7.5px 0 0;
      text-shadow: 0 0 5px rgba(209, 250, 255, 0.5);
      font-family: "LAB디지털" !important;
      font-size: 24px;
      line-height: 1.21;
      text-align: right;
      color: #ccf1ff;
    }
    &--degree {
      line-height: 2.43;
      text-align: left;
      color: #417db9;
    }
    &--input {
      text-shadow: 0 0 5px rgba(209, 250, 255, 0.5);
      font-family: "LAB디지털" !important;
      font-size: 24px;
      line-height: 1.21;
      text-align: center;
      color: #ccf1ff;
    }
  }
  .flex-container {
    height: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .modify-button {
    position: absolute;
    top: 5px;
    right: -40px;
    cursor: pointer;
  }
}

// 하단 컨테이너
.bottom{
  display: flex;
  width: 100%;
  height: 392px;
}
</style>