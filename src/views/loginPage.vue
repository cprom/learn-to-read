<template>
   
    <div class="login-form">
        <br>
        <div class="form-top">
        <!-- <img class="penguin" src="../assets/penguin.png"/> -->
        <div class="main-wrapper">
    <div class="monkey-thought">
      <div class="buble-1"></div>
      <div class="monkey-comment">
        <p>is it a email?</p>
      </div>
    </div>
    <div class="img-wrapper">
      <div class="monkey-face">
        <img src="../assets/penguin_noEyes.png" alt="face">
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
      <img class="monkey-hand" src="../assets/penguin_arms.png" alt="hand">
    </div>
  </div>
        </div>
        <form action="" class="" @submit.prevent>
        <div class="username">
            <label for="username" class="username-label">Username</label>
            <input id="email" v-model="username" type="email" placeholder="username" class="username-input">
        </div>
        <div class="password">
            <label for="password" class="password-label">Password</label>
            <input id="password" v-model="password" type="password" placeholder="Password" class="password-input" onfocus="showMonkeyHand()">
        </div>

        <button @click="logUserIn" class="">LOGIN</button>
    </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useAuth } from '../composables/useAuth'

const { login, logout } = useAuth()

const router = useRouter()
const route = useRoute()

const username = ref('')
const password = ref('')

const logUserIn = async () => {
    if (await login(username.value, password.value)) {
        if (route.query.redirect) {
            router.push(route.query.redirect)
        }else {
            router.push({name: 'home'})
        }
    } else {
        logout()
    }
}

// const monkeyFace = document.querySelector('.monkey-face');
// const monkeyHand = document.querySelector('.monkey-hand');
// const email = document.getElementById('email');
// const monkeyThought = document.querySelector('.monkey-thought');
// const monkeyEyesBrows = document.querySelectorAll('.eye-brow')

// const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// let degree = 13
// let inputPrevLenght = [];

// const showMonkeyHand = () =>{
//   monkeyHand.style.transform='translateY(35%)'
// }

// document.addEventListener('click',(e)=>{
//   if(e.target.type!=='password'){
//     monkeyHand.style.transform='translateY(120%)'
//   }
//   if(e.target.type!=='email'){
//    monkeyFace.style.transform = `perspective(800px) rotateZ(0deg)`;
//    monkeyEyesBrows.forEach((eyeBrow)=>{
//     eyeBrow.style.transform = 'translateY(-2px)'
//   })
//   }
  
// });

// // move monkey face
// email.addEventListener('input',(e)=>{
//   let currentInputLength = String(e.target.value).length;
//   let decrementInInputValue = inputPrevLenght.includes(currentInputLength);
//   if(!decrementInInputValue && degree>= -10){
//     degree-=1
//     inputPrevLenght.push(currentInputLength)
//   }
//   if(decrementInInputValue && degree<13){
//     degree+=1
//   }
//   if(!email.value.match(mailformat)){
//     monkeyThought.style.opacity='1';
//       monkeyEyesBrows.forEach((eyeBrow)=>{
//         eyeBrow.style.transform = 'translateY(3px)'
//       })
//   };
//   if(email.value.match(mailformat)){
//     monkeyThought.style.opacity='0';
//     monkeyEyesBrows.forEach((eyeBrow)=>{
//       eyeBrow.style.transform = 'translateY(-3px)'
//     })
//   };
//   monkeyFace.style.transform = `perspective(800px) rotateZ(${degree}deg)`
// });
</script>

<style>

.form-top {
    height: 300px;
}
    .login-form {
        width: 400px;
        height: 700px;
        margin: auto;
        padding: 0;
        /* From https://css.glass */
        background: rgba(177, 151, 252, 0.58);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(177, 151, 252, 0.3);
    }

    .username, .password {
        margin: 30px;
        display: flex;
        flex-direction: column;
        text-align: left;
       
    
    }

    .username-label, .password-label {
        font-weight: bold;
    }

    .username-input, .password-input {
        height: 40px;
        border-radius: 10px;
        border: none;
        padding: 10px;
    }
    
    body{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: aliceblue;
}

.main-wrapper{
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.356);
  box-shadow: 0px 0px 30px 0px rgba(82, 82, 82, 0.247);
  padding: 2rem;
  gap: 3rem;
  border-radius: .4rem;
  position: relative;
}
.monkey-thought{
  opacity: 0;
  position: absolute;
  top: -2rem;
  right: 3.4rem;
  transform: rotateZ(250deg);
  display: flex;
  flex-direction: column;
  transition: opacity .2s ease-in-out;
}
.buble-1{
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: hsl(167, 92%, 23%);
  position: relative;
}
.monkey-comment{
  position: relative;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  transform: rotateZ(103deg);
  text-align: center;
  display: flex;
  align-items: center;
  background-color: hsl(167, 92%, 23%);
  color: white;
  font-family: 'Rokkitt', serif;
  font-size: 1.6rem;
}
.img-wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  width: 250px;
  height: 250px;
  border-radius: 50%;
}
.monkey-face{
  transition: transform .3s;
  position: relative;
}
.eyes-wrapper{
  display: flex;
  align-items: center;
  width: 80%;
  position: absolute;
  top: 5.5rem;
  justify-content: space-around;
  left: 10%;
}
.eyes{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: .2rem;
}
.eye-brow{
  border-radius: 50%;
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;
  height: 0.4rem;
  position: relative;
  transform: translateY(-70px);
  width: 100%;
  background-color: black;
  transition: transform .1s ease-in;
}
.eye-ball{
  width: 1.5rem;
  height: 1.5rem;
  background-color: black;
  border-radius: 50%;
}
.img-wrapper .monkey-hand{
  position: absolute;
  transform: translateY(130%);
  transition: .7s;
}

.eye-ball{
  animation-name: eyes;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: linear;
  transform-origin: center;
}
form{
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  gap: 2rem;
}

input{
  height: 2rem;
  width: 17rem;
  padding: 0.5rem;
  padding-left: 1rem;
  font-size: 1.2rem;
  border: none;
  border-radius: .4rem;
  font-family: 'Rokkitt', serif;
  box-shadow: 0px 0px 13px 0px hsla(0, 2%, 58%, 0.438);
}
input:focus{
  outline: none;
}

button{
  font-size: 1.3rem;
  padding: 0.4rem 2rem;
  background-color: hsl(167, 92%, 23%);
  border: none;
  border-radius: .4rem;
  color: white;
  cursor: pointer;
}


@keyframes eyes {
  0%{
    height: 1.5rem;
    transform: translateY(0px);
  }
  5%{
    height: .5rem;
    transform: translateY(10px);
  }
  10%{
    height: 1.5rem;
    transform: translateY(0px);
  }
}

@media screen and (max-width:450px) {
  .main-wrapper{
    width: 300px;
  }
  .monkey-face{
    width: 8rem;
  }
  .monkey-face img{
    width: 100%;
  }
  .eyes-wrapper{
    width: 63%;
    top: 2.5rem;
    left: 1.43rem;
    justify-content: space-between;
  }
  .eye-brow{
    top: 0rem;
  }
  .monkey-hand{
    width: 5.2rem;
  }
  input{
    width: 14rem;
  }
  .monkey-thought{
    right: 2.3rem;
  }
  .buble-1{
    width: .7rem;
    height: .7rem;
  }
  .monkey-comment{
    font-size: 1.3rem;
    width: 5rem;
    height: 5rem;
  }
}
</style>