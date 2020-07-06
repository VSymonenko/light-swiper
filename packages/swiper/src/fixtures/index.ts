import { SwiperOptions } from '../types';
// eslint-disable-next-line import/prefer-default-export
export const options: SwiperOptions = {
  lock: false,
  effect: 'slide',
  sensitivity: 1,
  activeClass: '',
  width: 100,
  height: 100,
  loop: false,
  navigation: {
    icons: {
      next: '>',
      previous: '<',
    },
    calibration: 15,
  },
  pagination: {
    activeClass: 'active-page',
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetweenSlides: 15,
  speed: 300,
};
