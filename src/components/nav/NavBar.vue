<template>
  <div class="navBar">
    <div class="navBar-wrapper">
      <div class="navBar-logo">
        <svg-icon name="square"/>
      </div>
      <div class="doc">
        <svg-icon name="typescript"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {inject, Ref} from 'vue';

export default {
  name: "NavBar",
  setup() {
    const menuVisible = inject<Ref<Boolean>>("menuVisible") //get
    console.log(menuVisible?.value)
  }
};
</script>

<style lang="scss" scoped>
.navBar {
  $navBar-color: #f0f0f0;

  background-color: $navBar-color;
  @mixin df-layout {
    display: flex;
    justify-content: space-between;
  }

  .navBar-wrapper {
    width: 92%;
    background-color: $navBar-color;
    display: flex;
    @include df-layout;
    margin-right: auto;
    margin-left: auto;
    padding: 22px 0;

    .navBar-logo, .doc {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}


</style>