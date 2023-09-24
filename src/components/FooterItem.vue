<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-logo">
        <RouterLink
          to="/"
          class="logo"
        >
          Where in the world?
        </RouterLink>
      </div>
      <div class="footer-links">
        <RouterLink
          to="/about"
          class="footer-link"
        >
          About
        </RouterLink>
        <a
          class="footer-link"
          href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca"
          target="_blank"
          rel="noopener noreferrer"
        >Frontend Mentor</a>
        <a
          class="footer-link"
          href="https://restcountries.com"
          target="_blank"
          rel="noopener noreferrer"
        >REST Countries API</a>
      </div>
      <div class="footer-copyright">
        <p>&copy; 2023 Yuna All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding-block: 20px;
  background-color: var(--color-background-primary);
}

@media screen and (min-width: 768px) {
  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
  }
}

.logo {
  font-size: clamp(20px, 5.333333vw, 36px);
}

.footer-links {
  padding: 10px 0;
}

@media screen and (min-width: 768px) {
  .footer-links {
    margin-left: auto;
  }
}

.footer-link:not(:last-child) {
  margin-right: 10px;
}

.footer-copyright {
  color: var(--color-text-secondary);
}

@media screen and (min-width: 768px) {
  .footer-copyright {
    width: 100%;
    margin-top: 20px;
    text-align: center;
  }
}
</style>
