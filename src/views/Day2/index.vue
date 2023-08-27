<script setup lang="ts">
const circles = reactive<{ id: number; active: boolean }[]>([
  { id: 1, active: true },
  { id: 2, active: false },
  { id: 3, active: false },
  { id: 4, active: false },
  { id: 5, active: false },
])

const currentActive = ref<number>(1)

const activesWidth = ref<number>(0)

const prev = () => {
  currentActive.value--
  if (currentActive.value < 0) {
    currentActive.value = 0
  }

  update()
}

const next = () => {
  currentActive.value++
  if (currentActive.value > circles.length) {
    currentActive.value = circles.length
  }

  update()
}

const actives = computed<{ id: number; active: boolean }[]>(() => {
  return circles.filter((item) => item.active == true)
})

function update() { 
  circles.forEach((circle, idx) => {
    circle.active = idx < currentActive.value
  })

  activesWidth.value = ((actives.value.length - 1) / (circles.length - 1)) * 100
}
</script>

<template>
  <div class="container">
    <div class="progress_container">
      <div :style="{ width: activesWidth + '%' }" class="progress" id="progress"></div>
      <div :class="['circle', circle.active ? 'active' : '']" v-for="circle in circles" :key="circle.id">
        {{ circle.id }}
      </div>
    </div>
    <button class="btn" id="prev" :disabled="currentActive == 1" @click="prev">
      Prev
    </button>
    <button class="btn" id="next" :disabled="currentActive == circles.length" @click="next">
      Next
    </button>
  </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

$line-border-fill:#3498db;
$line-border-empty:#e0e0e0;

.container {
  text-align: center;
  height: 100vh;
  margin-top: 40vh;

  .progress_container {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 30px;
    max-width: 100%;
    width: 350px;
  }

  .progress_container::before {
    content: "";
    background-color: $line-border-empty;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 100%;
    z-index: -1;
  }

  .progress {
    background-color: $line-border-fill;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 0;
    z-index: -1;
    transition: .4s ease;
  }

  .circle {
    background-color: #fff;
    color: #999;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid $line-border-empty;
    transition: .4s ease;
  }

  .circle.active {
    background-color: $line-border-fill;
    color: #fff;
    border-color: $line-border-fill;
  }

  .btn {
    background-color: $line-border-fill;
    color: #fff;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    font-family: inherit;
    padding: 8px 30px;
    margin: 5px;
    font-size: 14px;
  }

  .btn:active {
    transform: scale(0.98);
  }

  .btn:focus {
    outline: 0;
  }

  .btn:disabled {
    background-color: $line-border-empty;
    cursor: not-allowed;
  }

}
</style>
