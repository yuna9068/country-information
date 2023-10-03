<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';
import useThemeStore from '@/stores/theme';

const themeStore = useThemeStore();
const { getTheme } = storeToRefs(themeStore);

const iconBack = computed(() => {
  const result = new URL(
    `/src/assets/images/icon-shape-${getTheme.value}.svg`,
    import.meta.url,
  ).href;

  return result;
});
</script>

<template>
  <section class="section section-function">
    <div class="section-heading">
      <h2 class="section-heading-title sr-only">
        Function
      </h2>
    </div>
    <div class="section-content">
      <RouterLink
        to="/"
        class="function-btn btn"
      >
        <img
          :src="iconBack"
          class="function-btn-icon"
          alt="Back"
        >
        <span>Back</span>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.section-function {
  padding-block: 40px 64px;
}

@media screen and (min-width: 768px) {
  .section-function{
    padding-block: 80px;
  }
}

.function-btn {
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 6px 23px 6px 24px;
  border-radius: 2px;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);
  line-height: 20px;
  font-weight: 300;
  font-size: 14px;
}

@media screen and (min-width: 768px) {
  .function-btn {
    padding: 10px 39px 10px 32px;
    border-radius: 6px;
    font-size: 16px;
  }
}

.function-btn-icon {
  width: 18px;
  aspect-ratio: 1 / 1;
  margin-right: 8px;
}

@media screen and (min-width: 768px) {
  .function-btn-icon {
    width: 20px;
    margin-right: 10px;
  }
}
</style>
