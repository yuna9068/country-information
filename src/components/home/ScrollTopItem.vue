<script setup lang="ts">
import { ref } from 'vue';
import useEventListener from '@/composables/useEventListener';

const active = ref(false);

/**
 * 監聽頁面滾動事件
 */
function scrollEvent() {
  useEventListener(window, 'scroll', () => {
    const height = window.innerHeight;
    const top = window.scrollY;
    if (top > height) {
      active.value = true;
    } else {
      active.value = false;
    }
  });
}

scrollEvent();
</script>

<template>
  <a
    id="top"
    class="sr-only"
  >Top</a>

  <div
    class="scroll"
    :class="{'scroll--active': active}"
  >
    <a
      href="#top"
      class="top-btn"
    >
      <span class="sr-only">Scroll to Top</span>
    </a>
  </div>
</template>

<style scoped>
.scroll {
  --transition-time: 0.4s;
  position: fixed;
  right: -100px;
  bottom: 20px;
  z-index: 10;
  transition: all var(--transition-time) linear;
}

.scroll--active {
  right: 3%;
  transition: all var(--transition-time) linear;
}

@media screen and (min-width: 1920px) {
  .scroll--active {
    right: 10%;
  }
}

.top-btn {
  display: block;
  width: 40px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  position: relative;
  background-color: #2589BD;
  box-shadow: 0 0 5px #2589BD;
  opacity: 0;
  transform: rotate(360deg);
  overflow: hidden;
  transition: all var(--transition-time) linear;
}

.scroll--active .top-btn {
  opacity: 1;
  transform: rotate(0deg);
}

.top-btn::before,
.top-btn::after {
  content: "";
  position: absolute;
  top: 25%;
  left: 50%;
  translate: -50% 0;
  transition: 0.3s;
}

.top-btn::before {
  width: 12px;
  aspect-ratio: 1 / 1;
  border-top: 3px solid #ffffff;
  border-left: 3px solid #ffffff;
  rotate: 45deg;
}

.top-btn::after {
  width: 3px;
  height: 50%;
  background-color: #ffffff;
}

@media (hover: hover) {
  .scroll--active .top-btn:hover::before,
  .scroll--active .top-btn:hover::after {
    animation: top 0.8s infinite;
  }
}

@keyframes top {
  0% {
    top: 100%;
  }

  100% {
    top: -50%;
  }
}
</style>
