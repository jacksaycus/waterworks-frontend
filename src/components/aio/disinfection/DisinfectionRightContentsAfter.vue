<template>
  <div class="main">
    <div class="top-contents">
      <div class="arrow-animate-one"></div>
      <div class="arrow-animate-two"></div>
      <div class="one-contents">
        <div class="one-contents__title">주요인자</div>
        <div class="big-contents">
          <div class="contents-value">
            <div class="value-container">
              <div class="value-container__one">· 정수지 유입 잔류염소(ppm)</div>
              <div class="value-container__two">{{ this.$store.state.disinfection.latest.h_in_cl | numFormat('0.00') }}</div>
            </div>
            <div class="value-container">
              <div class="value-container__one">· 정수지 유출 잔류염소(ppm)</div>
              <div class="value-container__two">{{ this.$store.state.disinfection.latest.h_out_cl | numFormat('0.00') }}</div>
            </div>
            <div class="value-container">
              <div class="value-container__one">· 정수 pH</div>
              <div class="value-container__two">{{ this.$store.state.disinfection.latest.h_ph | numFormat('0.00') }}</div>
            </div>
            <div class="value-container">
              <div class="value-container__one">· 정수 탁도(NTU)</div>
              <div class="value-container__two">{{ this.$store.state.disinfection.latest.h_tb | numFormat('0.00') }}</div>
            </div>
            <div class="value-container">
              <div class="value-container__one">· 현재 주입률(ppm)</div>
              <div class="value-container__two">{{ this.$store.state.disinfection.latest.g_post_chlorination | numFormat('0.00') }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="two-contents">
        <div class="two-contents__title">알고리즘 예측</div>
        <div class="small-contents">
          <div class="small-contents-title">이전 주입률 보정값 예측</div>
          <div class="small-contents-value">
            <div class="value">
              <div class="value__num">{{ this.$store.state.disinfection.latest.ai_g_post_corrected | numFormat('0.00') }}</div>
              <div class="value__unit">ppm</div>
            </div>
            <div class="contents-value-underbar"></div>
          </div>
        </div>
      </div>
      <div class="three-contents">
        <div class="three-contents__title">
          예측결과
          <div class="three-contents__timerbox-outter">
            <div class="timerbox">
              {{ this.$store.state.disinfection.latest.update_time | moment('YYYY-MM-DD HH:mm:ss') }}
            </div>
          </div>
        </div>
        <div class="three-small-contents">
          <div class="three-small-contents-title">AI 다음목표 주입률 예측</div>
          <div class="three-small-contents-value">
            <div class="three-value">
              <div class="three-value__num">{{ this.$store.state.disinfection.latest.ai_g_post_chlorination | numFormat('0.00') }}</div>
              <div class="three-value__unit">ppm</div>
            </div>
            <div class="three-contents-value-underbar"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-contents">
      <div class="contents">
        <div class="contents__title">후염소 주입률 보정값 예측 트렌드</div>
        <div class="contents-gragh">
          <highcharts :options="ChartOptionCorrected" style="height:100%;"/>
        </div>
      </div>
      <div class="contents paddingleft">
        <div class="contents__title">정수지 잔류염소 트렌드</div>
        <div class="contents-gragh">
          <highcharts :options="ChartOptionCl" style="height:100%;"/>
        </div>
      </div>
    </div>
  </div>  
</template>
<script>
export default {
  data: () => ({
    chartOptionCorrected: {
      chart: {
        type: 'spline',
        backgroundColor: false,
        zoomType: 'x'
      },
      title: {
        text: null,
        style: {
          color: 'white'
        }
      },
      legend: {
        align: 'right',
        verticalAlign: 'top',
        borderWidth: 0,
        y: 0,
        x: -20,
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
        valueSuffix: 'ppm'
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
        tickInterval: 1000 * 60 * 60 * 3
      },
      yAxis: {
        title: {
          align: 'high',
          text: 'ppm',
          useHTML: true,
          offset: 0,
          rotation: 0,
          x: -10,
          y: -20,
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
    chartOptionCl: {
      chart: {
        type: 'spline',
        backgroundColor: false,
        zoomType: 'x'
      },
      title: {
        text: null,
        style: {
          color: 'white'
        }
      },
      legend: {
        align: 'right',
        verticalAlign: 'top',
        borderWidth: 0,
        y: 0,
        x: -20,
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
        valueSuffix: 'ppm'
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
        tickInterval: 1000 * 60 * 60 * 3
      },
      yAxis: {
        title: {
          align: 'high',
          text: 'ppm',
          useHTML: true,
          offset: 0,
          rotation: 0,
          x: -10,
          y: -20,
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
        },
        // min: 0,
        // max: 1
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
  computed: {
    ChartOptionCorrected: function () {
      let chart = this.chartOptionCorrected
      let now = new Date()
      chart.xAxis.plotLines = [{
        color: 'white', 
        dashStyle: 'ShortDash', 
        value: now.getTime(),
        width: 3, 
      }]
      chart.series = []
      if (this.$store.state.disinfection.correctedTrend !== null && Object.keys(this.$store.state.disinfection.correctedTrend).length > 0) {
        let dataSeries1 = []
        for (let key in this.$store.state.disinfection.correctedTrend) {
          dataSeries1.push([new Date(key).getTime(), this.$store.state.disinfection.correctedTrend[key]])
        }
        chart.series.push({
          name: '보정값',
          data: dataSeries1,
          color: 'rgb(110, 157, 225)'
        })
      }
      chart.exporting.filename = this.$moment().format('YYYYMMDDHHmmss') + '_후염소 주입률 보정값 예측 트렌드'
      return chart
    },
    ChartOptionCl: function () {
      let chart = this.chartOptionCl
      chart.series = []
      if (this.$store.state.clear.h_cl.in !== null && Object.keys(this.$store.state.clear.h_cl.in).length > 0) {
        let dataSeries = []
        for (let key in this.$store.state.clear.h_cl.in) {
          dataSeries.push([new Date(key).getTime(), this.$store.state.clear.h_cl.in[key]])
        }
        chart.series.push({
          name: '유입',
          data: dataSeries,
          color: 'rgb(110, 157, 225)'
        })
      }
      if (this.$store.state.clear.h_cl.out !== null && Object.keys(this.$store.state.clear.h_cl.out).length > 0) {
        let dataSeries = []
        for (let key in this.$store.state.clear.h_cl.out) {
          dataSeries.push([new Date(key).getTime(), this.$store.state.clear.h_cl.out[key]])
        }
        chart.series.push({
          name: '유출',
          data: dataSeries,
          color: 'rgb(146, 66, 235)'
        })
      }
      chart.exporting.filename = this.$moment().format('YYYYMMDDHHmmss') + '_정수지 잔류염소 트렌드'
      return chart
    }
  },
  methods: {
    // fullscreenchanged: function () {
    //   console.log('fullscreenchange')
    //   if(document.fullscreenElement) {
    //     this.chartOptionCorrected.title.text = '후염소 주입률 보정값 예측 트렌드'
    //     this.chartOptionCl.title.text = '정수지 잔류염소 트렌드'
    //   } else {
    //     this.chartOptionCorrected.title.text = 'transparent'
    //     this.chartOptionCl.title.text = 'transparent'
    //   }
    // }
  },
  // mounted: function () {
  //   window.addEventListener('fullscreenchange', this.fullscreenchanged)
  // },
  // beforeDestroy () { window.removeEventListener('fullscreenchange', this.fullscreenchanged) },
}
</script>
<style lang="scss" scoped>
.little-title-one{
  text-shadow: 0 0 9px #5cafff;
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: normal;
  text-align: left;
  color: #c3eaff;
}
.little-title-two{
  position: absolute;
  text-shadow: 0 0 9px #5cafff;
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: normal;
  text-align: left;
  color: #c3eaff;
  top: 70px;
  left: 48px;
}
.arrow-animate-one{
  position: absolute;
  top: 252px;
  left: 1088px;
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
  top: 252px;
  z-index: 10;
  left: 1483px;
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 424px;
      height: 356px;
      margin-top: 10px;
      background-image: url('../../../assets/disinfection/three_background.png');
      .three-small-contents-title {
        position: relative;
        left: 50px;
        text-shadow: 0 0 9px #5cafff;
        font-size: 21px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.1;
        letter-spacing: normal;
        text-align: left;
        color: #c3eaff;
      }
      .three-small-contents-value{
        width: 316px;
        padding-top: 50px;
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
    &__timerbox-outter {
      display: flex;
      position: relative;
      margin-left: auto;
      top: -3px;
    }
    &__title{
      display: flex;
      align-items: center;
      width: 310px;
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 424px;
      height: 356px;
      margin-top: 10px;
      background-image: url('../../../assets/disinfection/small_contents_background.png');
      .small-contents-title {
        position: relative;
        left: 60px;
        text-shadow: 0 0 9px #5cafff;
        font-size: 21px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.1;
        letter-spacing: normal;
        text-align: left;
        color: #c3eaff;
      }
      .small-contents-value{
        width: 316px;
        padding-top: 50px;
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
      width: 508px;
      height: 356px;
      padding-top: 16px;
      background-image: url('../../../assets/disinfection/big_contents_background.png');
      .contents-value{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 372px;
        height: 307px;
        background-image: url('../../../assets/disinfection/value_factor.png');
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
            width: 222px;
            text-shadow: 0 0 9px #5cafff;
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 3;
            letter-spacing: normal;
            text-align: left;
            color: #9fc4ff;
          }
          &__two{
            width: 50px;
            text-shadow: 0 0 9px #5cafff;
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 3;
            letter-spacing: normal;
            text-align: right;
            color: #fff;
            margin-left: auto;
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