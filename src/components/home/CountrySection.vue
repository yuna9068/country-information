<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import useCountryStore from '@/stores/country';
import ErrorItem from '@/components/ErrorItem.vue';
import CountryListItem from './CountryListItem.vue';

const countryStore = useCountryStore();
const { getCountryList, getSearchValue } = storeToRefs(countryStore);

const displayError = computed(() => getCountryList.value.length < 1);
</script>

<template>
  <section class="section section-country">
    <div class="section-heading">
      <h2 class="section-heading-title sr-only">
        Countries
      </h2>
    </div>
    <div class="section-content">
      <ErrorItem
        v-if="displayError"
        :search-value="getSearchValue"
      />
      <CountryListItem v-else />
    </div>
  </section>
</template>

<style scoped>
</style>
