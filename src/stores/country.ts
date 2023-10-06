import { defineStore } from 'pinia';
import { computed, reactive, ref } from 'vue';
import {
  apiGetAll,
  apiGetByCountryName,
  apiGetByRegion,
  apiGetByFullName,
  apiGetByCodes,
} from '@/api';
import type {
  CountryHome,
  CountryDetail,
  CountryDetailBorders,
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
    detailCountry: [
      'borders',
      'capital',
      'currencies',
      'flags',
      'languages',
      'name',
      'population',
      'region',
      'subregion',
      'tld',
    ], // 詳情頁國家
    detailBorder: ['name'], // 詳情頁邊境國家
  }; // api 需要的資料欄位
  const countryList: CountryHome[] = reactive([]); // 首頁國家清單
  const defaultCountryDetailInfo: CountryDetail = {
    name: {
      common: '',
      official: '',
    },
    population: 0,
    region: '',
    flags: {},
  }; // 詳情頁要顯示的國家資訊預設值
  const searchValue = ref(''); // 首頁搜尋的字串或選擇的洲名
  const selectedCountry = reactive({
    name: '',
    info: <CountryDetail>{ ...defaultCountryDetailInfo },
    borders: <string[]>[],
  }); // 詳情頁要顯示的國名、資訊、邊境國家
  const loading = reactive({
    homePage: true,
    card: true,
    detail: true,
  });

  const getCountryList = computed(() => countryList);
  const getSearchValue = computed(() => searchValue.value);
  const getSelectedCountry = computed(() => selectedCountry);
  const getLoadingHomePage = computed(() => loading.homePage);
  const getLoadingCard = computed(() => loading.card);
  const getLoadingDetail = computed(() => loading.detail);

  /**
   * 更新首頁國家清單
   * @param list 國家清單
   */
  function updateCountryList(list: CountryHome[]) {
    countryList.length = 0;
    countryList.push(...list);
    loading.card = false;
    if (loading.homePage) {
      loading.homePage = false;
    }
  }

  /**
   * 儲存詳情頁要顯示的國名
   * @param name 國名
   */
  function saveSelectedCountryName(name: string) {
    selectedCountry.name = name;
  }

  /**
   * 取得所有國家清單
   */
  async function fetchAll() {
    let result: CountryHome[] = [];
    searchValue.value = '';
    loading.card = true;

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
    loading.card = true;

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
    loading.card = true;

    try {
      const resp = await apiGetByRegion(region, fields.homeCountry);
      result = resp.data;
    } finally {
      updateCountryList(result);
    }
  }

  /**
   * 搜尋指定代碼的國家清單
   * @param codes 國家代碼，cca2 / ccn3 / cca3 / cioc
   */
  async function fetchByCode(codes: string[]) {
    const result: string[] = [];

    try {
      const resp = await apiGetByCodes(codes, fields.detailBorder);
      resp.data.forEach((item: CountryDetailBorders) => {
        result.push(item.name.common);
      });
    } finally {
      selectedCountry.borders = [...result];
      loading.detail = false;
    }
  }

  /**
   * 搜尋指定國名的國家資訊
   * @param name 國家官方名
   */
  async function fetchByFullName(name: string) {
    let result: CountryDetail[] = [{ ...defaultCountryDetailInfo }];
    loading.detail = true;

    try {
      const resp = await apiGetByFullName(name, fields.detailCountry);
      result = resp.data;
    } finally {
      Object.assign(selectedCountry.info, result[0]);

      const { borders } = result[0];
      if (borders?.length) {
        fetchByCode(borders);
      } else {
        selectedCountry.borders.length = 0;
        loading.detail = false;
      }
    }
  }

  return {
    getCountryList,
    getSearchValue,
    getSelectedCountry,
    getLoadingHomePage,
    getLoadingCard,
    getLoadingDetail,
    saveSelectedCountryName,
    fetchAll,
    fetchByCountryName,
    fetchByRegion,
    fetchByFullName,
  };
});

export default useCountryStore;
