import {createApp} from 'vue';

// @ts-ignore
import App from "./App.vue";

import './index.scss'

import {router} from './router/router';


const app = createApp(App);

app.use(router);
app.mount('#app');

