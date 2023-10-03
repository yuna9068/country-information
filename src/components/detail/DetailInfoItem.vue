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
  <div class="country">
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
            <span class="info-content-item-col">Native Name:&nbsp;</span>
            <span class="info-content-item-val">{{ nativeName }}</span>
          </li>
          <li class="info-content-item">
            <span class="info-content-item-col">Population:&nbsp;</span>
            <span class="info-content-item-val">
              {{ population }}
            </span>
          </li>
          <li class="info-content-item">
            <span class="info-content-item-col">Region:&nbsp;</span>
            <span class="info-content-item-val">{{ country.region }}</span>
          </li>
          <li class="info-content-item">
            <span class="info-content-item-col">Sub Region:&nbsp;</span>
            <span class="info-content-item-val">{{ subRegion }}</span>
          </li>
          <li class="info-content-item">
            <span class="info-content-item-col">Capital:&nbsp;</span>
            <span class="info-content-item-val">{{ capital }}</span>
          </li>
        </ul>
        <ul class="info-content-list">
          <li class="info-content-item">
            <span class="info-content-item-col">Top Level Domain:&nbsp;</span>
            <span class="info-content-item-val">{{ tld }}</span>
          </li>
          <li class="info-content-item">
            <span class="info-content-item-col">Currencies:&nbsp;</span>
            <span class="info-content-item-val">
              {{ currencies }}
            </span>
          </li>
          <li class="info-content-item">
            <span class="info-content-item-col">Languages:&nbsp;</span>
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
        <p
          v-else
          class="info-border-na"
        >
          N/A
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 768px) {
  .country {
    display: flex;
    padding-bottom: 40px;
  }
}

@media screen and (min-width: 1440px) {
  .country {
    align-items: center;
  }
}

.flag .pic-frame {
  aspect-ratio: 1.403669;
}

@media screen and (min-width: 768px) {
  .flag {
    width: 43.727734%;
    margin-right: auto;
  }
}

.info {
  padding-block: 50px;
}

@media screen and (min-width: 768px) {
  .info {
    width: 46.71875%;
    padding-block: 0;
  }
}

.info-title {
  font-size: 22px;
  font-weight: 800;
}

@media screen and (min-width: 1024px) {
  .info-content {
    display: flex;
  }
}

.info-content-list {
  padding-block: 16px;
  line-height: 32px;
}

@media screen and (min-width: 1024px) {
  .info-content-list {
    width: 41.80602%;
    padding-block: 23px 70px;
  }

  .info-content-list:first-child {
    margin-right: auto;
  }
}

.info-content-item {
  display: flex;
}

.info-content-item-col {
  font-weight: 600;
}

.info-content-item-val {
  flex: 1;
  font-weight: 300;
}

.info-border {
  --title-line-height: 24px;
}

@media screen and (min-width: 1024px) {
  .info-border {
    display: flex;
  }
}

.info-border-title {
  margin: 18px auto 16px;
  font-size: 16px;
  font-weight: 600;
  line-height: var(--title-line-height);
}

@media screen and (min-width: 1024px) {
  .info-border-title {
    margin: 0 16px 0 0;
  }
}

@media screen and (min-width: 1024px) {
  .info-border-countries {
    flex: 1;
  }
}

.info-border-btn {
  margin: 0 10px 15px 0;
  padding: 6px 16px;
  border-radius: 2px;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.10);
  text-align: center;
}

.info-border-na {
  line-height: var(--title-line-height);
}
</style>
