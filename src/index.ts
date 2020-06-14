import SwiperOptions from '@/initOptions';
import { ISwiper, SwiperOptions as Options, CSSSelector } from '@/types';

class Swiper extends SwiperOptions implements ISwiper {
  protected selector!: CSSSelector;

  constructor(selector: CSSSelector, options: Options) {
    super();
    this.selector = selector;
    Object.keys(options).forEach((key) => {
      this[key] = options[key];
    });
  }
}

export default Swiper;
