<script setup>
import './Navbar.css'

import { useAuth } from '../../composables/useAuth'
const { isAuthenticated, logout, user } = useAuth()

console.log(useAuth)

</script>

<template>
   <nav class="nav-container">
        <RouterLink class="home-icon" to="/"><font-awesome-icon class="brain-icon" icon="fa-solid fa-brain" size="2xl" style="color: #FFD43B ;" /><font-awesome-icon class="lightbulb-icon" icon="fa-solid fa-lightbulb" size="2xl" style="color: #63E6BE;" /></RouterLink>
         <div class="nav-btns">
            <button class="reading button"><RouterLink to="/read"><font-awesome-icon icon="fa-solid fa-book" size="xl" style="color: #63E6BE;" /> Reading</RouterLink></button>
            <button class="writing button"><RouterLink to="/write"><font-awesome-icon icon="fa-solid fa-pen" size="xl" style="color: #B197FC;" /> Writing</RouterLink></button>
            <button class="math button"><RouterLink to="/math"><font-awesome-icon icon="fa-solid fa-square-root-variable" size="xl" style="color: #ff8ae9;" /> Math</RouterLink></button>
         </div>
         <div class="setting-icon-container"> <RouterLink to="/settings"><font-awesome-icon class="setting-icon" icon="fa-solid fa-gear" size="2xl" style="color: #B197FC;" /></RouterLink></div>
         <div v-if="isAuthenticated">
            Welcome {{ user.email }}
            <button @click="logout" class="rounded-md bg-red-500 px-4 py-2 mx-2 text-red-100 hover:bg-red-700">LOGOUT</button>
         </div>
         <div v-else>
            <RouterLink to="/loginPage">Login</RouterLink>
         </div>
   </nav>
</template>