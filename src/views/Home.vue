<template>
  <nav-bar></nav-bar>
  <div class="banner">
    <h1>Vue  UI</h1>
    <h2>一个自制的UI框架</h2>
    <div class="action">
      <a href="https://github.com/Hefeixiong/gulu-ui" target="_blank">github</a>
      <router-link class="action-begin" to="/doc">开始</router-link>
    </div>
  </div>


  <div class="feature">
    <div class="feature-item">
      <div class="feature-logo">
        <Icon  name="Vue"/>
      </div>
      <div class="feature-item-content">
        <h3>基于 Vue 3</h3>
        <p>123213</p>
      </div>
    </div>

    <div class="feature-item">
      <div class="feature-logo">
        <Icon  name="typescript"/>
      </div>
      <div class="feature-item-content">
        <h3>基于 Vue 3</h3>
        <p>123213</p>
      </div>
    </div>

    <div class="feature-item">
      <div class="feature-logo">
        <Icon  name="buld"/>
      </div>
      <div class="feature-item-content">
        <h3>基于 Vue 3</h3>
        <p>123213</p>
      </div>
    </div>
  </div>


</template>

<script lang="ts">

import NavBar from '@/components/nav/NavBar.vue';

export default {
  name: 'Home',
  components: {NavBar}
};
</script>

<style lang="scss" scoped>

.banner {

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  h1, h2 {
    color: #1296db;
  }
  h1 {
    //padding-top: 80px;
  }

  background: linear-gradient(145deg,#e3fffd 0,#b7e9e6 100%);
  clip-path: ellipse(80% 60% at 50% 40%);

  .action {
    display: flex;
    justify-content: center;
    padding: 20px 0px;
    .action-begin {
      margin-left: 18px;
      background-color: #1296db;
      padding: 10px 26px;
      border-radius: 10px;
      color: white;
    }
    a {
      background-color: #1296db;
      padding: 10px 20px;
      border-radius: 10px;
      color: white;
    }
  }
}

.feature {
  margin-top: 100px;

  .icon {
    width: 64px;
    height: 64px;
  }
  display: flex;
  justify-content: center;

  .feature-item {
    display: flex;
    margin-right: 60px;
    .feature-logo {
      margin-right: 20px;
    }

    .feature-item-content {
      h3 {
        font-weight: 400;
        font-size: 30px;
      }
    }
  }
}



@media (max-width: 500px) {
  .feature {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    .icon {
      width: 64px;
      height: 64px;
    }

    .feature-item {
      display: flex;
      padding: 16px 0 ;
      .feature-logo {
        margin-right: 20px;
      }
      .feature-item-content {
        h3 {
          font-weight: 400;
          font-size: 30px;
        }
      }
    }

  }

}


</style>