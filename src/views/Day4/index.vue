<script setup lang="ts">
const showSearchBar=ref<boolean>(false)
const input=ref<any>(null)

function handleSearchBar():void{
  input.value.focus()
  showSearchBar.value= !showSearchBar.value
}
</script>

<template>
  <div class="body">
    <div :class="['search',showSearchBar ? 'active':'']">
      <input type="text" class="input" placeholder="搜索" ref="input" />
        <button class="btn" @click="handleSearchBar">
          <i class="fas fa-search"></i>
        </button>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.body {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #7d5fff, #7158e2);
  display: flex;
  justify-content: center;
  align-items: center;

  .search {
    position: relative;

    .input {
      background-color: #fff;
      border: 0;
      font-size: 18px;
      padding: 15px;
      height: 50px;
      width: 50px;
      transition: width .3s ease;
      border-radius: 15px;
    }

    .btn {
      background-color: #fff;
      border: 0;
      cursor: pointer;
      font-size: 24px;
      position: absolute;
      top: 0;
      left: 0;
      height: 50px;
      width: 50px;
      transition: transform 0.6s ease;
      border-radius: 15px;
    }

    .btn:focus,
    .input:focus {
      outline: none;
    }
  }

  .search.active {
    .input {
      width: 200px;
      border-radius: 15px 0 0 15px;
    }

    .btn {
      transform: translateX(200px);
      border-radius: 0 15px 15px 0;
    }
  }
}
</style>