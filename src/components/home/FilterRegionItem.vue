<script setup lang="ts">
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
import useCountryStore from '@/stores/country';
import useThemeStore from '@/stores/theme';

const countryStore = useCountryStore();
const themeStore = useThemeStore();
const { searchByRegion } = countryStore;
const { getTheme } = storeToRefs(themeStore);

const regionList = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
const showListStatus = ref(false);
const iconArrow = computed(() => {
  const result = new URL(
    `/src/assets/images/icon-arrow-down-${getTheme.value}.svg`,
    import.meta.url,
  ).href;

  return result;
});

/**
 * 顯示/隱藏區域選單
 * @param display 顯示狀態
 */
function displayList(display?: boolean) {
  const status = display ?? !showListStatus.value;
  showListStatus.value = status;
}

/**
 * 搜尋指定區域的國家清單
 * @param name 區域
 */
function search(name:string) {
  searchByRegion(name);
  displayList(false);
}
</script>

<template>
  <div
    class="region"
    :class="[{'region--active': showListStatus}]"
  >
    <button
      type="button"
      class="region-btn btn filter-item"
      @click="displayList()"
    >
      <span>Filter by Region</span>
      <img
        :src="iconArrow"
        class="region-btn-icon"
        alt="Filter by Region"
      >
    </button>
    <ul class="region-list filter-item">
      <li
        v-for="item in regionList"
        :key="item"
        class="region-item"
        @click="search(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.region {
  position: relative;
  padding-bottom: 4px;
}

.region > * {
  width: 53.333333vw;
}

.region-btn {
  display: flex;
  align-items: center;
  padding: 14px 29px 14px 24px;
  line-height: 20px;
  font-size: 12px;
}

.region-btn-icon {
  width: 10px;
  height: 10px;
  margin-left: auto;
  transform: rotate(-180deg);
  transition: transform 0.3s;
}

.region--active .region-btn-icon {
  transform: rotate(0deg);
}

.region-list {
  max-height: 0;
  position: absolute;
  top: 100%;
  overflow: hidden;
  transition: max-height 0.3s, padding 0.3s 0s;
}

.region--active .region-list {
  max-height: 50vh;
  padding: 12px 0;
}

.region-item {
  padding: 4px 24px;
  line-height: 16px;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.region-item:hover {
  background-color: var(--color-background-secondary);
}
</style>
