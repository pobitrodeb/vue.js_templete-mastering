import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Master.vue';

const routes = [
    {
        path: '/', 
        name: 'home', 
        components: Home, 
    }, 
    {
        path: '/', 
        name: 'home', 
        components: Home, 
    }, 

]; 

const router = createRouter({
    history: createWebHistory('/'), 
    routes,
})