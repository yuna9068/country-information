<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useCountryStore from '@/stores/country';
import CountryCardItem from './CountryCardItem.vue';

const countryStore = useCountryStore();
const { getCountryList, getLoadingCard } = storeToRefs(countryStore);
</script>

<template>
  <ul
    class="list"
    :class="{'loading': getLoadingCard}"
  >
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
  padding: 0 10.133333% 25px;
}

@media screen and (min-width: 768px) {
  .list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 75px;
    padding: 0 0 25px;
  }
}

@media screen and (min-width: 1024px) {
  .list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 1200px) {
  .list {
    grid-template-columns: repeat(4, 1fr);
  }
}

.item {
  margin-bottom: 40px;
}

@media screen and (min-width: 768px) {
  .item {
    margin-bottom: 75px;
  }
}
</style>
