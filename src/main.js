import { createApp, reactive } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import router from '@/router';

// Global store
const store = reactive({
  theme: 'light',
});

// Import PrimeVue components here
import Button from 'primevue/button';
import Image from 'primevue/image';
import TabMenu from 'primevue/tabmenu';

// All CSS themes come here
// import 'primevue/resources/themes/lara-dark-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.provide('store', store);
//All PrimeVue components are registered here
app.component('Button', Button);
app.component('Image', Image);
app.component('TabMenu', TabMenu);

app.mount('#app');
