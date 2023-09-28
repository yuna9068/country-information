<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useCountryStore from '@/stores/country';
import CountryCardItem from './CountryCardItem.vue';

const countryStore = useCountryStore();
const { getCountryList } = storeToRefs(countryStore);
</script>

<template>
  <ul class="list">
    <li
      v-for="item in getCountryList"
      :key="item.cca2"
      class="item"
    >
      <CountryCardItem :country="item" />
    </li>
  </ul>
</template>

<style scoped>
.list {
  padding: 28px 10.133333%;
}

.item {
  margin-bottom: 40px;
}
</style>
