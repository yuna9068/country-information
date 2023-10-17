<script setup lang="ts">
defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="loading"
    :class="{'show': show}"
  >
    <ul class="list">
      <li
        v-for="num in 12"
        :key="num"
        class="item"
        :style="`--i:${num};`"
      >
        <div class="circle" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.loading {
  position: absolute;
  inset: 0 0 0 0;
  z-index: -1;
  background: var(--color-background-secondary);
  opacity: 0;
  transition: all 0.3s;
}

.show.loading {
  opacity: 1;
  z-index: 5;
}

.list {
  width: 100px;
  aspect-ratio: 1 / 1;
  margin: 0 auto 40px;
  position: relative;
}

.item {
  position: absolute;
  transform-origin: 50px 0;
  translate: 0 50px;
  rotate: calc(var(--i) * -30deg);
  animation: color 1.2s infinite;
  animation-play-state: paused;
}

.circle {
  --shadow-blur: 3px;
  width: 10px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: var(--color-card-hover);
  filter:
    drop-shadow(0 0 var(--shadow-blur) var(--color-card-hover))
    drop-shadow(0 0 calc(var(--shadow-blur) * 3) var(--color-card-hover))
    drop-shadow(0 0 calc(var(--shadow-blur) * 6) var(--color-card-hover));
  animation: scale 1.2s calc(var(--i) * -0.1s) infinite;
  animation-play-state: paused;
}

.show .item,
.show .circle {
  animation-play-state: running;
}

@keyframes color {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}

@keyframes scale {
  0% {
    scale: 1;
  }
  100% {
    scale: 0;
  }
}
</style>
