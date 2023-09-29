import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import type { ThemeName } from '@/types/types';

const useThemeStore = defineStore('theme', () => {
  const theme = ref<ThemeName>('light');
  const getTheme = computed(() => theme.value);

  /**
   * 檢查字串是否為合法的主題值
   * @param value 欲檢查的值
   * @returns {boolean}
   */
  function isOfTypeThemeList(value: string): value is ThemeName {
    return ['light', 'dark'].includes(value);
  }

  /**
   * 設定主題，並儲存至 localStorage
   * @param name 主題名稱
   */
  function setTheme(name: ThemeName) {
    document.documentElement.setAttribute('data-theme', name);
    localStorage.setItem('theme', name);
    theme.value = name;
  }

  /**
   * 初始設定主題
   * 檢查使用者是否曾選過主題，若沒有就套用系統主題，都沒有則使用預設值
   */
  function initTheme() {
    const matchLight = window.matchMedia('(prefers-color-scheme: light)');
    const preferredTheme = localStorage.getItem('theme')
      ?? (matchLight.matches ? 'light' : 'dark');

    const result = isOfTypeThemeList(preferredTheme)
      ? preferredTheme : theme.value;

    setTheme(result);

    matchLight.addEventListener('change', (e) => {
      setTheme(e.matches ? 'light' : 'dark');
    });
  }

  return { getTheme, setTheme, initTheme };
});

export default useThemeStore;
