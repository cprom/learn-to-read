<script setup>
import { ref } from 'vue'
import '../assets/read.css'

const strToRead = "Bella and Kaylie ran up the hill. This is a test for a sentence."
let strToReadArr = strToRead.split(' ')
let isRecording = ref(false)

window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    let finalTranscript = '';
    let recognition = new window.SpeechRecognition();

    recognition.interimResults = true;
    recognition.maxAlternatives = 10;
    recognition.continuous = true;

    recognition.onresult = (event) => {
      let interimTranscript = '';
      for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
        let transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }

      checkString(interimTranscript)
      document.getElementById('text-output').innerHTML = finalTranscript + '<p>' + interimTranscript + '</p>';
        
      
    }
  

    const checkString = (text) => {
        console.log(text)
        console.log(strToRead)
        if(strToRead == text){
            console.log("string is the same")
        }else{
            console.log("sting is different")
        }
    }
  

    const clickToSpeak = () => {
        console.log('recording')
        isRecording.value = true
        finalTranscript = ''
        recognition.start();
    }

    const stopToSpeak = () => {
        console.log('recording stopped')
        isRecording.value = false
        recognition.abort()
    }
     
    const readText = (word) => {
        let utterance = new SpeechSynthesisUtterance(word);
        speechSynthesis.speak(utterance);
    }

</script>

<template>
        
    <div class="container">
        <div class="reading-array">
            <template v-for="word in strToReadArr">
                <span class="text-btn" @click="readText(word)">{{ word }}</span>
            </template>
        </div>
        <div id="text-output"></div>
        <div class="mic-btn">
            <button v-if="isRecording" class="mic-btn-stop" @click="stopToSpeak"><font-awesome-icon icon="fa-solid fa-microphone" /></button> 
            <button v-if="!isRecording" class="mic-btn-start" @click="clickToSpeak"><font-awesome-icon icon="fa-solid fa-microphone" /></button>
        </div>
        
    </div>
    
</template>