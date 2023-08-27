<script setup lang="ts">
const url=ref<string>('src/assets/imgs/009.jpg')
const load=ref<number>(0)
const loading=ref<any>(null)
const bg=shallowRef<any>(null)
const timer=setInterval(blurring,30)

function blurring(){
  load.value++
  if (load.value>99){
    clearInterval(timer)
  }
  loading.value.style.opacity = scale(load.value,0,100,1,0)
  bg.value.style.filter=`blur(${scale(load.value, 0, 100, 30, 0)}px)`
}

function scale(
    num:number,
    in_min:number,
    in_max:number,
    out_min:number,
    out_max:number,
):number|void{
  return ((num-in_min)*(out_max-out_min)/(in_max-in_min))+out_min
}
</script>

<template>
  <div class="body" :style="{background:'url('+url+')'}" ref="bg"></div>
  <div class="loading-text" ref="loading">{{load}}%</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Ubuntu');

.body {
  font-family: 'Ubuntu', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  margin: 0;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  filter: blur(0px);
  z-index: -10;

}

.loading-text {
  width: 50px;
  height: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-25px, -15px);
  font-size: 50px;
  color: #fff;
}
</style>