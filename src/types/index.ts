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
  lock?: boolean;
  anchor?: string;
  effect?: Effect;
  sensitivity?: number;
  activeClass?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
  width?: number;
  height?: number;
  loop?: boolean;
  isMobile?: boolean;
  navigation?: Navigation;
  pagination?: Pagination;
  slidesPerView?: number;
  spaceBetweenSlides?: number;
  speed?: number
  breakpoints?: Breakpoints;
}

export type CSSSelector = string;

export type CSSSelectorType = 'class' | 'id';

export type Slide = string | SlideItem;

export type SlideType = 'video' | 'picture';

// includes attributes for <source>
// eslint-disable-next-line max-len
// https://html.spec.whatwg.org/multipage/embedded-content.html#the-source-element
export interface SlideItem {
  type: SlideType;
  source: Source;
  image: Image;

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
