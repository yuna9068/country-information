import { defineStore } from 'pinia';
import { computed, reactive, ref } from 'vue';
import type { Country } from '@/types/types';
import { apiGetAll, apiGetByCountryName, apiGetByRegion } from '@/api';

const useCountryStore = defineStore('country', () => {
  const countryList: Country[] = reactive([]);
  const searchValue = ref('');

  const getCountryList = computed(() => countryList);
  const getSearchValue = computed(() => searchValue.value);

  function updateCountryList(list: Country[]) {
    countryList.length = 0;
    countryList.push(...list);
  }

  /**
   * 取得所有國家清單
   */
  async function fetchAll() {
    let result: Country[] = [];
    searchValue.value = '';

    try {
      const resp = await apiGetAll();
      result = resp.data;
    } finally {
      updateCountryList(result);
    }
  }

  /**
   * 搜尋國名包含查詢字串的國家清單
   * @param name 查詢字串
   */
  async function fetchByCountryName(name: string) {
    let result: Country[] = [];
    searchValue.value = name;

    try {
      const resp = await apiGetByCountryName(name);
      result = resp.data;
    } finally {
      updateCountryList(result);
    }
  }

  /**
   * 搜尋指定區域的國家清單
   * @param region 區域
   */
  async function fetchByRegion(region: string) {
    let result: Country[] = [];
    searchValue.value = region;

    try {
      const resp = await apiGetByRegion(region);
      result = resp.data;
    } finally {
      updateCountryList(result);
    }
  }

  return {
    getCountryList,
    getSearchValue,
    fetchAll,
    fetchByCountryName,
    fetchByRegion,
  };
});

export default useCountryStore;
