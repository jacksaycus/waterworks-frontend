<template>
  <div class="main">
    <!-- 상단 컨텐츠(주요인자, 알고리즘 예측, 예측 결과) -->
    <div class="top-contents">
      <div class="arrow-animate-one"></div>
      <div class="arrow-animate-two"></div>
      <!-- 주요인자 -->
      <div class="one-contents">
        <div class="one-contents__title">주요인자</div>
        <div class="big-contents">
          <div class="contents-value">
            <div class="value-container">
              <div class="value-container__one">· 원수 탁도</div>
              <div class="value-container__two">{{ this.$store.state.coagulants.latest.b_tb | numFormat('0.00') }}</div>
              <div class="value-container__three">NTU</div>
            </div>
            <div class="value-container">
              <div class="value-container__one">· 원수 pH</div>
              <div class="value-container__two">{{ this.$store.state.coagulants.latest.b_ph | numFormat('0.00') }}</div>
              <div class="value-container__three"></div>
            </div>
            <div class="value-container">
              <div class="value-container__one">· 원수 수온</div>
              <div class="value-container__two">{{ this.$store.state.coagulants.latest.b_te | numFormat('0.00') }}</div>
              <div class="value-container__three">℃</div>
            </div>
            <div class="value-container">
              <div class="value-container__one">· 원수 전기전도도</div>
              <div class="value-container__two">{{ this.$store.state.coagulants.latest.b_cu | numFormat('0.00') }}</div>
              <div class="value-container__three">μS/cm</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 알고리즘 예측 -->
      <div class="two-contents">
        <div class="two-contents__title">알고리즘 예측</div>
        <div class="small-contents">
          <div class="top-info">
            * {{ this.ClassDescription }}
            <img style="cursor:pointer; position:relative; left: 2px; top:2px;" @click="$store.state.coagulants.popup.visible=true" src="../../../assets/drugInjection/revise_btn.png" width="15" height="15">
          </div>
          <div class="small-contents-value">
            <!-- 클래스 Rolling Box -->
            <div class="roling-box">
              <div class="scroll_container">
                <div class="select-cube"></div>
                <div id="cube">
                  <div class="carousel__cell" style="transform: rotateX(0deg) translateZ(75px);">Class 1</div>
                  <div class="carousel__cell" style="transform: rotateX(36deg) translateZ(75px);">Class 2</div>
                  <div class="carousel__cell" style="transform: rotateX(72deg) translateZ(75px);">Class 3</div>
                  <div class="carousel__cell" style="transform: rotateX(108deg) translateZ(75px);">Class 4</div>
                  <div class="carousel__cell" style="transform: rotateX(144deg) translateZ(75px);">Class 5</div>
                  <div class="carousel__cell" style="transform: rotateX(180deg) translateZ(75px);">Class 6</div>
                  <div class="carousel__cell" style="transform: rotateX(216deg) translateZ(75px);">Class 7</div>
                  <div class="carousel__cell" style="transform: rotateX(252deg) translateZ(75px);">Class 8</div>
                  <div class="carousel__cell" style="transform: rotateX(288deg) translateZ(75px);">Class 9</div>
                  <div class="carousel__cell" style="transform: rotateX(324deg) translateZ(75px);">Class 10</div>
                </div>
              </div>
            </div>
            <div class="chart">
            </div>
            <!-- 알고리즘 예측 값 -->
            <div class="chart-value">
              <div class="value-box">
                <div class="value-box__text">탁도 평균</div>
                <div class="value-box__value">{{ this.selectedClusterInfo.tb_avg | numFormat('0.00') }}</div>
              </div>
              <div class="value-box">
                <div class="value-box__text">pH 평균</div>
                <div class="value-box__value">{{ this.selectedClusterInfo.ph_avg | numFormat('0.00')}}</div>
              </div>
              <div class="value-box">
                <div class="value-box__text">수온 평균</div>
                <div class="value-box__value">{{ this.selectedClusterInfo.te_avg | numFormat('0.00')}}</div>
              </div>
              <div class="value-box">
                <div class="value-box__text1">전기전도도<br/>평균</div>
                <div class="value-box__value">{{ this.selectedClusterInfo.cu_avg | numFormat('0.00')}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 예측 결과 -->
      <div class="three-contents">
        <div class="three-contents__title">
          예측 결과
          <div class="three-contents__timerbox-outter">
            <!-- 예측 결과 시간 -->
            <div class="timerbox">
              {{ this.$store.state.coagulants.latest.update_time | moment('YYYY-MM-DD HH:mm:ss') }}
            </div>
          </div>
        </div>
        <div class="three-small-contents">
          <div class="top-info">* 침전지 탁도 1NTU이하로 운영</div>          
          <div class="three-small-contents-value">
            <div class="three-small-contents-value__title">1계열</div>
            <div class="three-value">
              <div class="three-value__line">{{ this.$store.state.coagulants.latest.ai_c1_cf_coagulant }}</div>
              <div class="three-value__num">{{ this.$store.state.coagulants.latest.ai_c1_cf_final | numFormat('0.00') }}</div>
              <div class="three-value__unit">ppm</div>
            </div>
            <div class="three-contents-value-underbar"></div>
            <div class="three-small-contents-value__title margintop">2계열</div>
            <div class="three-value">
              <div class="three-value__line">{{ this.$store.state.coagulants.latest.ai_c2_cf_coagulant }}</div>
              <div class="three-value__num">{{ this.$store.state.coagulants.latest.ai_c2_cf_final | numFormat('0.00') }}</div>
              <div class="three-value__unit">ppm</div>
            </div>
            <div class="three-contents-value-underbar"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 하단 컨텐츠(그래프) -->
    <div class="bottom-contents">
      <!-- 침전지 탁도 정규 분포 그래프 -->
      <div class="contents">
        <div class="contents__title">침전지 탁도 정규 분포 그래프</div>
        <div class="contents-gragh">
          <highcharts :options="ChartScatter" style="height:100%;"/>
        </div>
      </div>
      <!-- 침전지 탁도 트랜드 -->
      <div class="contents paddingleft">
        <div class="contents__title">침전지 탁도 트렌드</div>
        <div class="contents-gragh">
          <highcharts :options="ChartTrend" style="height:100%;"/>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  data: () => ({
    carousel: null, // 알고리즘 예측 클래스 회전
    theta: 36, // 알고리즘 예측 클래스 회전 각도
    rotateIndex: -1,
    // 침전지 탁도 정규 분포 차트 옵션
    chartScatterOption: {
      chart: {
        type: 'scatter',
        zoomType: 'x',
        selectionMarkerFill: 'rgba(173, 92, 51, 0.25)',
        backgroundColor: 'transparent',
      },
      title: {
        useHTML: true,
        text: '침전지 탁도 정규 분포 그래프',
        style: {
          color: 'transparent'
        }
      },
      series: [
      ],
      legend: {
        align: 'right',
        verticalAlign: 'top',
        borderWidth: 0,
        y: 0,
        itemStyle: {
          color: 'rgb(255,255,255,0.8)',
          fontWeight: 'bold'
        }
      },
      credits: {
        enabled: false
      },
      xAxis: {
        labels: {
          style: {
            color: 'rgb(255,255,255,0.8)'
          }
        },
        tickInterval: 0.5,
        min: 0
      },
      yAxis: {
        title: {
          text: ''
        },
        labels: {
          style: {
            color: 'rgb(255,255,255,0.8)'
          }
        },
        gridLineColor: false
      },
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
    // 침전지 탁도 트랜트 차트 옵션
    chartDataTrend: {
      chart: {
        type: 'spline',
        backgroundColor: false,
        zoomType: 'x'
      },
      title: {
        useHTML: true,
        text: '침전지 탁도 트랜드',
        style: {
          color: 'transparent'
        }
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
        valueSuffix: 'NTU'
      },
      xAxis: {
        title: {
          text: ''
        },
        type: 'datetime',
        labels: {
          format: '{value:%H:%M}',
          style:{
            fontFamily:'NanumSquare',
            fontSize: 13,
            color:"rgb(255,255,255,0.8)"
          }
        },
        tickInterval: 1000 * 60 * 60 * 3 // 48시간
      },
      yAxis: {
        title: {
          align: 'high',
          text: 'NTU',
          useHTML: true,
          offset: 0,
          rotation: 0,
          x: -10,
          y: -15,
          style: {
            color:"rgb(255,255,255,0.8)"
          }
        },
        max: 1.2,
        plotLines: [{
          color: 'white',
          dashStyle: 'ShortDash',
          value: 1,
          width: 3,
          label: {
            text: '운영기준',
            style: {
              color: 'white'
            },
            rotation: 360,
            align: 'right',
            y: -7,
            x: -3
          }
        }],
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
    }
  }),
  components: {
    
  },
  computed: {
    // 클래스 설명
    ClassDescription() {
      if (this.$store.state.coagulants.latest.ai_cluster_id !== null && this.$store.state.coagulants.class_info !== null) {
        if (this.$store.state.coagulants.class_info[this.$store.state.coagulants.latest.ai_cluster_id] !== undefined) {
          return this.$store.state.coagulants.class_info[this.$store.state.coagulants.latest.ai_cluster_id].description
        } else { 
          return null
        }
      }
      return null
    },
    // 1계열 침전지 탁도 정규 분포 차트 데이터
    ScatterData1() {
      if (this.$store.state.sedimentation.tbScatter.series1 && Object.keys(this.$store.state.sedimentation.tbScatter.series1).length > 0) {
        let ar = []
        Object.keys(this.$store.state.sedimentation.tbScatter.series1).forEach((key) => {
          let parseKey = parseFloat(key)
          ar.push([parseKey, this.$store.state.sedimentation.tbScatter.series1[parseKey]])
        })
        return ar
      }
      return null
    },
    // 2계열 침전지 탁도 정규 분포 차트 데이터
    ScatterData2() {
      if (this.$store.state.sedimentation.tbScatter.series2 && Object.keys(this.$store.state.sedimentation.tbScatter.series2).length > 0) {
        let ar = []
        Object.keys(this.$store.state.sedimentation.tbScatter.series2).forEach((key) => {
          let parseKey = parseFloat(key)
          ar.push([parseKey, this.$store.state.sedimentation.tbScatter.series2[parseKey]])
        })
        return ar
      }
      return null
    },
    // 침전지 탁도 정규 분포 차트 옵션
    ChartScatter() {
      let chart = this.chartScatterOption
      chart.series = [
        {
          name: '1계열 침전지',
          data: this.ScatterData1,
          color: '#ed9af1',
          visible: true,
          marker: {
            symbol: 'circle'
          }
        },
        {
          name: '2계열 침전지',
          data: this.ScatterData2,
          color: '#25d0cc',
          visible: true,
          marker: {
            symbol: 'circle'
          }
        }
      ]
      chart.exporting.filename = this.$moment().format('YYYYMMDDHHmmss') + '_침전지 탁도 정규 분포'
      return chart
    },
    // 선택된 클러스터 정보
    selectedClusterInfo () {
      if (this.$store.state.coagulants.latest.ai_cluster_id !== null && this.$store.state.coagulants.cluster_info !== null) {
        return this.$store.state.coagulants.cluster_info.find((elem) => {
          console.log(elem.cluster_id, this.$store.state.coagulants.latest.ai_cluster_id)
          if (elem.cluster_id === this.$store.state.coagulants.latest.ai_cluster_id) {
            return true
          } else {
            return { tb_avg: '--', ph_avg: '--', cu_avg: '--', te_avg: '--' }
          }
        })
      } else {
        return { tb_avg: '--', ph_avg: '--', cu_avg: '--', te_avg: '--' }
      }
    },
    // 침전지 탁도 트랜드 차트 옵션
    ChartTrend: function () {
      let chart = this.chartDataTrend
      chart.series = []
      if (this.$store.state.sedimentation.tbTrend.series1 && Object.keys(this.$store.state.sedimentation.tbTrend.series1).length > 0) {
        let dataSeries1 = []
        for (let key in this.$store.state.sedimentation.tbTrend.series1) {
          dataSeries1.push([new Date(key).getTime(), this.$store.state.sedimentation.tbTrend.series1[key]])
        }
        chart.series.push({
          name: '1계열',
          data: dataSeries1,
          color: 'rgb(110, 157, 225)'
        })
      }
      if (this.$store.state.sedimentation.tbTrend.series2 !== null && Object.keys(this.$store.state.sedimentation.tbTrend.series2).length > 0) {
        let dataSeries2 = []
        for (let key in this.$store.state.sedimentation.tbTrend.series2) {
          dataSeries2.push([new Date(key).getTime(), this.$store.state.sedimentation.tbTrend.series2[key]])
        }
        chart.series.push({
          name: '2계열',
          data: dataSeries2,
          color: 'rgb(146, 66, 235)'
        })
      }
      chart.exporting.filename = this.$moment().format('YYYYMMDDHHmmss') + '_침전지 탁도 트렌드'
      return chart
    }
  },
  methods: {
    // 알고리즘 예측 클래스 회전 함수
    rotateCube: function () {
      if (this.carousel !== null) {
        let angle = this.theta * this.$store.state.coagulants.latest.ai_cluster_id * -1
        if (angle === 0) {
          angle = -360
        }
        console.log('this.$store.state.coagulants.latest.ai_cluster_id: ', this.$store.state.coagulants.latest.ai_cluster_id, 'angle: ', angle)
        this.carousel.style.transform = 'rotateX(' + angle + 'deg)'
      }
    },
    // fullscreenchanged 이벤트
    // fullscreenchanged: function () {
    //   console.log('fullscreenchange')
    //   if(document.fullscreenElement) {
    //     this.chartScatterOption.title.style.color = 'white'
    //     this.chartDataTrend.title.style.color = 'white'
    //   } else {
    //     this.chartScatterOption.title.style.color = 'transparent'
    //     this.chartDataTrend.title.style.color = 'transparent'
    //   }
    // }
  },
  /**
   * 마운트시 실행되는 함수
   * fullscreenchanged 이벤트 등록
   */
  mounted: function () {
    this.carousel = this.$el.querySelector('#cube')
    this.rotateCube()
    // window.addEventListener('fullscreenchange', this.fullscreenchanged)
  },
  /**
   * 마운트 해제시 실행되는 함수
   * fullscreenchanged 이벤트 해제
   */
  // beforeDestroy () { window.removeEventListener('fullscreenchange', this.fullscreenchanged) },
  watch: {
    /**
     * $store.state.coagulants.latest.ai_cluster_id 값 모니터링
     * 해당 값 변경시 회전 애니메이션
     */
    '$store.state.coagulants.latest.ai_cluster_id': function (newVal, oldVal) {
      if (oldVal !== newVal) {
        this.rotateCube()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.top-info{
  text-shadow: 0 0 9px #a0d0ff;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.06;
  letter-spacing: normal;
  text-align: left;
  color: #23a7c7;
  padding-top: 12px;
  margin-left: 5px;
}
.scroll_container {
  width: 280px;
  height: 41px;
  height: 100%;
  margin-left: 5px;
}
.select-cube{
  position: absolute;
  width: 296px;
  height: 50px;
  background-image: url('../../../assets/drugInjection/cg_roling.png');
  background-size: 100% 100%;
  top: 169px;
  left: 8px;
}
#cube {
  display: block;
  position: relative;
  margin: 60px auto;
  height: 41px;  
  width: 280px;
  -webkit-transform-style: preserve-3d;
  -webkit-transform: rotateX(0) rotateY(0) rotateZ(0);
  transform-style: preserve-3d;
  transform: rotateX(0) rotateY(0) rotateZ(0);
  transition: transform 2s;
}
@-webkit-keyframes infiniteRotation {
  0% { -webkit-transform: rotateX(0) ;}
  100% { -webkit-transform: rotateX(360deg) ;}
}
@keyframes infiniteRotation {
  0% { transform: rotateX(0) ;}
  100% { transform: rotateX(360deg) ;}
}
.carousel {
  width: 100%;
  height: 100%;
  position: absolute;
  transform: translateZ(-75px);
  transform-style: preserve-3d;
  transition: transform 1s;
}
.carousel__cell {
  position: absolute;
  width: 100%;
  height: 41px;
  text-shadow: 0 0 9px #5cafff;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.5;
  letter-spacing: normal;
  color: #fff;
  text-align: center;
  transition: transform 1s, opacity 1s;
  backface-visibility: hidden;
}
.carousel__cell::before{
  content: "";
  opacity: 0.5;
  position: absolute;
  background-image: url('../../../assets/drugInjection/swiper_roling_background.png');
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}
.select-box{
  position: absolute;
  display: flex;
  bottom: 353px;
  right: 40px;
  select{
    width: 94.5px;
    height: 34px;
    border: solid 1px rgba(157, 191, 255, 0.3);
    opacity: 0.7;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.07;
    letter-spacing: normal;
    text-align: left;
    padding-left: 15px;
    color: #fff;
    margin-left: 20px;
    background-image: url('../../../assets/drugInjection/box_under_arrow.png');
    background-position-y: center;
    background-position-x: 70px;
  }
  &__text{
    text-shadow: 0 0 9px #5cafff;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: left;
    color: #fff;
  }
}
.arrow-animate-one{
  position: absolute;
  top: 250px;
  left: 1036px;
  background-image: url('../../../assets/splashdown/arrow_img.png');
  width: 85px;
  height: 356px;
  animation-name: big-arrow-one;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes big-arrow-one{ 
  0% {opacity:0; transform: translateX(-5px);}
  12% {opacity:0.5; transform: translateX(-2px);}
  24% {opacity:1; transform: translateX(0px);}
  36% {opacity:0.5; transform: translateX(2px);}
  48% {opacity:0; transform: translateX(5px);}
  60% {opacity:0;}
  72% {opacity:0;}
  84% {opacity:0;}
  100% {opacity:0;}
}
.arrow-animate-two {
  position: absolute;
  top: 250px;
  z-index: 10;
  left: 1433px;
  background-image: url('../../../assets/splashdown/arrow_img.png');
  width: 85px;
  height: 356px;
  animation-name: big-arrow-two;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes big-arrow-two{ 
  0% {opacity:0;}
  12% {opacity:0;}
  24% {opacity:0;}
  36% {opacity:0;}
  48% {opacity:0; transform: translateX(-5px);}
  60% {opacity:0.5; transform: translateX(-2px);}
  72% {opacity:1; transform: translateX(0px);}
  84% {opacity:0.5; transform: translateX(2px);}
  100% {opacity:0; transform: translateX(5px);}
}
.main{
  width: 1202px;
  height: 794px;
  padding-left: 25px;
}
.bottom-contents{
  display: flex;
  width: 100%;
  height: 373px;
  padding-top: 20px;
  .paddingleft{
    padding-left: 10px;
  }
  .contents{
    width: 50%;
    height: 100%;
    .contents-gragh{
      width: 100%;
      height: 306px;
      background-size: contain;
      background-position-y: bottom;
    }
    &__title{
      height:47px;
      background-image: url('../../../assets/disinfection/gragh_title.png');
      text-shadow: 0 0 9px #5cafff;
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.11;
      letter-spacing: normal;
      text-align: left;
      color: #fff;
    }
  }
}
.top-contents{
  display: flex;
  width: 100%;
  height: 420px;
  .three-contents{
    position: relative;
    left: -57px;
    width: 316px;
    height: 100%;
    .three-small-contents{
      width: 424px;
      height: 356px;
      margin-top: 10px;
      background-image: url('../../../assets/disinfection/three_background.png');
      .three-small-contents-value{
        width: 316px;
        height: 355px;
        padding-top: 15px;
        .margintop{
          margin-top: 40px;
        }
        .three-contents-value-underbar{
          width: 316px;
          height: 36px;
          background-image: url('../../../assets/disinfection/contents_value_underbar.png');
          background-position-x: center;
        }
        .three-value{
          display: flex;
          justify-content: flex-end;
          width: 100%;
          height: 42px;
          &__line{
            width: 100px;
            text-shadow: 0 0 5px rgba(209, 250, 255, 0.5);
            font-family: "LAB디지털" !important;
            font-size: 25px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 2;
            letter-spacing: normal;
            text-align: center;
            color: #ccf1ff;
            margin-left: 54px;
          }
          &__num{
            margin-left: auto;
            text-shadow: 0 0 5px rgba(209, 250, 255, 0.5);
            font-family: "LAB디지털" !important;
            font-size: 25px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 2;
            letter-spacing: normal;
            text-align: center;
            color: #ccf1ff;
          }
          &__unit{
            width: 78px;
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 3.8;
            letter-spacing: normal;
            text-align: left;
            color: #417db9;
            margin-left: 10px;
          }
        }
        &__title{
          width: 85px;
          height: 34px;
          background-image: url('../../../assets/disinfection/small_contents_title.png');
          text-shadow: 0 0 9px #5cafff;
          font-size: 16px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 2.3;
          letter-spacing: normal;
          text-align: right;
          color: #c3eaff;
        }
      }
    }
    &__timerbox-outter {
      display: flex;
      position: relative;
      margin-left: auto;
      top: -3px;
    }
    &__title{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: auto;
      width: 308px;
      height: 53px;
      padding-left: 40px;
      background-image: url('../../../assets/disinfection/contents_right_title.png');
      text-shadow: 0 0 9px #5cafff;
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.8;
      letter-spacing: normal;
      text-align: left;
      color: #fff;
    }
  }
  .two-contents{
    position: relative;
    left: -30px;
    width: 424px;
    height: 100%;
    .small-contents{
      width: 424px;
      height: 356px;
      margin-top: 10px;
      background-image: url('../../../assets/disinfection/small_contents_background.png');
      .small-contents-value{
        width: 316px;
        height: 355px;
        padding-top: 20px;
        .roling-box{
          height: 57px;
          display: flex;
          justify-content: center;
        }
        .chart{
          width: 100%;
          height: 135px;
        }
        .chart-value{
          display: flex;
          width: 100%;
          padding-left: 10px;
          .value-box{
            display: flex;
            flex-flow: column;
            align-items: center;
            margin: 0 4px;
            &__text{
              text-shadow: 0 0 9px #5cafff;
              font-size: 16px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.56;
              letter-spacing: normal;
              text-align: left;
              color: #fff;
            }
            &__text1{
              text-shadow: 0 0 9px #5cafff;
              font-size: 12px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 1;
              letter-spacing: normal;
              text-align: center;
              color: #fff;
            }
            &__value{
              margin-top: 8px;
              width: 64.6px;
              height: 41.6px;
              border: solid 1px rgba(157, 191, 255, 0.3);
              text-shadow: 0 0 5px rgba(209, 250, 255, 0.5);
              font-family: "LAB디지털" !important;
              font-size: 20px;
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
        .margintop{
          margin-top: 40px;
        }
        .contents-value-underbar{
          width: 316px;
          height: 36px;
          background-image: url('../../../assets/disinfection/contents_value_underbar.png');
          background-position-x: center;
        }
        .value{
          display: flex;
          justify-content: center;
          width: 100%;
          height: 42px;
          &__num{
            text-shadow: 0 0 5px rgba(209, 250, 255, 0.5);
            font-family: "LAB디지털" !important;
            font-size: 40px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.2;
            letter-spacing: normal;
            text-align: center;
            color: #ccf1ff;
          }
          &__unit{
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 4;
            letter-spacing: normal;
            text-align: left;
            color: #417db9;
            margin-left: 10px;
          }
        }
        &__title{
          width: 85px;
          height: 34px;
          background-image: url('../../../assets/disinfection/small_contents_title.png');
          text-shadow: 0 0 9px #5cafff;
          font-size: 16px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 2.3;
          letter-spacing: normal;
          text-align: right;
          color: #c3eaff;
        }
      }
    }
    &__title{
      width: 297px;
      height: 53px;
      padding-left: 40px;
      background-image: url('../../../assets/disinfection/contents_right_title.png');
      text-shadow: 0 0 9px #5cafff;
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.8;
      letter-spacing: normal;
      text-align: left;
      color: #fff;
    }
  }
  .one-contents{
    width: 508px;
    height: 100%;
    .big-contents{
      margin-top: 10px;
      width: 458px;
      height: 356px;
      padding-top: 16px;
      background-image: url('../../../assets/splashdown/result_background.png');
      .paddingtop{
        padding-top: 13px ;
      }
      .contents-value{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 340px;
        height: 307px;
        background-image: url('../../../assets/drugInjection/value_factor.png');
        padding: 0 20px;
        .value-container{
          display: flex;
          width: 100%;
          &__title{
            width: 50px;
            text-shadow: 0 0 9px #5cafff;
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 2.61;
            letter-spacing: normal;
            text-align: right;
            color: #c3eaff;
            margin: 15px 0 5px 5px;
          }
          &__one{
            width: 150px;
            text-shadow: 0 0 9px #5cafff;
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 2.61;
            letter-spacing: normal;
            text-align: left;
            color: #9fc4ff;
          }
          &__two{
            text-shadow: 0 0 9px #5cafff;
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 2.61;
            letter-spacing: normal;
            text-align: right;
            color: #fff;
            margin-left: auto;
          }
          &__three{
            width: 33px;
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 3.36;
            letter-spacing: normal;
            text-align: left;
            color: #417db9;
            margin-left: 10px;
          }
        }
      }
    }
    &__title{
      width: 297px;
      height: 53px;
      padding-left: 40px;
      background-image: url('../../../assets/disinfection/contents_right_title.png');
      text-shadow: 0 0 9px #5cafff;
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.8;
      letter-spacing: normal;
      text-align: left;
      color: #fff;
    }
  }
}
</style>