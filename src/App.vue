<template>
  <router-view/>

</template>

<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import {provide, ref} from 'vue';


export default {
  name: 'App',
  data() {
    return {
    };
  },
  setup() {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width > 500);
    provide('menuVisible', menuVisible) //set

  }
};

</script>

<style lang="scss">

</style>
