import { onMounted, onUnmounted } from 'vue';

const useEventListener = (
  target: EventTarget,
  event: string,
  // eslint-disable-next-line no-unused-vars
  callback: (e?: any) => void,
) => {
  onMounted(() => {
    target.addEventListener(event, callback);
  });
  onUnmounted(() => target.removeEventListener(event, callback));
};

export default useEventListener;
