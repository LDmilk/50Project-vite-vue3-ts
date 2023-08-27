<script setup lang="ts">
onMounted(()=>{
  checkBoxes()
  window.addEventListener('scroll',checkBoxes)
})
function checkBoxes(){
  const boxs=document.querySelectorAll('.box')
  const triggerBottom=(window.innerHeight/5)*4

  boxs.forEach((box)=>{
    const boxTop=box.getBoundingClientRect().top

    if (boxTop<triggerBottom){
      box.classList.add('show')
    }else{
      box.classList.remove('show')
    }
  })
}
</script>

<template>
  <div class="body">
    <h1>Scroll to see the animation</h1>
    <div class="box" v-for="item in 15">
      <h2>Content</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.body {
  background-color: #efedd6;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 100vw;
  height: auto;
  overflow-x: hidden;

  h1 {
    margin: 10px;
  }

  .box {
    background-color: steelblue;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 200px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.3);
    transform: translateX(400%);
    transition: transform 0.4s ease;

    h2 {
      font-size: 45px;
    }
  }

  .box:nth-of-type(even) {
    transform: translateX(-400%);
  }

  .box.show {
    transform: translateX(0);
  }
}
</style>
