import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

const useFetchStore = defineStore('fetch', () => {
  const responseCode = ref(200);

  const getErrorDisplay = computed(() => responseCode.value !== 200);
  const getResponseCode = computed(() => responseCode.value);

  function handleResponse(code: number = 200) {
    responseCode.value = code;
  }

  return {
    getErrorDisplay,
    getResponseCode,
    handleResponse,
  };
});

export default useFetchStore;
