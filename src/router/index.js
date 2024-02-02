import { createRouter, createWebHashHistory } from "vue-router";
import read from '../views/read.vue'
import home from '../views/home.vue'
import math from '../views/math.vue'
import write from '../views/write.vue'
import settings from '../views/settings.vue'


const routes = [
    {
        path: `/learn-to-read`,
        name: home,
        component: home,
    },
    
    {
        path: '/learn-to-read/read',
        name: read,
        component: read,
    },
    {
        path: '/learn-to-read/write',
        name: write,
        component: write,
    },
    {
        path: '/learn-to-read/math',
        name: math,
        component: math,
    },
    {
        path: '/learn-to-read/settings',
        name: settings,
        component: settings,
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
