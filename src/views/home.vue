<script setup>
import { useAuth } from '../composables/useAuth'
const { isAuthenticated, logout, user } = useAuth()
console.log(isAuthenticated)
console.log(user)
</script>

<template>
    <div class="container">
        <nav class="nav">
        </nav>
        <div >Home</div> 
        <section >
            welcome {{ user.email }}
        </section>
        <div id="text-output"></div>
        <div class="mic-btn">
        </div>
    </div>
    
</template>