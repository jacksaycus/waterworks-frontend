<template>
  <div class="main">
    <div class="top-center">
      <div class="water-v-flow-one-img one">
        <div class="buble-v delay1"></div>
        <div class="buble-v delay2"></div>
        <div class="buble-v delay3"></div>
      </div>
      <div class="water-v-flow-one-img two">
        <div class="buble-v delay1"></div>
        <div class="buble-v delay2"></div>
        <div class="buble-v delay3"></div>
      </div>
      <div class="water-v-flow-one-img three">
        <div class="buble-v delay1"></div>
        <div class="buble-v delay2"></div>
        <div class="buble-v delay3"></div>
      </div>
      <div class="top-center__contents">
        <TopNavigator/>
      </div>
    </div>
    <div class="top">
      <div class="title">소독 세부 현황</div>
      <div class="right">
        <div class="right-contents">
          <div v-if="this.$store.state.disinfection.selectedDisinfectionIndex === 1" class="right-contents__text-first">AI 운전 모드(전)</div>
          <div v-if="this.$store.state.disinfection.selectedDisinfectionIndex === 2" class="right-contents__text-first">AI 운전 모드(중)</div>
          <div v-if="this.$store.state.disinfection.selectedDisinfectionIndex === 3" class="right-contents__text-first">AI 운전 모드(후)</div>
          <div class="right-contents__btn-first">
            <div v-if="this.$store.state.disinfection.selectedDisinfectionIndex === 1" class="control_box_operation">
              <div v-if="$store.state.disinfection.latest.pre_operation_mode === 2" class="control_box_operation__btn control_box_operation__btn--on">AI</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(7, 2, 'pre')">AI</div>
              <div v-if="$store.state.disinfection.latest.pre_operation_mode === 1" class="control_box_operation__btn control_box_operation__btn--on">부분AI</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(7, 1, 'pre')">부분AI</div>
              <div v-if="$store.state.disinfection.latest.pre_operation_mode === 0" class="control_box_operation__btn control_box_operation__btn--on">AI분석</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(7, 0, 'pre')">AI분석</div>
            </div>
            <div v-if="this.$store.state.disinfection.selectedDisinfectionIndex === 2" class="control_box_operation">
              <div v-if="$store.state.disinfection.latest.peri_operation_mode === 2" class="control_box_operation__btn control_box_operation__btn--on">AI</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(7, 2, 'peri')">AI</div>
              <div v-if="$store.state.disinfection.latest.peri_operation_mode === 1" class="control_box_operation__btn control_box_operation__btn--on">부분AI</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(7, 1, 'peri')">부분AI</div>
              <div v-if="$store.state.disinfection.latest.peri_operation_mode === 0" class="control_box_operation__btn control_box_operation__btn--on">AI분석</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(7, 0, 'peri')">AI분석</div>
            </div>
            <div v-if="this.$store.state.disinfection.selectedDisinfectionIndex === 3" class="control_box_operation">
              <div v-if="$store.state.disinfection.latest.post_operation_mode === 2" class="control_box_operation__btn control_box_operation__btn--on">AI</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(7, 2, 'post')">AI</div>
              <div v-if="$store.state.disinfection.latest.post_operation_mode === 1" class="control_box_operation__btn control_box_operation__btn--on">부분AI</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(7, 1, 'post')">부분AI</div>
              <div v-if="$store.state.disinfection.latest.post_operation_mode === 0" class="control_box_operation__btn control_box_operation__btn--on">AI분석</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(7, 0, 'post')">AI분석</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contents">
      <div class="contents__left">
        <DisinfectionLeftContentsPre v-if="this.$store.state.disinfection.selectedDisinfectionIndex === 1"/>
        <DisinfectionLeftContentsMid v-if="this.$store.state.disinfection.selectedDisinfectionIndex === 2"/>
        <DisinfectionLeftContentsAfter v-else-if="this.$store.state.disinfection.selectedDisinfectionIndex === 3"/>
      </div>
      <div class="contents__right">
        <DisinfectionRightContentsPre v-if="this.$store.state.disinfection.selectedDisinfectionIndex === 1"/>
        <DisinfectionRightContentsMid v-if="this.$store.state.disinfection.selectedDisinfectionIndex === 2"/>
        <DisinfectionRightContentsAfter v-if="this.$store.state.disinfection.selectedDisinfectionIndex === 3"/>
      </div>
    </div>
  </div>  
