<script setup>
import './Navbar.css'
</script>

<template>
   <nav class="nav-container">
        <router-link class="home-icon" to="/"><font-awesome-icon icon="fa-solid fa-lightbulb" size="2xl" style="color: #63E6BE;" /><font-awesome-icon icon="fa-solid fa-brain" size="2xl" style="color: #FFD43B ;" /></router-link>
        <div>
         <button class="reading button"><router-link to="/read"><font-awesome-icon icon="fa-solid fa-book" size="xl" style="color: #63E6BE;" /> Reading</router-link></button>
        <button class="writing button"><router-link to="/write"><font-awesome-icon icon="fa-solid fa-pen" size="xl" style="color: #B197FC;" /> Writing</router-link></button>
        <button class="math button"><router-link to="/math"><font-awesome-icon icon="fa-solid fa-square-root-variable" size="xl" style="color: #ff8ae9;" /> Math</router-link></button>
        </div>
        <router-link class="setting-icon" to="/settings"><font-awesome-icon icon="fa-solid fa-gears" size="2xl" style="color: #B197FC;" /></router-link>
   </nav>
</template>