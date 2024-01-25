import { createRouter, createWebHistory } from "vue-router";
import read from '../views/read.vue'
import home from '../views/home.vue'
import math from '../views/math.vue'
import write from '../views/write.vue'
import settings from '../views/settings.vue'


const routes = [
    {
        path: '/',
        name: home,
        component: home
    },
    
    {
        path: '/read',
        name: read,
        component: read
    },
    {
        path: '/write',
        name: write,
        component: write
    },
    {
        path: '/math',
        name: math,
        component: math
    },
    {
        path: '/settings',
        name: settings,
        component: settings
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router