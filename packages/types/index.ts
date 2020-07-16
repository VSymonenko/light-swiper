export type Effect = 'slide' | 'fade';

export interface Pagination {
  clickable: boolean;
  activeClass: string;
}

export interface Navigation {
  icons?: {
    next: string;
    previous: string;
  },
  calibration?: number;
}

export interface Breakpoints {
  [key: number]: {
    slidesPerView?: number;
    spaceBetweenSlides?: number;
  }
}

export interface SwiperOptions {
  netflix?: boolean;
  lock?: boolean;
  effect?: Effect;
  sensitivity?: number;
  activeClass?: string;
  width?: number;
  height?: number;
  loop?: boolean;
  navigation?: Navigation | boolean;
  pagination?: Pagination | boolean;
  slidesPerView?: number;
  spaceBetweenSlides?: number;
  speed?: number;
  breakpoints?: Breakpoints;
  index?: number;
  template?: (context: SlideItem) => Element | string;
}

export type CSSSelector = string;

export type CSSSelectorType = 'class' | 'id';

export type Slide = string | SlideItem | SlideNode;

export type SlideNode = HTMLElementTagNameMap[keyof HTMLElementTagNameMap];

export type SlideType = 'video' | 'picture';

// includes attributes for <source>
// eslint-disable-next-line max-len
// https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element
export interface SlideItem {
  type: SlideType;
  source: Source;
  image: Image;
  link: string;
}

export interface Source {
  src: string;
  type: string;
  srcset: string;
  sizes: string;
  media: string;
}

export interface Image {
  src: string;
  alt: string;
  srcset: string;
  sizes: string;
}

export interface ISwiper extends SwiperOptions {
}
