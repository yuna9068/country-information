<script setup lang="ts">
defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});

const delay = [0, 0.2, 0.4, 0.6, 0.8];
</script>

<template>
  <div
    class="loading"
    :class="{'show': show}"
  >
    <ul class="circles">
      <li
        v-for="item in delay"
        :key="item"
        class="circle"
        :style="`--delay: ${item}s`"
      />
    </ul>
  </div>
</template>

<style scoped>
.loading {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: opacity 0.3s, max-height 0s 0.3s;
}

.show.loading {
  max-height: 50vh;
  opacity: 1;
  transition: opacity 0.3s, max-height 0s;
}

.circles {
  text-align: center;
}

.circle {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 5px 10%;
  border-radius: 50%;
  background-color: var(--color-card-hover);
  animation: circle 1s var(--delay) infinite alternate both;
  animation-play-state: paused;
}

.show .circle {
  animation-play-state: running;
}

@keyframes circle {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
