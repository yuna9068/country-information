import '@/assets/style/reset200802.css';
import '@/assets/style/main.css';

import { createApp } from 'vue';
import pinia from '@/stores/store';
import { flag } from '@/directives/img';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(pinia);
app.use(router);

app.directive('img-flag', flag);

app.mount('#app');
