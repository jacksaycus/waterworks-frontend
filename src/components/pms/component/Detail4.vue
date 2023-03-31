<template>
    <div class="detail-4">
        <!-- <Header class="header" /> -->
        <div class="content">
            <div class="content-select">
                <!-- <q-select
                    v-model="model"
                    :options="options"
                    bg-color="transparent"
                    dark
                    dense
                    @update:model-value="selectModel"
                >
                    <template v-slot:prepend>
                        <q-avatar>
                            <img
                                src="@/assets/pms/titleicon.svg"
                                alt=""
                                class="titleCon"
                            />
                        </q-avatar>
                    </template>
                </q-select> -->
                <v-menu
                    transition="slide-y-transition"
                    bottom
                    >
                    <template v-slot:activator="{ on }">
                        <v-btn
                        class="purple"
                        color="primary"
                        dark
                        v-on="on"
                        >
                        Slide Y Transition
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-tile
                        v-for="(item, i) in items"
                        :key="i"
                        @click=""
                        >
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                    </v-menu>

                <div class="back-btn" v-on:click="back()">
                    <span> ← Back</span>
                </div>
            </div>
            <div class="content-right">
                
                <!-- 펌프현황 -->
                <div class="location">
                    <div class="search">
                        <!-- <input
                            @click="datePop"
                            readonly
                            :value="startStr"
                        /> -->
                        <v-flex xs12 sm6 md4>  
                        <v-menu
                            v-model="menu1"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            lazy
                            transition="scale-transition"
                            offset-y
                            full-width
                            min-width="290px"
                        >
                            <template v-slot:activator="{ on }">
                            <v-text-field
                                v-model="startStr"
                                prepend-icon="    "
                                readonly
                                v-on="on"
                            ></v-text-field>
                            </template>
                            <v-date-picker v-model="startStr" @input="menu2 = false" @click="datePop"></v-date-picker>
                        </v-menu>
                        </v-flex>    
                        <span>~</span>
                        <!-- <input
                            @click="datePop"
                            readonly
                            :value="endStr"
                        /> -->
                       
                        <v-flex xs12 sm6 md4>  
                        <v-menu
                            v-model="menu2"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            lazy
                            transition="scale-transition"
                            offset-y
                            full-width
                            min-width="290px"
                        >
                            <template v-slot:activator="{ on }">
                            <v-text-field
                                v-model="endStr"
                                prepend-icon="    "
                                readonly
                                v-on="on"
                            ></v-text-field>
                            </template>
                            <v-date-picker v-model="endStr" @input="menu2 = false" @click="datePop"></v-date-picker>
                          </v-menu>
                        </v-flex>  
                        
                        <!-- <q-popup-proxy
                            ref="qDateProxy"
                            transition-show="scale"
                            transition-hide="scale"
                            v-model="datePop"
                        >
                            <q-date
                                v-model="date"
                                range
                                mask="YYYY-MM-DD"
                            >
                                <div class="row items-center justify-end"></div>
                            </q-date>
                        </q-popup-proxy> -->
                    </div>
                    <button class="button" @click="searchDate">조회</button>
                </div>
                
                <div class="chart-box">
                    <div class="chart-area">
                        <div class="chart-con">
                            <Frame />
                            <Linechart
                                title="과전류"
                                name1="과전류"
                                :detailData="
                                    this.$store.state.PmsModule.monitor4.detailData.current
                                "
                            />
                        </div>
                    </div>
                    <div class="chart-area">
                        <div class="chart-con">
                            <Frame />
                            <Linechart
                                title="전압변동률"
                                name1="전압변동률"
                                :detailData="
                                    this.$store.state.PmsModule.monitor4.detailData.diff_voltage
                                "
                            />
                        </div>
                    </div>
                    <div class="chart-area">
                        <div class="chart-con">
                            <Frame />
                            <Linechart
                                title="주입량 고려 전류"
                                name1="주입량 고려 전류"
                                :detailData="
                                    this.$store.state.PmsModule.monitor4.selectModel.indexOf(
                                        'PAHCS'
                                    ) === -1
                                        ? this.$store.state.PmsModule.monitor4.detailData
                                              .pac_ch_single_i
                                        : this.$store.state.PmsModule.monitor4.detailData
                                              .pahcs_ch_single_i
                                "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Frame from '@/components/pms/component/BoxFrame.vue';
