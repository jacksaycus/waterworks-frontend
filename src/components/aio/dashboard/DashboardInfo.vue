<template>
  <div class="dashboard-info-container">
    <!-- 자율운영 -->
    <div class="top-contents">
      <!-- 공정별 제어 좌측 메뉴 -->
      <div class="left-contents">
        <div class="left-contents__title">자율운영</div>
          <!-- 착수 AI 모드 제어 -->
          <div class="btn-contents" :class="{selected: [0, 1, 9, 10].includes(this.$store.state.selectedBuildingIndex)}">
          <div class="btn-contents__text">착수</div>
          <div class="btn-contents__btn">
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
        <!-- 약품 AI 모드 제어 -->
        <div class="btn-contents" :class="{selected: this.$store.state.selectedBuildingIndex === 2}">
          <div class="btn-contents__text">약품</div>
          <div class="btn-contents__btn">
            <div class="control_box_operation">
              <div v-if="$store.state.coagulants.latest.operation_mode === 2" class="control_box_operation__btn control_box_operation__btn--on">AI</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(2, 2)">AI</div>
              <div v-if="$store.state.coagulants.latest.operation_mode === 1" class="control_box_operation__btn control_box_operation__btn--on">부분AI</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(2, 1)">부분AI</div>
              <div v-if="$store.state.coagulants.latest.operation_mode === 0" class="control_box_operation__btn control_box_operation__btn--on">AI분석</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(2, 0)">AI분석</div>
            </div>
          </div>
        </div>
        <!-- 혼화응집 AI 모드 제어 -->
        <div class="btn-contents" :class="{selected: this.$store.state.selectedBuildingIndex === 3}">
          <div class="btn-contents__text">혼화응집</div>
          <div class="btn-contents__btn">
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
        <!-- 침전 AI 모드 제어 -->
        <div class="btn-contents" :class="{selected: this.$store.state.selectedBuildingIndex === 4}">
          <div class="btn-contents__text">침전</div>
          <div class="btn-contents__btn">
            <div class="control_box_operation">
              <div v-if="$store.state.sedimentation.latest.operation_mode === 2" class="control_box_operation__btn control_box_operation__btn--on">AI</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(4, 2)">AI</div>
              <div v-if="$store.state.sedimentation.latest.operation_mode === 1" class="control_box_operation__btn control_box_operation__btn--on">부분AI</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(4, 1)">부분AI</div>
              <div v-if="$store.state.sedimentation.latest.operation_mode === 0" class="control_box_operation__btn control_box_operation__btn--on">AI분석</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(4, 0)">AI분석</div>
            </div>
          </div>
        </div>
        <!-- 여과 AI 모드 제어 -->
        <div class="btn-contents" :class="{selected: this.$store.state.selectedBuildingIndex === 5}">
          <div class="btn-contents__text">여과</div>
          <div class="btn-contents__btn">
            <div class="control_box_operation">
              <div v-if="$store.state.filter.latest.operation_mode === 2" class="control_box_operation__btn control_box_operation__btn--on">AI</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(5, 2)">AI</div>
              <div v-if="$store.state.filter.latest.operation_mode === 1" class="control_box_operation__btn control_box_operation__btn--on">부분AI</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(5, 1)">부분AI</div>
              <div v-if="$store.state.filter.latest.operation_mode === 0" class="control_box_operation__btn control_box_operation__btn--on">AI분석</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(5, 0)">AI분석</div>
            </div>
          </div>
        </div>
        <!-- 오존 AI 모드 제어 -->
        <div class="btn-contents" :class="{selected: this.$store.state.selectedBuildingIndex === 11}">
          <div class="btn-contents__text">오존</div>
          <div class="btn-contents__btn">
            <div class="control_box_operation">
              <div v-if="$store.state.ozone.latest.operation_mode === 2" class="control_box_operation__btn control_box_operation__btn--on">AI</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(11, 2)">AI</div>
              <div v-if="$store.state.ozone.latest.operation_mode === 1" class="control_box_operation__btn control_box_operation__btn--on">부분AI</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(11, 1)">부분AI</div>
              <div v-if="$store.state.ozone.latest.operation_mode === 0" class="control_box_operation__btn control_box_operation__btn--on">AI분석</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(11, 0)">AI분석</div>
            </div>
          </div>
        </div>
        <!-- GAC여과 AI 모드 제어 -->
        <div class="btn-contents" :class="{selected: this.$store.state.selectedBuildingIndex === 6}">
          <div class="btn-contents__text">GAC여과</div>
          <div class="btn-contents__btn">
            <div class="control_box_operation">
              <div v-if="$store.state.gac.latest.operation_mode === 2" class="control_box_operation__btn control_box_operation__btn--on">AI</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(6, 2)">AI</div>
              <div v-if="$store.state.gac.latest.operation_mode === 1" class="control_box_operation__btn control_box_operation__btn--on">부분AI</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(6, 1)">부분AI</div>
              <div v-if="$store.state.gac.latest.operation_mode === 0" class="control_box_operation__btn control_box_operation__btn--on">AI분석</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(6, 0)">AI분석</div>
            </div>
          </div>
        </div>
        <!-- 소독 AI 모드 제어 -->
        <div class="btn-contents" :class="{selected: this.$store.state.selectedBuildingIndex === 7}">
          <div class="btn-contents__text">소독</div>
          <div class="btn-contents__btn">
            <div class="control_box_operation control_box_operation--disinfection">
              <div v-if="$store.state.disinfection.latest.pre_operation_mode === 2" class="control_box_operation__btn control_box_operation__btn--on">AI</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(7, 2, 'pre')">AI</div>
              <div v-if="$store.state.disinfection.latest.pre_operation_mode === 1" class="control_box_operation__btn control_box_operation__btn--on">부분AI</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(7, 1, 'pre')">부분AI</div>
              <div v-if="$store.state.disinfection.latest.pre_operation_mode === 0" class="control_box_operation__btn control_box_operation__btn--on">AI분석</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(7, 0, 'pre')">AI분석</div>
            </div>
            <div class="control_box_operation control_box_operation--disinfection">
              <div v-if="$store.state.disinfection.latest.peri_operation_mode === 2" class="control_box_operation__btn control_box_operation__btn--on">AI</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(7, 2, 'peri')">AI</div>
              <div v-if="$store.state.disinfection.latest.peri_operation_mode === 1" class="control_box_operation__btn control_box_operation__btn--on">부분AI</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(7, 1, 'peri')">부분AI</div>
              <div v-if="$store.state.disinfection.latest.peri_operation_mode === 0" class="control_box_operation__btn control_box_operation__btn--on">AI분석</div>
              <div v-else class="control_box_operation__btn control_box_operation__btn--off" @click="onClickAICheckbox(7, 0, 'peri')">AI분석</div>
            </div>
            <div class="control_box_operation control_box_operation--disinfection">
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
      <!-- 착수 예측 결과 -->
      <Result1 v-if="this.$store.state.selectedBuildingIndex === 0 || this.$store.state.selectedBuildingIndex === 1" :isAiOn="this.$store.state.receiving.latest.operation_mode"/>
      <!-- 약품 예측 결과 -->
      <Result2 v-if="this.$store.state.selectedBuildingIndex === 2" :isAiOn="this.$store.state.coagulants.latest.operation_mode"/>
      <!-- 혼화응집 예측 결과 -->
      <Result3 v-if="this.$store.state.selectedBuildingIndex === 3" :isAiOn="this.$store.state.mixing.latest.operation_mode"/>
      <!-- 침전 예측 결과 -->
      <Result4 v-if="this.$store.state.selectedBuildingIndex === 4" :isAiOn="this.$store.state.sedimentation.latest.operation_mode"/>
      <!-- 여과 예측 결과 -->
      <Result5 v-if="this.$store.state.selectedBuildingIndex === 5" :isAiOn="this.$store.state.filter.latest.operation_mode"/>
      <!-- GAC여과 예측 결과 -->
      <Result6 v-if="this.$store.state.selectedBuildingIndex === 6" :isAiOn="this.$store.state.gac.latest.operation_mode"/>
      <!-- 소독 예측 결과 -->
      <Result7 v-if="this.$store.state.selectedBuildingIndex === 7" :isAiOn="this.$store.getters['disinfection/isAiOperationMode']"/>
      <!-- 오존 예측 결과 -->
      <Result11 v-if="this.$store.state.selectedBuildingIndex === 11" :isAiOn="this.$store.state.ozone.latest.operation_mode"/>
    </div>

    <!-- EMS -->
    <div class="dashboard_info_content_container">
      <!-- 구분선 -->
      <div class="h_dash_bar"></div>
      <!-- EMS Header -->
      <div class="dashboard_info_content_header_container">
        <!-- EMS 제목 -->
        <div class="btn-contents">
          <div class="btn-contents__text">EMS</div>
        </div>
        <!-- 펌프제어, 피크제어, DR참여 탭 -->
        <div class="dashboard_info_content_tab">
          <div class="tab" @click="selectedEmsIndex = 0" :class="{'selected_ems': selectedEmsIndex === 0}" style="margin-bottom:5px;">펌프제어</div>
            <div class="tab" @click="selectedEmsIndex = 1" :class="{'selected_ems': selectedEmsIndex === 1}" style="margin-bottom:5px;">피크제어</div>
            <div class="tab" @click="selectedEmsIndex = 2" :class="{'selected_ems': selectedEmsIndex === 2}">DR참여</div>
        </div>
      </div>
      <!-- EMS Content -->
      <div class="ems_container">
        <div class="ems_content_container">
          <div class="ems_content_container__divider"></div>
          <!-- 펌프제어 -->
          <div v-if="this.selectedEmsIndex === 0">
            <div class="ems_contents__table">
              <div class="ems_contents__tr">
                <div class="ems_contents__td"></div>
                <div class="ems_contents__td">
                  <div class="dashboard-info-ems-title">
                    <div class="dashboard-info-ems-title__text">
                      평택
                    </div>
                    <div class="btn-contents" style="width: 60px;">
                      <div class="btn-contents__btn" style="margin-left: auto;">
                        <input disabled type="checkbox" class="checkbox" :class="{ 'checked': this.$store.state.ems.latest.pump.h1_operation_mode === 1 }" style="cursor: unset;"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ems_contents__td">
                  <div class="row-text">
                    <div class="dashboard-info-ems-title">
                      <div class="dashboard-info-ems-title__text">
                        송산
                      </div>
                      <div class="btn-contents" style="width: 60px;">
                      <div class="btn-contents__btn" style="margin-left: auto;">
                        <input disabled type="checkbox" class="checkbox" :class="{ 'checked': this.$store.state.ems.latest.pump.h2_operation_mode === 1 }" style="cursor: unset;"/>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 운영 현황 -->
              <div class="ems_contents__tr">
                <div class="ems_contents__td">운영현황</div>
                <div class="ems_contents__td">
                  <div class="ems_contents__led" :class="[ this.$store.state.ems.latest.pump.h1_pm1 === 1 ? 'ems_contents__led--on' : 'ems_contents__led--off' ]"></div>
                  <div class="ems_contents__led" :class="[ this.$store.state.ems.latest.pump.h1_pm2 === 1 ? 'ems_contents__led--on' : 'ems_contents__led--off' ]"></div>
                  <div class="ems_contents__led" :class="[ this.$store.state.ems.latest.pump.h1_pm3 === 1 ? 'ems_contents__led--on' : 'ems_contents__led--off' ]"></div>
                  <div class="ems_contents__led" :class="[ this.$store.state.ems.latest.pump.h1_pm4 === 1 ? 'ems_contents__led--on' : 'ems_contents__led--off' ]"></div>
                </div>
                <div class="ems_contents__td">
                  <div class="ems_contents__led" :class="[ this.$store.state.ems.latest.pump.h2_pm1 === 1 ? 'ems_contents__led--on' : 'ems_contents__led--off' ]">
                    <span>{{ this.$store.state.ems.latest.pump.h2_pm_sp1 | numFormat('0.00') }}Hz</span>
                  </div>
                  <div class="ems_contents__led" :class="[ this.$store.state.ems.latest.pump.h2_pm2 === 1 ? 'ems_contents__led--on' : 'ems_contents__led--off' ]">
                    <span>{{ this.$store.state.ems.latest.pump.h2_pm_sp2 | numFormat('0.00') }}Hz</span>
                  </div>
                </div>
              </div>
              <!-- AI 분석 -->
              <div class="ems_contents__tr">
                <div class="ems_contents__td">AI분석</div>
                <div class="ems_contents__td">
                  <div class="ems_contents__led" :class="[ this.$store.state.ems.latest.pump.ai_h1_pm1 === 1 ? 'ems_contents__led--on' : 'ems_contents__led--off' ]"></div>
                  <div class="ems_contents__led" :class="[ this.$store.state.ems.latest.pump.ai_h1_pm2 === 1 ? 'ems_contents__led--on' : 'ems_contents__led--off' ]"></div>
                  <div class="ems_contents__led" :class="[ this.$store.state.ems.latest.pump.ai_h1_pm3 === 1 ? 'ems_contents__led--on' : 'ems_contents__led--off' ]"></div>
                  <div class="ems_contents__led" :class="[ this.$store.state.ems.latest.pump.ai_h1_pm4 === 1 ? 'ems_contents__led--on' : 'ems_contents__led--off' ]"></div>
                </div>
                <div class="ems_contents__td">
                  <div class="ems_contents__led" :class="[ this.$store.state.ems.latest.pump.ai_h2_pm1 === 1 ? 'ems_contents__led--on' : 'ems_contents__led--off' ]">
                    <span>{{ this.$store.state.ems.latest.pump.ai_h2_pm_sp1 | numFormat('0.00') }}Hz</span>
                  </div>
                  <div class="ems_contents__led" :class="[ this.$store.state.ems.latest.pump.ai_h2_pm2 === 1 ? 'ems_contents__led--on' : 'ems_contents__led--off' ]">
                    <span>{{ this.$store.state.ems.latest.pump.ai_h2_pm_sp2 | numFormat('0.00') }}Hz</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 피크제어 -->
          <div v-else-if="this.selectedEmsIndex === 1">
            <highcharts :options="ChartEMSPeak"/>
          </div>
          <!-- DR참여 -->
          <div v-else-if="this.selectedEmsIndex === 2">
            <highcharts :options="ChartDR"/>
          </div>
        </div>
      </div>
    </div>

    <!-- PMS -->
    <div class="dashboard_info_content_container">
      <!-- 구분선 -->
      <div class="h_dash_bar"></div>
      <!-- PMS Header -->
      <div class="dashboard_info_content_header_container">
        <div class="dashboard_info_content_header_text">PMS</div>
        <!-- 평택 #1, #2, #3, #4 탭 -->
        <div class="dashboard_info_content_tab" style="margin-right: 0px;">
          <div class="tab-pms-title">평택</div>
          <div class="tab-pms" @click="$store.state.pms.selectedId = '01'" :class="{'selected_ems': this.$store.state.pms.selectedId === '01'}">#1</div>
          <div class="tab-pms" @click="$store.state.pms.selectedId = '02'" :class="{'selected_ems': this.$store.state.pms.selectedId === '02'}">#2</div>
          <div class="tab-pms" @click="$store.state.pms.selectedId = '03'" :class="{'selected_ems': this.$store.state.pms.selectedId === '03'}">#3</div>
          <div class="tab-pms" @click="$store.state.pms.selectedId = '04'" :class="{'selected_ems': this.$store.state.pms.selectedId === '04'}">#4</div>
        </div>
        <!-- 송산 #1, #2 탭 -->
        <div class="dashboard_info_content_tab">
          <div class="tab-pms-title">송산</div>
          <div class="tab-pms" @click="$store.state.pms.selectedId = '05'" :class="{'selected_ems': this.$store.state.pms.selectedId === '05'}">#1</div>
          <div class="tab-pms" @click="$store.state.pms.selectedId = '06'" :class="{'selected_ems': this.$store.state.pms.selectedId === '06'}">#2</div>
        </div>
      </div>
      <!-- PMS Content -->
      <div class="pms_container">
        <div class="pms_contents_container">
          <div class="pump-contents">
            <div :class="{'pump-contents__img': selectedPumpStatus !== 3}"></div>
            <div :class="{'pump-contents__img': selectedPumpStatus === 3}"></div>
            <!-- 파란원 -->
            <div class="pump-contents-blue">
              <div class="pump-contents-blue__box">{{ this.$store.getters['pms/getPMSPumpState'].ai.pump_de_amp | numFormat("0.0") }} rms</div>
              <div class="pump-contents-blue__box">{{ this.$store.getters['pms/getPMSPumpState'].scada.brg_pump_de_temp | numFormat("0.0")}} °C</div>
              <div class="pump-contents-blue__line"></div>
              <div class="pump-contents-blue__circle"></div>
            </div>
            <!-- 녹색원 -->
            <div class="pump-contents-green">
              <div class="pump-contents-green__box">{{ this.$store.getters['pms/getPMSPumpState'].ai.pump_nde_amp | numFormat("0.0")}} rms</div>
              <div class="pump-contents-green__box">{{ this.$store.getters['pms/getPMSPumpState'].scada.brg_pump_nde_temp | numFormat("0.0")}} °C</div>
              <div class="pump-contents-green__line"></div>
              <div class="pump-contents-green__circle"></div>
            </div>
            <!-- 노랑원 -->
            <div class="pump-contents-yellow">
              <div class="pump-contents-yellow__box">{{ this.$store.getters['pms/getPMSPumpState'].ai.motor_de_amp | numFormat("0.0")}} rms</div>
              <div class="pump-contents-yellow__box">{{ this.$store.getters['pms/getPMSPumpState'].scada.brg_motor_de_temp | numFormat("0.0")}} °C</div>
              <div class="pump-contents-yellow__line"></div>
              <div class="pump-contents-yellow__circle"></div>
            </div>
            <!-- 빨강원 -->
            <div class="pump-contents-red">
              <div class="pump-contents-red__box">{{ this.$store.getters['pms/getPMSPumpState'].ai.motor_nde_amp | numFormat("0.0")}} rms</div>
              <div class="pump-contents-red__box">{{ this.$store.getters['pms/getPMSPumpState'].scada.brg_motor_nde_temp | numFormat("0.0")}} °C</div>
              <div class="pump-contents-red__line"></div>
              <div class="pump-contents-red__circle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Highcharts from 'highcharts'

