import {createApp} from 'vue';

// @ts-ignore
import App from "./App.vue";

import './index.scss'

import {router} from './router/router';

//vite svg doc： https://www.npmjs.com/package/vite-plugin-svg-icons

import 'virtual:svg-icons-register';

import  Icon from  '@/components/Icon.vue'
const app = createApp(App);

app.use(router);
app.component('Icon',Icon)

app.mount('#app');

