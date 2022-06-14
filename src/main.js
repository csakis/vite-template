import { createApp } from 'vue'
import App from './App.vue'
import  PrimeVue  from "primevue/config";

// Import PrimeVue components here
import Button  from "primevue/button";

// All CSS themes come here
import 'primevue/resources/themes/vela-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.min.css';
import 'primeicons/primeicons.css';

const app=createApp(App)
app.use(PrimeVue)

//All PrimeVue components are registered here
app.component('Button', Button)


app.mount('#app')
