<script setup lang="ts">
let toggleActive:(index:number)=>void

toggleActive=(index)=>{
  cardList.value.forEach((item,i)=> {
    item.active= i === index
  });
}

const cardList=ref<{[prop:string]:any}[]>([
  {
    title:'one',
    active:true,
    url:new URL('../../assets/imgs/001.jpg',import.meta.url).href
  },
  {
    title:'two',
    active:false,
    url:'src/assets/imgs/002.jpg'
  },
  {
    title: "three",
    active: false,
    url: "src/assets/imgs/003.png",
  },
  {
    title: "four",
    active: false,
    url: "src/assets/imgs/004.jpg",
  },
  {
    title: "five",
    active: false,
    url: "src/assets/imgs/005.jpg",
  },
])
</script>

<template>
  <div class="container">
    <template v-for="(img,index) in cardList" :key="index">
      <div
        @click="toggleActive(index)"
        :class="['panel',img.active?'active':'']"
        :style="{
          backgroundImage:'url('+img.url+')'
        }">
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  height: 100vh;
  width: 90vw;

  .panel {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 80vh;
    border-radius: 50px;
    color: #fff;
    cursor: pointer;
    flex: 0.5;
    margin: 10px;
    position: relative;
    transition: all 700ms ease-in;
  }
  .panel.active {
    flex: 5
  }
}

@media (max-width: 480px) {
  .container {
    width: 100vw;
  }

  .panel:nth-of-type(4),
  .panel:nth-of-type(5) {
    display: none;
  }
}
</style>