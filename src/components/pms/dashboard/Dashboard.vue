<template>
    <div class="dashboard-container">
        <DashboardInfo />
        <WaterFlow />

        <div class="pieChart-box">
            <Pie />
        </div>
        <div class="map-contents">
            <div class="one-building"></div>
            <div class="two-building"></div>
            <div class="three-building"></div>
            <div class="four-building"></div>
            <div class="five-building"></div>

            <div
                class="map-contents__splashdown"
                :class="[
                    this.$store.state.PmsModule.selectedBuildingIndex === 1 ? 'zIndex10' : '',
                    this.$store.state.PmsModule.selectedBuildingIndex > 0 &&
                    this.$store.state.PmsModule.selectedBuildingIndex !== 1
                        ? 'opacity50'
                        : '',
                ]"
            >
                <div
                    class="splashdown-text"
                    @mouseover="onBuildingMouseover(1)"
                    @mouseout="onBuildingMouseout"
                >
                    착수
                </div>
                <img
                    class="down"
                    :class="[
                        this.$store.state.PmsModule.selectedBuildingIndex === 1
                            ? 'building-unvisible'
                            : 'building-visible',
                    ]"
                    src="@/assets/pms/dashboard_img/splashdown.png"
                    usemap="#splashdown_map"
                />
                <img
                    class="up"
                    :class="[
                        this.$store.state.PmsModule.selectedBuildingIndex === 1
                            ? 'building-visible'
                            : 'building-unvisible',
                    ]"
                    src="@/assets/pms/dashboard_img/over_splashdown.png"
                    usemap="#over_splashdown_map"
                />
                <img
                    class="aurora_splashdown"
                    :class="[
                        this.$store.state.PmsModule.selectedBuildingIndex === 1
                            ? 'building-unvisible'
                            : 'building-visible',
                    ]"
                    src="@/assets/pms/dashboard_icons/bottom-aurora.png"
                />
            </div>
            <div
                class="cube splashdown_cube"
                :class="[
                    this.$store.state.PmsModule.selectedBuildingIndex > 0
                        ? 'building-unvisible'
                        : 'building-visible',
                ]"
                @click="goRouter('Monitor3')"
            >
                <div
                    class="cube__inner"
                    :class="[
                        this.$store.state.PmsModule.dashboard.alarmInfo.indexOf('water') >= 0
                            ? 'alert'
                            : '',
                    ]"
                >
                    유입<br />V
                </div>
            </div>

            <div
                class="map-contents__drug"
                :class="[
                    this.$store.state.PmsModule.selectedBuildingIndex === 2 ? 'zIndex10' : '',
                    this.$store.state.PmsModule.selectedBuildingIndex > 0 &&
                    this.$store.state.PmsModule.selectedBuildingIndex !== 2
                        ? 'opacity50'
                        : '',
                ]"
            >
                <div
                    class="drug-text"
                    @mouseover="onBuildingMouseover(2)"
                    @mouseout="onBuildingMouseout"
                >
                    약품
                </div>
                <img
                    class="down"
                    :class="[
                        this.$store.state.PmsModule.selectedBuildingIndex === 2
                            ? 'building-unvisible'
                            : 'building-visible',
                    ]"
                    src="@/assets/pms/dashboard_img/drug.png"
                    usemap="#drug_map"
                />
                <img
                    class="up"
                    :class="[
                        this.$store.state.PmsModule.selectedBuildingIndex === 2
                            ? 'building-visible'
                            : 'building-unvisible',
                    ]"
                    src="@/assets/pms/dashboard_img/over_drug.png"
                    usemap="#over_drug_map"
                />
                <img
                    class="aurora_drug"
                    :class="[
                        this.$store.state.PmsModule.selectedBuildingIndex === 2
                            ? 'building-unvisible'
                            : 'building-visible',
                    ]"
                    src="@/assets/pms/dashboard_icons/bottom-aurora.png"
                />
            </div>
            <div
                class="cube drug_cube"
                :class="[
                    this.$store.state.PmsModule.selectedBuildingIndex > 0
                        ? 'building-unvisible'
                        : 'building-visible',
                ]"
                @click="goRouter('Monitor4')"
            >
                <div
                    class="cube__inner"
                    :class="[
                        this.$store.state.PmsModule.dashboard.alarmInfo.indexOf('pac') >= 0
                            ? 'alert'
                            : '',
                        this.$store.state.PmsModule.dashboard.alarmInfo.indexOf('pahcs') >= 0
                            ? 'alert'
                            : '',
                    ]"
                >
                    약품<br />펌프
                </div>
            </div>
            <div
                class="cube drug_cube2"
                :class="[
                    this.$store.state.PmsModule.selectedBuildingIndex > 0
                        ? 'building-unvisible'
                        : 'building-visible',
                ]"
                @click="goRouter('Monitor6')"
            >
                <div
                    class="cube__inner"
                    :class="[
                        this.$store.state.PmsModule.dashboard.alarmInfo.indexOf('auto') >= 0
                            ? 'alert'
                            : '',
                    ]"
                >
                    급수<br />P
                </div>
            </div>

            <div
                class="map-contents__sedimentation-mix"
                :class="[
                    this.$store.state.PmsModule.selectedBuildingIndex === 3 ||
                    this.$store.state.PmsModule.selectedBuildingIndex === 4
                        ? 'zIndex10'
                        : '',
                    this.$store.state.PmsModule.selectedBuildingIndex > 0 &&
                    this.$store.state.PmsModule.selectedBuildingIndex !== 3 &&
                    this.$store.state.PmsModule.selectedBuildingIndex !== 4
                        ? 'opacity50'
                        : '',
                ]"
            >
                <div
                    class="sedimentation-text"
                    :class="[
                        this.$store.state.PmsModule.selectedBuildingIndex === 3
                            ? 'opacity50'
                            : '',
                    ]"
                    @mouseover="onBuildingMouseover(4)"
                    @mouseout="onBuildingMouseout"
                >
                    침전
                </div>
                <div
                    class="mix-text"
                    :class="[
                        this.$store.state.PmsModule.selectedBuildingIndex === 4
                            ? 'opacity50'
                            : '',
                    ]"
                    @mouseover="onBuildingMouseover(3)"
                    @mouseout="onBuildingMouseout"
                >
                    혼화응집
                </div>
                <img
                    class="down"
                    :class="[
                        this.$store.state.PmsModule.selectedBuildingIndex === 3 ||
                        this.$store.state.PmsModule.selectedBuildingIndex === 4
                            ? 'building-unvisible'
                            : 'building-visible',
                    ]"
                    src="@/assets/pms/dashboard_img/sedimentation_mix.png"
                />
                <img
                    class="up"
                    :class="[
                        this.$store.state.PmsModule.selectedBuildingIndex === 3 ||
                        this.$store.state.PmsModule.selectedBuildingIndex === 4
                            ? 'building-visible'
                            : 'building-unvisible',
                    ]"
                    src="@/assets/pms/dashboard_img/over_sedimentation_mix.png"
                />
                <img
                    class="aurora_sedimentation"
                    :class="[
                        this.$store.state.PmsModule.selectedBuildingIndex === 4
                            ? 'building-unvisible'
                            : 'building-visible',
                        this.$store.state.PmsModule.selectedBuildingIndex === 3
                            ? 'opacity0'
                            : '',
                    ]"
                    src="@/assets/pms/dashboard_icons/bottom-aurora.png"
                />
                <img
                    class="aurora_mix"
                    :class="[
                        this.$store.state.PmsModule.selectedBuildingIndex === 3
                            ? 'building-unvisible'
                            : 'building-visible',
                        this.$store.state.PmsModule.selectedBuildingIndex === 4
                            ? 'opacity0'
                            : '',
                    ]"
                    src="@/assets/pms/dashboard_icons/bottom-aurora.png"
                />
            </div>
            <div
                class="cube mix_cube"
                :class="[
                    this.$store.state.PmsModule.selectedBuildingIndex > 0
                        ? 'building-unvisible'
                        : 'building-visible',
                ]"
                @click="goRouter('Monitor7')"
            >
                <div
                    class="cube__inner"
                    :class="[
                        this.$store.state.PmsModule.dashboard.alarmInfo.indexOf('rapid') >= 0
                            ? 'alert'
                            : '',
                    ]"
                >
                    혼화기
                </div>
            </div>
            <div
                class="cube mix_cube2"
                :class="[
                    this.$store.state.PmsModule.selectedBuildingIndex > 0
                        ? 'building-unvisible'
                        : 'building-visible',
                ]"
                @click="goRouter('Monitor8')"
            >
                <div
                    class="cube__inner"
                    :class="[
                        this.$store.state.PmsModule.dashboard.alarmInfo.indexOf(
                            'agglomerate'
                        ) >= 0
                            ? 'alert'
                            : '',
                    ]"
                >
                    응집기
                </div>
            </div>
            <div
                class="cube sedimentation_cube"
                :class="[
                    this.$store.state.PmsModule.selectedBuildingIndex > 0
                        ? 'building-unvisible'
                        : 'building-visible',
                ]"
                @click="goRouter('Monitor9')"
            >
                <div
                    class="cube__inner"
                    :class="[
                        this.$store.state.PmsModule.dashboard.alarmInfo.indexOf('sludge') >= 0
                            ? 'alert'
                            : '',
                    ]"
                >
                    슬러지<br />수집기
                </div>
            </div>

            <div
                class="map-contents__percolation"
                :class="[
                    this.$store.state.PmsModule.selectedBuildingIndex === 5 ? 'zIndex10' : '',
                    this.$store.state.PmsModule.selectedBuildingIndex > 0 &&
                    this.$store.state.PmsModule.selectedBuildingIndex !== 5
                        ? 'opacity50'
                        : '',
                ]"
            >
                <div
                    class="percolation-text"
                    @mouseover="onBuildingMouseover(5)"
                    @mouseout="onBuildingMouseout"
                >
                    여과
                </div>
                <img
                    class="down"
                    :class="[
                        this.$store.state.PmsModule.selectedBuildingIndex === 5
                            ? 'building-unvisible'
                            : 'building-visible',
                    ]"
                    src="@/assets/pms/dashboard_img/percolation.png"
                    usemap="#percolation_map"
                />
                <img
                    class="up"
                    :class="[
                        this.$store.state.PmsModule.selectedBuildingIndex === 5
                            ? 'building-visible'
                            : 'building-unvisible',
                    ]"
                    src="@/assets/pms/dashboard_img/over_percolation.png"
                    usemap="#percolation_over_map"
                />
                <img
                    class="aurora_percolation"
                    :class="[
                        this.$store.state.PmsModule.selectedBuildingIndex === 5
                            ? 'building-unvisible'
                            : 'building-visible',
                    ]"
                    src="@/assets/pms/dashboard_icons/bottom-aurora.png"
                />
            </div>
            <div
                class="cube percolation_cube"
                :class="[
                    this.$store.state.PmsModule.selectedBuildingIndex > 0
                        ? 'building-unvisible'
                        : 'building-visible',
                ]"
                @click="goRouter('Monitor10')"
            >
                <div
                    class="cube__inner"
                    :class="[
                        this.$store.state.PmsModule.dashboard.alarmInfo.indexOf('filter') >= 0
                            ? 'alert'
                            : '',
                    ]"
                >
                    역세<br />P
                </div>
            </div>
            <div
                class="cube percolation_cube2"
                :class="[
                    this.$store.state.PmsModule.selectedBuildingIndex > 0
                        ? 'building-unvisible'
                        : 'building-visible',
                ]"
                @click="goRouter('Monitor11')"
            >
                <div
                    class="cube__inner"
                    :class="[
                        this.$store.state.PmsModule.dashboard.alarmInfo.indexOf('backwash') >= 0
                            ? 'alert'
                            : '',
                    ]"
                >
                    역세<br />B
                </div>
            </div>

            <div
                class="map-contents__gac"
                :class="[
                    this.$store.state.PmsModule.selectedBuildingIndex === 6 ? 'zIndex10' : '',
                    this.$store.state.PmsModule.selectedBuildingIndex > 0 &&
                    this.$store.state.PmsModule.selectedBuildingIndex !== 6
                        ? 'opacity50'
                        : '',
                ]"
            >
                <div
                    class="gac-text"
                    @mouseover="onBuildingMouseover(6)"
                    @mouseout="onBuildingMouseout"
                >
                    GAC여과
                </div>
                <img
                    class="down"
                    :class="[
                        this.$store.state.PmsModule.selectedBuildingIndex === 6
                            ? 'building-unvisible'
                            : 'building-visible',
                    ]"
                    src="@/assets/pms/dashboard_img/GAC.png"
                    usemap="#gac_map"
                />
                <img
                    class="up"
                    :class="[
                        this.$store.state.PmsModule.selectedBuildingIndex === 6
                            ? 'building-visible'
                            : 'building-unvisible',
                    ]"
                    src="@/assets/pms/dashboard_img/over_gac.png"
                    usemap="#over_gac_map"
                />
                <img
                    class="aurora_gac"
                    :class="[
                        this.$store.state.PmsModule.selectedBuildingIndex === 6
                            ? 'building-unvisible'
                            : 'building-visible',
                    ]"
                    src="@/assets/pms/dashboard_icons/bottom-aurora.png"
                />
            </div>
            <div
                class="cube gac_cube"
                :class="[
                    this.$store.state.PmsModule.selectedBuildingIndex > 0
                        ? 'building-unvisible'
                        : 'building-visible',
                ]"
                @click="goRouter('Monitor12')"
            >
                <div
                    class="cube__inner"
                    :class="[
                        this.$store.state.PmsModule.dashboard.alarmInfo.indexOf('gac') >= 0
                            ? 'alert'
                            : '',
                    ]"
                >
                    역세<br />P
                </div>
            </div>

            <div
                class="map-contents__disinfection"
                :class="[
                    this.$store.state.PmsModule.selectedBuildingIndex === 7 ? 'zIndex10' : '',
                    this.$store.state.PmsModule.selectedBuildingIndex > 0 &&
                    this.$store.state.PmsModule.selectedBuildingIndex !== 7
                        ? 'opacity50'
                        : '',
                ]"
            >
                <div
                    class="disinfection-text"
                    @mouseover="onBuildingMouseover(7)"
                    @mouseout="onBuildingMouseout"
                >
                    소독
                </div>
                <img
                    class="down"
                    :class="[
                        this.$store.state.PmsModule.selectedBuildingIndex === 7
                            ? 'building-unvisible'
                            : 'building-visible',
                    ]"
                    src="@/assets/pms/dashboard_img/disinfection.png"
                    usemap="#disinfection_map"
                />
                <img
                    class="up"
                    :class="[
                        this.$store.state.PmsModule.selectedBuildingIndex === 7
                            ? 'building-visible'
                            : 'building-unvisible',
                    ]"
                    src="@/assets/pms/dashboard_img/over_disinfection.png"
                    usemap="#over_disinfection_map"
                />
                <img
                    class="aurora_disinfection"
                    :class="[
                        this.$store.state.PmsModule.selectedBuildingIndex === 7
                            ? 'building-unvisible'
                            : 'building-visible',
                    ]"
                    src="@/assets/pms/dashboard_icons/bottom-aurora.png"
                />
            </div>
            <div
                class="cube disinfection_cube"
                :class="[
                    this.$store.state.PmsModule.selectedBuildingIndex > 0
                        ? 'building-unvisible'
                        : 'building-visible',
                ]"
                @click="goRouter('Monitor16')"
            >
                <div
                    class="cube__inner"
                    :class="[
                        this.$store.state.PmsModule.dashboard.alarmInfo.indexOf('aa') >= 0
                            ? 'alert'
                            : '',
                    ]"
                >
                    차염<br />발생기
                </div>
            </div>

            <div
                class="map-contents__pump"
                :class="[
                    this.$store.state.PmsModule.selectedBuildingIndex === 8 ? 'zIndex10' : '',
                    this.$store.state.PmsModule.selectedBuildingIndex > 0 &&
                    this.$store.state.PmsModule.selectedBuildingIndex !== 8
                        ? 'opacity50'
                        : '',
                ]"
            >
                <div
                    class="pump-text"
                    @mouseover="onBuildingMouseover(8)"
                    @mouseout="onBuildingMouseout"
                >
                    송수
                </div>
                <img
                    class="down"
                    :class="[
                        this.$store.state.PmsModule.selectedBuildingIndex === 8
                            ? 'building-unvisible'
                            : 'building-visible',
                    ]"
                    src="@/assets/pms/dashboard_img/pump.png"
                    usemap="#pump_map"
                />
                <img
                    class="up"
                    :class="[
                        this.$store.state.PmsModule.selectedBuildingIndex === 8
                            ? 'building-visible'
                            : 'building-unvisible',
                    ]"
                    src="@/assets/pms/dashboard_img/over_pump.png"
                    usemap="#over_pump_map"
                />
                <img
                    class="aurora_pump"
                    :class="[
                        this.$store.state.PmsModule.selectedBuildingIndex === 8
                            ? 'building-unvisible'
                            : 'building-visible',
                    ]"
                    src="@/assets/pms/dashboard_icons/bottom-aurora.png"
                />
            </div>
            <div
                class="cube pump_cube"
                :class="[
                    this.$store.state.PmsModule.selectedBuildingIndex > 0
                        ? 'building-unvisible'
                        : 'building-visible',
                ]"
                @click="goRouter('Monitor1')"
            >
                <div
                    class="cube__inner"
                    :class="[
                        this.$store.state.PmsModule.dashboard.alarmInfo.indexOf('motor') >= 0
                            ? 'alert'
                            : '',
                    ]"
                >
                    펌프<br />모터
                </div>
            </div>
            <div
                class="cube pump_cube2"
                :class="[
                    this.$store.state.PmsModule.selectedBuildingIndex > 0
                        ? 'building-unvisible'
                        : 'building-visible',
                ]"
                @click="goRouter('Monitor2')"
            >
                <div
                    class="cube__inner"
                    :class="[
                        this.$store.state.PmsModule.dashboard.alarmInfo.indexOf('pump') >= 0
                            ? 'alert'
                            : '',
                    ]"
                >
                    기동반
                </div>
            </div>
            <div
                class="cube pump_cube3"
                :class="[
                    this.$store.state.PmsModule.selectedBuildingIndex > 0
                        ? 'building-unvisible'
                        : 'building-visible',
                ]"
                @click="goRouter('Monitor17')"
            >
                <div
                    class="cube__inner"
                    :class="[
                        this.$store.state.PmsModule.dashboard.alarmInfo.indexOf(
                            'transformer'
                        ) >= 0
                            ? 'alert'
                            : '',
                    ]"
                >
                    변압기
                </div>
            </div>
            <div
                class="cube pump_cube4"
                :class="[
                    this.$store.state.PmsModule.selectedBuildingIndex > 0
                        ? 'building-unvisible'
                        : 'building-visible',
                ]"
                @click="goRouter('Monitor18')"
            >
                <div
                    class="cube__inner"
                    :class="[
                        this.$store.state.PmsModule.dashboard.alarmInfo.indexOf('vcb') >= 0
                            ? 'alert'
                            : '',
                    ]"
                >
                    VCB
                </div>
            </div>

            <div
                class="map-contents__ozone"
                :class="[
                    this.$store.state.PmsModule.selectedBuildingIndex === 9 ? 'zIndex10' : '',
                    this.$store.state.PmsModule.selectedBuildingIndex > 0 &&
                    this.$store.state.PmsModule.selectedBuildingIndex !== 9
                        ? 'opacity50'
                        : '',
                ]"
            >
                <div
                    class="ozone-text"
                    @mouseover="onBuildingMouseover(9)"
                    @mouseout="onBuildingMouseout"
                >
                    오존
                </div>
                <img
                    class="down"
                    :class="[
                        this.$store.state.PmsModule.selectedBuildingIndex === 9
                            ? 'building-unvisible'
                            : 'building-visible',
                    ]"
                    src="@/assets/pms/dashboard_img/ozone.png"
                    usemap="#disinfection_map"
                />
                <img
                    class="up"
                    :class="[
                        this.$store.state.PmsModule.selectedBuildingIndex === 9
                            ? 'building-visible'
                            : 'building-unvisible',
                    ]"
                    src="@/assets/pms/dashboard_img/ozone.png"
                    usemap="#over_disinfection_map"
                />
                <img
                    class="aurora_disinfection"
                    :class="[
                        this.$store.state.PmsModule.selectedBuildingIndex === 9
                            ? 'building-unvisible'
                            : 'building-visible',
                    ]"
                    src="@/assets/pms/dashboard_icons/bottom-aurora.png"
                />
            </div>
            <div
                class="cube ozone_cube"
                :class="[
                    this.$store.state.PmsModule.selectedBuildingIndex > 0
                        ? 'building-unvisible'
                        : 'building-visible',
                ]"
                @click="goRouter('Monitor15')"
            >
                <div class="cube__inner">오존<br />발생기</div>
            </div>
            <div
                class="cube ozone_cube2"
                :class="[
                    this.$store.state.PmsModule.selectedBuildingIndex > 0
                        ? 'building-unvisible'
                        : 'building-visible',
                ]"
                @click="goRouter('Monitor13')"
            >
                <div class="cube__inner">모티브<br />P</div>
            </div>
            <div
                class="cube ozone_cube3"
                :class="[
                    this.$store.state.PmsModule.selectedBuildingIndex > 0
                        ? 'building-unvisible'
                        : 'building-visible',
                ]"
                @click="goRouter('Monitor14')"
            >
                <div class="cube__inner">냉각수<br />P</div>
            </div>
        </div>
        <Popup1 v-if="this.$store.state.PmsModule.selectedBuildingIndex === 1" />
        <Popup2 v-if="this.$store.state.PmsModule.selectedBuildingIndex === 2" />
        <Popup3 v-if="this.$store.state.PmsModule.selectedBuildingIndex === 3" />
        <Popup4 v-if="this.$store.state.PmsModule.selectedBuildingIndex === 4" />
        <Popup5 v-if="this.$store.state.PmsModule.selectedBuildingIndex === 5" />
        <Popup6 v-if="this.$store.state.PmsModule.selectedBuildingIndex === 6" />
        <Popup7 v-if="this.$store.state.PmsModule.selectedBuildingIndex === 7" />
        <Popup8 v-if="this.$store.state.PmsModule.selectedBuildingIndex === 8" />
        <Popup9 v-if="this.$store.state.PmsModule.selectedBuildingIndex === 9" />
    </div>
