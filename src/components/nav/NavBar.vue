<template>
  <div class="navBar">
    <div class="navBar-wrapper">
      <div class="navBar-logo">logo</div>
      <div class="doc">doc</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
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
    width: 80%;
    background-color: $navBar-color;
    display: flex;
    @include df-layout;
    margin-right: auto;
    margin-left: auto;
    padding: 16px 0;
  }
}


</style>