<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import useCountryStore from '@/stores/country';
import ScrollTopItem from './ScrollTopItem.vue';
import CountryCardItem from './CountryCardItem.vue';
import LoadingListItem from './LoadingListItem.vue';

const countryStore = useCountryStore();
const {
  getCountryList,
  getLoadingCard,
  sourceGreaterThanDisplay,
} = storeToRefs(countryStore);
const { processCountryList } = countryStore;

const refLoading = ref<InstanceType<typeof LoadingListItem> | null>(null);

const callback = (entries: IntersectionObserverEntry[]) => {
  entries.forEach(() => {
    processCountryList();
  });
};
const observer = new IntersectionObserver(callback);

onMounted(() => {
  if (refLoading.value) {
    observer.observe(refLoading.value.$el);
  }
});
</script>

<template>
  <ScrollTopItem />
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
  <LoadingListItem
    ref="refLoading"
    :show="sourceGreaterThanDisplay"
  />
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