</template>

<script>
import DashboardInfo from '@/components/pms/dashboard/DashboardInfo.vue';
import WaterFlow from '@/components/pms/dashboard/WaterFlow.vue';
import Popup1 from '@/components/pms/dashboard/popup/Popup1.vue';
import Popup2 from '@/components/pms/dashboard/popup/Popup2.vue';
import Popup3 from '@/components/pms/dashboard/popup/Popup3.vue';
import Popup4 from '@/components/pms/dashboard/popup/Popup4.vue';
import Popup5 from '@/components/pms/dashboard/popup/Popup5.vue';
import Popup6 from '@/components/pms/dashboard/popup/Popup6.vue';
import Popup7 from '@/components/pms/dashboard/popup/Popup7.vue';
import Popup8 from '@/components/pms/dashboard/popup/Popup8.vue';
import Popup9 from '@/components/pms/dashboard/popup/Popup9.vue';
// import { useStore } from 'vuex';
import Pie from '@/components/pms/chart/dashboard/PieChart_main.vue';
// import { useRouter } from 'vue-router';
// import { onMounted } from 'vue';

export default {
    name: 'PmsDashboard',
    components: {
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
        Pie,
    },
    data: () => ({

    }),
     methods: {
        onBuildingMouseover(index) {
            this.$store.state.PmsModule.selectedBuildingIndex = index;
            this.$store.state.PmsModule.dashboard.idx = index - 1;
        }
        ,
        onBuildingMouseout() {
            this.$store.state.PmsModule.selectedBuildingIndex = 0;
        },
        goRouter(value) {
            router.push(value);
        }
       }
       ,
       mounted(){
            this.$store.dispatch('PmsModule/dashboard/alarmDataAll');
            this.$store.dispatch('PmsModule/dashboard/operationAll');
        }
      }
        // return { store, onBuildingMouseover, onBuildingMouseout, goRouter };
    
