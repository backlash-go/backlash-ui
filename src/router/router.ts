import {createWebHashHistory, createRouter} from 'vue-router';
import Home from '@/views/Home.vue';

import Doc from '@/views/Doc.vue';

import Test from '@/views/Test.vue'


const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [

    {path: '/', component: Home},
    {path: '/test', component: Test},

    {
      path: '/doc', component: Doc,
      children: [
        {path: 'switch', component: () => import('@/views/switch/index.vue')},
        {path: 'button', component: () => import('@/views/button/index.vue')},
        //() => import('@/views/login/index.vue')
      ]
    },
  ],
});
router.afterEach(() => {
  console.log('路由切换了');
});