// // 하이차트 UTC설정
// Highcharts.setOptions({
//   global: {
//     useUTC: false
//   },
//   lang: {
//     thousandsSep: ','
//   }
// })
import Result1 from '@/components/aio/dashboard/result/Result1'
import Result2 from '@/components/aio/dashboard/result/Result2'
import Result3 from '@/components/aio/dashboard/result/Result3'
import Result4 from '@/components/aio/dashboard/result/Result4'
import Result5 from '@/components/aio/dashboard/result/Result5'
import Result6 from '@/components/aio/dashboard/result/Result6'
import Result7 from '@/components/aio/dashboard/result/Result7'
import Result11 from '@/components/aio/dashboard/result/Result11'
import { OPEN_AI_MODE_DIALOG } from '@/store/aio/modules/dialog'

export default {
  data: () => ({
    selectedPumpStatus: 0, // 선택된 PMS 펌프 상태
    selectedEmsIndex: 0, // 선택된 EMS Menu Tab Index
    // EMS 피크제어 차트
    chartEMSPeak: {
      chart: {
        type: 'spline',
        backgroundColor: false,
        height: '180px',
        zoomType: 'x'
      },
      title: {
          text: null
      },
      legend: {
        align: 'right',
        verticalAlign: 'top',
        borderWidth: 0,
        x: -20,
        y: 0,
        itemStyle: {
          color: '#ffffff',
          fontWeight: 'bold'
        },
        labelFormatter: function () {
          return '<span style="color: ' + this.color + '; width: 100px;">' + this.name + '</span>'
        }
      },
      credits: {
        enabled: false
      },
      tooltip: {
        valueDecimals: 2,
        xDateFormat: '%Y-%m-%d %H:%M:%S',
        valueSuffix: 'kW'
      },
      plotOptions: {
        series: {
          marker: {
            radius: 0
          }
        }
      },
      xAxis: {
        title: {
          text: ''
        },
        categories: ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'],
        labels: {
          format: '{value:%H:%M}',
          style:{
            fontFamily:'NanumSquare',
            fontSize: 13,
            color:"rgb(255,255,255,0.8)"
          }
        },
        tickInterval: 5
      },
      yAxis: {
        title: {
          align: 'high',
          text: 'kW',
          useHTML: true,
          offset: 0,
          rotation: 0,
          x: -15,
          y: -15,
          style: {
            color:"rgb(255,255,255,0.8)"
          }
        },
        gridLineColor: false,
        labels: {
          style:{
            fontFamily:'NanumSquare',
            fontSize: 13,
            color:"rgb(255,255,255,0.8)"
          }
        }
      },
      series: null,
      exporting: {
        buttons: {
          contextButton: {
            menuItems: ['viewFullscreen', 'downloadJPEG', 'downloadCSV'],
            menuItemStyle: { padding: "0 10px", background: "none", color: "#303030"},
            symbolStroke: "rgb(110, 157, 225)",
            theme: {
              fill:"rgba(0,0,0,0)",
              states: {
                hover: {
                  fill: 'rgba(0,0,0,0)',
                },
                select: {
                  fill: 'rgba(0,0,0,0)',
                }
              }
            },
            titleKey: null
          }
        },
        filename: null,
        fallbackToExportServer: false,
      }
    },
    // DR참여 차트
    chartDR: {
      chart: {
        type: 'spline',
        backgroundColor: false,
        height: '180px',
        zoomType: 'x'
      },
      title: {
          text: null
      },
      legend: {
        align: 'right',
        verticalAlign: 'top',
        borderWidth: 0,
        y: 0,
        itemStyle: {
          color: '#ffffff',
          fontWeight: 'bold'
        },
        labelFormatter: function () {
          return '<span style="color: ' + this.color + '; width: 100px;">' + this.name + '</span>'
        }
      },
      credits: {
        enabled: false
      },
      tooltip: {
        valueDecimals: 2,
        xDateFormat: '%Y-%m-%d %H:%M:%S',
        valueSuffix: 'kW'
      },
      plotOptions: {
        series: {
          marker: {
            radius: 0
          }
        }
      },
      xAxis: {
        title: {
          text: ''
        },
        categories: ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'],
        labels: {
          format: '{value:%H:%M}',
          style:{
            fontFamily:'NanumSquare',
            fontSize: 13,
            color:"rgb(255,255,255,0.8)"
          }
        },
        tickInterval: 5
      },
      yAxis: {
        title: {
          align: 'high',
          text: 'kW',
          useHTML: true,
          offset: 0,
          rotation: 0,
          x: -15,
          y: -15,
          style: {
            color:"rgb(255,255,255,0.8)"
          }
        },
        gridLineColor: false,
        labels: {
          style:{
            fontFamily:'NanumSquare',
            fontSize: 13,
            color:"rgb(255,255,255,0.8)"
          }
        }
      },
      series: null,
      exporting: {
        buttons: {
          contextButton: {
            menuItems: ['viewFullscreen', 'downloadJPEG', 'downloadCSV'],
            menuItemStyle: { padding: "0 10px", background: "none", color: "#303030"},
            symbolStroke: "rgb(110, 157, 225)",
            theme: {
              fill:"rgba(0,0,0,0)",
              states: {
                hover: {
                  fill: 'rgba(0,0,0,0)',
                },
                select: {
                  fill: 'rgba(0,0,0,0)',
                }
              }
            },
            titleKey: null
          }
        },
        filename: null,
        fallbackToExportServer: false,
      }
    },
  }),
  components: {
    Result1,
    Result2,
    Result3,
    Result4,
    Result5,
    Result6,
    Result7,
    Result11
  },
  computed: {
    // EMS 피크제어 차트 객체 반환
    ChartEMSPeak: function () {
      let chart = this.chartEMSPeak
      chart.series = []
      if (this.$store.state.ems.latest.peak.ai_z_power !== null && Object.keys(this.$store.state.ems.latest.peak.ai_z_power).length > 0) {
        let dataSeries1 = []
        for (let i = 0; i < Object.keys(this.$store.state.ems.latest.peak.ai_z_power).length; i++) {
          dataSeries1[i] = [this.$store.state.ems.latest.peak.ai_z_power[i]]
        }
        chart.series.push({
          name: '발생전력',
          data: dataSeries1,
          color: 'rgb(110, 157, 225)'
        })
      }
      if (this.$store.state.ems.latest.peak.ai_z_power !== null && Object.keys(this.$store.state.ems.latest.peak.ai_z_power).length > 0) {
        let dataSeries1 = []
        for (let i = 0; i < Object.keys(this.$store.state.ems.latest.peak.ai_z_power).length; i++) {
          dataSeries1[i] = [this.$store.state.ems.latest.peak.ai_z_power[i]]
        }
        chart.series.push({
          name: '예상전력',
          data: dataSeries1,
          color: '#b4dffb'
        })
      }
      if (this.$store.state.ems.latest.peak.ai_z_power_peak !== null && Object.keys(this.$store.state.ems.latest.peak.ai_z_power_peak).length > 0) {
        let dataSeries1 = []
        for (let i = 0; i < Object.keys(this.$store.state.ems.latest.peak.ai_z_power_peak).length; i++) {
          dataSeries1[i] = [this.$store.state.ems.latest.peak.ai_z_power_peak[i]]
        }
        chart.series.push({
          name: 'AI 전력피크',
          data: dataSeries1,
          color: 'rgb(163, 69, 255)'
        })
      }
      chart.exporting.filename = this.$moment().format('YYYYMMDDHHmmss') + '_EMS 피크제어'
      return chart
    },
    // EMS DR참여 차트 객체 반환
    ChartDR: function () {
      let chart = this.chartDR
      chart.series = []
      if (this.$store.state.ems.latest.dr.z_cbl !== null && Object.keys(this.$store.state.ems.latest.dr.z_cbl).length > 0) {
        let dataSeries1 = []
        for (let i = 0; i < Object.keys(this.$store.state.ems.latest.dr.z_cbl).length; i++) {
          dataSeries1[i] = [this.$store.state.ems.latest.dr.z_cbl[i]]
        }
        chart.series.push({
          name: 'CBL',
          data: dataSeries1,
          color: 'rgb(110, 157, 225)'
        })
      }
      if (this.$store.state.ems.latest.dr.ai_z_dr_power !== null && Object.keys(this.$store.state.ems.latest.dr.ai_z_dr_power).length > 0) {
        let dataSeries1 = []
        for (let i = 0; i < Object.keys(this.$store.state.ems.latest.dr.ai_z_dr_power).length; i++) {
          dataSeries1[i] = [this.$store.state.ems.latest.dr.ai_z_dr_power[i]]
        }
        chart.series.push({
          name: 'AI DR 예상전력',
          data: dataSeries1,
          color: '#b4dffb'
        })
      }
      chart.exporting.filename = this.$moment().format('YYYYMMDDHHmmss') + '_DR참여'
      return chart
    }
  },
  methods: {
    /**
     * 운영모드를 변경할 때 실행되는 함수
     * 운영모드 제어 요청 팝업을 띄움
     * 
     * @param index 선택한 공정 index
     * @param expectedValue 변경할 운영 모드(0: AI분석, 1: 부분AI, 2: AI)
     * @param disinfectionIndex 전염소, 중염소, 후염소 index
     */
    onClickAICheckbox: function(index, expectedValue, disinfectionIndex) {
      if( this.$store.state.login.user.accessToken !== null ) {
        this.$store.state.selectedBuildingIndex = index
        this.$store.state.dialog.aiMode.disinfectionIndex = disinfectionIndex
        this.$store.dispatch('dialog/' + OPEN_AI_MODE_DIALOG, expectedValue)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// DashboardInfo 최상위 엘리먼트
.dashboard-info-container {
  position: absolute;
  left: 1503px;
  top: 7px;
  display: flex;
  flex-flow: column;
  width: 396px;
  height: 985px;
  background-image: url('../../../assets/dashboard_img/dashboard_info.png');
  background-size: cover;
  align-items: center;
  .dashboard_info_content_container {
    width: 396px;
    display: flex;
    flex-flow: column;
    margin-bottom: 10px;
  }
  .dashboard_info_content_header_container {
    display: inline-flex;
    height: 56px;
    align-items: center;
  }
  .dashboard_info_content_header_text {
    display:flex;
    align-items: center;
    justify-content: center;
    width: 86px;
    height: 47px;
    // background-image: url('../../../assets/dashboard_img/title_background.png');
    text-shadow: 0 0 9px #5cafff;
    font-family: "KHNPHUotfR";
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #fff
  }
}

// 자율운영 공정별 제어 & AI 결과
.top-contents{
  display: flex;
  width: 100%;
  height: 490px;
  // 자율운영 공정별 제어(좌측 메뉴)
  .left-contents {
    width: 229px;
    height: 100%;
    // 자율운영 제목
    &__title{
      margin: 14px 0 10px 7px;
      width: 196px;
      height: 47px;
      background-image: url('../../../assets/dashboard_img/title_background.png');
      text-shadow: 0 0 9px #5cafff;
      font-family: "KHNPHUotfR";
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.6;
      letter-spacing: normal;
      text-align: center;
      color: #fff;
    }
    // 운영모드 제어 박스
    .control_box_operation {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 140px;
      height: 28px;
      padding: 0px 1px;
      border-radius: 14px;
      background-color: rgba(139, 194, 240, 0.25);
      // 소독
      &--disinfection {
        position: relative;
        &:before {
          position: absolute;
          left: -30px;
          font-size: 15px;
          color: #c3eaff;
        }
        // 전염소
        &:nth-child(1) {
          margin-top: 3px;
          margin-bottom: 12px;
          &:before {
            content: '(전)'
          }
        }
        // 중염소
        &:nth-child(2) {
          margin-bottom: 12px;
          &:before {
            content: '(중)'
          }
        }
        // 후염소
        &:nth-child(3) {
          margin-bottom: 3px;
          &:before {
            content: '(후)'
          }
        }
      }

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
  }
  // 선택된 공정 배경
  .selected{
    background-image: url('../../../assets/dashboard_img/automatic_selected.png');
    background-size: 100% 100%;
  }
}

// 자율운영, EMS, PMS 간의 구분선
.h_dash_bar {
  margin-top: 20px;
  margin-bottom: 10px;
  margin: 0 auto;
  width: 354px;
  height: 7px;
  background-image: url('../../../assets/dashboard_img/h_dash_bar.png');
}

// 공정별 운전모드 제어 버튼
.btn-contents {
  display: flex;
  align-items: center;
  width: 225px;
  margin-left: 8px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  margin-bottom: 5px;
  // 운전모드 제어 텍스트
  &__text{
    width: 76px;
    font-size: 17px;
    line-height: 2.2;
    text-align: left;
    color: #c3eaff;
    text-shadow: 0 0 9px #5cafff;      
    padding-left: 5px;
  }
  // 운전모드 체크박스
  .checkbox{
    position:relative;
    cursor:pointer;
    appearance:none;
    width:60px;
    height:28px;
    border-radius: 14px;
    border: solid 1px #417290;
    background-color: rgba(139, 194, 240, 0.25);
    outline:none;
    transition:0.3s;
  }
  // 운전모드 체크박스(선택 안됐을 때)
  .checkbox::before{
    content:"OFF";
    position:absolute;
    height:22px;
    width:29px;
    border-radius:11px;
    background:#b4dffa;
    top:2px;
    left:2px;
    transition:0.3s ease-in-out;
    font-size: 11px;
    font-family: KHNPHUotfR;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: center;
    color: #19274e;
    background-color: #417290;
  }
  // 운전모드 체크박스(선택 됐을 때)
  .checkbox:checked::before{
    content:"AI";
    transform:translateX(25px);
    background:#b4dffa;
  }
  // 운전모드 체크박스(선택 됐을 때)
  .checkbox:checked{
    border-color:#b4dffa;
  }
  // 운전모드 체크박스(선택 됐을 때)
  .checked::before{
    content:"AI";
    transform:translateX(25px);
    background:#b4dffa;
  }
  // 운전모드 체크박스(선택 됐을 때)
  .checked{
    border-color:#b4dffa;
  }   
}

// EMS 컨테이너
.ems_container {
  flex: 1;
  .ems_content_container {
    position: relative;
    width: 100%;
    height: 180px;
    padding: 10px;
    &__divider {
      position: absolute;
      left: 235px;
      width: 1px;
      height: 160px;
      background-image: url('../../../assets/dashboard_img/divider.png');
    }
    // EMS Contents
    .ems_contents{

      // EMS 피크제어 테이블 형식
      &__table {
        flex: 1;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding-right: 26px;
      }

      // EMS 피크제어 테이블 행
      &__tr {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50px;
        text-align: center;
        color: #c3eaff;
        text-shadow: 0 0 9px #5cafff;
        font-size: 14px;
      }

      // EMS 피크제어 테이블 열
      &__td {
        display: flex;
        align-items: center;
        justify-content: space-around;
      }

      // EMS 피크제어 테이블 열(첫번째)
      &__td:nth-child(1) {
        flex: 1;
      }

      // EMS 피크제어 테이블 열(두번째)
      &__td:nth-child(2) {
        width: 150px;
        padding: 0px 30px 0px 0px;
      }

      // EMS 피크제어 테이블 열(세번째)
      &__td:nth-child(3) {
        width: 110px;
      }

      // EMS 피크제어 LED
      &__led {
        display: flex;
        align-items: center;
        justify-content: center;

        // LED ON
        &--on {
          width: 11px;
          height: 11px;
          box-shadow: 0 0 6px 0 rgba(92, 175, 255);
          background-color: rgba(234, 100, 100);
          border-radius: 11px;
          color: rgba(234, 100, 100);
          text-align: center;

          // Hz Text
          span {
            font-size: 13px;
            margin-top: 50px;
            text-shadow: none;
          }
        }

        // LED OFF
        &--off {
          width: 11px;
          height: 11px;
          box-shadow: 0 0 6px 0 rgba(92, 175, 255);
          background-color: rgba(180, 223, 250);
          border-radius: 11px;
          color: rgba(180, 223, 250);
          text-align: center;

          // Hz Text
          span {
            font-size: 13px;
            margin-top: 50px;
            text-shadow: none;
          }
        }
      }
    }
    // EMS 위치 텍스트(평택, 송산)
    .dashboard-info-ems-title {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 108px;
      height: 32px;
      text-shadow: 0 0 9px #5cafff;
      color: #fff;
      font-size: 14px;
      &__text {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 66px;
        height: 32px;
        background-image: url('../../../assets/dashboard_img/dashboard_info_title_background.png');
        background-position: center;
        background-size: 120% 100%;
      }
    }
  } 
}

// PMS 컨테이너
.pms_contents_container {
  display: flex;
  width: 100%;
  height: 180px;
  // PMS Contents
  .pump-contents{
    position: relative;
    width: 100%;
    height: 160px;
    text-shadow: 0 0 9px #5cafff;
    font-size: 12px;
    color: #c3eaff;
    // PMS 파란원 Contents
    .pump-contents-blue {
      position: absolute;
      top: 0px;
      left: 10px;
      // PMS rms & ℃ 박스
      &__box {
        width: 60px;
        padding: 1px 2px;
        border: 1px solid #c3eaff;
        text-align: center;
      }
      // PMS Box와 원을 연결하는 Line
      &__line {
        position: absolute;
        top: 24px;
        right: -25px;
        width: 19px;
        height: 42px;
        border-right: 1px dotted #c3eaff;
        border-top: 1px dotted #c3eaff;
      }
      // PMS 파란원
      &__circle {
        position: absolute;
        top: 70px;
        right: -30px;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: blue;
        border: 1px solid #c3eaff;
      }
    }
    // PMS 녹색원 Contents
    .pump-contents-green {
      position: absolute;
      top: 100px;
      left: 10px;
      // PMS rms & ℃ 박스
      &__box {
        width: 60px;
        padding: 1px 2px;
        border: 1px solid #c3eaff;
        text-align: center;
      }
      // PMS Box와 원을 연결하는 Line
      &__line {
        position: absolute;
        top: -37px;
        right: -130px;
        width: 125px;
        height: 61px;
        border-bottom: 1px dotted #c3eaff;
        border-right: 1px dotted #c3eaff;
      }
      // PMS 녹색원
      &__circle {
        position: absolute;
        top: -51px;
        right: -134px;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: green;
        border: 1px solid #c3eaff;
      }
    }
    // PMS 노란원 Contents
    .pump-contents-yellow {
      position: absolute;
      top: 0px;
      right: 0px;
      // PMS rms & ℃ 박스
      &__box {
        width: 60px;
        padding: 1px 2px;
        border: 1px solid #c3eaff;
        text-align: center;
      }
      // PMS Box와 원을 연결하는 Line
      &__line {
        position: absolute;
        top: 19px;
        right: 69px;
        width: 101px;
        height: 21px;
        border-top: 1px dotted #c3eaff;
        border-left: 1px dotted #c3eaff;
      }
      // PMS 노란원
      &__circle {
        position: absolute;
        top: 42px;
        right: 164px;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: yellow;
        border: 1px solid #c3eaff;
      }
    }
    // PMS 빨간원 Contents
    .pump-contents-red {
      position: absolute;
      top: 100px;
      right: 0px;
      // PMS rms & ℃ 박스
      &__box {
        width: 60px;
        padding: 1px 2px;
        border: 1px solid #c3eaff;
        text-align: center;
      }
      // PMS Box와 원을 연결하는 Line
      &__line {
        position: absolute;
        top: -47px;
        right: 67px;
        width: 19px;
        height: 69px;
        border-bottom: 1px dotted #c3eaff;
        border-left: 1px dotted #c3eaff;
      }
      // PMS 빨간원
      &__circle {
        position: absolute;
        top: -60px;
        right: 81px;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: red;
        border: 1px solid #c3eaff;
      }
    }
    // PMS 펌프 이미지
    &__img{
      height: 160px;
      background-image: url('../../../assets/dashboard_img/pump_background.png');
      background-position: center;
      background-size: contain;
      margin-top: 10px;
    }
    // PMS 펌프 에러 이미지
    &__error-img{
      height: 140px;
      background-image: url('../../../assets/dashboard_img/pump_background_error.png');
      background-size: contain;
      background-position: center;
      margin-top: 5px;
    }
  }
}

// EMS & PMS 탭 메뉴
.dashboard_info_content_tab{
  display: flex;
  margin-left: auto;
  margin-right: 20px;
  height: 34px;
  font-family: KHNPHUotfR;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.6;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  // 공통 탭 메뉴
  .tab{
    width: 58px;
    height: 100%;
    border: solid 1px #b4dffa;
    background-color: rgba(139, 194, 240, 0.25);
    cursor: pointer;
  }
  // PMS 탭 메뉴
  .tab-pms{
    display:flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border: solid 1px #b4dffa;
    background-color: rgba(139, 194, 240, 0.25);
    cursor: pointer;
  }
  // PMS 탭 메뉴 제목
  .tab-pms-title {
    padding: 0px 10px;
    background-image: url('../../../assets/dashboard_img/dashboard_info_title_background.png');
    background-position: center;
    background-size: 110% 100%;
  }
}

// EMS & PMS 선택된 Tab Menu
.selected_ems{
  box-shadow: 0 0 10px 0 rgba(172, 207, 255, 0.7);
  background-color: rgba(139, 194, 240, 0.4) !important;
}

</style>