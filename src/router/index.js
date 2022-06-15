import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Contact from '@/views/Contact.vue';
import About from '@/views/About.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/Contact', name: 'Contact', component: Contact },
  { path: '/About', name: 'About', component: About },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
