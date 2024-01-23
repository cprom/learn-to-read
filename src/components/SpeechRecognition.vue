<script setup>
import { ref } from 'vue'

const strToRead = "the test"

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
      document.querySelector('body').innerHTML = finalTranscript + '<i>' + interimTranscript + '</i>';
        
      
    }
    recognition.start();

    const checkString = (text) => {
        console.log(text)
        console.log(strToRead)
        if(strToRead == text){
            console.log("string is the same")
        }else{
            console.log("sting is different")
        }
    }
  


</script>

<template>
    <body>
        Speech Recognition

    </body>
    
</template>