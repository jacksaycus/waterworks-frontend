<template>
  <div class="main">
    <!-- 혼화응집 공정 이미지 -->
    <div class="contents-img">
      <div class="one-line-water-h-flow one-flow">
        <div class="buble delay1"></div>
        <div class="buble delay2"></div>
        <div class="buble delay3"></div>
      </div>
      <div class="one-line-water-h-flow two-flow">
        <div class="buble delay1"></div>
        <div class="buble delay2"></div>
        <div class="buble delay3"></div>
      </div>
      <!-- 지 선택 박스 -->
      <div class="select-box">
        <div v-for="index in [2,3,4,5,6,7,8,9]" :key="index" class="select-box__element" @click="$store.state.mixing.selectedFCLocation = index" :class="{ 'select-box__element--focused': $store.state.mixing.selectedFCLocation === index}"><span>{{ index }}지</span></div>
      </div>
      <div class="contents-img-box one">
        <div class="contents-img-box__text">RPM</div>
        <div class="contents-img-box__num">{{ this.getFCLocationSpeed(this.$store.state.mixing.selectedFCLocation).step1['1'] | numFormat('0') }}</div>
        <div class="contents-img-box__text">Hz</div>
      </div>
      <div class="contents-img-box two">
        <div class="contents-img-box__text">RPM</div>
        <div class="contents-img-box__num">{{ this.getFCLocationSpeed(this.$store.state.mixing.selectedFCLocation).step2['1'] | numFormat('0') }}</div>
        <div class="contents-img-box__text">Hz</div>
      </div>
      <div class="contents-img-box three">
        <div class="contents-img-box__text">RPM</div>
        <div class="contents-img-box__num">{{ this.getFCLocationSpeed(this.$store.state.mixing.selectedFCLocation).step3['1'] | numFormat('0') }}</div>
        <div class="contents-img-box__text">Hz</div>
      </div>
    </div>
    <!-- 계열별 지 운영 상태 -->
    <div class="contents-container">
      <!-- 1계열 지별 상태 -->
      <div class="box">
        <div class="box-top">1계열</div>
        <div class="box-title">
          <div class="box-title__text">#1</div>
          <div class="box-title__text margin-side-19">#2</div>
          <div class="box-title__text">#3</div>
        </div>
        <div v-for="index in [2, 3, 4, 5]" :key="index" class="box-contents">
          <div class="box-contents__ji">{{ index }}지</div>
          <div class="box-contents-led">
            <div :class="[ getFCLocationState(index).step1['1'] ? 'box-contents-led__on' : 'box-contents-led__off']"></div>
            <div class="margin-h-auto" :class="[ getFCLocationState(index).step1['2'] ? 'box-contents-led__on' : 'box-contents-led__off']"></div>
            <div :class="[ getFCLocationState(index).step1['3'] ? 'box-contents-led__on' : 'box-contents-led__off']"></div>
          </div>
          <div class="box-contents-led">
            <div :class="[ getFCLocationState(index).step2['1'] ? 'box-contents-led__on' : 'box-contents-led__off']"></div>
            <div class="margin-h-auto" :class="[ getFCLocationState(index).step2['2'] ? 'box-contents-led__on' : 'box-contents-led__off']"></div>
            <div :class="[ getFCLocationState(index).step2['3'] ? 'box-contents-led__on' : 'box-contents-led__off']"></div>
          </div>
          <div class="box-contents-led last-padding-left">
            <div :class="[ getFCLocationState(index).step3['1'] ? 'box-contents-led__on' : 'box-contents-led__off']"></div>
            <div class="margin-h-auto" :class="[ getFCLocationState(index).step3['2'] ? 'box-contents-led__on' : 'box-contents-led__off']"></div>
            <div :class="[ getFCLocationState(index).step3['3'] ? 'box-contents-led__on' : 'box-contents-led__off']"></div>
          </div>
        </div>
      </div>
      <!-- 2계열 지별 상태 -->
      <div class="box">
        <div class="box-top">2계열</div>
        <div class="legend-box">
          <div class="legend-box__legend legend-box__legend--bw">운영</div>
          <div class="legend-box__legend legend-box__legend--schedule">미운영</div>
        </div>
        <div class="box-title">
          <div class="box-title__text">#1</div>
          <div class="box-title__text margin-side-19">#2</div>
          <div class="box-title__text">#3</div>
        </div>
        <div v-for="index in [6, 7, 8, 9]" :key="index" class="box-contents">
          <div class="box-contents__ji">{{ index }}지</div>
          <div class="box-contents-led">
            <div :class="[ getFCLocationState(index).step1['1'] ? 'box-contents-led__on' : 'box-contents-led__off']"></div>
            <div class="margin-h-auto" :class="[ getFCLocationState(index).step1['2'] ? 'box-contents-led__on' : 'box-contents-led__off']"></div>
            <div :class="[ getFCLocationState(index).step1['3'] ? 'box-contents-led__on' : 'box-contents-led__off']"></div>
          </div>
          <div class="box-contents-led">
            <div :class="[ getFCLocationState(index).step2['1'] ? 'box-contents-led__on' : 'box-contents-led__off']"></div>
            <div class="margin-h-auto" :class="[ getFCLocationState(index).step2['2'] ? 'box-contents-led__on' : 'box-contents-led__off']"></div>
            <div :class="[ getFCLocationState(index).step2['3'] ? 'box-contents-led__on' : 'box-contents-led__off']"></div>
          </div>
          <div class="box-contents-led last-padding-left">
            <div :class="[ getFCLocationState(index).step3['1'] ? 'box-contents-led__on' : 'box-contents-led__off']"></div>
            <div class="margin-h-auto" :class="[ getFCLocationState(index).step3['2'] ? 'box-contents-led__on' : 'box-contents-led__off']"></div>
            <div :class="[ getFCLocationState(index).step3['3'] ? 'box-contents-led__on' : 'box-contents-led__off']"></div>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>
