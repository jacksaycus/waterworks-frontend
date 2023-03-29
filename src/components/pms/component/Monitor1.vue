<template>
    <div class="monitor-1">
        <div class="action-btn" v-on:click="select(4)">4</div>
        <div class="action-btn two" v-on:click="select(3)">3</div>
        <div class="action-btn three" v-on:click="select(2)">2</div>
        <div class="action-btn four" v-on:click="select(1)">1</div>
        <div class="action-btn reset" v-on:click="selectReset()">
            reset
        </div>
        <!-- <Header class="header" /> -->
        <div class="content">
            <div class="content-left">
                <div class="content-panel">
                    <div class="pipe-line hori line1">
                        <div
                            class="water-icon2"
                            :class="{
                                none: !this.$store.state.PmsModule.monitor1.modelList[0].eq_on,
                            }"
                        ></div>
                        <div
                            class="water-icon2 delay2"
                            :class="{
                                none: !this.$store.state.PmsModule.monitor1.modelList[0].eq_on,
                            }"
                        ></div>
                    </div>
                    <div class="pipe-line hori line2">
                        <div
                            class="water-icon2"
                            :class="{
                                none: !this.$store.state.PmsModule.monitor1.modelList[1].eq_on,
                            }"
                        ></div>
                        <div
                            class="water-icon2 delay2"
                            :class="{
                                none: !this.$store.state.PmsModule.monitor1.modelList[1].eq_on,
                            }"
                        ></div>
                    </div>
                    <div class="pipe-line hori line3">
                        <div
                            class="water-icon2"
                            :class="{
                                none: !this.$store.state.PmsModule.monitor1.modelList[2].eq_on,
                            }"
                        ></div>
                        <div
                            class="water-icon2 delay2"
                            :class="{
                                none: !this.$store.state.PmsModule.monitor1.modelList[2].eq_on,
                            }"
                        ></div>
                    </div>
                    <div class="pipe-line hori line4">
                        <div
                            class="water-icon2"
                            :class="{
                                none: !this.$store.state.PmsModule.monitor1.modelList[3].eq_on,
                            }"
                        ></div>
                        <div
                            class="water-icon2 delay2"
                            :class="{
                                none: !this.$store.state.PmsModule.monitor1.modelList[3].eq_on,
                            }"
                        ></div>
                    </div>
                    <div class="pipe-line ver line5">
                        <div class="water-icon"></div>
                        <div class="water-icon delay2"></div>
                        <div class="water-icon delay3"></div>
                        <div class="water-icon delay4"></div>
                        <div class="water-icon delay5"></div>
                        <div class="water-icon delay6"></div>
                        <div class="water-icon delay7"></div>
                        <div class="water-icon delay8"></div>
                        <div class="water-icon delay9"></div>
                        <div class="water-icon delay10"></div>
                        <div class="water-icon delay11"></div>
                        <div class="water-icon delay12"></div>
                    </div>
                    <div class="content-header">
                        <div class="header-left"></div>
                        <div class="header-center">평택계통 송수펌프모터</div>
                        <div class="header-right"></div>
                    </div>
                    <div class="content-container two">
                        <div class="content-container-row">
                            <div
                                class="icon-area"
                                v-on:click="
                                    clickParam('평택계통 송수펌프모터 #1', 1)
                                "
                                :class="{
                                    error:
                                        this.$store.state.PmsModule.monitor1.modelList[0].alarm,
                                    none: !this.$store.state.PmsModule.monitor1.modelList[0]
                                        .eq_on,
                                }"
                            >
                                <Frame />
                                <div class="title-box">
                                    <img src="@/assets/pms/circle.svg" alt="" />
                                    <p>평택계통 송수펌프모터 #1</p>
                                </div>
                                <img class="icon" src="@/assets/pms/motor.png" />
                            </div>
                            <div class="chart-area">
                                <div class="alert-icon">
                                    <div class="state-area">
                                        <div
                                            class="alarm-icon"
                                            :class="{
                                                error:
                                                    this.$store.state.PmsModule.monitor1
                                                        .modelList[0].eq_on,
                                            }"
                                        >
                                            <img
                                                class="icon"
                                                src="@/assets/pms/alarm.svg"
                                            />
                                        </div>
                                        <p>
                                            {{
                                                this.$store.state.PmsModule.monitor1
                                                    .modelList[0].eq_on
                                                    ? '동작중'
                                                    : ''
                                            }}
                                        </p>
                                    </div>
                                    <div class="value-area">
                                        <div class="value-val hold">
                                            펌프임계값<br />6.1 mm/s
                                        </div>
                                        <div class="value-val hold yellow">
                                            모터임계값<br />4.5 mm/s
                                        </div>
                                    </div>
                                    <div class="value-area2">
                                        <div class="value-title">펌프 부하</div>
                                        <div class="value-val type1">
                                            {{
                                                this.$store.state.PmsModule.monitor1
                                                    .modelList[0]
                                                    .pump_de_amp_val
                                            }}
                                            mm/s
                                        </div>
                                        <div class="value-title">
                                            펌프 반부하
                                        </div>
                                        <div class="value-val type2">
                                            {{
                                                this.$store.state.PmsModule.monitor1
                                                    .modelList[0]
                                                    .pump_nde_amp_val
                                            }}
                                            mm/s
                                        </div>
                                        <div class="value-title">모터 부하</div>
                                        <div class="value-val type3">
                                            {{
                                                this.$store.state.PmsModule.monitor1
                                                    .modelList[0]
                                                    .motor_de_amp_val
                                            }}
                                            mm/s
                                        </div>
                                        <div class="value-title">
                                            모터 반부하
                                        </div>
                                        <div class="value-val type4">
                                            {{
                                                this.$store.state.PmsModule.monitor1
                                                    .modelList[0]
                                                    .motor_nde_amp_val
                                            }}
                                            mm/s
                                        </div>
                                    </div>
                                </div>
                                <div class="chart-con">
                                    <Frame />
                                    <!-- <Linechart
                                        :elecData="
                                            this.$store.state.PmsModule.monitor1.modelList[0]
                                                .elecData
                                        "
                                        
                                    /> -->
                                    <Linechart
                                        name1="펌프 부하"
                                        name2="펌프 반부하"
                                        name3="모터 부하"
                                        name4="모터 반부하"
                                        :detailData1="
                                            this.$store.state.PmsModule.monitor1.modelList[0]
                                                .pump_de_amp
                                        "
                                        :detailData2="
                                            this.$store.state.PmsModule.monitor1.modelList[0]
                                                .pump_nde_amp
                                        "
                                        :detailData3="
                                            this.$store.state.PmsModule.monitor1.modelList[0]
                                                .motor_de_amp
                                        "
                                        :detailData4="
                                            this.$store.state.PmsModule.monitor1.modelList[0]
                                                .motor_nde_amp
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="content-container-row">
                            <div
                                class="icon-area"
                                v-on:click="
                                    clickParam('평택계통 송수펌프모터 #2', 2)
                                "
                                :class="{
                                    error:
                                        this.$store.state.PmsModule.monitor1.modelList[1].alarm,
                                    none: !this.$store.state.PmsModule.monitor1.modelList[1]
                                        .eq_on,
                                }"
                            >
                                <Frame />
                                <div class="title-box">
                                    <img src="@/assets/pms/circle.svg" alt="" />
                                    <p>평택계통 송수펌프모터 #2</p>
                                </div>
                                <img class="icon" src="@/assets/pms/motor.png" />
                            </div>
                            <div class="chart-area">
                                <div class="alert-icon">
                                    <div class="state-area">
                                        <div
                                            class="alarm-icon"
                                            :class="{
                                                error:
                                                    this.$store.state.PmsModule.monitor1
                                                        .modelList[1].eq_on,
                                            }"
                                        >
                                            <img
                                                class="icon"
                                                src="@/assets/pms/alarm.svg"
                                            />
                                        </div>
                                        <p>
                                            {{
                                                this.$store.state.PmsModule.monitor1
                                                    .modelList[1].eq_on
                                                    ? '동작중'
                                                    : ''
                                            }}
                                        </p>
                                    </div>
                                    <div class="value-area">
                                        <div class="value-val hold">
                                            펌프임계값<br />6.1 mm/s
                                        </div>
                                        <div class="value-val hold yellow">
                                            모터임계값<br />4.5 mm/s
                                        </div>
                                    </div>
                                    <div class="value-area2">
                                        <div class="value-title">펌프 부하</div>
                                        <div class="value-val type1">
                                            {{
                                                this.$store.state.PmsModule.monitor1
                                                    .modelList[1]
                                                    .pump_de_amp_val
                                            }}
                                            mm/s
                                        </div>
                                        <div class="value-title">
                                            펌프 반부하
                                        </div>
                                        <div class="value-val type2">
                                            {{
                                                this.$store.state.PmsModule.monitor1
                                                    .modelList[1]
                                                    .pump_nde_amp_val
                                            }}
                                            mm/s
                                        </div>
                                        <div class="value-title">모터 부하</div>
                                        <div class="value-val type3">
                                            {{
                                                this.$store.state.PmsModule.monitor1
                                                    .modelList[1]
                                                    .motor_de_amp_val
                                            }}
                                            mm/s
                                        </div>
                                        <div class="value-title">
                                            모터 반부하
                                        </div>
                                        <div class="value-val type4">
                                            {{
                                                this.$store.state.PmsModule.monitor1
                                                    .modelList[1]
                                                    .motor_nde_amp_val
                                            }}
                                            mm/s
                                        </div>
                                    </div>
                                </div>
                                <div class="chart-con">
                                    <Frame />
                                    <!-- <Linechart
                                        :elecData="
                                            this.$store.state.PmsModule.monitor1.modelList[1]
                                                .elecData
                                        "
                                    /> -->
                                    <Linechart
                                        name1="펌프 부하"
                                        name2="펌프 반부하"
                                        name3="모터 부하"
                                        name4="모터 반부하"
                                        :detailData1="
                                            this.$store.state.PmsModule.monitor1.modelList[1]
                                                .pump_de_amp
                                        "
                                        :detailData2="
                                            this.$store.state.PmsModule.monitor1.modelList[1]
                                                .pump_nde_amp
                                        "
                                        :detailData3="
                                            this.$store.state.PmsModule.monitor1.modelList[1]
                                                .motor_de_amp
                                        "
                                        :detailData4="
                                            this.$store.state.PmsModule.monitor1.modelList[1]
                                                .motor_nde_amp
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="content-container-row">
                            <div
                                class="icon-area"
                                v-on:click="
                                    clickParam('평택계통 송수펌프모터 #3', 3)
                                "
                                :class="{
                                    error:
                                        this.$store.state.PmsModule.monitor1.modelList[2].alarm,
                                    none: !this.$store.state.PmsModule.monitor1.modelList[2]
                                        .eq_on,
                                }"
                            >
                                <Frame />
                                <div class="title-box">
                                    <img src="@/assets/pms/circle.svg" alt="" />
                                    <p>평택계통 송수펌프모터 #3</p>
                                </div>
                                <img class="icon" src="@/assets/pms/motor.png" />
                            </div>
                            <div class="chart-area">
                                <div class="alert-icon">
                                    <div class="state-area">
                                        <div
                                            class="alarm-icon"
                                            :class="{
                                                error:
                                                    this.$store.state.PmsModule.monitor1
                                                        .modelList[2].eq_on,
                                            }"
                                        >
                                            <img
                                                class="icon"
                                                src="@/assets/pms/alarm.svg"
                                            />
                                        </div>
                                        <p>
                                            {{
                                                this.$store.state.PmsModule.monitor1
                                                    .modelList[2].eq_on
                                                    ? '동작중'
                                                    : ''
                                            }}
                                        </p>
                                    </div>
                                    <div class="value-area">
                                        <div class="value-val hold">
                                            펌프임계값<br />6.1 mm/s
                                        </div>
                                        <div class="value-val hold yellow">
                                            모터임계값<br />4.5 mm/s
                                        </div>
                                    </div>
                                    <div class="value-area2">
                                        <div class="value-title">펌프 부하</div>
                                        <div class="value-val type1">
                                            {{
                                                this.$store.state.PmsModule.monitor1
                                                    .modelList[2]
                                                    .pump_de_amp_val
                                            }}
                                            mm/s
                                        </div>
                                        <div class="value-title">
                                            펌프 반부하
                                        </div>
                                        <div class="value-val type2">
                                            {{
                                                this.$store.state.PmsModule.monitor1
                                                    .modelList[2]
                                                    .pump_nde_amp_val
                                            }}
                                            mm/s
                                        </div>
                                        <div class="value-title">모터 부하</div>
                                        <div class="value-val type3">
                                            {{
                                                this.$store.state.PmsModule.monitor1
                                                    .modelList[2]
                                                    .motor_de_amp_val
                                            }}
                                            mm/s
                                        </div>
                                        <div class="value-title">
                                            모터 반부하
                                        </div>
                                        <div class="value-val type4">
                                            {{
                                                this.$store.state.PmsModule.monitor1
                                                    .modelList[2]
                                                    .motor_nde_amp_val
                                            }}
                                            mm/s
                                        </div>
                                    </div>
                                </div>
                                <div class="chart-con">
                                    <Frame />
                                    <!-- <Linechart
                                        :elecData="
                                            this.$store.state.PmsModule.monitor1.modelList[2]
                                                .elecData
                                        "
                                    /> -->
                                    <Linechart
                                        name1="펌프 부하"
                                        name2="펌프 반부하"
                                        name3="모터 부하"
                                        name4="모터 반부하"
                                        :detailData1="
                                            this.$store.state.PmsModule.monitor1.modelList[2]
                                                .pump_de_amp
                                        "
                                        :detailData2="
                                            this.$store.state.PmsModule.monitor1.modelList[2]
                                                .pump_nde_amp
                                        "
                                        :detailData3="
                                            this.$store.state.PmsModule.monitor1.modelList[2]
                                                .motor_de_amp
                                        "
                                        :detailData4="
                                            this.$store.state.PmsModule.monitor1.modelList[2]
                                                .motor_nde_amp
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="content-container-row">
                            <div
                                class="icon-area"
                                v-on:click="
                                    clickParam('평택계통 송수펌프모터 #4', 4)
                                "
                                :class="{
                                    error:
                                        this.$store.state.PmsModule.monitor1.modelList[3].alarm,
                                    none: !this.$store.state.PmsModule.monitor1.modelList[3]
                                        .eq_on,
                                }"
                            >
                                <Frame />
                                <div class="title-box">
                                    <img src="@/assets/pms/circle.svg" alt="" />
                                    <p>평택계통 송수펌프모터 #4</p>
                                </div>
                                <img class="icon" src="@/assets/pms/motor.png" />
                            </div>
                            <div class="chart-area">
                                <div class="alert-icon">
                                    <div class="state-area">
                                        <div
                                            class="alarm-icon"
                                            :class="{
                                                error:
                                                    this.$store.state.PmsModule.monitor1
                                                        .modelList[3].eq_on,
                                            }"
                                        >
                                            <img
                                                class="icon"
                                                src="@/assets/pms/alarm.svg"
                                            />
                                        </div>
                                        <p>
                                            {{
                                                this.$store.state.PmsModule.monitor1
                                                    .modelList[3].eq_on
                                                    ? '동작중'
                                                    : ''
                                            }}
                                        </p>
                                    </div>
                                    <div class="value-area">
                                        <div class="value-val hold">
                                            펌프임계값<br />6.1 mm/s
                                        </div>
                                        <div class="value-val hold yellow">
                                            모터임계값<br />4.5 mm/s
                                        </div>
                                    </div>
                                    <div class="value-area2">
                                        <div class="value-title">펌프 부하</div>
                                        <div class="value-val type1">
                                            {{
                                                this.$store.state.PmsModule.monitor1
                                                    .modelList[3]
                                                    .pump_de_amp_val
                                            }}
                                            mm/s
                                        </div>
                                        <div class="value-title">
                                            펌프 반부하
                                        </div>
                                        <div class="value-val type2">
                                            {{
                                                this.$store.state.PmsModule.monitor1
                                                    .modelList[3]
                                                    .pump_nde_amp_val
                                            }}
                                            mm/s
                                        </div>
                                        <div class="value-title">모터 부하</div>
                                        <div class="value-val type3">
                                            {{
                                                this.$store.state.PmsModule.monitor1
                                                    .modelList[3]
                                                    .motor_de_amp_val
                                            }}
                                            mm/s
                                        </div>
                                        <div class="value-title">
                                            모터 반부하
                                        </div>
                                        <div class="value-val type4">
                                            {{
                                                this.$store.state.PmsModule.monitor1
                                                    .modelList[3]
                                                    .motor_nde_amp_val
                                            }}
                                            mm/s
                                        </div>
                                    </div>
                                </div>
                                <div class="chart-con">
                                    <Frame />
                                    <!-- <Linechart
                                        :elecData="
                                            this.$store.state.PmsModule.monitor1.modelList[3]
                                                .elecData
                                        "
                                    /> -->
                                    <Linechart
                                        name1="펌프 부하"
                                        name2="펌프 반부하"
                                        name3="모터 부하"
                                        name4="모터 반부하"
                                        :detailData1="
                                            this.$store.state.PmsModule.monitor1.modelList[3]
                                                .pump_de_amp
                                        "
                                        :detailData2="
                                            this.$store.state.PmsModule.monitor1.modelList[3]
                                                .pump_nde_amp
                                        "
                                        :detailData3="
                                            this.$store.state.PmsModule.monitor1.modelList[3]
                                                .motor_de_amp
                                        "
                                        :detailData4="
                                            this.$store.state.PmsModule.monitor1.modelList[3]
                                                .motor_nde_amp
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-panel">
                    <div class="pipe-line hori line6">
                        <div
                            class="water-icon2"
                            :class="{
                                none: !this.$store.state.PmsModule.monitor1.modelList[4].eq_on,
                            }"
                        ></div>
                        <div
                            class="water-icon2 delay2"
                            :class="{
                                none: !this.$store.state.PmsModule.monitor1.modelList[4].eq_on,
                            }"
                        ></div>
                    </div>
                    <div class="pipe-line hori line7">
                        <div
                            class="water-icon2"
                            :class="{
                                none: !this.$store.state.PmsModule.monitor1.modelList[5].eq_on,
                            }"
                        ></div>
                        <div
                            class="water-icon2 delay2"
                            :class="{
                                none: !this.$store.state.PmsModule.monitor1.modelList[5].eq_on,
                            }"
                        ></div>
                    </div>
                    <div class="pipe-line ver line8">
                        <div class="water-icon3"></div>
                        <div class="water-icon3 delay2"></div>
                        <div class="water-icon3 delay3"></div>
                        <div class="water-icon3 delay4"></div>
                        <div class="water-icon3 delay5"></div>
                        <div class="water-icon3 delay6"></div>
                    </div>
                    <div class="content-header">
                        <div class="header-left"></div>
                        <div class="header-center">송산계통 송수펌프모터</div>
                        <div class="header-right"></div>
                    </div>
                    <div class="content-container">
                        <div class="content-container-row">
                            <div
                                class="icon-area"
                                v-on:click="
                                    clickParam('송산계통 송수펌프모터 #1', 5)
                                "
                                :class="{
                                    error:
                                        this.$store.state.PmsModule.monitor1.modelList[4].alarm,
                                    none: !this.$store.state.PmsModule.monitor1.modelList[4]
                                        .eq_on,
                                }"
                            >
                                <Frame />
                                <div class="title-box">
                                    <img src="@/assets/pms/circle.svg" alt="" />
                                    <p>송산계통 송수펌프모터 #1</p>
                                </div>
                                <img class="icon" src="@/assets/pms/motor.png" />
                            </div>
                            <div class="chart-area">
                                <div class="alert-icon">
                                    <div class="state-area">
                                        <div
                                            class="alarm-icon"
                                            :class="{
                                                error:
                                                    this.$store.state.PmsModule.monitor1
                                                        .modelList[4].eq_on,
                                            }"
                                        >
                                            <img
                                                class="icon"
                                                src="@/assets/pms/alarm.svg"
                                            />
                                        </div>
                                        <p>
                                            {{
                                                this.$store.state.PmsModule.monitor1
                                                    .modelList[4].eq_on
                                                    ? '동작중'
                                                    : ''
                                            }}
                                        </p>
                                    </div>
                                    <div class="value-area">
                                        <div class="value-val hold">
                                            펌프임계값<br />6.1 mm/s
                                        </div>
                                        <div class="value-val hold yellow">
                                            모터임계값<br />4.5 mm/s
                                        </div>
                                    </div>
                                    <div class="value-area2">
                                        <div class="value-title">펌프 부하</div>
                                        <div class="value-val type1">
                                            {{
                                                this.$store.state.PmsModule.monitor1
                                                    .modelList[4]
                                                    .pump_de_amp_val
                                            }}
                                            mm/s
                                        </div>
                                        <div class="value-title">
                                            펌프 반부하
                                        </div>
                                        <div class="value-val type2">
                                            {{
                                                this.$store.state.PmsModule.monitor1
                                                    .modelList[4]
                                                    .pump_nde_amp_val
                                            }}
                                            mm/s
                                        </div>
                                        <div class="value-title">모터 부하</div>
                                        <div class="value-val type3">
                                            {{
                                                this.$store.state.PmsModule.monitor1
                                                    .modelList[4]
                                                    .motor_de_amp_val
                                            }}
                                            mm/s
                                        </div>
                                        <div class="value-title">
                                            모터 반부하
                                        </div>
                                        <div class="value-val type4">
                                            {{
                                                this.$store.state.PmsModule.monitor1
                                                    .modelList[4]
                                                    .motor_nde_amp_val
                                            }}
                                            mm/s
                                        </div>
                                    </div>
                                </div>
                                <div class="chart-con">
                                    <Frame />
                                    <!-- <Linechart
                                        :elecData="
                                            this.$store.state.PmsModule.monitor1.modelList[4]
                                                .elecData
                                        "
                                    /> -->
                                    <Linechart
                                        name1="펌프 부하"
                                        name2="펌프 반부하"
                                        name3="모터 부하"
                                        name4="모터 반부하"
                                        :detailData1="
                                            this.$store.state.PmsModule.monitor1.modelList[4]
                                                .pump_de_amp
                                        "
                                        :detailData2="
                                            this.$store.state.PmsModule.monitor1.modelList[4]
                                                .pump_nde_amp
                                        "
                                        :detailData3="
                                            this.$store.state.PmsModule.monitor1.modelList[4]
                                                .motor_de_amp
                                        "
                                        :detailData4="
                                            this.$store.state.PmsModule.monitor1.modelList[4]
                                                .motor_nde_amp
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="content-container-row">
                            <div
                                class="icon-area"
                                v-on:click="
                                    clickParam('송산계통 송수펌프모터 #2', 6)
                                "
                                :class="{
                                    error:
                                        this.$store.state.PmsModule.monitor1.modelList[5].alarm,
                                    none: !this.$store.state.PmsModule.monitor1.modelList[5]
                                        .eq_on,
                                }"
                            >
                                <Frame />
                                <div class="title-box">
                                    <img src="@/assets/pms/circle.svg" alt="" />
                                    <p>송산계통 송수펌프모터 #2</p>
                                </div>
                                <img class="icon" src="@/assets/pms/motor.png" />
                            </div>
                            <div class="chart-area">
                                <div class="alert-icon">
                                    <div class="state-area">
                                        <div
                                            class="alarm-icon"
                                            :class="{
                                                error:
                                                    this.$store.state.PmsModule.monitor1
                                                        .modelList[5].eq_on,
                                            }"
                                        >
                                            <img
                                                class="icon"
                                                src="@/assets/pms/alarm.svg"
                                            />
                                        </div>
                                        <p>
                                            {{
                                                this.$store.state.PmsModule.monitor1
                                                    .modelList[5].eq_on
                                                    ? '동작중'
                                                    : ''
                                            }}
                                        </p>
                                    </div>
                                    <div class="value-area">
                                        <div class="value-val hold">
                                            펌프임계값<br />6.1 mm/s
                                        </div>
                                        <div class="value-val hold yellow">
                                            모터임계값<br />4.5 mm/s
                                        </div>
                                    </div>
                                    <div class="value-area2">
                                        <div class="value-title">펌프 부하</div>
                                        <div class="value-val type1">
                                            {{
                                                this.$store.state.PmsModule.monitor1
                                                    .modelList[5]
                                                    .pump_de_amp_val
                                            }}
                                            mm/s
                                        </div>
                                        <div class="value-title">
                                            펌프 반부하
                                        </div>
                                        <div class="value-val type2">
                                            {{
                                                this.$store.state.PmsModule.monitor1
                                                    .modelList[5]
                                                    .pump_nde_amp_val
                                            }}
                                            mm/s
                                        </div>
                                        <div class="value-title">모터 부하</div>
                                        <div class="value-val type3">
                                            {{
                                                this.$store.state.PmsModule.monitor1
                                                    .modelList[5]
                                                    .motor_de_amp_val
                                            }}
                                            mm/s
                                        </div>
                                        <div class="value-title">
                                            모터 반부하
                                        </div>
                                        <div class="value-val type4">
                                            {{
                                                this.$store.state.PmsModule.monitor1
                                                    .modelList[5]
                                                    .motor_nde_amp_val
                                            }}
                                            mm/s
                                        </div>
                                    </div>
                                </div>
                                <div class="chart-con">
                                    <Frame />
                                    <!-- <Linechart
                                        :elecData="
                                            this.$store.state.PmsModule.monitor1.modelList[5]
                                                .elecData
                                        "
                                    /> -->
                                    <Linechart
                                        name1="펌프 부하"
                                        name2="펌프 반부하"
                                        name3="모터 부하"
                                        name4="모터 반부하"
                                        :detailData1="
                                            this.$store.state.PmsModule.monitor1.modelList[5]
                                                .pump_de_amp
                                        "
                                        :detailData2="
                                            this.$store.state.PmsModule.monitor1.modelList[5]
                                                .pump_nde_amp
                                        "
                                        :detailData3="
                                            this.$store.state.PmsModule.monitor1.modelList[5]
                                                .motor_de_amp
                                        "
                                        :detailData4="
                                            this.$store.state.PmsModule.monitor1.modelList[5]
                                                .motor_nde_amp
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-right">
                <div class="content-panel">
                    <img src="@/assets/pms/light.png" alt="" class="light-circle" />
                    <img src="@/assets/pms/light2.png" alt="" class="light-line" />
                    <div class="content-header">
                        <img
                            src="@/assets/pms/titleicon.svg"
                            alt=""
                            class="titleCon"
                        />
                        <p>평택계통 운영현황</p>
                    </div>
                    <div class="content-container">
                        <div class="value-data">
                            <div class="value-item">
                                <div class="label">
                                    운영대수
                                </div>
                                <div class="value">
                                    {{ this.$store.state.PmsModule.monitor1.scada_01.running }}
                                    대
                                </div>
                            </div>
                        </div>
                        <div class="value-data">
                            <div class="value-item">
                                <div class="label">
                                    유량
                                </div>
                                <div class="value">
                                    {{
                                        this.$store.state.PmsModule.monitor1.scada_01
                                            .flow_rate_val
                                    }}㎥/min
                                </div>
                            </div>
                        </div>
                        <div class="value-data">
                            <div class="value-item">
                                <div class="label">
                                    압력
                                </div>
                                <div class="value">
                                    {{
                                        this.$store.state.PmsModule.monitor1.scada_01
                                            .pressure_val
                                    }}kgf/㎥
                                </div>
                            </div>
                        </div>
                        <div class="value-chart">
                            <div class="label">
                                ▸ 분포도
                            </div>
                            <div class="value">
                                <Scatter
                                    :data="this.$store.state.PmsModule.monitor1.scada_01.data"
                                    :color="
                                        this.$store.state.PmsModule.monitor1.scada_01.running
                                    "
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-panel">
                    <img src="@/assets/pms/light.png" alt="" class="light-circle" />
                    <img src="@/assets/pms/light2.png" alt="" class="light-line" />
                    <div class="content-header">
                        <img
                            src="@/assets/pms/titleicon.svg"
                            alt=""
                            class="titleCon"
                        />
                        <p>송산계통 운영현황</p>
                    </div>
                    <div class="content-container">
                        <div class="value-data">
                            <div class="value-item">
                                <div class="label">
                                    운영대수
                                </div>
                                <div class="value">
                                    {{
                                        this.$store.state.PmsModule.monitor1.scada_05.running
                                    }}대
                                </div>
                            </div>
                        </div>
                        <div class="value-data">
                            <div class="value-item">
                                <div class="label">
                                    유량
                                </div>
                                <div class="value">
                                    {{
                                        this.$store.state.PmsModule.monitor1.scada_05
                                            .flow_rate_val
                                    }}㎥/min
                                </div>
                            </div>
                        </div>
                        <div class="value-data">
                            <div class="value-item">
                                <div class="label">
                                    압력
                                </div>
                                <div class="value">
                                    {{
                                        this.$store.state.PmsModule.monitor1.scada_05
                                            .pressure_val
                                    }}kgf/㎥
                                </div>
                            </div>
                        </div>
                        <div class="value-chart">
                            <div class="label">
                                ▸ 분포도
                            </div>
                            <div class="value">
                                <Scatter2
                                    :data="this.$store.state.PmsModule.monitor1.scada_05.data"
                                    :color="
                                        this.$store.state.PmsModule.monitor1.scada_05.running
                                    "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Header from '@/components/menu/Header.vue';
