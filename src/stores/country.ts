import { defineStore } from 'pinia';
import { computed, reactive, ref } from 'vue';
import {
  apiGetAll,
  apiGetByCountryName,
  apiGetByRegion,
} from '@/api';
import type {
  CountryHome,
} from '@/types/types';

const useCountryStore = defineStore('country', () => {
  const fields = {
    homeCountry: [
      'name',
      'cca2',
      'capital',
      'region',
      'population',
      'flags',
    ], // 首頁國家
  }; // api 需要的資料欄位
  const countryList: CountryHome[] = reactive([]); // 首頁國家清單
  const searchValue = ref(''); // 首頁搜尋的字串或選擇的洲名

  const getCountryList = computed(() => countryList);
  const getSearchValue = computed(() => searchValue.value);

  /**
   * 更新首頁國家清單
   * @param list 國家清單
   */
  function updateCountryList(list: CountryHome[]) {
    countryList.length = 0;
    countryList.push(...list);
  }

  /**
   * 取得所有國家清單
   */
  async function fetchAll() {
    let result: CountryHome[] = [];
    searchValue.value = '';

    try {
      const resp = await apiGetAll(fields.homeCountry);
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
    let result: CountryHome[] = [];
    searchValue.value = name;

    try {
      const resp = await apiGetByCountryName(name, fields.homeCountry);
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
    let result: CountryHome[] = [];
    searchValue.value = region;

    try {
      const resp = await apiGetByRegion(region, fields.homeCountry);
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