<script>
export default {
  name: 'MtccLeftContents',
  data: () => ({}),
  methods: {
    /**
     * 선택된 지의 속도를 반환힘
     * 
     * @param location 지
     * @return 선택된 지의 현재 속도
     */
    getFCLocationSpeed: function (location) {
      return this.$store.state.mixing.latest['d_fc_location_sp' + location]
    },
    /**
     * 선택된 지의 상태를 반환힘
     * 
     * @param location 지
     * @return 선택된 지의 현재 상태
     */
    getFCLocationState: function (location) {
      return this.$store.state.mixing.latest['d_fc_location_state' + location]
    }
  }
}
</script>
<style lang="scss" scoped>
.one-flow{
  top: 378px;
  left: 80px;
}
.two-flow{
  top: 378px;
  left: 614px;
}
.one-line-water-h-flow{ 
  position: absolute;
  width: 136px;
  height: 8px;
  .buble {
    position: absolute;
    width: 136px;
    height: 8px;
    background-image: url('../../../assets/splashdown/water_h_flow.png');
    background-position: -35px 50%;
    animation-name: one-line-h-flow;
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    opacity: 0;
  }
  .delay1 {
    animation-delay: 0s;
  }
  .delay2 {
    animation-delay: 1s;
  }
  .delay3 {
    animation-delay: 2s;
  }
}
@keyframes one-line-h-flow{ 
  0% {opacity:0; transform: translateX(0px);}
  25% {opacity:1;}
  50% {opacity:0;}
  90% {opacity:0; }
  100% {opacity:0; transform: translateX(70px);}
}
.main{
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  .contents-container{
    display: flex;
    width: 586px;
    height: 475px;
    .box{
      position: relative;
      width: 50%;
      height: 100%;
      padding-top: 35px;
      .box-contents{
        display: flex;
        align-items: center;
        height: 60px;
        margin-bottom: 27px;
        .last-padding-left{
            padding-left: 9px;
          }
        .box-contents-led{
          width: 85px;
          height: 100%;
          display: flex;
          flex-flow: column;
          align-items:center;
          justify-content: center;
          .margin-h-auto{
            margin: auto 0;
          }
          &__on{
            width: 12px;
            height: 12px;
            box-shadow: 0 0 6px 0 rgba(185, 75, 78, 1);
            // background-color: rgba(0, 171, 164, 0.8);
            background-color: rgba(185, 75, 78, 0.8);
            border-radius: 12px;
          }
          &__off{
            width: 12px;
            height: 12px;
            box-shadow: 0 0 6px 0 rgba(0, 171, 164, 1);;
            // background-color: #2f3c4b;
            background-color: rgba(0, 171, 164, 0.8);
            border-radius: 12px;
          }
        }
        &__ji{
          width: 40px;
          text-shadow: 0 0 9px #5cafff;
          font-size: 16px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 2.13;
          letter-spacing: normal;
          text-align: center;
          color: #c3eaff;
          // cursor: pointer;
        }
      }
      .box-title{
        display: flex;
        height: 30px;
        margin: 23px 0 23px 47px;
        .margin-side-19{
          margin: 0 15px ;
        }
        &__text{
          width: 72px;
          height: 30px;
          text-shadow: 0 0 9px #5cafff;
          font-size: 14px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 2.14;
          letter-spacing: normal;
          text-align: center;
          color: #c3eaff;
          background-image: url('../../../assets/mixingTank/top.png');
        }
      }
      .box-top{
        height: 35px;
        background-image: url('../../../assets/mixingTank/top_title.png');
        text-shadow: 0 0 9px #5cafff;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 2.3;
        letter-spacing: normal;
        text-align: left;
        color: #c3eaff;
        padding-left: 50px;
        margin-left: 40px;
      }
      .legend-box{
        position:absolute;
        right: 0px;
        top: 30px;
        display: flex;
        margin-top: 12px;
        margin-right: 15px;
        margin-left: auto;
        flex: 1;
        justify-content: flex-end;
        &__legend {
          // width: 30.9px;
          height: 20px;
          // border: solid 1px #b4dffa;
          // background-color: rgba(139, 194, 240, 0.25);
          font-size: 14px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          // line-height: 1.8;
          letter-spacing: normal;
          text-align: center;
          color: #fff;
          // cursor: pointer;
          &:before {
            content: "";
            position: relative;
            top: 4px;
            left: 1px;
            float: left;
            width: 12px;
            height: 12px;
            margin-right: 5px;
            border-radius: 12px;
          }
          &--schedule:before {
            margin-left: 10px;
            box-shadow: 0 0 6px 0 #00aba4;
            background-color: rgba(0, 171, 164, 0.8);
          }
          &--bw:before {
            box-shadow: 0 0 6px 0 #b94b4e;
            background-color: rgba(185, 75, 78, 0.8);
          }
        }
        .on {
          box-shadow: 0 0 10px 0 rgba(172, 207, 255, 0.7);
          border: solid 1px #b4dffa;
          background-color: rgba(139, 194, 240, 0.4);
        }
      }
    }
  }
  .contents-img{
    width: 586px;
    height: 289px;
    background-image: url('../../../assets/mixingTank/left_contents.png');
    background-position-y: 56px;
    // margin: 15px 0;
    .select-box{
      display: flex;
      justify-content: space-between;
      margin: 0 10px;
      &__element{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        width: 60px;
        height: 30px;
        border: solid 1px #b4dffa;
        background-color: rgba(139, 194, 240, 0.25);
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.8;
        letter-spacing: normal;
        text-align: center;
        color: #fff;
        cursor: pointer;
        &--focused {
          box-shadow: 0 0 10px 0 rgba(172, 207, 255, 0.7);
          border: solid 1px #b4dffa;
          background-color: rgba(139, 194, 240, 0.4);
        }
      }
    }
    .one{
      top: 380px;
      left: 153px;
    }
    .two{
      top: 380px;
      left: 312px;
    }
    .three{
      top: 380px;
      left: 475px;
    }
    .contents-img-box{
      position: absolute;
      display: flex;
      width: 130.9px;
      height: 42.9px;
      border: solid 1px rgba(157, 191, 255, 0.5);
      background-color: rgba(2, 42, 118, 0.8);
      justify-content: center;
      align-items: center;
      &__text{
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        text-align: left;
        color: #c3eaff;
      }
      &__num{
        width: 50px;
        text-shadow: 0 0 5px rgba(209, 250, 255, 0.5);
        font-family: "LAB디지털" !important;
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        text-align: center;
        color: #ccf1ff;
      }
    }
  }
}
</style>