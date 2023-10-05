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

.footer-link {
  display: inline-block;
  padding: 5px 0;
  position: relative;
  background-image: linear-gradient(
    to right,
    var(--color-text-primary),
    var(--color-text-primary) 50%,
    var(--color-footer-link-hover) 50%
  );
  background-size: 200% 100%;
  background-position: 0%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: 0.3s;
}

.footer-link:not(:last-child) {
  margin-right: 10px;
}

@media (hover: hover) {
  .footer-link:hover {
    background-position: 100%;
  }

  .footer-link::after {
    content: "";
    width: 0;
    height: 2px;
    border-radius: 20px;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--color-footer-link-hover);
    transition: 0.3s;
  }

  .footer-link:hover::after {
    width: 100%;
  }
}

.footer-copyright {
  margin-top: 20px;
  color: var(--color-text-secondary);
}

@media screen and (min-width: 768px) {
  .footer-copyright {
    width: 100%;
    text-align: center;
  }
}
</style>
