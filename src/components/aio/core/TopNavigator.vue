<template>
  <!-- 탑 네이게이터 공정 이미지 -->
  <div class="top-navi-main" :style="ImageURL">
    <div class="sector1" @click="$routingByIndex(1)"></div>
    <div class="sector2" @click="$routingByIndex(7.1)"></div>
    <div class="sector3" @click="$routingByIndex(2)"></div>
    <div class="sector4" @click="$routingByIndex(3)"></div>
    <div class="sector5" @click="$routingByIndex(4)"></div>
    <div class="sector6" @click="$routingByIndex(7.2)"></div>
    <div class="sector7" @click="$routingByIndex(5)"></div>
    <div class="sector11" @click="$routingByIndex(11)"></div>
    <div class="sector8" @click="$routingByIndex(6)"></div>
    <div class="sector9" @click="$routingByIndex(7.3)"></div>
    <div class="sector10" @click="$routingByIndex(8)"></div>
  </div>
</template>
<script>
export default {
  name:'TopNavigator',
  data: () => ({
  }),
  methods:{

  }
  ,
  mounted() {
    // alert(this.$store.state.selectedBuildingIndex)
  }
  ,
  computed: {
    // 선택된 공정에 따라 활성화된 이미지 반환
    ImageURL() {
      switch(this.$store.state.selectedBuildingIndex) {
        case 1:
          return {
            backgroundImage: `url(${require("../../../assets/splashdown/top_splashdown_background.png")})`
          }
        case 2:
          return {
            backgroundImage: `url(${require("../../../assets/drugInjection/cg_main_top_background.png")})`
          }
        case 3:
          return {
            backgroundImage: `url(${require("../../../assets/mixingTank/top_mixingtank_background.png")})`
          }
        case 4:
          return {
            backgroundImage: `url(${require("../../../assets/sedimentation/top_center_background.png")})`
          }
        case 5:
          return {
            backgroundImage: `url(${require("../../../assets/percolation/top_percolation_background.png")})`
          }
        case 6:
          return {
            backgroundImage: `url(${require("../../../assets/gacpercolation/top_center_background.png")})`
          }
        case 7:
          return {
            backgroundImage: `url(${require("../../../assets/disinfection/top_disinfection_background.png")})`
          }
        case 11:
          return {
            backgroundImage: `url(${require("../../../assets/ozone/top_center_background.png")})`
          }
        default:
          return "../../../assets/splashdown/top_splashdown_background.png"
      }
    }
  }
  ,
  
}


</script>
<style lang="scss">
.top-navi-main{
    display: flex;
    width: 1178px;
    height: 118px;
    > div {
      cursor: pointer;
    }
  }
.sector1{
  position: relative;
  width: 55px;
  height: 64px;
  top: 11px;
  left: 2px;
}
.sector2{
  position: relative;
  width: 36px;
  height: 49px;
  top: 11px;
  left: 41px;
}
.sector3{
  position: relative;
  width: 52px;
  height: 69px;
  top: 11px;
  left: 77px;
}
.sector4{
  position: relative;
  width: 53px;
  height: 64px;
  top: 11px;
  left: 130px;
}
.sector5{
  position: relative;
  width: 101px;
  height: 63px;
  top: 11px;
  left: 185px;
}
.sector6{
  position: relative;
  width: 36px;
  height: 49px;
  top: 11px;
  left: 220px;
}
.sector7{
  position: relative;
  width: 102px;
  height: 65px;
  top: 11px;
  left: 256px;
}
.sector11 {
  position: relative;
  width: 78px;
  height: 65px;
  top: 11px;
  left: 308px;
}
.sector8{
  position: relative;
  width: 96px;
  height: 64px;
  top: 11px;
  left: 354px;
}
.sector9{
  position: relative;
  width: 36px;
  height: 49px;
  top: 11px;
  left: 390px;
}
.sector10{
  position: relative;
  width: 96px;
  height: 64px;
  top: 11px;
  left: 428px;
}
</style>