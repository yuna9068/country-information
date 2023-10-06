<script setup lang="ts">
import useCountryStore from '@/stores/country';
import { storeToRefs } from 'pinia';

const countryStore = useCountryStore();
const { getLoadingDetail } = storeToRefs(countryStore);

const delay = [0, 0.2, 0.4, 0.6, 0.8];
</script>

<template>
  <div :class="{'loading': getLoadingDetail}">
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
.circles {
  position: absolute;
  inset: 0 0 0 0;
  z-index: -1;
  background: var(--color-background-secondary);
  text-align: center;
  opacity: 0;
  transition: all 0.3s;
}

.circle {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 10% 5px 0;
  border-radius: 50%;
  background-color: var(--color-card-hover);
  animation: circle 1s var(--delay) infinite alternate both;
  animation-play-state: paused;
}

.loading .circles {
  z-index: 5;
  opacity: 1;
}

.loading .circle {
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
