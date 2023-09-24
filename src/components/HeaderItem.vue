<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';
import useThemeStore from '@/stores/theme';

const themeStore = useThemeStore();
const { getTheme } = storeToRefs(themeStore);
const { setTheme, initTheme } = themeStore;

const btnIcon = computed(
  () => (getTheme.value === 'light' ? '&#9788;' : '&#9790;'),
);

function changeTheme() {
  const type = getTheme.value === 'light' ? 'dark' : 'light';
  setTheme(type);
}

initTheme();
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header-logo">
        <RouterLink
          to="/"
          class="logo"
        >
          <h1>Where in the world?</h1>
        </RouterLink>
      </div>
      <div class="header-theme">
        <button
          class="btn header-theme-btn"
          @click="changeTheme"
        >
          <!-- eslint-disable vue/no-v-html -->
          <span
            class="header-theme-icon"
            v-html="btnIcon"
          />
          <!-- eslint-enable -->
          <span class="header-theme-text">{{ getTheme }} Mode</span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding-block: 30px;
  background-color: var(--color-background-primary);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
}

.header > .container {
  display: flex;
  align-items: center;
}

.header-theme {
  margin-left: auto;
}

.header-theme-btn {
  font-size: clamp(12px, 3.2vw, 16px);
  font-weight: 600;
}

.header-theme-icon {
  margin-right: 8px;
}

.header-theme-text {
  text-transform: capitalize;
}
</style>
