<template>
    <div class="dashboard-info-container">
        <div class="content-box box1">
            <div class="titleBox">
                <div class="title">이상감지</div>
                <img src="@/assets/pms/titleImg.png" alt="" />
            </div>

            <div class="contents">
                <div class="item-box">
                    <div
                        class="item"
                        :class="{ selected: idx === 0 }"
                        @click="processClick(0)"
                        @mouseenter="killTimer()"
                        @mouseleave="timeRotation()"
                    >
                        <img src="@/assets/pms/dashboard-arrow.png" alt="" />
                        <p>착수/약품</p>
                    </div>
                    <div
                        class="item"
                        :class="{ selected: idx === 1 }"
                        @click="processClick(1)"
                        @mouseenter="killTimer()"
                        @mouseleave="timeRotation()"
                    >
                        <img src="@/assets/pms/dashboard-arrow.png" alt="" />
                        <p>혼화/응집/침전</p>
                    </div>
                </div>
                <div class="item-box">
                    <div
                        class="item"
                        :class="{ selected: idx === 2 }"
                        @click="processClick(2)"
                        @mouseenter="killTimer()"
                        @mouseleave="timeRotation()"
                    >
                        <img src="@/assets/pms/dashboard-arrow.png" alt="" />
                        <p>여과/GAC</p>
                    </div>
                    <div
                        class="item"
                        :class="{ selected: idx === 3 }"
                        @click="processClick(3)"
                        @mouseenter="killTimer()"
                        @mouseleave="timeRotation()"
                    >
                        <img src="@/assets/pms/dashboard-arrow.png" alt="" />
                        <p>오존/소독</p>
                    </div>
                    <div
                        class="item"
                        :class="{ selected: idx === 4 }"
                        @click="processClick(4)"
                        @mouseenter="killTimer()"
                        @mouseleave="timeRotation()"
                    >
                        <img src="@/assets/pms/dashboard-arrow.png" alt="" />
                        <p>송수</p>
                    </div>
                </div>
            </div>

            <div class="contents2">
                <div
                    class="item-box"
                    v-for="(list, i) in this.$store.state.PmsModule.dashboard.processList[
                        idx
                    ].list"
                    :key="i"
                >
                    <div class="listTitle">
                        {{ list.title }}
                    </div>

                    <div class="list-elec-box">
                        <div
                            class="elec-box"
                            v-for="(elec, i) in list.elec"
                            :key="i"
                        >
                            <div class="title">
                                {{ elec.title }}
                            </div>
                            <!-- <div
                                class="elec-conent"
                                :class="{ elecErr: elec.status }"
                            ></div> -->
                            <div
                                class="elec-value"
                                :class="{ err: !elec.status }"
                            >
                                {{ elec.value }}
                                {{
                                    idx === 4
                                        ? 'dbm'
                                        : list.title === '슬러지수집기'
                                        ? 'Nm'
                                        : 'A'
                                }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src="@/assets/pms/dashboard-line.png" alt="" class="dashboard-line" />

        <div class="content-box  box2">
            <div class="titleBox">
                <div class="title">자율진단</div>
                <img src="@/assets/pms/titleImg.png" alt="" />
            </div>

            <div class="content3">
                <div class="list-box">
                    <div class="itemList list1">
                        <div class="list-title">
                            <span>평택계통</span>
                            <img src="@/assets/pms/list-title.png" alt="" />
                        </div>
                        <div class="item-box">
                            <div
                                class="item"
                                :class="{
                                    selected: idx2 === 0,
                                    alarm:
                                        this.$store.state.PmsModule.dashboard.motorInfo[0]
                                            .alarm,
                                }"
                                @click="processClick2(0)"
                                @mouseenter="killTimer2()"
                                @mouseleave="timeRotation2()"
                            >
                                #1
                            </div>
                            <div
                                class="item"
                                :class="{
                                    selected: idx2 === 1,
                                    alarm:
                                        this.$store.state.PmsModule.dashboard.motorInfo[1]
                                            .alarm,
                                }"
                                @click="processClick2(1)"
                                @mouseenter="killTimer2()"
                                @mouseleave="timeRotation2()"
                            >
                                #2
                            </div>
                            <div
                                class="item"
                                :class="{
                                    selected: idx2 === 2,
                                    alarm:
                                        this.$store.state.PmsModule.dashboard.motorInfo[2]
                                            .alarm,
                                }"
                                @click="processClick2(2)"
                                @mouseenter="killTimer2()"
                                @mouseleave="timeRotation2()"
                            >
                                #3
                            </div>
                            <div
                                class="item"
                                :class="{
                                    selected: idx2 === 3,
                                    alarm:
                                        this.$store.state.PmsModule.dashboard.motorInfo[3]
                                            .alarm,
                                }"
                                @click="processClick2(3)"
                                @mouseenter="killTimer2()"
                                @mouseleave="timeRotation2()"
                            >
                                #4
                            </div>
                        </div>
                    </div>
                    <div class="itemList list2">
                        <div class="list-title">
                            <span>송산계통</span>
                            <img src="@/assets/pms/list-title.png" alt="" />
                        </div>
                        <div class="item-box">
                            <div
                                class="item"
                                :class="{
                                    selected: idx2 === 4,
                                    alarm:
                                        this.$store.state.PmsModule.dashboard.motorInfo[4]
                                            .alarm,
                                }"
                                @click="processClick2(4)"
                                @mouseenter="killTimer2()"
                                @mouseleave="timeRotation2()"
                            >
                                #1
                            </div>
                            <div
                                class="item"
                                :class="{
                                    selected: idx2 === 5,
                                    alarm:
                                        this.$store.state.PmsModule.dashboard.motorInfo[5]
                                            .alarm,
                                }"
                                @click="processClick2(5)"
                                @mouseenter="killTimer2()"
                                @mouseleave="timeRotation2()"
                            >
                                #2
                            </div>
                        </div>
                    </div>
                </div>
                <div class="motor-box">
                    <img
                        v-if="
                            !this.$store.state.PmsModule.dashboard.motorInfo[idx2].alarm
                        "
                        src="@/assets/pms/motor.png"
                        alt=""
                    />
                    <img
                        v-else
                        src="@/assets/pms/motor-alert.png"
                        alt=""
                        class="alert-ani"
                    />
                    <div class="motor-value-area">
                        <div class="group type1">
                            <div class="val-icon"></div>
                            <div class="val-line"></div>
                            <div class="val-1">
                                {{
                                    this.$store.state.PmsModule.dashboard.motorInfo[idx2]
                                        .pump_de_rms_amp
                                }}
                                rms
                            </div>
                            <div class="val-2">
                                {{
                                    this.$store.state.PmsModule.dashboard.motorInfo[idx2]
                                        .brg_pump_de_temp
                                }}
                                °C
                            </div>
                        </div>
                        <div class="group type2">
                            <div class="val-icon"></div>
                            <div class="val-line"></div>
                            <div class="val-1">
                                {{
                                    this.$store.state.PmsModule.dashboard.motorInfo[idx2]
                                        .pump_nde_rms_amp
                                }}
                                rms
                            </div>
                            <div class="val-2">
                                {{
                                    this.$store.state.PmsModule.dashboard.motorInfo[idx2]
                                        .brg_pump_nde_temp
                                }}
                                °C
                            </div>
                        </div>
                        <div class="group type3">
                            <div class="val-icon"></div>
                            <div class="val-line"></div>
                            <div class="val-1">
                                {{
                                    this.$store.state.PmsModule.dashboard.motorInfo[idx2]
                                        .motor_de_rms_amp
                                }}
                                rms
                            </div>
                            <div class="val-2">
                                {{
                                    this.$store.state.PmsModule.dashboard.motorInfo[idx2]
                                        .brg_motor_de_temp
                                }}
                                °C
                            </div>
                        </div>
                        <div class="group type4">
                            <div class="val-icon alert"></div>
                            <div class="val-line"></div>
                            <div class="val-1">
                                {{
                                    this.$store.state.PmsModule.dashboard.motorInfo[idx2]
                                        .motor_nde_rms_amp
                                }}
                                rms
                            </div>
                            <div class="val-2">
                                {{
                                    this.$store.state.PmsModule.dashboard.motorInfo[idx2]
                                        .brg_motor_nde_temp
                                }}
                                °C
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Vue from 'vue';
export default {
    data() {
        return {
        
          idx: 0,
          timer: null,
          idx2: 0,
          timer2: null,
        
    }
   },
    methods: {
       processClick(idx) {
            this.idx = idx;
            if (this.idx === 0) {
                this.$store.dispatch('PmsModule/dashboard/waterPacAll');
                this.$store.dispatch('PmsModule/dashboard/waterAlarmAll');
            }
            if (this.idx === 1) {
                this.$store.dispatch('PmsModule/dashboard/rapidAggloSludgeAll');
                this.$store.dispatch('PmsModule/dashboard/rapidAggloSludgeAlarmAll');
                this.$store.dispatch('PmsModule/dashboard/torqueInfo');
            }

            if (this.idx === 2) {
                this.$store.dispatch('PmsModule/dashboard/filterGacAll');
                this.$store.dispatch('PmsModule/dashboard/filterAlarmAll');
            }
            if (this.idx === 3) {
                this.$store.dispatch('PmsModule/dashboard/motifCoolAll');
                this.$store.dispatch('PmsModule/dashboard/ozoneAlarmAll');
            }
            if (this.idx === 4) {
                this.$store.dispatch('PmsModule/dashboard/pumpTransVcbAll');
                this.$store.dispatch('PmsModule/dashboard/pumpAlarmAll');
            }
            this.killTimer();
            this.timeRotation();
        },
         processClick2(idx){
            this.idx2 = idx;
            this.killTimer2();
            this.timeRotation2();
        },
        timeRotation() {
            this.killTimer();
            this.timer = setTimeout(() => {
                this.idx = this.idx + 1;
                if (this.idx === 5) this.idx = 0;
                this.processClick(this.idx);
                this.timeRotation();
            }, 5000);
        },
        killTimer() {
            if (this.timer) {
                clearTimeout(this.timer);
            }
        },
        timeRotation2() {
            this.killTimer2();
            this.timer2 = setTimeout(() => {
                this.idx2 = this.idx2 + 1;
                if (this.idx2 === 6) this.idx2 = 0;
                this.timeRotation2();
            }, 5000);
        },
        killTimer2() {
            if (this.timer2) {
                clearTimeout(this.timer2);
            }
        },
       }
       ,
        mounted(){
          this.processClick(this.idx);
          this.timeRotation();
          this.$store.dispatch('PmsModule/dashboard/motorAlarm');
          this.$store.dispatch('PmsModule/dashboard/motorDataAll');
          this.$store.dispatch('PmsModule/dashboard/pumpBearingAll');
        }
        ,
       
        watch: {
        idx(){
           this.processClick(this.idx);
        }
        ,
        idx2() {
            this.processClick(this.idx);
        }
       }

};
</script>

