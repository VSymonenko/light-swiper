import { SwiperOptions as Options, Slide } from '../types';

export default class SwiperOptions implements Options {
  public get lock() {
    return this.#lock;
  }

  public set lock(value: boolean) {
    this.#lock = value;
  }

  public get slides() {
    return this.#slides;
  }

  public set slides(value: Slide[]) {
    this.#slides = value;
  }

  #lock: boolean = false;

  #slides!: Slide[];

  // anchor = '';

  // effect: Effect = 'slide';

  // sensitivity = 1;

  // activeClass = 'active';

  // fullWidth = true;

  // fullHeight = true;

  // width = 300;

  // height = 300;

  // loop = false;

  // isMobile = false;

  // navigation = {
  //   icons: {
  //     next: '>',
  //     previous: '<',
  //   },
  //   calibration: 15,
  // };

  // pagination = {
  //   activeClass: 'active-page',
  //   clickable: true,
  // };

  // slidesPerView = 1;

  // spaceBetweenSlides = 15;

  // speed = 300;
}
