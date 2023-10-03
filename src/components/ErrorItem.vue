<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import useFetchStore from '@/stores/fetch';

defineProps({
  searchValue: {
    type: String,
    default: '',
  },
});

const fetchStore = useFetchStore();
const { getResponseCode } = storeToRefs(fetchStore);

const displayErrorNotFound = computed(() => getResponseCode.value === 404);
</script>

<template>
  <div class="error">
    <div v-if="displayErrorNotFound">
      <p>
        We couldn't find anything for
        <span class="error-em">{{ searchValue }}</span>
      </p>
      <p>Try different or less specific keywords.</p>
    </div>
    <div v-else>
      <p>Sorry, something went wrong.</p>
      <p>Please try again later.</p>
    </div>
  </div>
</template>

<style scoped>
.error {
  line-height: 2;
  text-align: center;
  letter-spacing: 0.5px;
}

.error-em {
  font-weight: 800;
}
</style>
