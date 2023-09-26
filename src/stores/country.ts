import { defineStore } from 'pinia';

const useCountryStore = defineStore('country', () => {
  function searchByCountryName(name: string) {
    console.log('searchByCountryName: ', name);
  }

  function searchByRegion(name: string) {
    console.log('searchByRegion: ', name);
  }

  return {
    searchByCountryName,
    searchByRegion,
  };
});

export default useCountryStore;
