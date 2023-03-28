<template>
    <div class="monitor-4">
        <Header class="header" />
        <div class="content">
            <div class="content-left">
                <img src="@/assets/pms/monitor-bg.png" class="panel-bg" />
                <!-- <div class="headerTitle">PAC튜브펌프</div> -->
                <div class="headerTitle">약품펌프</div>
                <div class="content-container two">
                    <div
                        class="content-container-row"
                        v-for="(list, i) in this.$store.state.PmsModule.monitor4.modelList"
                        :key="i"
                    >
                        <div
                            class="icon-area"
                            v-on:click="clickParam(list)"
                            :class="{ error: list.alarm }"
                        >
                            <Frame />
                            <div class="title-box">
                                <img src="@/assets/pms/circle.svg" alt="" />
                                <p>{{ list.title }}</p>
                            </div>
                            <img class="icon" src="@/assets/pms/motor.png" />
                        </div>
                        <div class="chart-area">
                            <div class="alert-icon">
                                <div class="state-area">
                                    <div
                                        class="alarm-icon"
                                        :class="{ error: list.status.eq_on }"
                                    >
                                        <img
                                            class="icon"
                                            src="@/assets/pms/alarm.svg"
                                        />
                                    </div>
                                    <p>
                                        {{ list.status.eq_on ? '동작중' : '' }}
                                    </p>
                                </div>
                                <div class="value-area">
                                    <div class="title-box">
                                        <img src="@/assets/pms/circle.svg" alt="" />
                                        <p>전류</p>
                                    </div>
                                    <div class="value-val hold">
                                        <div class="value-val-left">
                                            펌프임계값
                                        </div>
                                        <div class="value-val-right">
                                            {{ i >= 3 ? '1.162 A' : '0.686 A' }}
                                        </div>
                                    </div>
                                    <div class="value-val hold cur">
                                        <div class="value-val-left">현재값</div>
                                        <div class="value-val-right">
                                            {{ list.avarage }} A
                                        </div>
                                    </div>
                                    <!-- <div class="value-box">
                                        <div class="label">임계값</div>
                                        <input
                                            class="value"
                                            type="text"
                                            readonly
                                            :value="
                                                i >= 3 ? '1.162 A' : '0.686 A'
                                            "
                                        />
                                    </div>
                                    <div class="value-box">
                                        <div class="label">현재값</div>
                                        <input
                                            class="value cur"
                                            type="text"
                                            readonly
                                            :value="list.avarage + ' A'"
                                        />
                                    </div> -->
                                </div>
                            </div>
                            <div class="chart-con">
                                <Frame />
                                <Linechart
                                    :elecData="list.current"
                                    threadHold="0.686"
                                    max="1.5"
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
// import Header from '@components/pms/menu/Header.vue';
import Frame from './BoxFrame.vue';
import Linechart from '../chart/monitoring/Linechart_m.vue';
import moment from 'moment';
export default {
    components: {
        Header,
        Frame,
        Linechart,
    },
    data: () => ({

}),
methods: {
    visibleToggle() {
        this.$store.state.alertVisible = !store.state.alertVisible;
        }

     ,

         clickParam (value)  {
            this.$store.state.PmsModule.monitor4.selectModel = value.title;
            this.$store.state.PmsModule.monitor4.modelList.filter((list) => {
                if (list.title === value.title)
                this.$store.state.monitor4.id = list.id;
            });
            router.push('detail4');
        }
    }
    ,

    mounted() {
            let isLocal = true;
            if (!isLocal) {
                let currentTime = new Date();
                let startDate = moment(
                    currentTime.getTime() - 7 * 24 * 60 * 60 * 1000
                ).format('yyyy-MM-DD HH:mm:ss');
                let endDate = moment(currentTime.getTime()).format(
                    'yyyy-MM-DD HH:mm:ss'
                );
                this.$store.state.PmsModule.monitor4.startDate = startDate;
                this.$store.state.PmsModule.monitor4.endDate = endDate;
            }
            this.$store.dispatch('pms/monitor4/handleGraphData');
            this.$store.dispatch('pms/monitor5/handleGraphData');
        }



};
</script>

<style></style>
