<script setup>
import './Navbar.css'
</script>

<template>
   <nav class="nav-container">
        <router-link class="home-icon" to="/"><font-awesome-icon class="brain-icon" icon="fa-solid fa-brain" size="2xl" style="color: #FFD43B ;" /><font-awesome-icon class="lightbulb-icon" icon="fa-solid fa-lightbulb" size="2xl" style="color: #63E6BE;" /></router-link>
         <div class="nav-btns">
            <button class="reading button"><router-link to="/read"><font-awesome-icon icon="fa-solid fa-book" size="xl" style="color: #63E6BE;" /> Reading</router-link></button>
            <button class="writing button"><router-link to="/write"><font-awesome-icon icon="fa-solid fa-pen" size="xl" style="color: #B197FC;" /> Writing</router-link></button>
            <button class="math button"><router-link to="/math"><font-awesome-icon icon="fa-solid fa-square-root-variable" size="xl" style="color: #ff8ae9;" /> Math</router-link></button>
         </div>
         <div class="setting-icon-container"> <router-link to="/settings"><font-awesome-icon class="setting-icon" icon="fa-solid fa-gear" size="2xl" style="color: #B197FC;" /></router-link></div>
   </nav>
</template>