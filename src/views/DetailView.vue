<script setup lang="ts">
import { watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import FunctionSection from '@/components/detail/FunctionSection.vue';
import DetailSection from '@/components/detail/DetailSection.vue';
import useCountryStore from '@/stores/country';

const router = useRouter();
const countryStore = useCountryStore();
const { getSelectedCountry } = storeToRefs(countryStore);
const { fetchByFullName } = countryStore;

watchEffect(() => {
  const { name } = getSelectedCountry.value;

  if (name) {
    fetchByFullName(name);
  } else {
    router.back();
  }
});
</script>

<template>
  <FunctionSection />
  <DetailSection />
</template>

<style scoped>
.section {
  padding-inline: 3.2%;
}
</style>
