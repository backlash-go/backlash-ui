<template>
  <router-view/>

</template>

<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import {provide, ref} from 'vue';
import {router} from '@/router/router';


export default {
  name: 'App',
  data() {
    return {};
  },
  setup() {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width > 500 ? true : false);
    provide('menuVisible', menuVisible); //set

    router.afterEach(() => {
      if (width < 500) {
        menuVisible.value = false;
      }
    });
  }
};

</script>

<style lang="scss">

</style>