import Linechart from '@/components/pms/chart/monitoring/Linechart_s.vue';
import moment from 'moment';
export default {
    name:'Detail4',
    components: {
        Frame,
        Linechart,
    },
    data: () => ({
        menu1: false,
        menu2: false,
        model: '',
        tab: '가동여부',
        datePop: false,
        date: {
                from: '',
                to: '',
        },
        startStr: '',
        endStr: '',
        items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ]
    }),
    computed: {
        options(){ 
            let list = [];
                for (
                    let i = 0;
                    i < this.$store.state.PmsModule.monitor4.modelList.length;
                    i++
                ) {
                    list.push(this.$store.state.PmsModule.monitor4.modelList[i].title);
                }
                return list;
        },
        detailInfo() {return this.$store.getters.PmsModule.monitor4['PmsModule/monitor4/detailInfo']},
    },
    mounted() {
        //console.log('this.$store.state.PmsModule.monitor4',this.$store.state.PmsModule.monitor4);
            this.model = this.$store.state.PmsModule.monitor4.selectModel;
            let currentTime = new Date();
            let startDate = moment(
                currentTime.getTime() - 7 * 24 * 60 * 60 * 1000
            ).format('yyyy-MM-DD HH:mm:ss');
            let endDate = moment(currentTime.getTime()).format(
                'yyyy-MM-DD HH:mm:ss'
            );
            this.$store.state.PmsModule.monitor4.startDate = startDate;
            this.$store.state.PmsModule.monitor4.endDate = endDate;
            this.todayDate();
            this.dateToNumber();
            if (this.$store.state.PmsModule.monitor4.selectModel.indexOf('PAHCS') === -1) {
                this.$store.dispatch('PmsModule/monitor4/handleDatePicker');
            } else {
                this.$store.dispatch('PmsModule/monitor4/handleDatePicker2');
            }
        }
    ,    
    methods:{
        todayDate() {
            this.date.from = this.$store.state.PmsModule.monitor4.startDate.split(' ')[0];
            this.date.to = this.$store.state.PmsModule.monitor4.endDate.split(' ')[0];
            this.startStr = this.date.from;
            this.endStr = this.date.to;
        }
        ,
        dateToNumber() {
            this.$store.state.PmsModule.monitor4.pickDate.from = Number(
                this.date.from.replaceAll('-', '')
            );
            this.$store.state.PmsModule.monitor4.pickDate.to = Number(
                this.date.to.replaceAll('-', '')
            );
            this.startStr = this.date.from;
            this.endStr = this.date.to;
            console.log(this.date.from + ' ::::' + this.date.to);
        }
        ,
        searchDate() {
            this.dateToNumber();
            if (this.$store.state.PmsModule.monitor4.selectModel.indexOf('PAHCS') === -1) {
                this.$store.dispatch('PmsModule/monitor4/handleDatePicker');
            } else {
                this.$store.dispatch('PmsModule/monitor4/handleDatePicker2');
            }
        }
        ,
        selectModel(value) {
            let select = this.$store.state.PmsModule.monitor4.modelList.filter(
                (v) => v.title === value
            );
            this.$store.state.PmsModule.monitor4.selectModel = select[0].title;
            this.$store.state.PmsModule.monitor4.id = select[0].id;
            if (value.indexOf('PAHCS') === -1) {
                this.$store.dispatch('PmsModule/monitor4/handleDatePicker');
            } else {
                this.$store.dispatch('PmsModule/monitor4/handleDatePicker2');
            }
        }
        ,
        back() {
            this.$router.push('monitor4');
        }
    }
        
       
};
</script>

<style></style>
