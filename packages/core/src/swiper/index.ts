import {
  CSSSelector,
  ISwiper,
  Slide,
  SwiperOptions as Options,
} from '../../../types';
import {
  detectSelector,
  getElement,
  validateSelector,
} from '../../../utils/src';
import SwiperOptions from './initOptions';

class Swiper extends SwiperOptions implements ISwiper {
  readonly selector: CSSSelector;

  readonly $el!: HTMLElement | Element | null;

  readonly slideWrapper!: HTMLDivElement;

  constructor(selector: CSSSelector, slides?: Slide[], options?: Options) {
    super();
    validateSelector(selector);
    this.selector = selector;
    const type = detectSelector(selector);
    this.$el = getElement(type, selector);
    this.slides = slides || [];
    this.slideWrapper = this.createSlideWrapper();
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

  private createSlideWrapper(): HTMLDivElement {
    const wrapper = document.createElement('div');
    wrapper.className = 'swiper-wrapper';
    this.$el?.appendChild(wrapper);
    return wrapper;
  }
}

export default Swiper;
