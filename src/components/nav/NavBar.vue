<template>
  <div class="navBar">
    <div class="navBar-wrapper">
      <div class="navBar-logo">
        <Icon name="square"/>
      </div>
      <div class="doc">
        <Icon name="typescript"/>
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
  }
};
</script>

<style lang="scss" scoped>
.navBar {
  .icon {
    width: 32px;
    height: 32px;
  }
  $navBar-color: #fff;
  //border-bottom: 3px solid  #1296db;
  box-shadow: 0 3px 3px #1296db !important;

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

    @media (max-width: 500px) {

      .doc {
        display: none;
      }
      .navBar-logo {
        margin-left: auto;
        margin-right: auto;
      }

    }
  }
}


</style>