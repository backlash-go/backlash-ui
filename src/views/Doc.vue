<template>
  <nav-bar></nav-bar>
</template>

<script lang="ts">

import NavBar from '@/components/nav/NavBar.vue';


export default {
  name: 'Home',
  components: {NavBar},
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>

</style>