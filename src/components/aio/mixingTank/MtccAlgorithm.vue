<template>
  <div class="main">
    <!-- Top 공정 네이게이터 -->
    <div class="top-center">
      <div class="top-center__contents">
        <TopNavigator/>
      </div>
    </div>
    <!-- Top 제목, 운전모드 -->
    <div class="top">
      <div class="title">혼화응집 세부 현황</div>
      <div class="right">
        <div class="right-contents">
          <div class="right-contents__text-first">AI 운전 모드</div>
          <div class="right-contents__btn-first">
            <div class="control_box_operation">
              <div v-if="$store.state.mixing.latest.operation_mode === 2" class="control_box_operation__btn control_box_operation__btn--on">AI</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(3, 2)">AI</div>
              <div v-if="$store.state.mixing.latest.operation_mode === 1" class="control_box_operation__btn control_box_operation__btn--on">부분AI</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(3, 1)">부분AI</div>
              <div v-if="$store.state.mixing.latest.operation_mode === 0" class="control_box_operation__btn control_box_operation__btn--on">AI분석</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(3, 0)">AI분석</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contents">
      <!-- 혼화응집 공정 이미지 -->
      <div class="contents__left">
        <MtccLeftContents/>
      </div>
      <!-- 혼화응집 주요인자, AI응집기 설정 속도 예측, 차트 -->
      <div class="contents__right">
        <MtccRightContents/>
      </div>
    </div>
  </div>  
</template>
<script>
import MtccLeftContents from '@/components/aio/mixingTank/MtccLeftContents' 
import MtccRightContents from '@/components/aio/mixingTank/MtccRightContents' 
//import { SET_OVERLAY } from '@/store'
import { GET_MIXING_LATEST, PUT_MIXING_HISTORY_FC_SP } from '@/store/aio/modules/mixing'
import { PUT_RAW_HISTORY_TE } from '@/store/aio/modules/raw'
import { OPEN_AI_MODE_DIALOG } from '@/store/aio/modules/dialog'
import TopNavigator from '@/components/aio/core/TopNavigator'
export default {
  name:'MtccAlgorithm',
  components: {
    MtccLeftContents,
    MtccRightContents,
    TopNavigator
  },
  methods: {
    /**
     * AI운전모드 변경시 
     * AI운전모드 확인 Dialog 오픈
     * 
     * @param index 공정 index
     * @param expectedValue 변경하고자 하는 운전모드
     */
    // onClickAICheckbox: function(index, expectedValue) {
    //   if( this.$store.state.login.user.accessToken !== null ) {
    //     this.$store.state.selectedBuildingIndex = index
    //     this.$store.dispatch('dialog/' + OPEN_AI_MODE_DIALOG, expectedValue)
    //   }
    // },
  },
  created() {
    this.$store.state.selectedBuildingIndex = 3;
  }
  ,
  /**
   * 마운트시 실행되는 함수
   * 혼화응집에 필요한 API를 주기적으로 요청함
   */
  mounted: function() {
    
   // this.$store.commit('aio/SET_OVERLAY', true)
    Promise.all([
      this.$store.dispatch(GET_MIXING_LATEST),
      this.$store.dispatch(PUT_RAW_HISTORY_TE),
      this.$store.dispatch(PUT_MIXING_HISTORY_FC_SP)
    ]).finally(() => {
    // this.$store.commit('aio/SET_OVERLAY', false)
    })
    
    this.timer = setInterval(() => {
      // this.$store.dispatch(GET_MIXING_LATEST),
      // this.$store.dispatch(PUT_RAW_HISTORY_TE),
      // this.$store.dispatch(PUT_MIXING_HISTORY_FC_SP)
    }, 60 * 1000)
  },
  /**
   * 마운트 해제시 
   * API 요청 타이머 해제
   */
  destroyed: function () {
    clearInterval(this.timer)
  }
}
</script>
<style lang="scss" scoped>
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
    width: 315px;
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
  // .right{
  //   width: 190px;
  //   margin-left: auto;
  //   margin-right: 29px;
  //   .right-contents{
  //     display: flex;
  //     width: 100%;
  //     margin-top: 20px;
  //     &__text-first{
  //       text-shadow: 0 0 9px #5cafff;
  //       font-family: "KHNPHUotfR";
  //       font-size: 18px;
  //       font-weight: normal;
  //       font-stretch: normal;
  //       font-style: normal;
  //       letter-spacing: normal;
  //       text-align: left;
  //       color: #c3eaff;
  //     }
  //     &__btn-first{
  //       width: 60px;
  //       height: 28px;
  //       margin-left: auto;
  //       .checkbox{
  //         position:relative;
  //         cursor:pointer;
  //         appearance:none;
  //         width:60px;
  //         height:28px;
  //         border-radius: 14px;
  //         border: solid 1px #417290;
  //         background-color: rgba(139, 194, 240, 0.25);
  //         outline:none;
  //         transition:0.3s;
  //       }
  //       .checkbox::before{
  //         content:"OFF";
  //         position:absolute;
  //         height:22px;
  //         width:29px;
  //         border-radius:11px;
  //         background:#b4dffa;
  //         top:2px;
  //         left:2px;
  //         transition:0.3s ease-in-out;
  //         font-size: 11px;
  //         font-family: KHNPHUotfR;
  //         font-weight: normal;
  //         font-stretch: normal;
  //         font-style: normal;
  //         line-height: 2;
  //         letter-spacing: normal;
  //         text-align: center;
  //         color: #19274e;
  //         background-color: rgba(122, 155, 175, 0.25);
  //       }
  //       .checkbox:checked::before{
  //         content:"AI";
  //         transform:translateX(25px);
  //         background:#b4dffa;
  //       }
  //       .checkbox:checked{
  //         border-color:#b4dffa;
  //       } 
  //     }
  //     &__text-second{
  //       text-shadow: 0 0 9px #5cafff;
  //       font-family: "KHNPHUotfR";
  //       font-size: 18px;
  //       font-weight: normal;
  //       font-stretch: normal;
  //       font-style: normal;
  //       letter-spacing: normal;
  //       text-align: left;
  //       color: #80b6ff;
  //     }
  //     &__btn-second{
  //       width: 60px;
  //       height: 28px;
  //       margin-left: auto;
  //       .checkbox{
  //         position:relative;
  //         cursor:pointer;
  //         appearance:none;
  //         width:60px;
  //         height:28px;
  //         border-radius: 14px;
  //         border: solid 1px #417290;
  //         background-color: rgba(139, 194, 240, 0.25);
  //         outline:none;
  //         transition:0.3s;
  //       }
  //       .checkbox::before{
  //         content:"OFF";
  //         position:absolute;
  //         height:22px;
  //         width:29px;
  //         border-radius:11px;
  //         background-color: rgba(122, 155, 175, 0.25);
  //         top:2px;
  //         left:2px;
  //         transition:0.3s ease-in-out;
  //         font-size: 11px;
  //         font-family: KHNPHUotfR;
  //         font-weight: normal;
  //         font-stretch: normal;
  //         font-style: normal;
  //         line-height: 2;
  //         letter-spacing: normal;
  //         text-align: center;
  //         color: #19274e;
  //       }
  //       .checkbox:checked::before{
  //         content:"AI";
  //         transform:translateX(25px);
  //         background:#80b6ff;
          
  //       }
  //       .checkbox:checked{
  //         border-color:#80b6ff;
  //       } 
  //     }
  //   }
  // }
}
</style>