<style lang="scss" scoped>
.dashboard-info-container {
    background: url('../../../assets/pms/dashboard_info.png') no-repeat;
    width: 396px;
    height: 985px;
    position: absolute;
    top: 7px;
    left: 1503px;
    flex-flow: column;
    background-size: cover;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

    .content-box {
        width: 100%;
        height: 60%;

        .titleBox {
            position: relative;
            margin: 10px;
            font-size: 18px;
            color: white;
            width: 200px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;

            .title {
                text-shadow: 0 0 9px #5cafff;
                z-index: 1;
            }
            img {
                position: absolute;
                z-index: 0;
                bottom: -5px;
            }
        }

        .contents {
            width: 100%;
            padding: 10px;
            display: flex;
            flex-direction: column;
            gap: 15px;

            .item-box {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .item {
                    padding: 15px;
                    position: relative;
                    width: 50%;
                    z-index: 1;
                    cursor: pointer;
                    p {
                        z-index: 1;
                        color: white;
                        width: 100%;
                        text-align: center;
                        text-shadow: 0 0 9px #5cafff;
                    }

                    img {
                        position: absolute;
                        width: 100%;
                        top: 0;
                        left: 0;
                        z-index: -1;
                        height: 100%;
                    }
                }

                .selected {
                    p {
                        color: #a9fcff;
                        text-shadow: 0 0 9px #3cd8ff;
                    }

                    img {
                        animation: select 1.5s infinite;
                    }
                }

                @keyframes select {
                    from {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.1;
                    }
                    to {
                        opacity: 1;
                    }
                }
            }
        }
        .contents2 {
            margin-top: 10px;
            width: 100%;
            padding: 10px 15px;
            display: flex;
            gap: 15px;
            flex: 1;

            .item-box {
                width: 50%;

                .listTitle {
                    width: 100%;
                    padding: 10px 0;
                    border: solid 1px #b4dffa;
                    box-shadow: 0 0 10px 0 rgb(172 207 255 / 70%);
                    background: rgba(139, 194, 240, 0.4);
                    color: white;
                    text-align: center;
                    font-size: 14px;
                }

                .list-elec-box {
                    width: 100%;
                    padding: 15px 0px;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;

                    .elec-box {
                        width: 100%;
                        display: flex;
                        // flex-direction: column;
                        align-items: center;
                        gap: 5px;

                        .elec-conent {
                            width: 15px;
                            height: 15px;
                            background: #b4dffa;
                            box-shadow: 0 0 6px 0 #5cafff;
                            border-radius: 15px;
                            cursor: pointer;
                            z-index: 1;
                        }
                        .title {
                            width: 30%;
                            color: #b4dffa;
                            font-size: 12px;
                            padding-right: 3px;
                        }
                        .elec-value {
                            width: 70%;
                            padding: 5px 3px;
                            border: solid 1px #b4dffa;
                            color: white;
                            text-align: right;
                            font-size: 12px;
                            border-radius: 2px;
                        }
                        .elec-value.err {
                            background: #ff5c5c66;
                            border: solid 1px #ff5c5c;
                        }

                        .elecErr {
                            background: #f76767;
                            box-shadow: 0 0 6px 0 #ff5c5c;
                            animation: err 2s infinite;
                        }

                        @keyframes err {
                            from {
                                box-shadow: 0 0 8px 0 #ff4747;
                                background: #ff4747;
                            }
                            50% {
                                box-shadow: 0 0 8px 0 #ff5c5c46;
                                background: #f76767;
                            }
                            to {
                                box-shadow: 0 0 8px 0 #ff4747;
                                background: #ff4747;
                            }
                        }
                    }
                }
            }
        }
    }
    .dashboard-line {
        width: 90%;
    }

    .box2 {
        height: 40%;
        display: flex;
        flex-direction: column;
        .titleBox {
            margin: 0 10px;
        }

        .content3 {
            width: 100%;
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 15px;

            .list-box {
                width: 100%;
                display: flex;
                gap: 20px;
                align-items: center;
                padding: 15px;

                .itemList {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 15px;

                    .list-title {
                        position: relative;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 10px;

                        span {
                            z-index: 1;
                            text-shadow: 0 0 9px #5cafff;
                            color: white;
                            font-size: 14px;
                        }

                        img {
                            position: absolute;
                            z-index: 0;
                        }
                    }

                    .item-box {
                        display: flex;
                        gap: 10px;
                        width: 100%;

                        .item {
                            width: 50%;
                            background: rgba(139, 194, 240, 0.25);
                            border: 1px solid #b4dffa;
                            padding: 5px 10px;
                            // border-radius: 20px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            cursor: pointer;
                            z-index: 1;
                            box-shadow: 0 0 10px 0 rgb(172 207 255 / 70%);
                            background: rgba(139, 194, 240, 0.4);
                            color: white;
                            opacity: 0.4;
                        }
                        .item.selected {
                            opacity: 1;
                        }
                        .item.alarm {
                            background: #ff5c5c66;
                            border: solid 1px #ff5c5c;
                        }
                    }
                }

                .list1 {
                    width: 65%;
                }
                .list2 {
                    width: 35%;
                }
            }
            .motor-box {
                flex: 1;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;

                img {
                    width: 60%;
                }
                .alert-ani {
                    animation: alert-ani 1s infinite;
                }
                @keyframes alert-ani {
                    from {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.5;
                    }
                    to {
                        opacity: 1;
                    }
                }
                .motor-value-area {
                    position: absolute;
                    top: 0;
                    left: 0;
                    .group {
                        position: absolute;
                        font-size: 12px;
                        color: #fff;
                        .val-icon {
                            position: absolute;
                            width: 10px;
                            height: 10px;
                            border-radius: 10px;
                            background: radial-gradient(
                                rgb(4, 0, 255),
                                rgb(84, 65, 255)
                            );
                            border: 1px solid #fff;
                            box-shadow: 2px 2px 1px #000;
                        }
                        .val-icon.alert {
                            background: radial-gradient(
                                rgb(255, 26, 26),
                                rgb(255, 105, 105)
                            );
                        }
                        .val-1 {
                            padding: 3px 0 2px;
                            text-align: center;
                            width: 70px;
                            margin-bottom: 3px;
                            border: solid 1px #b4dffa;
                            color: white;
                            border-radius: 2px;
                        }
                        .val-2 {
                            padding: 3px 0 2px;
                            text-align: center;
                            width: 70px;
                            border: solid 1px #b4dffa;
                            color: white;
                            border-radius: 2px;
                        }
                        .val-line {
                            position: absolute;
                            border: 1px dotted #fff;
                        }
                    }
                    .group.type1 {
                        top: 0px;
                        left: 10px;
                        .val-icon {
                            top: 85px;
                            left: 85px;
                            background: #5470c6;
                        }
                        .val-line {
                            top: 20px;
                            left: 75px;
                            width: 15px;
                            height: 65px;
                            border-left: none;
                            border-bottom: none;
                        }
                    }
                    .group.type2 {
                        top: 130px;
                        left: 10px;
                        .val-icon {
                            top: -65px;
                            left: 190px;
                            background: #91cc75;
                        }
                        .val-line {
                            top: -50px;
                            left: 75px;
                            width: 120px;
                            height: 75px;
                            border-left: none;
                            border-top: none;
                        }
                    }
                    .group.type3 {
                        top: 0px;
                        left: 300px;
                        .val-icon {
                            top: 60px;
                            left: -80px;
                            background: #fac858;
                        }
                        .val-line {
                            top: 20px;
                            left: -75px;
                            width: 70px;
                            height: 35px;
                            border-right: none;
                            border-bottom: none;
                        }
                    }
                    .group.type4 {
                        top: 130px;
                        left: 300px;
                        .val-icon {
                            top: -80px;
                            left: 5px;
                            background: #ee6666;
                        }
                        .val-line {
                            top: -75px;
                            left: 20px;
                            width: 15px;
                            height: 70px;
                            border-left: none;
                            border-bottom: none;
                        }
                    }
                }
            }
        }
    }
}
</style>
