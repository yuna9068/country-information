import '@/assets/style/reset200802.css';
import '@/assets/style/main.css';

import { createApp } from 'vue';
import pinia from '@/stores/store';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount('#app');
