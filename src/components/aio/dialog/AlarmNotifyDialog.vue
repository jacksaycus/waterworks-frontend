<template>
  <!-- <div v-if="this.isVisible" class="popup" :style="{ zIndex: myZIndex }"> -->
  <div v-if="this.isVisible" class="popup" :style="{ zIndex: myZIndex }">
    <div v-if="this.alarmType === 3" class="popup-type3__outter" :style="{ marginLeft: myMargin, marginTop: myMargin }">
      <div class="popup-type3__box">
        <div class="popup-type3__title">
          <div class="popup-type3__icon"></div>
        </div>
        <div class="popup-type3__body">
          <div class="popup-type3__date">{{ this.alarmTime | moment('YYYY-MM-DD HH:mm:ss') }}</div>
          <div class="popup-type3__title">{{ this.message }}</div>
        </div>
        <div class="popup-type3__bottom">
          <div class="btn btn--cancel" @click="closePopup()">취소</div>
          <div class="btn btn--change" @click="goToURL()">이동</div>
        </div>
      </div>
    </div>
    <div v-if="this.alarmType === 2" class="popup__inner" :style="{ marginLeft: myMargin, marginTop: myMargin }">
      <div class="popup__title">
        <div class="popup__icon"></div>
        <span>{{ this.alarmTime | moment('YYYY-MM-DD HH:mm:ss') }}</span>
      </div>
      <div class="popup__body">
        <span>{{ this.message }}</span>
      </div>
      <div class="popup__bottom">
        <div class="btn btn--cancel" @click="closePopup()">취소</div>
        <div class="btn btn--change" @click="control()">제어</div>
      </div>
    </div>
  </div>
</template>
<script>
import { PUT_ALARM_CONTROL } from '@/store/aio/modules/alarm/alarm'
import { DEL_NOTIFY } from '@/store/aio/modules/alarm/alarm'
import router from '@/router'
export default {
  data: () => ({
    // isVisible: true,
    // timeLeft: 60
  }),
  props: [
    'index',
    'alarmNotifyIndex',
    'alarmType',
    'alarmId',
    'alarmTime',
    'url',
    'message',
    'isVisible'
  ],
  computed: {
    // 최대 30개까지만 반복
    myMargin: function () {
      return ((this.index % 30)* 10) + 'px'
    },
    myZIndex: function () {
      return 199 - this.index
    }
  },
  methods: {
    closePopup: function () {
      // this.$store.dispatch('dialog/' + CLOSE_ALARM_NOTIFY_DIALOG)
      this.$store.commit(DEL_NOTIFY, this.alarmNotifyIndex)
    },
    goToURL: function () {
      let _url = (this.url.indexOf('http') > -1 || this.url.indexOf('https') > -1) ? this.url : 'http://'+this.url
      this.$store.commit(DEL_NOTIFY, this.alarmNotifyIndex)
      let _host = '10.15.32.150:18080'
      // 동일 호스트
      if (_url.includes(_host)) {
        router.push(_url.split(_host)[1])
      // 다른 호스트
      } else {
        window.open(_url, "_self")
      }
    },
    control: function () {
      this.$store.dispatch(PUT_ALARM_CONTROL, {alarm_id: this.alarmId, alarm_time: this.alarmTime})
      this.$store.commit(DEL_NOTIFY, this.alarmNotifyIndex)
    }
  },
  created: function () {
    console.log('created AlarmNotifyDialog ' + this.index)
  },
  mounted: function() {
    console.log('mounted AlarmNotifyDialog ' + this.index)
    // setTimeout(() => {
    //   this.isVisible = false
    // }, this.timeLeft * 1000)
    // TTS
    if (this.index === 0) {
      this.$speak(this.message)
    }
  },
  updated: function () {
    console.log('updated AlarmNotifyDialog ' + this.index)
    
  },
  destroyed: function() {
    console.log('destoryed AlarmNotifyDialog ' + this.index)
  },
  // watch: {
  //   timeLeft(newValue) {
  //     if (newValue <= 0) {
  //       this.isVisible = false
  //     }
  //   }
  // }
}
</script>
<style lang="scss" scoped>
.popup-type3{
  position: absolute;
  top: 433px;
  left: 728px;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // width: 1920px;
  // height: 1080px;
  // background-color: rgba(30,37,61,0.8);
  // z-index: 200;
  &__date {
    width: 100%;
    text-shadow: 0 0 9px #5cafff;
    font-family: KHNPHUotfR;
    font-size: 15px;
    color: #fff;
    margin: 0 auto;
    text-align: center;
  }
  &__outter{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    // height: 221px;
    background-image: url('../../../assets/dialog/background-type3.png');
    background-size: 100% 100%;
    // padding: 25px;
  }
  &__box {
    display: flex;
    flex-direction: column;
    width: 370px;
    // height: 194px;
    background-image: url('../../../assets/dialog/background-box-type3.png');
    background-size: 100% 100%;
    margin: 10px;
  }
  &__title {
    width: 100%;
    // display: flex;
    // align-items: center;
    padding: 10px 15px;
    font-size: 24px;
    color: #b4dffb;
    text-align: center;
  }
  &__icon {
    width: 75px;
    height: 75px;
    margin: 0 auto;
    background-image: url('../../../assets/dialog/ai_header_icon_type3.png');
    background-size: 100% 100%;
  }
  &__body {
    width: 100%;
    // padding: 10px 15px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    color: #fff;
    &--large {
      font-size: 20px;
    }
    font-family: KHNPHUotfR;
    font-size: 24px;
    color: #b4dffb;
  }
  &__bottom {
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 10px 15px;
  }
}
.popup{
  position: absolute;
  top: 433px;
  left: 728px;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // width: 1920px;
  // height: 1080px;
  // background-color: rgba(30,37,61,0.8);
  // z-index: 200;
  &__inner{
    width: 463px;
    height: 213px;
    background-image: url('../../../assets/dialog/background.png');
    padding: 25px;
  }
  &__title {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    font-size: 24px;
    color: #b4dffb;
  }
  &__icon {
    width: 17px;
    height: 28px;
    margin-right: 15px;
    background-image: url('../../../assets/dialog/ai_header_icon.png');
    background-size: 100% 100%;
  }
  &__body {
    padding: 10px 15px;
    font-size: 16px;
    color: #fff;
    &--large {
      font-size: 20px;
    }
  }
  &__bottom {
    display:flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px 15px;
  }
}
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 105px;
  height: 34px;
  font-size: 15px;
  color: white;
  margin: 0px 10px;
  cursor: pointer;
  &--cancel {
    border: solid 1px #b4dffa;
    background-color: rgba(185, 255, 250, 0.25);
  }
  &--change {
    border: solid 1px #b4dffa;
    background-color: rgba(139, 194, 240, 0.25);
  }
}
</style>