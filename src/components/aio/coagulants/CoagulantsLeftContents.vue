<template>
  <div class="main">
    <div class="contents-img">
      <!-- APAC 물 흐름 -->
      <div class="apac-line" :style="{ display: this.getDisplayStyleApac }">
        <div class="water-flow-vertical one-line-v1">
          <div class="buble-v delay1"></div>
          <div class="buble-v delay2"></div>
          <div class="buble-v delay3"></div>
        </div>
        <div class="water-big-right-horizontal">
          <div class="buble delay1"></div>
          <div class="buble delay2"></div>
          <div class="buble delay3"></div>
          <div class="buble delay4"></div>
        </div>
      </div>
      <!-- POLYMAX 물 흐름 -->
      <div class="polymax-line" :style="{ display: this.getDisplayStylePolymax }">
        <div class="water-flow-vertical one-line-v1">
          <div class="buble-v delay1"></div>
          <div class="buble-v delay2"></div>
          <div class="buble-v delay3"></div>
        </div>
        <div class="water-big-left-horizontal">
          <div class="buble delay1"></div>
          <div class="buble delay2"></div>
          <div class="buble delay3"></div>
          <div class="buble delay4"></div>
        </div>
      </div>
      <div class="one-line-v3" :class="[ this.getDisplayStyleApac === 'block' ? 'water-flow-vertical-short-first' : 'water-flow-vertical-short-second']">
        <div class="buble-v delay1"></div>
        <div class="buble-v delay2"></div>
      </div>
      <div class="one-line-v4" :class="[ this.getDisplayStyleApac === 'block' ? 'water-flow-vertical-short-second' : 'water-flow-vertical-short-first']">
        <div class="buble-v delay1"></div>
        <div class="buble-v delay2"></div>
      </div>
      <!-- 1계열 응집제 종류, 주입률, 주입량-->
      <div class="line-box oneline">
        <div class="line-box__title">응집제 종류</div>
        <div class="box-contents">
          <div class="box-contents__text">{{ this.$store.state.coagulants.latest.c1_cf_coagulant }}</div>
        </div>
        <div class="line-box__title margintop">응집제 주입률</div>
        <div class="box-contents">
          <div class="box-contents__value">{{ this.$store.state.coagulants.latest.c1_cf | numFormat('0.00') }}</div>
          <div class="box-contents__unit">ppm</div>
        </div>
        <div class="line-box__title margintop">응집제 주입량</div>
        <div class="box-contents">
          <div class="box-contents__value">{{ this.$store.state.coagulants.latest.c1_mm_fr | numFormat('0.00') }}</div>
          <div class="box-contents__unit">ℓ/h</div>
        </div>
      </div>
      <!-- 2계열 응집제 종류, 주입률, 주입량-->
      <div class="line-box twoline">
        <div class="line-box__title">응집제 종류</div>
        <div class="box-contents">
          <div class="box-contents__text">{{ this.$store.state.coagulants.latest.c2_cf_coagulant }}</div>
        </div>
        <div class="line-box__title margintop">응집제 주입률</div>
        <div class="box-contents">
          <div class="box-contents__value">{{ this.$store.state.coagulants.latest.c2_cf | numFormat('0.00') }}</div>
          <div class="box-contents__unit">ppm</div>
        </div>
        <div class="line-box__title margintop">응집제 주입량</div>
        <div class="box-contents">
          <div class="box-contents__value">{{ this.$store.state.coagulants.latest.c2_mm_fr | numFormat('0.00') }}</div>
          <div class="box-contents__unit">ℓ/h</div>
        </div>
      </div>
    </div>
  </div>  
