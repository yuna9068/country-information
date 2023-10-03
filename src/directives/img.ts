import type { Directive } from 'vue';
import altFlag from '@/assets/images/altFlag.jpg';

/**
 * 國旗圖片
 */
const flag: Directive = (el: HTMLImageElement, binding) => {
  const elImg = el;
  const picUrl = binding.value?.svg ?? binding.value?.png;

  if (picUrl) {
    const img = new Image();
    img.src = picUrl;
    img.onload = () => {
      elImg.src = picUrl;
    };

    img.onerror = () => {
      elImg.src = altFlag;
    };
  } else {
    elImg.src = altFlag;
  }
};

export {
  // eslint-disable-next-line import/prefer-default-export
  flag,
};
