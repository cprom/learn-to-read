<template>
   <br>
   <br>
    <div class="login-form">
        <br>
        <div class="form-top">
        <div class="main-wrapper">
    <div class="img-wrapper">
      <div class="penguin-face">
        <img class="penguin-img" src="../assets/penguin_noEyes.png" alt="face">
        <div class="eyes-wrapper">
          <div class="eyes">
            <div class="eye-brow"></div>
            <div class="eye-ball"></div>
        </div>
        <div class="eyes">
            <div class="eye-brow"></div>
            <div class="eye-ball"></div>
            
          </div>
        </div>
      </div>
      <img class="penguin-hand" src="../assets/penguin_arms.png" alt="hand">
    </div>
  </div>
        </div>
        <form action="" @submit.prevent class="form-input">
        <div class="username">
            <label for="username" class="username-label">Username</label>
            <input id="email" v-model="username" type="email" placeholder="username" class="username-input">
        </div>
        <div class="password">
            <label for="password" class="password-label">Password</label>
            <input id="password" v-model="password" type="password" placeholder="Password" class="password-input" @input="handleInput" >
        </div>

        <button @click="logUserIn" class="login-btn">LOGIN</button>
    </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import './loginPage.css'
import { useAuth } from '../composables/useAuth'


const { login, logout, isAuthenticated } = useAuth()
console.log(isAuthenticated._value)
console.log(isAuthenticated)

const router = useRouter()
const route = useRoute()

const username = ref('')
const password = ref('')

const logUserIn = async () => {
    if (await login(username.value, password.value)) {
        if (route.query.redirect) {
            router.push({name: 'home'})
        }else {
            router.push({name: 'home'})
        }
    } else {
        logout()
    }
}

const handleInput = (event) => {
    if(event.target.value !== ''){
        document.querySelector('.penguin-hand').style.transform ='translateY(-1px)'
        console.log(event.target.value)
    }
    else{
        document.querySelector('.penguin-hand').style.transform ='translateY(110px)'
    }
}

</script>

