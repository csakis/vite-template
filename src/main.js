import { createApp } from 'vue'
import App from './App.vue'
import  PrimeVue  from "primevue/config";

// All CSS themes come here
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/vela-blue/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.min.css';

const app=createApp(App)
app.use(PrimeVue)

//All PrimeVue components are registered here


app.mount('#app')
