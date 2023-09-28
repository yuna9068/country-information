<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useFetchStore from '@/stores/fetch';
import CountryErrorItem from './CountryErrorItem.vue';
import CountryListItem from './CountryListItem.vue';

const fetchStore = useFetchStore();
const { getErrorDisplay } = storeToRefs(fetchStore);
</script>

<template>
  <section class="section section-country">
    <div class="section-heading">
      <h2 class="section-heading-title sr-only">
        Countries
      </h2>
    </div>
    <div class="section-content">
      <CountryErrorItem v-if="getErrorDisplay" />
      <CountryListItem v-else />
    </div>
  </section>
</template>

<style scoped>
</style>