</script>

<style scoped lang="scss">
.building-unvisible {
    display: none !important;
}
.building-visible {
    display: block !important;
}
.dashboard-container {
    background: url('../../../assets/pms/dashboard_img/dashboard_background.png')
        no-repeat;
    background-size: cover;
    width: 1503px;
    height: 990px;
    overflow-y: auto;

    .pieChart-box {
        position: absolute;
        width: 450px;
        height: 350px;
        top: 0;
        left: 110px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    }
}
.zindex10 {
    z-index: 10;
}
.opacity0 {
    opacity: 0 !important;
}
.opacity50 {
    opacity: 0.5 !important;
}
.opacity100 {
    opacity: 100 !important;
}
.map-contents {
    position: absolute;
    // left: 44px;
    top: 23%;
    width: 1509px;
    height: 763px;
    img {
        position: absolute;
    }
    .one-building {
        position: absolute;
        top: 252px;
        left: 50px;
        width: 196px;
        height: 129px;
        background-image: url('../../../assets/pms/dashboard_img/one_building.png');
    }
    .two-building {
        position: absolute;
        top: 172px;
        left: 319px;
        width: 227px;
        height: 128px;
        background-image: url('../../../assets/pms/dashboard_img/two_building.png');
    }
    .three-building {
        position: absolute;
        top: 283px;
        left: 454px;
        width: 79px;
        height: 67px;
        background-image: url('../../../assets/pms/dashboard_img/three_building.png');
    }
    .four-building {
        position: absolute;
        top: 339px;
        left: 386px;
        width: 487px;
        height: 302px;
        background-image: url('../../../assets/pms/dashboard_img/four_building.png');
    }
    .five-building {
        position: absolute;
        top: 260px;
        left: 890px;
        width: 236px;
        height: 178px;
        background-image: url('../../../assets/pms/dashboard_img/five_building.png');
    }
    &__gac {
        position: absolute;
        left: 89px;
        top: 319px;
        width: 363px;
        height: 224px;
        clip-path: polygon(0 -27%, 100% -27%, 100% 47%, 20% 100%, 0 63%);
        .up {
            position: absolute;
            top: -53px;
            left: -31px;
            animation: gac-up 1s ease-in-out 0s normal;
            // width: 424px;
            // height: 350px;
        }
        @keyframes gac-up {
            0% {
                transform: translateY(53px);
            }
            100% {
                transform: translateY(0);
            }
        }
        .aurora_gac {
            pointer-events: none;
            top: 5px;
            left: 120px;
            animation: blink 3s infinite alternate;
        }
        .gac-text {
            position: absolute;
            left: 57px;
            top: 74px;
            width: 250px;
            height: 37px;
            opacity: 0.8;
            font-family: 'KHNPHUotfR' !important;
            background-image: linear-gradient(
                to right,
                rgba(32, 80, 105, 0) 2%,
                rgba(2, 23, 52, 0.6) 36%,
                rgba(2, 23, 52, 0.6) 64%,
                rgba(32, 57, 105, 0)
            );
            text-shadow: 0 0 9px #5cafff;
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 2;
            letter-spacing: normal;
            text-align: center;
            color: #fff;
            z-index: 10;
            cursor: pointer;
            // pointer-events:none;
        }
    }
    &__percolation {
        z-index: 2;
        position: absolute;
        left: 550px;
        top: 166px;
        width: 343.9px;
        height: 175.9px;
        clip-path: polygon(0 -27%, 100% -27%, 100% 50%, 30% 98%, 0 63%);
        .up {
            position: absolute;
            left: -30px;
            top: -50px;
            animation: percolation-up 1s ease-in-out 0s normal;
        }
        @keyframes percolation-up {
            0% {
                transform: translateY(49px);
            }
            100% {
                transform: translateY(0);
            }
        }
        .aurora_percolation {
            pointer-events: none;
            top: -10px;
            left: 110px;
            animation: blink 3s infinite alternate;
        }
        .percolation-text {
            position: absolute;
            left: 42px;
            top: 60px;
            width: 250px;
            height: 37px;
            opacity: 0.8;
            background-image: linear-gradient(
                to right,
                rgba(32, 80, 105, 0) 2%,
                rgba(2, 23, 52, 0.6) 36%,
                rgba(2, 23, 52, 0.6) 64%,
                rgba(32, 57, 105, 0)
            );
            text-shadow: 0 0 9px #5cafff;
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 2;
            letter-spacing: normal;
            text-align: center;
            color: #fff;
            z-index: 10;
            cursor: pointer;
            // pointer-events:none;
        }
    }
    &__ozone {
        position: absolute;
        left: 431px;
        top: 268px;
        width: 126px;
        height: 137px;
        clip-path: polygon(0 -30%, 105% -30%, 105% 88%, 55% 100%, 0 48%);
        .up {
            position: absolute;
            top: -22px;
            left: -1px;
            animation: ozone-up 1s ease-in-out 0s normal;
        }
        @keyframes ozone-up {
            0% {
                transform: translateY(22px);
            }
            100% {
                transform: translateY(0px);
            }
        }
        .aurora_ozone {
            pointer-events: none;
            top: -29px;
            animation: blink 3s infinite alternate;
        }
        .ozone-text {
            position: absolute;
            left: -68px;
            top: 68px;
            width: 250px;
            height: 37px;
            opacity: 0.8;
            background-image: linear-gradient(
                to right,
                rgba(32, 80, 105, 0) 2%,
                rgba(2, 23, 52, 0.6) 36%,
                rgba(2, 23, 52, 0.6) 64%,
                rgba(32, 57, 105, 0)
            );
            text-shadow: 0 0 9px #5cafff;
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 2;
            letter-spacing: normal;
            text-align: center;
            color: #fff;
            z-index: 10;
            cursor: pointer;
            // pointer-events:none;
        }
    }
    &__disinfection {
        position: absolute;
        left: 211px;
        top: 562px;
        width: 126px;
        height: 137px;
        clip-path: polygon(0 -30%, 105% -30%, 105% 88%, 55% 100%, 0 48%);
        .up {
            position: absolute;
            top: -42px;
            left: -24px;
            animation: disinfection-up 1s ease-in-out 0s normal;
        }
        @keyframes disinfection-up {
            0% {
                transform: translateY(42px);
            }
            100% {
                transform: translateY(0);
            }
        }
        .aurora_disinfection {
            pointer-events: none;
            top: -29px;
            animation: blink 3s infinite alternate;
        }
        .disinfection-text {
            position: absolute;
            left: -68px;
            top: 38px;
            width: 250px;
            height: 37px;
            opacity: 0.8;
            background-image: linear-gradient(
                to right,
                rgba(32, 80, 105, 0) 2%,
                rgba(2, 23, 52, 0.6) 36%,
                rgba(2, 23, 52, 0.6) 64%,
                rgba(32, 57, 105, 0)
            );
            text-shadow: 0 0 9px #5cafff;
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 2;
            letter-spacing: normal;
            text-align: center;
            color: #fff;
            z-index: 10;
            cursor: pointer;
            // pointer-events:none;
        }
    }
    &__pump {
        position: absolute;
        left: 778px;
        top: 467px;
        width: 199px;
        height: 145px;
        clip-path: polygon(0 -30%, 105% -30%, 105% 53%, 20% 101%, 0 81%);
        .aurora_pump {
            pointer-events: none;
            top: -33px;
            left: 46px;
            animation: blink 3s infinite alternate;
        }
        .up {
            position: absolute;
            top: -42px;
            left: -31px;
            animation: pump-up 1s ease-in-out 0s normal;
        }
        @keyframes pump-up {
            0% {
                transform: translateY(42px);
            }
            100% {
                transform: translateY(0);
            }
        }
        .pump-text {
            position: absolute;
            left: -25px;
            top: 40px;
            width: 250px;
            height: 37px;
            opacity: 0.8;
            background-image: linear-gradient(
                to right,
                rgba(32, 80, 105, 0) 2%,
                rgba(2, 23, 52, 0.6) 36%,
                rgba(2, 23, 52, 0.6) 64%,
                rgba(32, 57, 105, 0)
            );
            text-shadow: 0 0 9px #5cafff;
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 2;
            letter-spacing: normal;
            text-align: center;
            color: #fff;
            z-index: 10;
            cursor: pointer;
            // pointer-events:none;
        }
    }
    &__drug {
        z-index: 2;
        position: absolute;
        left: 1112px;
        top: -35px;
        width: 167px;
        height: 131px;
        clip-path: polygon(
            0 -40%,
            100% -40%,
            100% 72%,
            80% 90%,
            40% 101%,
            0 81%
        );
        .up {
            position: absolute;
            top: -48px;
            left: -28px;
            animation: drug-up 1s ease-in-out 0s normal;
            // z-index: 10;
            // width: 424px;
            // height: 350px;
        }
        @keyframes drug-up {
            0% {
                transform: translateY(47px);
            }
            100% {
                transform: translateY(0);
            }
        }
        .aurora_drug {
            pointer-events: none;
            top: -21px;
            left: 26px;
            animation: blink 3s infinite alternate;
        }
        .drug-text {
            position: absolute;
            left: -52px;
            top: 41px;
            width: 250px;
            height: 37px;
            opacity: 0.8;
            background-image: linear-gradient(
                to right,
                rgba(32, 80, 105, 0) 2%,
                rgba(2, 23, 52, 0.6) 36%,
                rgba(2, 23, 52, 0.6) 64%,
                rgba(32, 57, 105, 0)
            );
            text-shadow: 0 0 9px #5cafff;
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 2;
            letter-spacing: normal;
            text-align: center;
            color: #fff;
            z-index: 10;
            cursor: pointer;
            // pointer-events:none;
        }
    }
    &__splashdown {
        z-index: 3;
        position: absolute;
        left: 1245px;
        top: 39px;
        width: 175px;
        height: 127px;
        clip-path: polygon(
            0 -36%,
            100% -36%,
            100% 77%,
            80% 97%,
            40% 101%,
            0 81%
        );
        .up {
            // z-index: 10;
            position: absolute;
            top: -46px;
            left: -30px;
            animation: splashdown-up 1s ease-in-out 0s normal;
        }
        @keyframes splashdown-up {
            0% {
                transform: translateY(47px);
            }
            100% {
                transform: translateY(0);
            }
        }
        .aurora_splashdown {
            pointer-events: none;
            top: -50px;
            left: 26px;
            animation: blink 3s infinite alternate;
        }

        .splashdown-text {
            position: absolute;
            left: -42px;
            top: 24px;
            width: 250px;
            height: 37px;
            opacity: 0.8;
            background-image: linear-gradient(
                to right,
                rgba(32, 80, 105, 0) 2%,
                rgba(2, 23, 52, 0.6) 36%,
                rgba(2, 23, 52, 0.6) 64%,
                rgba(32, 57, 105, 0)
            );
            text-shadow: 0 0 9px #5cafff;
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 2;
            letter-spacing: normal;
            text-align: center;
            color: #fff;
            z-index: 10;
            cursor: pointer;
            // pointer-events:none;
        }
    }
    &__sedimentation-mix {
        z-index: 1;
        position: absolute;
        left: 760px;
        top: 31px;
        width: 588px;
        height: 285px;
        clip-path: polygon(0 -36%, 100% -36%, 100% 68%, 61% 103%, 0 45%);
        .up {
            position: absolute;
            top: -57px;
            left: -30px;
            animation: sedimentation-mix-up 1s ease-in-out 0s normal;
        }
        @keyframes sedimentation-mix-up {
            0% {
                transform: translateY(56px);
            }
            100% {
                transform: translateY(0);
            }
        }
        .aurora_sedimentation {
            pointer-events: none;
            top: 45px;
            left: 172px;
            animation: blink 3s infinite alternate;
        }
        .aurora_mix {
            pointer-events: none;
            top: 1px;
            left: 285px;
            animation: blink 3s infinite alternate;
        }
        .sedimentation-text {
            position: absolute;
            left: 99px;
            top: 113px;
            width: 250px;
            height: 37px;
            opacity: 0.8;
            background-image: linear-gradient(
                to right,
                rgba(32, 80, 105, 0) 2%,
                rgba(2, 23, 52, 0.6) 36%,
                rgba(2, 23, 52, 0.6) 64%,
                rgba(32, 57, 105, 0)
            );
            text-shadow: 0 0 9px #5cafff;
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 2;
            letter-spacing: normal;
            text-align: center;
            color: #fff;
            z-index: 10;
            cursor: pointer;
            // pointer-events:none;
        }
    }
    .mix-text {
        position: absolute;
        left: 222px;
        top: 67px;
        width: 250px;
        height: 37px;
        opacity: 0.8;
        background-image: linear-gradient(
            to right,
            rgba(32, 80, 105, 0) 2%,
            rgba(2, 23, 52, 0.6) 36%,
            rgba(2, 23, 52, 0.6) 64%,
            rgba(32, 57, 105, 0)
        );
        text-shadow: 0 0 9px #5cafff;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 2;
        letter-spacing: normal;
        text-align: center;
        color: #fff;
        z-index: 10;
        cursor: pointer;
        // pointer-events:none;
    }
}
.title {
    z-index: 1;
    background-position-x: right;
    margin: 25px 0 0 50px;
    width: 165px;
    letter-spacing: normal;
    font-stretch: normal;
    font-style: normal;
    &__text {
        text-shadow: 0 0 9px #5cafff;
        font-family: KHNPHUotfR;
        font-size: 21px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 2.1;
        letter-spacing: normal;
        text-align: left;
        color: #fff;
    }
}
.contents {
    display: flex;
    justify-content: left;
    width: 480px;
    height: 97.2px;
}
.content {
    display: flex;
    height: 100%;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
}

