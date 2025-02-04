import { createRouter, createWebHistory } from 'vue-router';
import TareaAdmin from '../components/TareaAdmin.vue';

const routes = [
  { path: '/', component: TareaAdmin },

  { 
    path: '/escuela', 
    beforeEnter() {
     
      window.location.href = 'https://udgplus.udg.mx/'; 
    } 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;