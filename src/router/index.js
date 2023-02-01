import { createRouter, createWebHistory } from "vue-router";
import home from '../views/pages/Home.vue';
import about from '../views/pages/About.vue';
import service from '../views/pages/Service.vue';

const routes = [
    {
        path: '/', 
        name: 'home', 
        components: home, 
    }, 
    {
        path: '/about', 
        name: 'about', 
        components: about, 
    }, 
    {
        path: '/services', 
        name: 'services', 
        components: service, 
    }, 
   

]; 

const router = createRouter({
    history: createWebHistory('/'), 
    routes,
})