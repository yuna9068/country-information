<script setup lang="ts">
import { ref } from 'vue';

const loading = ref(true);

setTimeout(() => {
  loading.value = false;
}, 3500); // hide 動畫執行時間 + 延遲時間
</script>

<template>
  <section
    class="section section-loading"
    :class="{'loading': loading}"
  >
    <div class="section-heading">
      <h2 class="section-heading-title">
        <p class="title-text">
          Welcome
        </p>
        <p class="title-text">
          to
        </p>
        <p class="title-text title-text-em">
          <span class="sr-only">Where in the world?</span>
        </p>
      </h2>
    </div>
    <div class="section-content">
      <div class="dots">
        <div class="dot-lower dot" />
        <div class="dot-middle dot" />
        <div class="dot-upper dot" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-loading {
  display: grid;
  place-content: center;
  width: 0;
  height: 0;
  margin: auto;
  position: fixed;
  inset: 0;
  z-index: 99;
  overflow: hidden;
}

.section-loading::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    left center / cover
    var(--color-background-primary)
    url("@/assets/images/altFlag.jpg")
    no-repeat;
  filter: grayscale(100%) blur(1px) brightness(50%);
}

.section-heading-title {
  text-align: center;
}

.title-text {
  --height: 36px;
  width: fit-content;
  height: var(--height);
  margin: 0 auto 10px;
  font-size: 26px;
  font-weight: 800;
  letter-spacing: 1px;
  line-height: var(--height);
  text-shadow: 0 0 10px #ffffff;
}

@media screen and (min-width: 768px) {
  .title-text {
    --height: 54px;
    font-size: 45px;
  }
}

@media screen and (min-width: 1024px) {
  .title-text {
    --height: 66px;
    font-size: 55px;
  }
}

.title-text-em {
  color: var(--color-card-hover);
  text-shadow: 0 0 10px #aaaaaa;
  font-family: monaco, consolas, monospace;
  letter-spacing: 0;
  word-break: break-all;
  overflow: hidden;
  animation: caret 0.1s linear infinite;
  animation-play-state: paused;
}

.title-text-em::after {
  content: '';
  animation: typing 2s linear 1 forwards;
  animation-play-state: paused;
}

.dots {
  position: relative;
  padding-top: 190px;
}

.dot {
  margin: auto;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  position: absolute;
  inset: 0;
  background: var(--color-card-hover);
  box-shadow: 2px 4px 10px 3px rgba(0, 0, 0, .2);
  animation: 2s ease infinite alternate;
  animation-play-state: paused;
}

.dot-lower {
  width: 90px;
  animation-name: lower;
}

.dot-middle {
  width: 60px;
  animation-name: middle;
}

.dot-upper {
  width: 30px;
  animation-name: upper;
}

.loading {
  width: 100%;
  height: 100%;
  animation: hide 1s 2.5s 1 forwards;
}

.loading .title-text-em,
.loading .title-text-em::after,
.loading .dot {
  animation-play-state: running;
}

@keyframes hide {
  0% {
    width: 100%;
    height: 100%;
  }

  80% {
    width: 100%;
  }

  100% {
    width: 0;
    height: 0;
  }
}

@keyframes typing {
  0%         { content: ""; }
  5.263157%  { content: "W"; }
  10.526315% { content: "Wh"; }
  15.789473% { content: "Whe"; }
  21.052631% { content: "Wher"; }
  26.315789% { content: "Where"; }
  31.578947% { content: "Where "; }
  36.842105% { content: "Where i"; }
  42.105263% { content: "Where in"; }
  47.368421% { content: "Where in "; }
  52.631578% { content: "Where in t"; }
  57.894736% { content: "Where in th"; }
  63.157894% { content: "Where in the"; }
  68.421052% { content: "Where in the "; }
  73.684210% { content: "Where in the w"; }
  78.947368% { content: "Where in the wo"; }
  84.210526% { content: "Where in the wor"; }
  89.473684% { content: "Where in the worl"; }
  94.736842% { content: "Where in the world"; }
  100%       { content: "Where in the world?"; }
}

@keyframes caret {
  0%, 100% {
    box-shadow: 1px 0 0 0 transparent;
  }
  50% {
    box-shadow: 1px 0 0 0;
  }
}

@keyframes lower{
  0%, 30% {
    transform: scale(0)
  }
  100% {
    transform: scale(1)
  }
}

@keyframes middle{
  0%, 50% {
    transform: scale(0)
  }
  100% {
    transform: scale(1)
  }
}

@keyframes upper{
  0%, 70% {
    transform: scale(0)
  }
  100% {
    transform: scale(1)
  }
}
</style>
