<template>
  <div class="test">
    <div>sad</div>
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

.test {
  div {
    margin-right: auto;
    margin-left: auto;
  }
}

.banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;

  h1, h2 {
    color: #1296db;
  }

  background: linear-gradient(145deg, #e3fffd 0, #b7e9e6 100%);
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
      padding: 16px 0;

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