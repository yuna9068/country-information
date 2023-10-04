import { createRouter, createWebHistory } from 'vue-router';
import { storeToRefs } from 'pinia';
import HomeView from '@/views/HomeView.vue';
import useCountryStore from '@/stores/country';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('@/views/DetailView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
  ],
});

router.beforeEach((to) => {
  const defaultTitle = 'Where in the world?';
  const countryStore = useCountryStore();
  const { getSelectedCountry } = storeToRefs(countryStore);
  const countryName = getSelectedCountry.value.name;
  let title = defaultTitle;

  switch (to.name) {
    case 'detail':
      title = `${countryName} | ${defaultTitle}`;
      break;

    case 'about':
      title = `About | ${defaultTitle}`;
      break;

    default:
      break;
  }

  document.title = title;
});

export default router;
