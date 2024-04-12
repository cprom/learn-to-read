import { createRouter, createWebHashHistory } from "vue-router";

import read from './views/read.vue'
import home from './views/home.vue'
import math from './views/math.vue'
import write from './views/write.vue'
import loginPage from './views/loginPage.vue'
import settings from './views/settings.vue'

import  firebaseApp  from './composables/useFirebase'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useAuth as firebaseAuth } from '@vueuse/firebase/useAuth'

const auth = getAuth(firebaseApp)

const { isAuthenticated, user } = firebaseAuth(auth)


const routes = [
    {
        path: `/`,
        name: 'home',
        component: home,
        meta: {requiresAuth: true}
    },
    
    {
        path: '/read',
        name: 'read',
        component: read,
        meta: {requiresAuth: true}
    },
    {
        path: '/write',
        name: 'write',
        component: write,
        meta: {requiresAuth: true}
    },
    {
        path: '/math',
        name: 'math',
        component: math,
        meta: {requiresAuth: true}
    },
    {
        path: '/settings',
        name: 'settings',
        component: settings,
        meta: {requiresAuth: true}
    },
    {
        path: '/loginPage',
        name: 'loginPage',
        component: loginPage,
    },

]



const router = createRouter({
    history: createWebHashHistory(),
    routes
})

//navigation guard
router.beforeEach((to, _, next) => {
    if (to.meta.requiresAuth && !isAuthenticated.value) {
      next({name: 'loginPage', query: {redirect: to.fullPath}})
    } else {
      next()
    }
  })


export default router
