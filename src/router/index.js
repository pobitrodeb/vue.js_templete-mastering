import { createRouter, createWebHistory } from "vue-router";
import home from '../views/pages/Home.vue';
import about from '../views/pages/About.vue';
import service from '../views/pages/Service.vue';
import portfolio from '../views/pages/Portfolio.vue';
import blog from '../views/pages/Blog.vue';
import contact from '../views/pages/Contact.vue';

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
   
    {
        path: '/portfolio', 
        name: 'portfolio', 
        components: portfolio, 
    }, 
    {
        path: '/blog', 
        name: 'blog', 
        components: blog, 
    }, 
    {
        path: '/contact', 
        name: 'contact', 
        components: contact, 
    }, 
   

]; 

const router = createRouter({
    history: createWebHistory('/'), 
    routes,
})