<template>
  <div class="dashboard-container">
    <!-- 좌측 상단의 원수탁도, 정수탁도, 원수유입유량, 정수유출유량 컴포넌트-->
    <MainFactor/>
    <!-- 좌측 상단의 뇌 이미지 컴포넌트 -->
    <BrainImage/>
    <!-- 우측 자율운영 정보 컴포넌트 -->
    <DashboardInfo/>
    <!-- 라인(빨강, 파랑) & 물 흐름 컴포넌트 -->
    <WaterFlow/>

    <!-- 공정별 건물 배치 -->
    <div class="map-contents">
      <!-- 탈수기동 건물-->
      <div class="one-building"></div>
      <!-- 농축조 건물-->
      <div class="two-building"></div>
      <!-- 정수지 건물 -->
      <div class="four-building"></div>
      <!-- 관리동 건물 -->
      <div class="five-building"></div>

      <!-- 착수 건물 -->
      <div class="map-contents__splashdown" :class="[this.$store.state.selectedBuildingIndex === 1 ? 'zIndex10': '', this.$store.state.selectedBuildingIndex > 0 && this.$store.state.selectedBuildingIndex !== 1 ? 'opacity50' : '']">
        <div class="splashdown-text" @mouseover="onBuildingMouseover(1)" @mouseout="this.onBuildingMouseout" @click="$routingByIndex(1)">착수</div>
        <img class="down" :class="[this.$store.state.selectedBuildingIndex === 1 ? 'building-unvisible': 'building-visible']" src="../../assets/dashboard_img/splashdown.png" usemap="#splashdown_map"/>
        <img class="up" :class="[this.$store.state.selectedBuildingIndex === 1 ? 'building-visible': 'building-unvisible']" src="../../assets/dashboard_img/over_splashdown.png" usemap="#over_splashdown_map"/>
        <img class="aurora_splashdown" :class="[this.$store.state.selectedBuildingIndex === 1 ? 'building-unvisible': 'building-visible']" src="../../assets/dashboard_icons/bottom-aurora.png"/>
      </div>
      <!-- 착수 회전 아이콘 -->
      <div class="cube splashdown_cube" :class="[this.$store.state.selectedBuildingIndex > 0 ? 'building-unvisible': 'building-visible']">
        <div class="cube__inner">
          <div class="cube__noimg">
            <div :class="[this.$store.state.receiving.latest.operation_mode ? 'cube__front_logo--on' : 'cube__front_logo--off']"></div>
            <div class="cube__back_logo back_splashdown"></div>
          </div>
        </div>
      </div>

      <!-- 약품 건물 -->
      <div class="map-contents__drug" :class="[this.$store.state.selectedBuildingIndex === 2 ? 'zIndex10': '', this.$store.state.selectedBuildingIndex > 0 && this.$store.state.selectedBuildingIndex !== 2 ? 'opacity50' : '']">
        <div class="drug-text" @mouseover="onBuildingMouseover(2)" @mouseout="this.onBuildingMouseout" @click="$routingByIndex(2)">약품</div>
        <img class="down" :class="[this.$store.state.selectedBuildingIndex === 2 ? 'building-unvisible': 'building-visible']" src="../../assets/dashboard_img/drug.png" usemap="#drug_map"/>
        <img class="up" :class="[this.$store.state.selectedBuildingIndex === 2 ? 'building-visible': 'building-unvisible']" src="../../assets/dashboard_img/over_drug.png" usemap="#over_drug_map"/>
        <img class="aurora_drug" :class="[this.$store.state.selectedBuildingIndex === 2 ? 'building-unvisible': 'building-visible']" src="../../assets/dashboard_icons/bottom-aurora.png"/>
      </div>
      <!-- 약품 회전 아이콘 -->
      <div class="cube drug_cube" :class="[this.$store.state.selectedBuildingIndex > 0 ? 'building-unvisible': 'building-visible']">
        <div class="cube__inner">
          <div class="cube__noimg">
            <div :class="[this.$store.state.coagulants.latest.operation_mode ? 'cube__front_logo--on' : 'cube__front_logo--off']"></div>
            <div class="cube__back_logo back_drug"></div>
          </div>
        </div>
      </div>

      <!-- 혼화응집 & 침전 건물 -->
      <div class="map-contents__sedimentation-mix" :class="[this.$store.state.selectedBuildingIndex === 3 || this.$store.state.selectedBuildingIndex === 4 ? 'zIndex10': '', this.$store.state.selectedBuildingIndex > 0 && this.$store.state.selectedBuildingIndex !== 3 && this.$store.state.selectedBuildingIndex !== 4 ? 'opacity50' : '']">
        <div class="sedimentation-text" :class="[this.$store.state.selectedBuildingIndex === 3 ? 'opacity50': '']" @mouseover="onBuildingMouseover(4)" @mouseout="this.onBuildingMouseout" @click="$routingByIndex(4)">침전</div>
        <div class="mix-text" :class="[this.$store.state.selectedBuildingIndex === 4 ? 'opacity50': '']" @mouseover="onBuildingMouseover(3)" @mouseout="this.onBuildingMouseout" @click="$routingByIndex(3)">혼화응집</div>
        <img class="down" :class="[this.$store.state.selectedBuildingIndex === 3 || this.$store.state.selectedBuildingIndex === 4 ? 'building-unvisible': 'building-visible']" src="../../assets/dashboard_img/sedimentation_mix.png"/>
        <img class="up" :class="[this.$store.state.selectedBuildingIndex === 3 || this.$store.state.selectedBuildingIndex === 4 ? 'building-visible': 'building-unvisible']" src="../../assets/dashboard_img/over_sedimentation_mix.png"/>
        <img class="aurora_sedimentation" :class="[this.$store.state.selectedBuildingIndex === 4 ? 'building-unvisible': 'building-visible', this.$store.state.selectedBuildingIndex === 3 ? 'opacity0' : '']" src="../../assets/dashboard_icons/bottom-aurora.png"/>
        <img class="aurora_mix" :class="[this.$store.state.selectedBuildingIndex === 3 ? 'building-unvisible': 'building-visible', this.$store.state.selectedBuildingIndex === 4 ? 'opacity0' : '']" src="../../assets/dashboard_icons/bottom-aurora.png"/>
      </div>
      <!-- 혼화응집 회전 아이콘 -->
      <div class="cube mix_cube" :class="[this.$store.state.selectedBuildingIndex > 0 ? 'building-unvisible': 'building-visible']">
        <div class="cube__inner">
          <div class="cube__noimg">
            <div :class="[this.$store.state.mixing.latest.operation_mode ? 'cube__front_logo--on' : 'cube__front_logo--off']"></div>
            <div class="cube__back_logo back_mix"></div>
          </div>
        </div>
      </div>
      <!-- 침전 회전 아이콘 -->
      <div class="cube sedimentation_cube" :class="[this.$store.state.selectedBuildingIndex > 0 ? 'building-unvisible': 'building-visible']">
        <div class="cube__inner">
          <div class="cube__noimg">
            <div :class="[this.$store.state.sedimentation.latest.operation_mode ? 'cube__front_logo--on' : 'cube__front_logo--off']"></div>
            <div class="cube__back_logo back_sedimentation"></div>
          </div>
        </div>
      </div>

      <!-- 여과 건물 -->
      <div class="map-contents__percolation" :class="[this.$store.state.selectedBuildingIndex === 5 ? 'zIndex10': '', this.$store.state.selectedBuildingIndex > 0 && this.$store.state.selectedBuildingIndex !== 5 ? 'opacity50' : '']">
        <div class="percolation-text" @mouseover="onBuildingMouseover(5)" @mouseout="this.onBuildingMouseout" @click="$routingByIndex(5)">여과</div>
        <img class="down" :class="[this.$store.state.selectedBuildingIndex === 5 ? 'building-unvisible': 'building-visible']" src="../../assets/dashboard_img/percolation.png" usemap="#percolation_map"/>
        <img class="up" :class="[this.$store.state.selectedBuildingIndex === 5 ? 'building-visible': 'building-unvisible']" src="../../assets/dashboard_img/over_percolation.png" usemap="#percolation_over_map"/>
        <img class="aurora_percolation" :class="[this.$store.state.selectedBuildingIndex === 5 ? 'building-unvisible': 'building-visible']" src="../../assets/dashboard_icons/bottom-aurora.png"/>
      </div>
      <!-- 여과 회전 아이콘 -->
      <div class="cube percolation_cube" :class="[this.$store.state.selectedBuildingIndex > 0 ? 'building-unvisible': 'building-visible']">
        <div class="cube__inner">
          <div class="cube__noimg">
            <div :class="[this.$store.state.filter.latest.operation_mode ? 'cube__front_logo--on' : 'cube__front_logo--off']"></div>
            <div class="cube__back_logo back_percolation"></div>
          </div>
        </div>
      </div>

      <!-- GAC 여과 건물 -->
      <div class="map-contents__gac" :class="[this.$store.state.selectedBuildingIndex === 6 ? 'zIndex10': '', this.$store.state.selectedBuildingIndex > 0 && this.$store.state.selectedBuildingIndex !== 6 ? 'opacity50' : '']">
        <div class="gac-text" @mouseover="onBuildingMouseover(6)" @mouseout="this.onBuildingMouseout" @click="$routingByIndex(6)">GAC여과</div>
        <img class="down" :class="[this.$store.state.selectedBuildingIndex === 6 ? 'building-unvisible': 'building-visible']" src="../../assets/dashboard_img/GAC.png" usemap="#gac_map"/>
        <img class="up" :class="[this.$store.state.selectedBuildingIndex === 6 ? 'building-visible': 'building-unvisible']" src="../../assets/dashboard_img/over_gac.png" usemap="#over_gac_map"/>
        <img class="aurora_gac" :class="[this.$store.state.selectedBuildingIndex === 6 ? 'building-unvisible': 'building-visible']" src="../../assets/dashboard_icons/bottom-aurora.png"/>
      </div>
      <!-- GAC 회전 여과 아이콘 -->
      <div class="cube gac_cube" :class="[this.$store.state.selectedBuildingIndex > 0 ? 'building-unvisible': 'building-visible']">
        <div class="cube__inner">
          <div class="cube__noimg">
            <div :class="[this.$store.state.gac.latest.operation_mode ? 'cube__front_logo--on' : 'cube__front_logo--off']"></div>
            <div class="cube__back_logo back_gac"></div>
          </div>
        </div>
      </div>

      <!-- 소독 건물 -->
      <div class="map-contents__disinfection" :class="[this.$store.state.selectedBuildingIndex === 7 ? 'zIndex10': '', this.$store.state.selectedBuildingIndex > 0 && this.$store.state.selectedBuildingIndex !== 7 ? 'opacity50' : '']">
        <div class="disinfection-text" @mouseover="onBuildingMouseover(7)" @mouseout="this.onBuildingMouseout" @click="$routingByIndex(7)">소독</div>
        <img class="down" :class="[this.$store.state.selectedBuildingIndex === 7 ? 'building-unvisible': 'building-visible']" src="../../assets/dashboard_img/disinfection.png" usemap="#disinfection_map"/>
        <img class="up" :class="[this.$store.state.selectedBuildingIndex === 7 ? 'building-visible': 'building-unvisible']" src="../../assets/dashboard_img/over_disinfection.png" usemap="#over_disinfection_map"/>
        <img class="aurora_disinfection" :class="[this.$store.state.selectedBuildingIndex === 7 ? 'building-unvisible': 'building-visible']" src="../../assets/dashboard_icons/bottom-aurora.png"/>
      </div>
      <!-- 소독 회전 아이콘 -->
      <div class="cube disinfection_cube" :class="[this.$store.state.selectedBuildingIndex > 0 ? 'building-unvisible': 'building-visible']">
        <div class="cube__inner">
          <div class="cube__noimg">
            <div :class="[this.$store.getters['disinfection/isAiOperationMode'] ? 'cube__front_logo--on' : 'cube__front_logo--off']"></div>
            <div class="cube__back_logo back_disinfection"></div>
          </div>
        </div>
      </div>

      <!-- 펌프 건물 -->
      <div class="map-contents__pump" :class="[this.$store.state.selectedBuildingIndex === 8 ? 'zIndex10': '', this.$store.state.selectedBuildingIndex > 0 && this.$store.state.selectedBuildingIndex !== 8 ? 'opacity50' : '']">
        <div class="pump-text" @mouseover="onBuildingMouseover(8)" @mouseout="this.onBuildingMouseout" @click="onClickSending">송수</div>
        <img class="down" :class="[this.$store.state.selectedBuildingIndex === 8 ? 'building-unvisible': 'building-visible']" src="../../assets/dashboard_img/pump.png"/>
        <img class="up" :class="[this.$store.state.selectedBuildingIndex === 8 ? 'building-visible': 'building-unvisible']" src="../../assets/dashboard_img/over_pump.png"/>
        <img class="aurora_pump" :class="[this.$store.state.selectedBuildingIndex === 8 ? 'building-unvisible': 'building-visible']" src="../../assets/dashboard_icons/bottom-aurora.png"/>
      </div>
      <!-- 펌프 회전 아이콘 -->
      <div class="cube pump_cube" :class="[this.$store.state.selectedBuildingIndex > 0 ? 'building-unvisible': 'building-visible']">
        <div class="cube__inner">
          <div class="cube__noimg">
            <div :class="[this.$store.state.isSelectedMainMenuIndex7AiOn ? 'cube__front_logo--on' : 'cube__front_logo--off']"></div>
            <div class="cube__back_logo back_pump"></div>
          </div>
        </div>
      </div>

      <!-- 오존 건물 -->
      <div class="map-contents__o3" :class="[this.$store.state.selectedBuildingIndex === 11 ? 'zIndex10': '', this.$store.state.selectedBuildingIndex > 0 && this.$store.state.selectedBuildingIndex !== 11 ? 'opacity50' : '']">
        <div class="o3-text" @mouseover="onBuildingMouseover(11)" @mouseout="this.onBuildingMouseout" @click="$routingByIndex(11)">오존</div>
        <img class="down" :class="[this.$store.state.selectedBuildingIndex === 11 ? 'building-unvisible': 'building-visible']" src="../../assets/dashboard_img/o3.png"/>
        <img class="up" :class="[this.$store.state.selectedBuildingIndex === 11 ? 'building-visible': 'building-unvisible']" src="../../assets/dashboard_img/over_o3.png"/>
        <img class="aurora_o3" :class="[this.$store.state.selectedBuildingIndex === 11 ? 'building-unvisible': 'building-visible']" src="../../assets/dashboard_icons/bottom-aurora.png"/>
      </div>
      <!-- 오존 회전 아이콘 -->
      <div class="cube o3_cube" :class="[this.$store.state.selectedBuildingIndex > 0 ? 'building-unvisible': 'building-visible']">
        <div class="cube__inner">
          <div class="cube__noimg">
            <div :class="[this.$store.state.ozone.latest.operation_mode ? 'cube__front_logo--on' : 'cube__front_logo--off']"></div>
            <div class="cube__back_logo back_o3"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 착수 팝업 -->
    <Popup1 v-if="this.$store.state.selectedBuildingIndex === 1"/>
    <!-- 약품 팝업 -->
    <Popup2 v-if="this.$store.state.selectedBuildingIndex === 2"/>
    <!-- 혼화응집 팝업 -->
    <Popup3 v-if="this.$store.state.selectedBuildingIndex === 3"/>
    <!-- 침전 팝업 -->
    <Popup4 v-if="this.$store.state.selectedBuildingIndex === 4"/>
    <!-- 여과 팝업 -->
    <Popup5 v-if="this.$store.state.selectedBuildingIndex === 5"/>
    <!-- GAC여과 팝업 -->
    <Popup6 v-if="this.$store.state.selectedBuildingIndex === 6"/>
    <!-- 소독 팝업 -->
    <Popup7 v-if="this.$store.state.selectedBuildingIndex === 7"/>
    <!-- 송수 팝업 -->
    <Popup8 v-if="this.$store.state.selectedBuildingIndex === 8"/>
    <!-- 탈수기동 팝업 -->
    <Popup9 v-if="this.$store.state.selectedBuildingIndex === 9"/>
    <!-- 농축조 팝업 -->
    <Popup10 v-if="this.$store.state.selectedBuildingIndex === 10"/>
    <!-- 오존 팝업 -->
    <Popup11 v-if="this.$store.state.selectedBuildingIndex === 11"/>
  </div>
