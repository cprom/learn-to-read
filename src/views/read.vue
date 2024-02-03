<script setup>
import { ref } from 'vue'
import '../assets/read.css'

const strToRead = "test doll"

 const strToReadObj = [
    {
        text: "Bella and Kaylie ran up the hilll",
        img_url: "../assets/gif/run_up_hill.gif"
 },
    {
        text: "They walked back down to the lake",
        img_url: "../assets/gif/run_up_hill.gif"

    }
]

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

      checkStringIsTheSame(interimTranscript)
      document.getElementById('text-output').innerHTML = finalTranscript + '<p>' + interimTranscript + '</p>';
        
      
    }
    

    const checkStringIsTheSame = (text) => {
        console.log(text)
        let interimTranscriptArr = text.toLowerCase().split(' ');
        console.log(interimTranscriptArr)

        console.log(strToRead)
        let strToReadArr = strToRead.toLocaleLowerCase().split(' ')
        console.log(strToReadArr)
        for(let i = 0; i < interimTranscriptArr.length; i++){
            for (let j = 0; j < strToReadArr.length; j++){
                if(strToReadArr[j] == interimTranscriptArr[i]){
            console.log("string is the same")
            console.log(strToRead[j])
            return true
        }else{
            console.log("sting is different")
            return false
        }
            }
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
        <div class="gif">
            <img src="../assets/gif/run_up_hill.gif"/>
        </div>
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