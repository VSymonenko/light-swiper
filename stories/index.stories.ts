import Swiper from '@/swiper';
// eslint-disable-next-line import/no-extraneous-dependencies

export default {
  title: 'Swiper',
};

export const simple = () => {
  const el = document.createElement('div');
  const classSelector = 'simple-swiper-container';
  el.className = classSelector;
  setTimeout(() => {
    // attach swiper after container mounted
    const swiper = new Swiper(classSelector);
    console.log(swiper);
  });
  return el;
};
