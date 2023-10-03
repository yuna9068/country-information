<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import useCountryStore from '@/stores/country';
import ErrorItem from '@/components/ErrorItem.vue';
import DetailInfoItem from './DetailInfoItem.vue';

const countryStore = useCountryStore();
const { getSelectedCountry } = storeToRefs(countryStore);

const displayError = computed(
  () => getSelectedCountry.value.info.name.common.length < 1,
);
</script>

<template>
  <section class="section section-detail">
    <div class="section-heading">
      <h2 class="section-heading-title sr-only">
        Country Information
      </h2>
    </div>
    <div class="section-content">
      <ErrorItem
        v-if="displayError"
        :search-value="getSelectedCountry.name"
      />
      <DetailInfoItem v-else />
    </div>
  </section>
</template>

<style scoped>
</style>
