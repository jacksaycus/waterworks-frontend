<template>
    <div class="chart">
        <v-chart class="linechart" :option="option" autoresize />
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name:'Linechart',
    props: [
        'title',
        'detailData1',
        'detailData2',
        'detailData3',
        'detailData4',
        'name1',
        'name2',
        'name3',
        'name4',
    ],
    data: () => ({
        option:{},
    })
    ,
    computed: {
        current1(){return this.detailData1},
        current2(){return this.detailData2},
        current3(){return this.detailData3},
        current4(){return this.detailData4},
        // name1(){return this.name1},
        // name2(){return this.name2},
        // name3(){return this.name3},
        // name4(){return this.name4},
    }
    ,
    
    mounted(){
        this.option = {
            backgroundColor: 'rgba(0,0,0,0)',
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(0,0,0,0.8)',
                borderWidth: 1,
                borderColor: 'rgba(25,163,223, 0.5)',
                textStyle: {
                    color: '#eee',
                    fontSize: 12,
                },
                axisPointer: {
                    lineStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: 'rgba(126,199,255,0)',
                                },
                                {
                                    offset: 0.5,
                                    color: 'rgba(126,199,255,1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(126,199,255,0)',
                                },
                            ],
                            global: false, 
                        },
                    },
                },
                formatter: (obj) => {
                    let l_str = '';
                    let i = 0;
                    for (i = 0; i < obj.length; i++) {
                        let targetObj = obj[i];
                        let value = targetObj.value[1];
                        if (value === undefined) value = '-';
                        if (i === 0) {
                            console.log(targetObj.axisValue);
                            l_str +=
                                moment(targetObj.axisValue).format(
                                    'yyyy-MM-DD HH:mm:ss'
                                ) + '<br>';
                            if (isNaN(targetObj.value[1]) === false) {
                                l_str += targetObj.seriesName + ' : ';
                                l_str += value + '<br>';
                            }
                        } else if (i === obj.length - 1) {
                            l_str += targetObj.seriesName + ' : ';
                            l_str += value;
                        } else {
                            if (isNaN(targetObj.value[1]) === false) {
                                l_str += targetObj.seriesName + ' : ';
                                l_str += value + '<br>';
                            }
                        }
                    }
                    return l_str;
                },
            },
            legend: {
                type: 'scroll',
                show: true,
                textStyle: {
                    color: '#fff',
                },
                inactiveColor: '#444',
            },
            grid: {
                top: 5,
                left: '30',
                right: '10',
                bottom: 20,
            },
            xAxis: {
           
                type: 'time',
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#5D96C4',
                    },
                },
                axisLabel: {
                    show: true,
                    fontStyle: {
                        color: '#5D96C4',
                        fontSize: 10,
                    },
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#192B45',
                    },
                },
                axisTick: {
                    show: true,
                },
            },
            yAxis: {
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#192B45',
                    },
                },
                splitNumber: 3,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#5D96C4',
                    },
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#5D96C4',
                        padding: 2,
                        fontSize: 8,
                    },
                    formatter: function(value) {
                        if (value === 0) {
                            return value;
                        }
                        return value;
                    },
                },
                axisTick: {
                    show: false,
                },
                max: function(value) {
                    let max = 10;
                    if (value.max > 10) max = Math.floor(value.max) + 1;
                    return max;
                },
            },
            dataZoom: [
                {
                    type: 'inside',
                    start: 0,
                    end: 100,
                },
            ],
            series: [
                {
                    type: 'line',
                    symbol: 'circle',
                    symbolSize: 0,
                    itemStyle: {
                        normal: {
                            type: 'dashed',
                            color: '#FF4369',
                            lineStyle: {
                                color: 'yellow',
                            },
                        },
                    },
                    animation: false,
                    showSymbol: false,
                    markLine: {
                        symbol: 'none',
                        silent: true,
                        label: {
                            position: 'start',
                        },
                        data: [
                            {
                                yAxis: 6.1,
                                label: {
                                    show: false,
                                    position: '',
                                },
                            },
                        ],
                    },
                },
                {
                    type: 'line',
                    symbol: 'circle',
                    animation: false,
                    symbolSize: 0,
                    showSymbol: false,
                    itemStyle: {
                        normal: {
                            type: 'dashed',
                            color: '#F2C037',
                            lineStyle: {
                                color: 'yellow',
                            },
                        },
                    },
                    markLine: {
                        symbol: 'none',
                        silent: true,
                        label: {
                            position: 'start',
                        },
                        data: [
                            {
                                yAxis: 4.5,
                                label: {
                                    show: false,
                                    position: '',
                                },
                            },
                        ],
                    },
                },
                {
                    name: this.name1,
                    type: 'line',
                    symbol: 'circle',
                    showAllSymbol: true,
                    symbolSize: 0,
                    smooth: true,
                    tooltip: {
                        show: true,
                    },
                    data: [],
                },
                {
                    name: this.name2,
                    type: 'line',
                    symbol: 'circle',
                    showAllSymbol: true,
                    symbolSize: 0,
                    smooth: true,
                    
                    tooltip: {
                        show: true,
                    },
                    data: [],
                },
                {
                    name: this.name3,
                    type: 'line',
                    symbol: 'circle',
                    showAllSymbol: true,
                    symbolSize: 0,
                    smooth: true,
                    tooltip: {
                        show: true,
                    },
                    data: [],
                },
                {
                    name: this.name4,
                    type: 'line',
                    symbol: 'circle',
                    showAllSymbol: true,
                    symbolSize: 0,
                    smooth: true,
                    tooltip: {
                        show: true,
                    },
                    data: [],
                },
            ],
        };
   }
   ,
//    watch: {
//       current1: {
//       immediate: true,
//       handler(val) {
//         this.option.series[2].data = val;
//       },
//     },
//       current2: {
//       immediate: true,
//       handler(val) {
//         this.option.series[3].data = val;
//       },
//     },
//       current3: {
//       immediate: true,
//       handler(val) {
//         this.option.series[4].data = val;
//       },
//      },
//       current4: {
//       immediate: true,
//       handler(val) {
//         this.option.series[5].data = val;
//       },
//     },
//     }        
//     ,   
        
};
</script>
