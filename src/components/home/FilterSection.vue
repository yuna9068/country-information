<script setup lang="ts">
import { ref } from 'vue';
import FilterSearchItem from './FilterSearchItem.vue';
import FilterRegionItem from './FilterRegionItem.vue';

const componentSearch = ref<InstanceType<typeof FilterSearchItem> | null>(null);
const componentRegion = ref<InstanceType<typeof FilterRegionItem> | null>(null);

function resetKeyword() {
  componentSearch.value?.resetKeyword();
}

function resetRegion() {
  componentRegion.value?.resetRegion();
}
</script>

<template>
  <section class="section section-filter">
    <div class="section-heading">
      <h2 class="section-heading-title sr-only">
        Search for a country / Filter countries by region
      </h2>
    </div>
    <div class="section-content">
      <FilterSearchItem
        ref="componentSearch"
        @reset="resetRegion"
      />
      <FilterRegionItem
        ref="componentRegion"
        @reset="resetKeyword"
      />
    </div>
  </section>
</template>

<style scoped>
.section-filter {
  padding-block: 24px 32px;
}

@media screen and (min-width: 768px) {
  .section-filter {
    padding-block: 48px;
  }
}

@media screen and (min-width: 768px) {
  .section-content {
    display: flex;
    align-items: center;
  }
}

:deep(.filter-item) {
  border-radius: 5px;
  background-color: var(--color-background-primary);
  color: var(--color-text-primary);
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
}
</style>
