<script setup lang="ts">
import FilterSearchItem from './FilterSearchItem.vue';
import FilterRegionItem from './FilterRegionItem.vue';
</script>

<template>
  <section class="section section-filter">
    <div class="section-heading">
      <h2 class="section-heading-title sr-only">
        Search for a country / Filter countries by region
      </h2>
    </div>
    <div class="section-content">
      <FilterSearchItem />
      <FilterRegionItem />
    </div>
  </section>
</template>

<style scoped>
.section-filter {
  padding-block: 24px 32px;
}

:deep(.filter-item) {
  border-radius: 5px;
  background-color: var(--color-background-primary);
  color: var(--color-text);
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
}
</style>
