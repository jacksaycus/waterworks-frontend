<template>
  <v-app :class='this.$store.getters["aio/backgroundImage"]'>
    <!-- <v-overlay :value="this.$store.state.overlay" z-index='9999'>
      <v-progress-circular
        indeterminate
        size='64'
      ></v-progress-circular>
    </v-overlay> -->
    <Drawer style="z-index:99999;"/>
    <AppBar/>
    <v-main :style="this.$store.state.aio.css.content">
      <router-view class="view"></router-view>
    </v-main>
</v-app>
</template>

<script>
import Drawer from '@/components/aio/core/Drawer'
import AppBar from '@/components/aio/core/AppBar'
export default {
  name: 'App',
  components: {
    Drawer,
    AppBar,
  },
  data: () => ({
  }),
  methods: {
  },
  
};
</script>
<!-- <style lang="scss">
@import "App.scss";
</style> -->