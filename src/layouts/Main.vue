<template>
<div>
  
    <top-menu />
      <slot/>
</div>
</template>
<script>

import Vue from 'vue';

import TopMenu from './Header.vue';
export default {
  name: 'MainLayout',
  
  components: {
    TopMenu,
  },
  data() {
     return {
   
     };
   }
   ,
   methods: {
   
   },
    mounted(){
      
   }
   
  };

</script>


<style scoped>
/* .p-1 {
  padding: 1em;
}
.menu {
  margin-top:10px;
} */

</style>
