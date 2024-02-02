import { createRouter, createWebHistory } from "vue-router";
import read from '../views/read.vue'
import home from '../views/home.vue'
import math from '../views/math.vue'
import write from '../views/write.vue'
import settings from '../views/settings.vue'


const routes = [
    {
        path: `/learn-to-read/home`,
        name: home,
        component: home,
        mode: 'hash'
    },
    
    {
        path: '/learn-to-read/read',
        name: read,
        component: read,
        mode: 'hash'
    },
    {
        path: '/learn-to-read/write',
        name: write,
        component: write,
        mode: 'hash'
    },
    {
        path: '/learn-to-read/math',
        name: math,
        component: math,
        mode: 'hash'
    },
    {
        path: '/learn-to-read/settings',
        name: settings,
        component: settings,
        mode: 'hash'
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router