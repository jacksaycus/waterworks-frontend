<template>
  <v-app :class='this.$store.getters.backgroundImage'>
    <!-- API 요청시 Loading 화면 -->
    <v-overlay :value="$store.state.overlay" z-index='9999'>
      <v-progress-circular
        indeterminate
        size='64'
      ></v-progress-circular>
    </v-overlay>
    <!-- Navigation -->
    <Drawer style="z-index:99999;"/>
    <!-- Header -->
    <AppBar/>
    <!-- URL Path에 따른 Router View 설정-->
    <v-main :style="$store.state.css.content">
      <router-view></router-view>
    </v-main>

  </v-app>
</template>

<script>
import Drawer from '@/components/core/Drawer'
import AppBar from '@/components/core/AppBar'

export default {
  // 컴포넌트 이름
  name: 'App',

  // 자식 컴포넌트 정의
  components: {
    Drawer,
    AppBar,
  },

  // 컴포넌트 데이터
  data: () => ({
    //
  }),
  methods: {

  },
  // 컴포넌트가 DOM에 추가될 때, 실행되는 라이프 사이클 훅
  mounted: function() {

  },
  // 컴포넌트가 제거 될 때 실행되는 라이프 사이클 훅
  destroyed: function() {

  }
};
</script>
<style lang="scss">
@import "App.scss";
</style>
