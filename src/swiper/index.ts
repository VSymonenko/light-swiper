import {
  CSSSelector,
  ISwiper,
  Slide,
  SwiperOptions as Options,
} from '@/types';
import {
  detectSelector,
  getElement,
  validateSelector,
} from '@/utils';
import SwiperOptions from './initOptions';

class Swiper extends SwiperOptions implements ISwiper {
  readonly selector: CSSSelector;

  readonly $el!: HTMLElement | Element | null;

  constructor(selector: CSSSelector, slides: Slide[], options?: Options) {
    super();
    validateSelector(selector);
    this.selector = selector;
    const type = detectSelector(selector);
    this.$el = getElement(type, selector.substring(1));
    this.slides = slides;
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
