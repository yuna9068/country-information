<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import useCountryStore from '@/stores/country';

const countryStore = useCountryStore();
const { getSelectedCountry } = storeToRefs(countryStore);
const { saveSelectedCountryName } = countryStore;

const country = computed(() => getSelectedCountry.value.info);
const countryName = computed(() => country.value.name.common);
const nativeName = computed(() => {
  let result = country.value.name.common;
  const native = country.value.name.nativeName;
  if (native) {
    const nativeList: string[] = [];
    Object.keys(native).forEach((item) => {
      nativeList.push(native[item].common);
    });
    result = nativeList.join(', ');
  }

  return result;
});
const population = computed(() => country.value.population.toLocaleString());
const subRegion = computed(
  () => country.value.subregion ?? 'N/A',
);
const capital = computed(
  () => (country.value.capital ? country.value.capital.join(', ') : 'N/A'),
);
const tld = computed(
  () => (country.value.tld ? country.value.tld.join(', ') : 'N/A'),
);
const currencies = computed(() => {
  let result = 'N/A';
  if (country.value.currencies) {
    const currency = country.value.currencies;
    const nameList: string[] = [];
    Object.keys(currency).forEach((item) => {
      nameList.push(currency[item].name);
    });
    result = nameList.join(', ');
  }

  return result;
});
const languages = computed(() => {
  let result = 'N/A';
  if (country.value.languages) {
    const language = country.value.languages;
    const nameList: string[] = [];
    Object.keys(language).forEach((item) => {
      nameList.push(language[item]);
    });
    result = nameList.join(', ');
  }

  return result;
});
const borders = computed(() => getSelectedCountry.value.borders);

/**
 * 前往指定國家詳情頁
 */
function goToDetail(name: string) {
  saveSelectedCountryName(name);
}
</script>

<template>
  <div class="flag">
    <picture class="pic-frame">
      <img
        v-img-flag="country.flags"
        :alt="countryName"
      >
    </picture>
  </div>

  <div class="info">
    <div class="info-title">
      <h3>{{ countryName }}</h3>
    </div>
    <div class="info-content">
      <ul class="info-content-list">
        <li class="info-content-item">
          <span class="info-content-item-col">Native Name: </span>
          <span class="info-content-item-val">{{ nativeName }}</span>
        </li>
        <li class="info-content-item">
          <span class="info-content-item-col">Population: </span>
          <span class="info-content-item-val">
            {{ population }}
          </span>
        </li>
        <li class="info-content-item">
          <span class="info-content-item-col">Region: </span>
          <span class="info-content-item-val">{{ country.region }}</span>
        </li>
        <li class="info-content-item">
          <span class="info-content-item-col">Sub Region: </span>
          <span class="info-content-item-val">{{ subRegion }}</span>
        </li>
        <li class="info-content-item">
          <span class="info-content-item-col">Capital: </span>
          <span class="info-content-item-val">{{ capital }}</span>
        </li>
      </ul>
      <ul class="info-content-list">
        <li class="info-content-item">
          <span class="info-content-item-col">Top Level Domain: </span>
          <span class="info-content-item-val">{{ tld }}</span>
        </li>
        <li class="info-content-item">
          <span class="info-content-item-col">Currencies: </span>
          <span class="info-content-item-val">
            {{ currencies }}
          </span>
        </li>
        <li class="info-content-item">
          <span class="info-content-item-col">Languages: </span>
          <span class="info-content-item-val">{{ languages }}</span>
        </li>
      </ul>
    </div>
    <div class="info-border">
      <p class="info-border-title">
        Border Countries:
      </p>
      <div
        v-if="borders.length"
        class="info-border-countries"
      >
        <button
          v-for="item in borders"
          :key="item"
          type="button"
          class="info-border-btn btn"
          @click="goToDetail(item)"
        >
          {{ item }}
        </button>
      </div>
      <p v-else>
        N/A
      </p>
    </div>
  </div>
</template>

<style scoped>
.flag .pic-frame {
  aspect-ratio: 1.403669;
}

.info {
  padding-block: 50px;
}

.info-title {
  font-size: 22px;
  font-weight: 800;
}

.info-content-list {
  padding-block: 16px;
  line-height: 32px;
}
.info-content-item-col {
  font-weight: 600;
}

.info-content-item-val {
  font-weight: 300;
}

.info-border-title {
  margin: 18px auto 16px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}

.info-border-btn {
  margin: 0 10px 15px 0;
  padding: 6px 16px;
  border-radius: 2px;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.10);
  text-align: center;
}
</style>