.cube {
    z-index: 50;
    // pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    // top: 107px;
    // left: 100px;
    width: 80px;
    height: 80px;
    -webkit-animation: updown 2s ease-in-out 0s infinite alternate;
    animation: updown 2s ease-in-out 0s infinite alternate;

    &__inner {
        width: 80px;
        height: 80px;
        text-align: center;
        color: #fff;
        font-size: 18px;
        line-height: 24px;
        padding-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 80px;
        background: radial-gradient(
            rgba(83, 146, 219, 0),
            rgba(83, 146, 219, 0),
            rgba(83, 146, 219, 0),
            rgba(83, 146, 219, 1),
            rgba(83, 146, 219, 1)
        );
        // background-image: url('../../../assets/pms/dashboard_icons/cube_back.png');
    }
    &__inner {
        background: radial-gradient(
            rgba(83, 146, 219, 0),
            rgba(83, 146, 219, 0),
            rgba(83, 146, 219, 0),
            rgba(83, 146, 219, 1),
            rgba(83, 146, 219, 1)
        ) !important;
    }
    &__noimg {
        width: 80px;
        height: 80px;
        -webkit-transform-style: preserve-3d;
        -webkit-transform: rotateX(0) rotateY(0) rotateZ(0);

        transform-style: preserve-3d;
        transform: rotateX(0) rotateY(0) rotateZ(0);
        // animation: name | duration | timing-function | delay | iteration-count | direction | fill-mode | play-state
        -webkit-animation: turn 5s linear 0s infinite normal;
        animation: turn 5s linear 0s infinite normal;
    }

    &__front_logo--on {
        width: 80px;
        height: 80px;
        background-image: url('../../../assets/pms/dashboard_icons/cube_ai_icon.png');
        background-position: center;
        background-size: cover;
        position: absolute;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }
    &__front_logo--off {
        width: 80px;
        height: 80px;
        // background-image: url('@/assets/pms/dashboard_icons/cube_ai_off_icon.png');
        background-position: center;
        background-size: cover;
        position: absolute;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }
    &__back_logo {
        width: 80px;
        height: 80px;
        background-image: url('../../../assets/pms/dashboard_icons/cube_percolation_icon.png');
        background-position: center;
        position: absolute;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        transform: rotateY(180deg);
        -webkit-transform: rotateY(180deg);
    }
}

