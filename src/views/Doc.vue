<template>
  <div class="layout">
    <nav-bar class="nav"></nav-bar>
    <div class="content">
      <aside v-if="menuVisible" class="asideBar">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
        </ol>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main class="main">
        <router-view></router-view>
      </main>
    </div>
  </div>

</template>

<script lang="ts">

import NavBar from '@/components/nav/NavBar.vue';
import {inject, Ref} from 'vue';


export default {
  name: 'Home',
  components: {NavBar},
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const menuVisible = inject<Ref<Boolean>>('menuVisible'); //get

    return {
      menuVisible,
    };
  }
};
</script>

<style lang="scss" scoped>

.router-link-active {
  //color: red;
  background: red;
}

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    display: flex;
    flex-grow: 1;
    //padding-top: 60px;
    //padding-left: 156px;
    //@media (max-width: 500px) {
    //  padding-left: 0;
    //}

    > aside {
      flex-shrink: 0;
      position: fixed;
      width: 180px;
      height: 100vh;
      padding-top: 80px;
      background-color: white;
      box-shadow: 0 8px 8px #1296db;

      h2:nth-child(1) {
        padding-top: 10px;
        padding-left: 16px;
      }

      ol > li {

        > a {
          display: block;
          padding: 4px 16px;
          text-decoration: none;
        }
      }


    }

    > main {
      flex-grow: 1;
      padding: 96px 16px 16px 200px;
      @media (max-width: 500px) {
        padding-left: 0;
      }
      background-color: white;
    }
  }

}

//.main-sideBar {
//  position: relative;
//  height: 100vh;
//
//  .asideBar {
//    position: fixed;
//    width: 260px;
//    height: 100vh;
//    padding-top: 80px;
//    background-color: red;
//    ol > li {
//      padding: 4px;
//
//      > a {
//        text-decoration: none;
//      }
//    }
//
//    h2 {
//      padding-top: 20px;
//    }
//  }
//}
//.main {
//  height: 100%;
//  background-color: green;
//  margin-left: 260px;
//  padding-top: 100px;
//}
//
//
//
//
//
//
//
//@media (max-width: 500px) {
//  .main {
//    height: 100%;
//    background-color: green;
//    margin-left: 0px;
//    padding-top: 100px;
//  }
//
//}


</style>