<template>
  <nav-bar></nav-bar>
  <div> this is home</div>

</template>

<script lang="ts">

import NavBar from '@/components/nav/NavBar.vue';

export default {
  name: 'Home',
  components: {NavBar}
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>