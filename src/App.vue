<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderItem from '@/components/HeaderItem.vue';
import FooterItem from '@/components/FooterItem.vue';
</script>

<template>
  <HeaderItem />
  <main class="main">
    <div class="container">
      <RouterView />
    </div>
  </main>
  <FooterItem />
</template>

<style scoped>
:global(#app) {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
}
</style>
