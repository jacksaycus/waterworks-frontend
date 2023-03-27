<template>
    <div class="charts">
        <div class="title-box">
            <img src="@/assets/pms/circle.svg" alt="" />
            <p>설비현황 통계</p>
        </div>
        <Frame />
        <v-chart class="piechart" :option="option" autoresize />
        <p class="text">정상</p>
    </div>
</template>

<script>

import Frame from '@/components/pms/component/BoxFrame.vue';
import * as echarts from 'echarts';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import 'echarts-liquidfill';
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';

use([
    CanvasRenderer,
    PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
]);

export default {
    name: 'PieChart_main',
    components: {
        VChart,
        Frame,
    },
    provide: {
        [THEME_KEY]: 'dark',
    },
    data: () => ({
        // normalValue : this.$store.state.PmsModule.process.map((item) => item.normal).reduce((a, b) => a + b, 0)
        // ,    
        // errValue : this.$store.state.PmsModule.process.map((item) => item.err).reduce((a, b) => a + b, 0)
        // ,
        normalValue:[],
        errrValue:[],
        data :[]
        ,
        series : []
        ,
        trafficWay : []
        ,
        // normal : this.trafficWay.filter((data) => data.name === '정상')[0].value,
        // error : this.trafficWay.filter((data) => data.name === '이상')[0].value,
        normal : 0,
        error : 0,
        normalPercentage:0,
        borderColor : ['#1464EF', '#ED1874'],
        color : [
            new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                    offset: 0,
                    color: '#08286d96',
                },
                {
                    offset: 1,
                    color: '#1a95fa67',
                },
            ]),
            new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                    offset: 0,
                    color: '#52062381',
                },
                {
                    offset: 1,
                    color: '#f30e667c',
                },
            ]),
        ],
        shadowColor : ['#1464EF', '#ED1874'],
        option : {},
      }
    )
    ,
    methods: {
        setTrafficWay() {
            for (var i = 0; i < this.trafficWay.length; i++) {
                this.data.push({
                    value: this.trafficWay[i].value,
                    name: this.trafficWay[i].name,
                    itemStyle: {
                        normal: {
                            borderWidth: 2,
                            shadowBlur: 5,
                            borderColor: borderColor[i],
                            color: color[i],
                            shadowColor: shadowColor[i],
                        },
                    },
                });
            }
      }
    }
    ,
    mounted(){
        this.normalPercentage=((this.normal / (this.normal + this.error)) * 100).toFixed(0),
        this.normalValue = this.$store.state.PmsModule.process.map((item) => item.normal).reduce((a, b) => a + b, 0);
        this.errValue = this.$store.state.PmsModule.process.map((item) => item.err).reduce((a, b) => a + b, 0);
        this.normal= this.normalValue;
        this.error = this.errValue;
        this.trafficWay.push(
            {
                name: '정상',
                value: this.normalValue,
            });
            this.trafficWay.push({
                name: '이상',
                value: this.errValue,
            });
        this.data.push({
                value:this.normalValue,
                name:'정상',
                 itemStyle:{
                       normal:{
                         borderWidth: 2,
                         shadowBlur: 5,
                         borderColor: '#1464EF',
                         color: this.color[0],
                         shadowColor: '#1464EF',
                 }
            }
        });
        this.data.push(
        {
                 value:this.errValue,
                 name:'이상',
                 itemStyle:{
                       normal:{
                         borderWidth: 2,
                         shadowBlur: 5,
                         borderColor: '#ED1874',
                         color: this.color[1],
                         shadowColor: '#ED1874',
                 }
            }
        }
        );
        this.series.push(
            {
                    type: 'liquidFill',
                    radius: '60%',
                    center: ['48%', '50%'],
                    data: [
                        this.normalPercentage * 0.01,
                        this.normalPercentage * 0.01 - 0.1,
                        this.normalPercentage * 0.01 - 0.25,
                    ],
                    backgroundStyle: {
                        borderWidth: 1,
                        color: '#191E36',
                    },
                    label: {
                        normal: {
                            formatter: '\n' + this.normalPercentage + '%',
                            textStyle: {
                                fontSize: 45,
                                lineHeight: 30,
                                textShadowColor: 'rgba(0,0,0,0.2)',
                                textShadowBlur: 8,
                                textShadowOffsetX: 2,
                                textShadowOffsetY: 2,
                            },
                        },
                    },
                    outline: {
                        show: false,
                    },
                }
        );
               this.series.push({
                    type: 'pie',
                    center: ['48%', '50%'],
                    radius: ['65%', '80%'],
                    hoverAnimation: false,
                    data: this.data,
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'outside',
                                color: '#fff',
                                fontSize: 16,
                                lineHeight: 20,
                                align: 'center',

                                formatter: (params) => {
                                    var percent = 0;
                                    var total = 0;
                                    for (
                                        var i = 0;
                                        i < this.trafficWay.length;
                                        i++
                                    ) {
                                        total += this.trafficWay[i].value;
                                    }
                                    percent = (
                                        (params.value / total) *
                                        100
                                    ).toFixed(0);
                                    if (params.name !== '') {
                                        return (
                                            params.name +
                                            '\n' +
                                            percent +
                                            '%' +
                                            '\n' +
                                            params.value +
                                            '대'
                                        );
                                    } else {
                                        return '';
                                    }
                                },
                            },
                            labelLine: {
                                length: -10,
                                length2: 80,
                                show: true,
                                lineStyle: {
                                    width: 3,
                                },
                            },
                        },
                    },
                }
        );
        this.option = {
            backgroundColor: 'rgba(0,0,0,0)',
            title: {
                text: '',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 25,
                    color: 'rgb(97, 142, 205)',
                },
            },
            legend: {
                show: true,
                right: 0,
                top: 0,
                orient: 'vertical',
                itemHeight: 6,
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                },
            },
            series: [
                {
                    type: 'liquidFill',
                    radius: '60%',
                    center: ['48%', '50%'],
                    data: [
                        this.normalPercentage * 0.01,
                        this.normalPercentage * 0.01 - 0.1,
                        this.normalPercentage * 0.01 - 0.25,
                    ],
                    backgroundStyle: {
                        borderWidth: 1,
                        color: '#191E36',
                    },
                    label: {
                        normal: {
                            formatter: '\n' + this.normalPercentage + '%',
                            textStyle: {
                                fontSize: 45,
                                lineHeight: 30,
                                textShadowColor: 'rgba(0,0,0,0.2)',
                                textShadowBlur: 8,
                                textShadowOffsetX: 2,
                                textShadowOffsetY: 2,
                            },
                        },
                    },
                    outline: {
                        show: false,
                    },
                },
                {
                    type: 'pie',
                    center: ['48%', '50%'],
                    radius: ['65%', '80%'],
                    hoverAnimation: false,
                    data: this.data,
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'outside',
                                color: '#fff',
                                fontSize: 16,
                                lineHeight: 20,
                                align: 'center',

                                formatter: (params) => {
                                    var percent = 0;
                                    var total = 0;
                                    for (
                                        var i = 0;
                                        i < this.trafficWay.length;
                                        i++
                                    ) {
                                        total += this.trafficWay[i].value;
                                    }
                                    percent = (
                                        (params.value / total) *
                                        100
                                    ).toFixed(0);
                                    if (params.name !== '') {
                                        return (
                                            params.name +
                                            '\n' +
                                            percent +
                                            '%' +
                                            '\n' +
                                            params.value +
                                            '대'
                                        );
                                    } else {
                                        return '';
                                    }
                                },
                            },
                            labelLine: {
                                length: -10,
                                length2: 80,
                                show: true,
                                lineStyle: {
                                    width: 3,
                                },
                            },
                        },
                    },
                },
            ],
        };
        // this.setTrafficWay();
        // console.log(' this.$store.state.PmsModule.process=>', this.$store.state.PmsModule.process);
       
    },
};
</script>

<style lang="scss" scoped>
.charts {
    width: 100%;
    height: 100%;
    background: #05223b93;
    border: 1px solid #2660ab;
    border-radius: 12px;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 10px 15px;

    .title-box {
        font-size: 18px;
        display: flex;
        align-items: center;
        height: 15%;
        color: #c8d7e9;
        text-shadow: 0px 0px 10px #24baff;

        img {
            width: 16px;
            margin-right: 8px;
        }
    }

    .piechart {
        width: 100%;
        position: relative;
        flex: 1;
    }
    .text {
        position: absolute;
        top: 45%;
        left: 48%;
        color: white;
        transform: translate(-50%, -50%);
        text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
    }
}
</style>
