<script setup lang="ts">
const audioList = reactive<{ id: string; src: string }[]>([
  { id: "applause", src: "src/views/Day9/audios/boo.mp3" },
  { id: "boo", src: "src/views/Day9/audios/boo.mp3" },
  { id: "gasp", src: "src/views/Day9/audios/gasp.mp3" },
  { id: "tada", src: "src/views/Day9/audios/tada.mp3" },
  { id: "victory", src: "src/views/Day9/audios/boo.mp3" },
  { id: "wrong", src: "src/views/Day9/audios/wrong.mp3" },
])
type List=[string,string,string,string,string,string]
let btnList:List=["applause", "boo", "gasp", "tada", "victory", "wrong"]
function play(sound:string){
  stopSongs()
  const el:HTMLMediaElement=document.getElementById(
      sound
  ) as HTMLMediaElement
  el?.play()
}
function stopSongs(){
  btnList.forEach((sound)=>{
    const song:HTMLMediaElement=document.getElementById(
        sound
    ) as HTMLMediaElement
    song?.pause()
    song.currentTime = 0
  })
}
</script>

<template>
  <div class="body">
    <audio v-for="(audio,idx) in audioList" :key="audio.id" :id="audio.id" :src="audio.src"></audio>
    <button class="btn" v-for="(btn,idx) in btnList" :key="idx" @click="play(btn)">{{btn}}</button>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap');

.body {
  background-color: rgb(161, 100, 223);
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  margin: 0;

  .btn {
    background-color: rebeccapurple;
    border-radius: 5px;
    border: none;
    color: #fff;
    margin: 1rem;
    padding: 1.5rem 3rem;
    font-size: 1.2rem;
    font-family: inherit;
    cursor: pointer;
  }

  .btn:hover {
    opacity: 0.9;
  }

  .btn:focus {
    outline: none;
  }
}
</style>