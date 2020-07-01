import { SwiperOptions as Options, CSSSelector, ISwiper } from '@/types';
import { detectSelector, getElement } from '@/utils';
import SwiperOptions from './initOptions';

class Swiper extends SwiperOptions implements ISwiper {
  readonly selector: CSSSelector;

  readonly $el!: HTMLElement | Element | null;

  constructor(selector: CSSSelector, options?: Options) {
    super();
    this.selector = selector;
    const type = detectSelector(this.selector);
    this.$el = getElement(type, this.selector);
    if (options) {
      Object.keys(options).forEach((key) => {
        this[key] = options[key];
      });
    }
    this.init();
  }

  // ANCHOR hooks lifecycle
  private init(): void {
    // @ts-ignore-next-line
    // eslint-disable-next-line no-underscore-dangle
    this.$el.__SWIPER__ = this;
  }

  // ANCHOR methods
}

export default Swiper;