</template>

<script>
import MainFactor from '@/components/dashboard/MainFactor'
import DashboardInfo from '@/components/dashboard/DashboardInfo'
import WaterFlow from '@/components/dashboard/WaterFlow'
import BrainImage from '@/components/dashboard/BrainImage'
import Popup1 from '@/components/dashboard/popup/Popup1'
import Popup2 from '@/components/dashboard/popup/Popup2'
import Popup3 from '@/components/dashboard/popup/Popup3'
import Popup4 from '@/components/dashboard/popup/Popup4'
import Popup5 from '@/components/dashboard/popup/Popup5'
import Popup6 from '@/components/dashboard/popup/Popup6'
import Popup7 from '@/components/dashboard/popup/Popup7'
import Popup8 from '@/components/dashboard/popup/Popup8'
import Popup9 from '@/components/dashboard/popup/Popup9'
import Popup10 from '@/components/dashboard/popup/Popup10'
import Popup11 from '@/components/dashboard/popup/Popup11'
import { SET_OVERLAY } from '@/store'
import { GET_RECEIVING_LATEST } from '@/store/modules/receiving'
import { SERVICE_URL } from '@/store'
export default {
  name: 'Dashboard',
  data: () => ({
  }),
  // Dashboard에서 이용할 Component 정의
  components: {
    MainFactor,
    DashboardInfo,
    WaterFlow,
    Popup1,
    Popup2,
    Popup3,
    Popup4,
    Popup5,
    Popup6,
    Popup7,
    Popup8,
    Popup9,
    Popup10,
    Popup11,
    BrainImage
  },
  // Dashboard.vue에서 이용할 함수 정의
  methods:{
    /**
     * EMS 페이지로 이동하는 함수
     * '_self' 옵션으로 새롭게 창을 띄우지 않고 이동
     */
    onClickSending: function() {
      window.open(SERVICE_URL.EMS + '/analysis', "_self")
    },
    /**
     * 선택한 공정 페이지로 이동하는 함수
     * Vue Router를 통해 선택한 공정 페이지로 이동
     *
     * @param index 선택한 공정 index
     */
    onBuildingMouseClick: function(index) {
      this.$routingByIndex(index)
    },
    /**
     * 공정 건물에 마우스를 올렸을 때 발생하는 이벤트 함수
     * 선택된 공정 건물로 상태값을 변경
     *
     * @param index 선택한 공정 index
     */
    onBuildingMouseover: function (index) {
      this.$store.state.selectedBuildingIndex = index
    },
    /**
     * 공정 건물에 마우스가 벗어났을 때 발생하는 이벤트 함수
     * 선택된 공정 건물 상태 값을 없음(0)으로 변경
     */
    onBuildingMouseout: function () {
      this.$store.state.selectedBuildingIndex = 0
    },
  },
  /**
   * Dashboard.vue가 마운트 됐을 때 실행되는 함수
   * 1분 간격으로 API 호출하는 interval 등록
   * 호출 전 로딩바 생성 / 호출 후 로딩바 제거
   */
  mounted: function() {
    this.$store.commit(SET_OVERLAY, true)
    Promise.all([
      this.$store.dispatch(GET_RECEIVING_LATEST),

    ]).finally(() => {
      this.$store.commit(SET_OVERLAY, false)
    })

  },
  /**
   * Dashboard.vue가 제거될 때 실행되는 함수
   * 마운트에서 등록해 놓은 API 호출 interval 제거
   */
  destroyed: function () {
    console.log(this.$options.name + ' destoryed')
    clearInterval(this.timer)
  }
}
</script>

<style scoped lang="scss">
@import "App.scss";
</style>
