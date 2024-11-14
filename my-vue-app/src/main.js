import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faViacoin } from '@fortawesome/free-brands-svg-icons';
import { faUser, faHome } from '@fortawesome/free-solid-svg-icons';
import router from './components/BrowserRouter/router';


library.add(faViacoin, faUser, faHome);

const app = createApp(App);
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
