<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import useCountryStore from '@/stores/country';
import useThemeStore from '@/stores/theme';

const emit = defineEmits(['reset']);

const countryStore = useCountryStore();
const themeStore = useThemeStore();
const { fetchAll, fetchByCountryName } = countryStore;
const { getTheme } = storeToRefs(themeStore);

const keyword = ref('');
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

/**
 * 搜尋國名包含 keyword 的國家清單，若無 keyword 則改取得所有國家清單
 */
function search() {
  emit('reset');

  if (keyword.value) {
    fetchByCountryName(keyword.value);
  } else {
    fetchAll();
  }
}

/**
 * 重置 keyword
 */
function resetKeyword() {
  keyword.value = '';
}

onMounted(() => {
  search();
});

defineExpose({ resetKeyword });
</script>

<template>
  <div class="search">
    <input
      v-model.lazy="keyword"
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