</template>
<script>
import DisinfectionLeftContentsPre from '@/components/aio/disinfection/DisinfectionLeftContentsPre' 
import DisinfectionRightContentsPre from '@/components/aio/disinfection/DisinfectionRightContentsPre'
import DisinfectionLeftContentsMid from '@/components/aio/disinfection/DisinfectionLeftContentsMid'
import DisinfectionRightContentsMid from '@/components/aio/disinfection/DisinfectionRightContentsMid'
import DisinfectionLeftContentsAfter from '@/components/aio/disinfection/DisinfectionLeftContentsAfter' 
import DisinfectionRightContentsAfter from '@/components/aio/disinfection/DisinfectionRightContentsAfter'
// import { SET_OVERLAY } from '@/store'
import { GET_DISINFECTION_LATEST, PUT_DISINFECTION_HISTORY_EVAPORATION, PUT_DISINFECTION_HISTORY_CORRECTED_POST } from '@/store/aio/modules/disinfection'
import { PUT_SEDIMENTATION_HISTORY_CL } from '@/store/aio/modules/sedimentation'
import { PUT_CLEAR_HISTORY_CL} from '@/store/aio/modules/clear'
import TopNavigator from '@/components/aio/core/TopNavigator'
import { OPEN_AI_MODE_DIALOG } from '@/store/aio/modules/dialog'
export default {
  name:'DisinfectionAlgorithmI',
  data: () => ({
    intervalTime: 1000 * 60
  }),
  components: {
    DisinfectionLeftContentsPre,
    DisinfectionLeftContentsAfter,
    DisinfectionLeftContentsMid,
    DisinfectionRightContentsMid,
    DisinfectionRightContentsPre,
    DisinfectionRightContentsAfter,
    TopNavigator
  },
  methods: {
    onClickAICheckbox: function(index, expectedValue, disinfectionIndex) {
      //if( this.$store.state.login.user.accessToken !== null ) {
        this.$store.state.selectedBuildingIndex = index
        this.$store.state.dialog.aiMode.disinfectionIndex = disinfectionIndex
        this.$store.dispatch('dialog/' + OPEN_AI_MODE_DIALOG, expectedValue)
      //}
    }
  },
  created(){
    this.$store.state.selectedBuildingIndex = 7;
  }
  ,
  mounted: function () {
    
    // this.$store.commit(SET_OVERLAY, true)
    // Promise.all([
    //   this.$store.dispatch(GET_DISINFECTION_LATEST),
    //   this.$store.dispatch(PUT_DISINFECTION_HISTORY_EVAPORATION),
    //   this.$store.dispatch(PUT_SEDIMENTATION_HISTORY_CL),
    //   this.$store.dispatch(PUT_DISINFECTION_HISTORY_CORRECTED_POST),
    //   this.$store.dispatch(PUT_CLEAR_HISTORY_CL)
    // ]).finally(() => {
    //   this.$store.commit(SET_OVERLAY, false)
    // })
    
    // this.timer = setInterval(() => {
    //   this.$store.dispatch(GET_DISINFECTION_LATEST),
    //   this.$store.dispatch(PUT_DISINFECTION_HISTORY_EVAPORATION),
    //   this.$store.dispatch(PUT_SEDIMENTATION_HISTORY_CL)
    //   this.$store.dispatch(PUT_DISINFECTION_HISTORY_CORRECTED_POST),
    //   this.$store.dispatch(PUT_CLEAR_HISTORY_CL)
    // }, this.intervalTime)
  },
  destroyed: function () {
    clearInterval(this.timer)
  }
}
</script>
<style lang="scss" scoped>
.one-value{
  top:75px;
  left: 483px;
}
.two-value{
  top:75px;
  left: 816px;
}
.three-value{
  top:75px;
  left: 1098px;
}
.four-value{
  top:188px;
  left: 503px;
}
.value-box{
  position: absolute;
  display: flex;
  align-items: center;
  &__title{
    text-shadow: 0 0 9px #5cafff;
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.1;
    letter-spacing: normal;
    text-align: center;
    color: #96c4ff;
  }
  &__img-one{
    width: 35px;
    height: 38px;
    background-image: url('../../../assets/disinfection/one_circle.png');
  }
  &__img-two{
    width: 35px;
    height: 38px;
    background-image: url('../../../assets/disinfection/two_circle.png');
  }
  &__value{
    text-shadow: 0 0 9px #5cafff;
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.1;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
  }
}
.one{
  top: 76px;
  left: 368px;
}
.two{
  top: 76px;
  left: 791px;
}
.three{
  top: 76px;
  left: 1270px;
}
.water-v-flow-one-img{
  position: absolute;
  width: 6px;
  height: 50px;
  .buble-v {
    position: absolute;
    width: 6px;
    height: 41px;
    background-image: url('../../../assets/disinfection/v_water_flow.png');
    background-position:50% -28px;
    animation-name: arrow-two;
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    opacity: 0;
  }
  .delay1 {
    animation-delay: 0s;
  }
  .delay2 {
    animation-delay: 2s;
  }
  .delay3 {
    animation-delay: 4s;
  }
}
@keyframes arrow-two{ 
  0% {opacity:0; transform: translateY(0px);}
  20% {opacity:0; }
  90% {opacity:1; }
  100% {opacity:0; transform: translateY(50px);}
}
.bottom{
  display: flex;
  width: 100%;
  height: 392px;
}
.contents{
  display: flex;
  width: 100%;
  height: 794px;
  padding: 0 40px 0 86px;
}
.top-center{
  display: flex;
  justify-content: center;
  position: absolute;
  top:-76px;
  left: 159px;
  width: 1692px;
  height: 249px;
  background-image: url('../../../assets/splashdown/top_center_background.png');
  .timer{
    width: 72px;
    height: 72px;
    margin-top: 110px;
    margin-right: 14px;
  }
  &__contents{
    margin-top: 100px;
  }
}
.top{
  display: flex;
  width: 100%;
  height: 173px;
  .title-down{
    position: absolute;
    width: 177px;
    height: 53px;
    background-image: url('../../../assets/percolation/title_down.png');
    left: 35px;
    top: 167px;
    &__text{
      text-shadow: 0 0 9px #5cafff;
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 3;
      letter-spacing: normal;
      text-align: center;
      color: #fff;
    }
    &__digital{
      text-shadow: 0 0 5px rgba(209, 250, 255, 0.5);
      font-family: "LAB디지털" !important;
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.17;
      letter-spacing: normal;
      text-align: center;
      color: #ccf1ff;
      margin: 0 5px;
    }
  }
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
</style>