</template>
<script>
export default {
  computed: {
    // 현재 주입되는 약품에 따라 APAC, POLYMAX 애니메이션 여부
    getDisplayStyleApac() {
      if (this.$store.state.coagulants.latest.c1_cf_coagulant) {
        if (this.$store.state.coagulants.latest.c1_cf_coagulant === 'APAC') {
          return 'block'
        } else if (this.$store.state.coagulants.latest.c1_cf_coagulant === 'POLYMAX') {
          return 'none'
        } else {
          return 'none'
        }
      }
      return 'none'
    },
    // 현재 주입되는 약품에 따라 APAC, POLYMAX 애니메이션 여부
    getDisplayStylePolymax() {
      if (this.$store.state.coagulants.latest.c1_cf_coagulant) {
        if (this.$store.state.coagulants.latest.c1_cf_coagulant === 'POLYMAX') {
          return 'block'
        } else if (this.$store.state.coagulants.latest.c1_cf_coagulant === 'APAC') {
          return 'none'
        } else {
          return 'none'
        }
      }
      return 'none'
    }
  }
}
</script>
<style lang="scss" scoped>
.main{
  display: flex;
  flex-flow: column;
  width: 592px;
  height: 100%;
  .contents-img{
    width: 533px;
    height: 100%;
    background-image: url('../../../assets/drugInjection/left_contents_background.png');
    margin-bottom: 16px;
    background-position-x: 60px;
    background-position-y: 43px;
    .oneline{
      bottom: 62px;
      left: 94px;
    }
    .twoline{
      bottom: 62px;
      left: 520px;
    }
    .line-box{
      position: absolute;
      display: flex;
      flex-flow: column;
      align-items: center;
      width: 131px;
      .margintop{
        margin-top: 10px;
      }
      &__title{
        text-shadow: 0 0 9px #5cafff;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 2.56;
        letter-spacing: normal;
        text-align: left;
        color: #fff;
      }
      .box-contents{
        display: flex;
        width: 131px;
        height: 43px;
        border: solid 1px rgba(157, 191, 255, 0.3);
        &__value{
          text-shadow: 0 0 5px rgba(209, 250, 255, 0.5);
          font-family: "LAB디지털" !important;
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.8;
          letter-spacing: normal;
          text-align: left;
          color: #ccf1ff;
          padding-left: 10px;
        }
        &__unit{
          font-size: 16px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 3;
          letter-spacing: normal;
          text-align: right;
          color: #417db9;
          padding-right: 10px;
          margin-left: auto;
        }
        &__text{
          width: 100%;
          text-shadow: 0 0 5px rgba(209, 250, 255, 0.5);
          font-family: "LAB디지털" !important;
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.8;
          letter-spacing: normal;
          text-align: center;
          color: #ccf1ff;
        }
      }
    }
    .apac-line{
      position: absolute;
      top: 0px;
      left: 41px;
    }
    .polymax-line{
      position: absolute;
      top: 0px;
      left: 337px;
    }
    .one-line1{
      position: absolute;
      top:517px;
      left: 142px;
      width: 40px;
      height: 75px;
      background-image: url('../../../assets/drugInjection/off_valve.png');
    }
    .one-line2{
      position: absolute;
      top:517px;
      left: 209px;
      width: 40px;
      height: 75px;
      background-image: url('../../../assets/drugInjection/off_valve.png');
    }
    .one-line3{
      position: absolute;
      top:517px;
      left: 278px;
      width: 40px;
      height: 75px;
      background-image: url('../../../assets/drugInjection/off_valve.png');
    }
    .two-line1{
      position: absolute;
      top:517px;
      left: 437px;
      width: 40px;
      height: 75px;
      background-image: url('../../../assets/drugInjection/off_valve.png');
    }
    .two-line2{
      position: absolute;
      top:517px;
      left: 505px;
      width: 40px;
      height: 75px;
      background-image: url('../../../assets/drugInjection/off_valve.png');
    }
    .two-line3{
      position: absolute;
      top:517px;
      left: 573px;
      width: 40px;
      height: 75px;
      background-image: url('../../../assets/drugInjection/on_valve.png');
    }
    .one-line-h1{
      top: 491px;
      left: 163px;
    }
    .one-line-h2{
      top: 491px;
      left: 106px;
    }
    .one-line-h3{
      top: 610px;
      left: 183px;
    }
    .one-line-h4{
      top: 610px;
      left: 82px;
    }
    .one-line-v1{
      top: 463px;
      left: 184px;
    }
    .one-line-v2{
      top: 606px;
      left: 184px;
    }
    .one-line-v3{
      top: 640px;
      left: 295px;
    }
    .one-line-v4{
      top: 640px;
      left: 444px;
    }
    .two-line-h{
      top: 491px;
      left: 480px;
    }
    .two-line-v1{
      top: 440px;
      left: 571px;
    }
    .two-line-v2{
      top: 490px;
      left: 460px;
    }
    .water-right-horizontal{
      position: absolute;
      width: 100px;
      height: 8px;
      .buble {
        position: absolute;
        width: 100px;
        height: 8px;
        background-image: url('../../../assets/disinfection/water_h_flow_one.png');
        background-position: -38px 50%;
        animation-name: arrow-one;
        animation-duration: 5s;
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
    @keyframes arrow-one{ 
      0% {opacity:0; transform: translateX(0px);}
      20% {opacity:0; }
      90% {opacity:1; }
      100% {opacity:0; transform: translateX(80px);}
    }
    .water-big-right-horizontal{
      position: absolute;
      width: 100px;
      height: 8px;
      top: 629px;
      left: 182px;
      .buble {
        position: absolute;
        width: 100px;
        height: 8px;
        background-image: url('../../../assets/disinfection/water_h_flow_one.png');
        background-position: -38px 50%;
        animation-name: big-arrow-one;
        animation-duration: 8s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        opacity: 0;
      }
      .delay1 {
        animation-delay: 4s;
      }
      .delay2 {
        animation-delay: 6s;
      }
      .delay3 {
        animation-delay: 8s;
      }
      .delay4 {
        animation-delay: 10s;
      }
    }
    @keyframes big-arrow-one{ 
      0% {opacity:0; transform: translateX(0px);}
      20% {opacity:1; }
      90% {opacity:1; }
      100% {opacity:0; transform: translateX(200px);}
    }
    .water-left-horizontal{
      position: absolute;
      width: 100px;
      height: 8px;
      .buble {
        position: absolute;
        width: 100px;
        height: 8px;
        background-image: url('../../../assets/disinfection/water_h_flow_two.png');
        background-position: 88px 50%;
        animation-name: arrow-three;
        animation-duration: 5s;
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
    @keyframes arrow-three{ 
      0% {opacity:0; transform: translateX(0px);}
      20% {opacity:0; }
      90% {opacity:1; }
      100% {opacity:0; transform: translateX(-80px);}
    }
    .water-big-left-horizontal{
      position: absolute;
      width: 100px;
      height: 8px;
      top:-35px;
      .buble {
        position: absolute;
        width: 100px;
        height: 8px;
        top: 664px;
        left: 82px;
        background-image: url('../../../assets/disinfection/water_h_flow_two.png');
        background-position: 88px 50%;
        animation-name: big-arrow-two;
        animation-duration: 8s;
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
      .delay4 {
        animation-delay: 6s;
      }
    }
    @keyframes big-arrow-two{ 
      0% {opacity:0; transform: translateX(0px);}
      20% {opacity:1; }
      90% {opacity:1; }
      100% {opacity:0; transform: translateX(-210px);}
    }
    .water-flow-vertical{
      position: absolute;
      width: 8px;
      height: 170px;
      .buble-v {
        position: absolute;
        width: 8px;
        height: 170px;
        background-image: url('../../../assets/disinfection/water_v_flow_one.png');
        background-position:50% -20px;
        animation-name: arrow-two;
        animation-duration: 6s;
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
      10% {opacity:1; }
      90% {opacity:1; }
      100% {opacity:0; transform: translateY(165px);}
    }
    .water-flow-vertical-short-first{
      position: absolute;
      width: 8px;
      height: 50px;
      .buble-v {
        position: absolute;
        width: 8px;
        height: 50px;
        background-image: url('../../../assets/disinfection/water_v_flow_one.png');
        background-position:50% -20px;
        animation-name: arrow-two-short;
        animation-duration: 4s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        opacity: 0;
      }
      .delay1 {
        animation-delay: 6s;
      }
      .delay2 {
        animation-delay: 8s;
      }
      .delay3 {
        animation-delay: 10s;
      }
    }
    .water-flow-vertical-short-second{
      position: absolute;
      width: 8px;
      height: 50px;
      .buble-v {
        position: absolute;
        width: 8px;
        height: 50px;
        background-image: url('../../../assets/disinfection/water_v_flow_one.png');
        background-position:50% -20px;
        animation-name: arrow-two-short;
        animation-duration: 4s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        opacity: 0;
      }
      .delay1 {
        animation-delay: 12s;
      }
      .delay2 {
        animation-delay: 14s;
      }
      .delay3 {
        animation-delay: 16s;
      }
    }
    @keyframes arrow-two-short{ 
      0% {opacity:0; transform: translateY(0px);}
      10% {opacity:1; }
      90% {opacity:1; }
      100% {opacity:0; transform: translateY(50px);}
    }
  }
}
</style>