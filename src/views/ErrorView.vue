<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="section">
    <div class="section-heading">
      <h2 class="section-heading-title">
        Page Not Found
      </h2>
    </div>
    <div class="section-content">
      <p>
        The page you’re looking for can’t be found.
      </p>
      <RouterLink
        to="/"
        class="btn"
      >
        GO HOME
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.section {
  margin: 10% auto;
  padding-block: 30px;
  border-radius: 10px;
  text-align: center;
}

.section-heading-title {
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: 800;
}

.section-content {
  line-height: 2;
}

.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 6px 15px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.btn:hover {
  border-radius: 20px;
}
</style>
