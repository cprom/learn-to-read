<script setup>
import './Navbar.css'
// import Dialog from 'primevue/dialog';
import { useAuth } from '../../composables/useAuth'
import ProfileModal from '../ProfileModal.vue';
const { isAuthenticated, logout, user } = useAuth()

import { ref } from "vue";

</script>

<template>
   <nav class="nav-container">
        <RouterLink class="home-icon" to="/"><font-awesome-icon class="brain-icon" icon="fa-solid fa-brain" size="2xl" style="color: #FFD43B ;" /><font-awesome-icon class="lightbulb-icon" icon="fa-solid fa-lightbulb" size="2xl" style="color: #63E6BE;" /></RouterLink>
         <div class="nav-btns">
            <button class="reading button"><RouterLink to="/read"><font-awesome-icon icon="fa-solid fa-book" size="xl" style="color: #63E6BE;" /> Reading</RouterLink></button>
            <button class="writing button"><RouterLink to="/write"><font-awesome-icon icon="fa-solid fa-pen" size="xl" style="color: #B197FC;" /> Writing</RouterLink></button>
            <button class="math button"><RouterLink to="/math"><font-awesome-icon icon="fa-solid fa-square-root-variable" size="xl" style="color: #ff8ae9;" /> Math</RouterLink></button>
         </div>
         <div v-if="isAuthenticated">
         <ProfileModal/>
         </div>
         <div v-else>
            <RouterLink to="/loginPage">Login</RouterLink>
         </div>
         
      </nav>
   
</template>