.cube__inner.alert {
    background: radial-gradient(
        rgba(83, 146, 219, 0),
        rgba(83, 146, 219, 0),
        rgba(83, 146, 219, 0),
        rgb(255, 0, 0),
        rgba(255, 0, 0)
    ) !important;
}
@-webkit-keyframes turn {
    0% {
        -webkit-transform: rotateY(0);
    }
    100% {
        -webkit-transform: rotateY(360deg);
    }
}
@keyframes turn {
    0% {
        transform: rotateY(0);
    }
    100% {
        transform: rotateY(360deg);
    }
}
@keyframes turn {
    0% {
        transform: rotateY(0);
    }
    100% {
        transform: rotateY(360deg);
    }
}
@keyframes updown {
    0% {
        transform: translateY(0px);
    }
    100% {
        transform: translateY(20px);
    }
}
@-webkit-keyframes updown {
    0% {
        transform: translateY(0px);
    }
    100% {
        transform: translateY(20px);
    }
}
@keyframes blink {
    0% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
}
.disinfection_cube {
    top: 489px;
    left: 228px;
    .back_disinfection {
        background: url('../../../assets/pms/dashboard_icons/cube_disinfection_icon.png')
            no-repeat;
        background-position: center;
    }
    cursor: pointer;
}
.gac_cube {
    top: 268px;
    left: 223px;
    .back_gac {
        background: url('../../../assets/pms/dashboard_icons/cube_gac_icon.png')
            no-repeat;
        background-position: center;
    }
    cursor: pointer;
}
.ozone_cube {
    top: 205px;
    left: 370px;
    .back_gac {
        background: url('../../../assets/pms/dashboard_icons/cube_gac_icon.png')
            no-repeat;
        background-position: center;
    }
    cursor: pointer;
}
.ozone_cube2 {
    top: 205px;
    left: 450px;
    .back_gac {
        background: url('../../../assets/pms/dashboard_icons/cube_gac_icon.png')
            no-repeat;
        background-position: center;
    }
    cursor: pointer;
}
.ozone_cube3 {
    top: 205px;
    left: 530px;
    .back_gac {
        background: url('../../../assets/pms/dashboard_icons/cube_gac_icon.png')
            no-repeat;
        background-position: center;
    }
    cursor: pointer;
}
.percolation_cube {
    top: 110px;
    left: 636px;
    .back_percolation {
        background: url('../../../assets/pms/dashboard_icons/cube_percolation_icon.png')
            no-repeat;
        background-position: center;
    }
    cursor: pointer;
}
.percolation_cube2 {
    top: 110px;
    left: 716px;
    .back_percolation {
        background: url('../../../assets/pms/dashboard_icons/cube_percolation_icon.png')
            no-repeat;
        background-position: center;
    }
    cursor: pointer;
}
.pump_cube {
    top: 389px;
    left: 718px;
    .back_pump {
        background: url('../../../assets/pms/dashboard_icons/cube_pump_icon.png')
            no-repeat;
        background-position: center;
    }
    cursor: pointer;
}
.pump_cube2 {
    top: 389px;
    left: 798px;
    .back_pump {
        background: url('../../../assets/pms/dashboard_icons/cube_pump_icon.png')
            no-repeat;
        background-position: center;
    }
    cursor: pointer;
}
.pump_cube3 {
    top: 389px;
    left: 878px;
    .back_pump {
        background: url('../../../assets/pms/dashboard_icons/cube_pump_icon.png')
            no-repeat;
        background-position: center;
    }
    cursor: pointer;
}
.pump_cube4 {
    top: 389px;
    left: 958px;
    .back_pump {
        background: url('../../../assets/pms/dashboard_icons/cube_pump_icon.png')
            no-repeat;
        background-position: center;
    }
    cursor: pointer;
}
.drug_cube {
    top: -107px;
    left: 1108px;
    .back_drug {
        background: url('../../../assets/pms/dashboard_icons/cube_drug_icon.png')
            no-repeat;
        background-position: center;
    }
    cursor: pointer;
}
.drug_cube2 {
    top: -107px;
    left: 1188px;
    .back_drug {
        background: url('../../../assets/pms/dashboard_icons/cube_drug_icon.png')
            no-repeat;
        background-position: center;
    }
    cursor: pointer;
}
.splashdown_cube {
    top: -48px;
    left: 1287px;

    .back_splashdown {
        background: url('../../../assets/pms/dashboard_icons/cube_splashdown_icon.png')
            no-repeat;
        background-position: center;
    }
    cursor: pointer;
}

.sedimentation_cube {
    z-index: 2;
    top: 33px;
    left: 948px;
    .back_sedimentation {
        background: url('../../../assets/pms/dashboard_icons/cube_sedimentation_icon.png')
            no-repeat;
        background-position: center;
    }
    cursor: pointer;
}
.mix_cube {
    top: -12px;
    left: 1020px;
    .back_mix {
        background: url('../../../assets/pms/dashboard_icons/cube_mix_icon.png')
            no-repeat;
        background-position: center;
    }
    cursor: pointer;
}
.mix_cube2 {
    top: -12px;
    left: 1100px;
    .back_mix {
        background: url('../../../assets/pms/dashboard_icons/cube_mix_icon.png')
            no-repeat;
        background-position: center;
    }
    cursor: pointer;
}
</style>