import Frame from '@/components/pms/component/BoxFrame.vue';
import Linechart from '@/components/pms/chart/monitoring/Linechart_1.vue';
import moment from 'moment';
import axios from 'axios';
import Scatter from '@/components/pms/chart/monitoring/Scatter_PTK.vue';
import Scatter2 from '@/components/pms/chart/monitoring/Scatter_SSN.vue';
export default {
    components: {
        // Header,
        Frame,
        Linechart,
        Scatter,
        Scatter2,
        // Linechart2,
    },
    data: () => ({
        visibleToggle:true,
    })
    ,
    mounted(){
        this.visibleToggle = this.$store.state.PmsModule.alertVisible = !this.$store.state.PmsModule.alertVisible;
        let isLocal = false;
            if (!isLocal) {
                let currentTime = new Date();
                let startDate = moment(
                    currentTime.getTime() - 7 * 24 * 60 * 60 * 1000
                ).format('yyyy-MM-DD HH:mm:ss');
                let endDate = moment(currentTime.getTime()).format(
                    'yyyy-MM-DD HH:mm:ss'
                );
                this.$store.state.PmsModule.monitor1.startDate = startDate;
                this.$store.state.PmsModule.monitor1.endDate = endDate;
            }
            this.$store.dispatch('PmsModule/monitor1/runningInfo');
            this.$store.dispatch('PmsModule/monitor1/alarm');
            this.$store.dispatch('PmsModule/monitor1/handleGraphData');
            this.$store.dispatch('PmsModule/monitor1/flowPressure');
            this.$store.dispatch('PmsModule/monitor1/distribution');
    }
    ,
    methods: {
        clickParam(value, idx){
            this.$store.state.PmsModule.monitor1.selectModel = value;
            if (idx === 5) {
                this.$store.state.PmsModule.monitor1.id = 'motor_06';
            } else if (idx === 6) {
                this.$store.state.PmsModule.monitor1.id = 'motor_05';
            } else {
                this.$store.state.PmsModule.monitor1.id = 'motor_0' + idx;
            }

            this.$store.state.PmsModule.monitor1.scada_id = 'pump_scada_0' + idx;
            this.$store.state.PmsModule.monitor1.modelList.map((x) => (x.select = false));
            this.$store.state.PmsModule.monitor1.modelList.filter((x) => {
                if (x.id === this.$store.state.PmsModule.monitor1.id) {
                    x.select = true;
                    return;
                }
            });
            router.push('Monitoring');
        }
        ,
        select(idx) {
            let val = idx - 1;
            this.$store.state.PmsModule.monitor1.sampleData.idx = val;
            this.$store.state.PmsModule.monitor1.modelList[val].alarm = true;
            this.$store.state.PmsModule.monitor1.modelList[
                val
            ].motor_de_amp = this.$store.state.PmsModule.monitor1.modelList[
                idx - 1
            ].motor_de_amp.concat(
                this.$store.state.PmsModule.monitor1.sampleData.motor_de_rms_amp
            );
            this.$store.state.PmsModule.monitor1.modelList[
                val
            ].motor_nde_amp = this.$store.state.PmsModule.monitor1.modelList[
                val
            ].motor_nde_amp.concat(
                this.$store.state.PmsModule.monitor1.sampleData.motor_nde_rms_amp
            );
            this.$store.state.PmsModule.monitor1.modelList[
                val
            ].pump_de_amp = this.$store.state.PmsModule.monitor1.modelList[
                val
            ].pump_de_amp.concat(
                this.$store.state.PmsModule.monitor1.sampleData.pump_de_rms_amp
            );
            this.$store.state.PmsModule.monitor1.modelList[
                val
            ].pump_nde_amp = this.$store.state.PmsModule.monitor1.modelList[
                val
            ].pump_nde_amp.concat(
                this.$store.state.PmsModule.monitor1.sampleData.pump_nde_rms_amp
            );
            this.$store.state.PmsModule.monitor1.mode = true;

            // axios.get('http://10.15.32.150:35000/siyeon?songsu=' + idx);
        }
        ,
        selectReset(){
            this.$store.state.PmsModule.monitor1.mode = false;
            console.log('reset');
            axios.get('http://10.15.32.150:35000/reset');
            window.location.reload(true);
        }
    }        

};
</script>

<style></style>
