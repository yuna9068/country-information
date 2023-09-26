<script setup lang="ts">
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
import useCountryStore from '@/stores/country';
import useThemeStore from '@/stores/theme';

const countryStore = useCountryStore();
const themeStore = useThemeStore();
const { searchByCountryName } = countryStore;
const { getTheme } = storeToRefs(themeStore);

const iconSearch = computed(
  () => {
    const icon = new URL(
      `/src/assets/images/icon-search-${getTheme.value}.svg`,
      import.meta.url,
    ).href;
    const result = `url(${icon})`;
    return result;
  },
);
const keyword = ref('');

/**
 * 搜尋國名包含 keyword 的國家清單
 */
function search() {
  searchByCountryName(keyword.value);
}
</script>

<template>
  <div class="search">
    <input
      v-model="keyword"
      type="search"
      class="search-input filter-item"
      placeholder="Search for a country…"
      @keyup.enter="search"
    >
  </div>
</template>

<style scoped>
.search {
  padding-bottom: 40px;
}

.search-input {
  width: 100%;
  padding: 14px 32px 14px 74px;
  border: none;
  background-image: v-bind(iconSearch);
  background-position: 32px center;
  background-repeat: no-repeat;
  background-size: 16px 16px;
  line-height: 20px;
  font-size: 12px;
}

.search-input::placeholder {
  color: var(--color-input);
}
</style>