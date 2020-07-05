import Swiper from '@/swiper';

export default {
  title: 'Vanilla usage',
};

export const basic = () => {
  setTimeout(() => {
    // attach swiper after container mounted
    const swiper = new Swiper('.basic-swiper-container', []);
    console.log(swiper);
  });
  return `<div class=basic-swiper-container>
        </div>`;
};