<script setup lang="ts">
const features = [
  {
    title: '全站',
    list: [
      '切換淺色或深色模式',
      'Responsive web design',
    ],
  },
  {
    title: '首頁',
    list: [
      '顯示所有國家／地區',
      '使用 input 輸入框搜尋國家／地區',
      '依據區域篩選國家／地區',
      '點擊國家／地區後進入詳情頁顯示更多該國資訊',
      '回到國家清單上方',
    ],
  },
  {
    title: '詳情頁',
    list: [
      '顯示使用者點選的國家資訊',
      '點擊邊境國家後改為顯示該國資訊',
    ],
  },
];

const built = [
  { name: 'Mobile-first workflow' },
  { name: 'Vue 3', desc: 'JavaScript Framework', link: 'https://vuejs.org' },
  { name: 'Vue Router 4', desc: 'Official router for Vue', link: 'https://router.vuejs.org' },
  { name: 'Pinia 2', desc: 'Store library for Vue', link: 'https://pinia.vuejs.org' },
  { name: 'Vite 4', desc: 'Build tool', link: 'https://vitejs.dev' },
  { name: 'Axios 1', desc: 'Promise based HTTP client for the browser and node.js', link: 'https://axios-http.com' },
];

const acknowledgments = [
  {
    // eslint-disable-next-line max-len
    title: 'Photo of white and red globe under blue sky during daytime by Lucas George Wendt on Unsplash',
    link: 'https://unsplash.com/photos/IYm2PCy0f8c',
  },
  {
    title: '實作網頁深色模式及淺色模式的切換 by Mark',
    link: 'https://blog.tarswork.com/post/implement-dark-mode-and-light-mode-for-web-pages',
  },
  {
    title: 'Dark Theme Switcher in Vue.js by yestellar',
    link: 'https://github.com/yestellar/vue_theme_switcher#dark-theme-switcher-in-vuejs',
  },
  {
    title: 'CSS-only typewriter text animation by Alvaro Montoro',
    link: 'https://codepen.io/alvaromontoro/pen/rNwVpdd',
  },
  {
    title: '小tips: 纯CSS实现打字动画效果 by 张鑫旭',
    link: 'https://www.zhangxinxu.com/wordpress/2019/01/css-typewriter-effect',
  },
  {
    title: 'Star Particles | CSS Only Animation Effects by Online Tutorials',
    link: 'https://youtu.be/prfvYAzwdxE',
  },
  {
    title: 'Best-README-Template by othneildrew',
    link: 'https://github.com/othneildrew/Best-README-Template',
  },
];

const design = [
  {
    title: 'REST Countries API FIELDS',
    link: 'https://github.com/yuna9068/country-information/tree/main/docs/api',
  },
  {
    title: 'Frontend Mentor challenge README',
    link: 'https://github.com/yuna9068/country-information/blob/main/docs/design/README.md',
  },
  {
    title: 'Frontend Mentor challenge style guide',
    link: 'https://github.com/yuna9068/country-information/blob/main/docs/design/style-guide.md',
  },
  {
    title: 'JPEG design files for mobile & desktop layouts',
    link: 'https://github.com/yuna9068/country-information/tree/main/docs/design',
  },
];
</script>

<template>
  <div class="about">
    <section class="section">
      <div class="section-heading">
        <h2 class="section-heading-title">
          About
        </h2>
      </div>
      <div class="section-content">
        依據
        <a
          class="link"
          href="https://www.frontendmentor.io"
          target="_blank"
          rel="noopener noreferrer"
        >Frontend Mentor</a>
        網站上
        <a
          class="link"
          href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca"
          target="_blank"
          rel="noopener noreferrer"
        >REST Countries API with color theme switcher</a>
        挑戰提供的設計稿呈現
        <a
          class="link"
          href="https://restcountries.com"
          target="_blank"
          rel="noopener noreferrer"
        >REST Countries API</a>
        所提供的國家／地區資料。
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <h2 class="section-heading-title">
          Features
        </h2>
      </div>
      <div class="section-content">
        <div
          v-for="feature in features"
          :key="feature.title"
        >
          <h3>{{ feature.title }}</h3>
          <ul class="list">
            <li
              v-for="item in feature.list"
              :key="item"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <h2 class="section-heading-title">
          Built with
        </h2>
      </div>
      <div class="section-content">
        <ul class="list">
          <li
            v-for="item in built"
            :key="item.name"
          >
            <template v-if="item.link">
              <a
                class="link"
                :href="item.link"
                target="_blank"
                rel="noopener noreferrer"
              >{{ item.name }}</a>
              :&nbsp;{{ item.desc }}
            </template>
            <template v-else>
              {{ item.name }}
            </template>
          </li>
        </ul>
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <h2 class="section-heading-title">
          Acknowledgments
        </h2>
      </div>
      <div class="section-content">
        <ul class="list">
          <li
            v-for="item in acknowledgments"
            :key="item.title"
          >
            <a
              class="link"
              :href="item.link"
              target="_blank"
              rel="noopener noreferrer"
            >{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <h2 class="section-heading-title">
          Design files
        </h2>
      </div>
      <div class="section-content">
        <ul class="list">
          <li
            v-for="item in design"
            :key="item.title"
          >
            <a
              class="link"
              :href="item.link"
              target="_blank"
              rel="noopener noreferrer"
            >{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about {
  margin: 0 auto;
  padding: 30px 10%;
  letter-spacing: 1px;
}

.section {
  margin-bottom: 20px;
}

.section-heading-title {
  font-size: 18px;
  line-height: 2;
}

.section-content {
  padding: 0 1em;
  line-height: 1.6;
}

.link {
  color: var(--color-footer-link-hover);
  text-shadow: none;
  transition: all 0.3s;
}

.link:hover {
  text-shadow: 0 0 1px;
}

.list {
  padding-left: 1em;
  list-style: circle;
}
</style>
