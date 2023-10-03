<script setup lang="ts">
import { computed, type PropType } from 'vue';
import { useRouter } from 'vue-router';
import type { CountryHome } from '@/types/types';
import useCountryStore from '@/stores/country';

const props = defineProps({
  country: {
    type: Object as PropType<CountryHome>,
    default: () => ({}),
    require: true,
  },
});

const router = useRouter();
const countryStore = useCountryStore();
const { saveSelectedCountryName } = countryStore;

const countryName = computed(() => props.country.name.common);
const population = computed(() => props.country.population.toLocaleString());
const capital = computed(
  () => (
    props.country.capital?.length ? props.country.capital.join(', ') : 'N/A'
  ),
);

/**
 * 前往指定國家詳情頁
 */
function goToDetail() {
  saveSelectedCountryName(countryName.value);
  router.push('/detail');
}
</script>

<template>
  <div class="card">
    <div class="card-text">
      <h3 class="card-title">
        {{ countryName }}
      </h3>
      <ul class="card-info-list">
        <li class="card-info-item">
          <span class="card-info-item-col">Population: </span>
          <span class="card-info-item-val">{{ population }}</span>
        </li>
        <li class="card-info-item">
          <span class="card-info-item-col">Region: </span>
          <span class="card-info-item-val">{{ country.region }}</span>
        </li>
        <li class="card-info-item">
          <span class="card-info-item-col">Capital: </span>
          <span class="card-info-item-val">{{ capital }}</span>
        </li>
      </ul>
    </div>
    <picture class="card-pic pic-frame">
      <img
        v-img-flag="country.flags"
        :alt="countryName"
      >
    </picture>
    <a
      class="card-link"
      @click.stop="goToDetail"
    />
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  position: relative;
  background-color: var(--color-background-primary);
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);
  overflow: hidden;
}

.card-text {
  order: 1;
  padding: 24px;
}

.card-title {
  margin-bottom: 16px;
  line-height: 26px;
  font-size: 18px;
  font-weight: 800;
}

.card-info-item {
  margin-bottom: 8px;
  line-height: 16px;
}

.card-info-item-col {
  font-weight: 600;
}

.card-info-item-val {
  font-weight: 300;
}

.card-pic {
  aspect-ratio: 1.66875;
}

.card-link {
  position: absolute;
  inset: 0;
  cursor: pointer;
}
</style>
