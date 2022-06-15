import { createApp } from 'vue'
import App from './App.vue'
import  PrimeVue  from "primevue/config";
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'


import Home from '@/components/Home.vue';
import Contact from '@/components/Contact.vue';
import About from '@/components/About.vue';

// Import PrimeVue components here
import Button  from "primevue/button";
import Image  from "primevue/image";
import TabMenu from 'primevue/tabmenu';

// All CSS themes come here
import 'primevue/resources/themes/vela-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.min.css';
import 'primeicons/primeicons.css';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
          { path: '/Contact', component: Contact },
          { path: '/About', component: About },
  ],
})

const app=createApp(App)
app.use(PrimeVue)
app.use(router)
//All PrimeVue components are registered here
app.component('Button', Button)
app.component('Image', Image)
app.component('TabMenu', TabMenu)


app.mount('#app')
