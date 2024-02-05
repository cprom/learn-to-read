<script setup>
import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import Card from 'primevue/card';
import Button from 'primevue/button';
import '../assets/read.css'


const strToRead = "test doll"

 const strToReadObj = [
    {   
        id: 1,
        text: "Bella and Kaylie ran up the hill.Bella and Kaylie ran up the hill.Bella and Kaylie ran up the hill.Bella and Kaylie ran up the hill.Bella and Kaylie ran up the hill.  ",
        img_url: "src/assets/gif/run_up_hill.gif"
    },
    {
        id: 2,
        text: "They walked back down to the lake.",
        img_url: "https://picsum.photos/300/200?q=2" 

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
    <Carousel >
    <Slide v-for="(slide, index) in strToReadObj" :key="slide.id">
   <div class="card">
    <Card style="max-width: 700px; overflow: hidden; word-wrap: inherit;">
        <template #header>
            {{ console.log(slide.img_url) }}
            <img alt="user header" :src='slide.img_url' />
        </template>
        <template #content>
            <div class="sentence">
                <span v-for="word in slide.text.split(' ')">
                    <span class="text-btn" @click="readText(word)">{{ word }}</span>
                </span>      
            </div>
        </template>
        <template #footer>
            <div class="flex gap-3 mt-1 record-btn">
                <Button v-if="isRecording" class="mic-btn-stop" @click="stopToSpeak"><font-awesome-icon icon="fa-solid fa-microphone" /></Button> 
                <Button v-if="!isRecording" class="mic-btn-start" @click="clickToSpeak"><font-awesome-icon icon="fa-solid fa-microphone" /></Button>
            </div>
        </template>
    </Card>
    
   </div>
</Slide>

<template #addons>
  <Navigation />
  <Pagination />
</template>
</Carousel>
</div>
</template>