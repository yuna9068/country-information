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
          <span class="card-info-item-col">Population:&nbsp;</span>
          <span class="card-info-item-val">{{ population }}</span>
        </li>
        <li class="card-info-item">
          <span class="card-info-item-col">Region:&nbsp;</span>
          <span class="card-info-item-val">{{ country.region }}</span>
        </li>
        <li class="card-info-item">
          <span class="card-info-item-col">Capital:&nbsp;</span>
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
  height: 100%;
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
  position: relative;
  line-height: 26px;
  font-size: 18px;
  font-weight: 800;
}

.card-info-item {
  display: flex;
  margin-bottom: 8px;
  line-height: 16px;
}

.card-info-item-col {
  font-weight: 600;
}

.card-info-item-val {
  flex: 1;
  position: relative;
  font-weight: 300;
}

.card-pic {
  aspect-ratio: 1.66875;
  position: relative;
}

.card-title::after,
.card-info-item-val::after,
.card-pic::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 5px;
  background-image: linear-gradient(
    105deg,
    var(--color-background-secondary) 10%,
    var(--color-background-primary) 25%,
    var(--color-background-secondary) 40%
  );
  background-size: 200% 100%;
  opacity: 0;
  transition: 0.3s;
  animation: loading 1s linear infinite;
  animation-play-state: paused;
}

.card-pic::after {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.card-link {
  position: absolute;
  inset: 0;
  cursor: pointer;
}

@media (hover: hover) {
  .card-link::after {
    content: "\27A0";
    width: 30%;
    height: 100%;
    padding-top: 3%;
    padding-left: 3%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--color-card-hover);
    color: var(--color-text-primary);
    clip-path: polygon(0 0, 100% 0, 100% 100%);
    font-size: 30px;
    text-align: center;
    rotate: 20deg;
    transform-origin: bottom right;
    transition: 0.3s;
  }

  .card-link:hover::after {
    rotate: 0deg;
  }

  .loading .card-link::after {
    content: none;
  }
}

.loading .card-title::after,
.loading .card-info-item-val::after,
.loading .card-pic::after {
  opacity: 1;
  animation-play-state: running;
}

@keyframes loading {
  0% {
    background-position: 200%;
  }

  100% {
    background-position: 0;
  }
}
</style>
