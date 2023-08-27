<script setup lang="ts">
const toggle=ref<string>('')
</script>

<template>
  <div class="body">
    <div :class="['container',toggle=='left'?'hover-left':toggle=='right'?'hover-right':'',]">
      <div class="split left" @mouseenter="toggle='left'" @mouseleave="toggle=''">
        <h1>PS5</h1>
        <a href="https://www.playstation.com/zh-hans-cn/ps5/" class="btn">GET BUY</a>
      </div>
      <div class="split right" @mouseenter="toggle='right'" @mouseleave="toggle=''">
        <h1>XBOX</h1>
        <a href="https://www.xbox.com/zh-CN/consoles/xbox-series-x" class="btn">GET BUY</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "index.scss";
</style>