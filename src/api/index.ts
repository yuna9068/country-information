import axios from 'axios';
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import pinia from '@/stores/store';
import useFetchStore from '@/stores/fetch';

const instance = axios.create({
  baseURL: 'https://restcountries.com/v3.1/',
});

const fetchStore = useFetchStore();
const { handleResponse } = fetchStore;

instance.interceptors.response.use(
  (response) => {
    handleResponse(response.status);
    return response;
  },
  (error) => {
    if (axios.isAxiosError(error)) {
      handleResponse(error.response?.status);
    } else {
      console.log('unexpectedError: ', error);
    }

    return Promise.reject(error);
  },
);

/**
 * 取得所有國家清單
 */
export const apiGetAll = () => instance.get('all');

/**
 * 搜尋國名包含查詢字串的國家清單
 * @param name 查詢字串
 */
export const apiGetByCountryName = (name: string) => (
  instance.get(`name/${name}`)
);

/**
 * 搜尋指定區域的國家清單
 * @param region 區域
 */
export const apiGetByRegion = (region: string) => (
  instance.get(`region/${region}`)
);
