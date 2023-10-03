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
 * @param fields 回傳資料須包含的欄位，若無值則回傳所有欄位
 */
export const apiGetAll = (fields?: string[]) => {
  const filterString = fields?.length ? `?fields=${fields.join(',')}` : '';
  return instance.get(`all${filterString}`);
};

/**
 * 搜尋國名包含查詢字串的國家清單
 * @param name 查詢字串
 * @param fields 回傳資料須包含的欄位，若無值則回傳所有欄位
 */
export const apiGetByCountryName = (name: string, fields?: string[]) => {
  const filterString = fields?.length ? `?fields=${fields.join(',')}` : '';
  return instance.get(`name/${name}${filterString}`);
};

/**
 * 搜尋指定區域的國家清單
 * @param region 區域
 * @param fields 回傳資料須包含的欄位，若無值則回傳所有欄位
 */
export const apiGetByRegion = (region: string, fields?: string[]) => {
  const filterString = fields?.length ? `?fields=${fields.join(',')}` : '';
  return instance.get(`region/${region}${filterString}`);
};

/**
 * 搜尋指定國名的國家資訊
 * @param name 國家官方名
 * @param fields 回傳資料須包含的欄位，若無值則回傳所有欄位
 */
export const apiGetByFullName = (name: string, fields?: string[]) => {
  const filterString = fields?.length ? `&fields=${fields.join(',')}` : '';
  return instance.get(`name/${name}?fullText=true${filterString}`);
};

/**
 * 搜尋指定代碼的國家清單
 * @param codes 國家代碼，cca2 / ccn3 / cca3 / cioc
 * @param fields 回傳資料須包含的欄位，若無值則回傳所有欄位
 */
export const apiGetByCodes = (codes: string[], fields?: string[]) => {
  const codesString = codes.join(',');
  const filterString = fields?.length ? `&fields=${fields.join(',')}` : '';
  return instance.get(`alpha?codes=${codesString}${filterString}`);
};
