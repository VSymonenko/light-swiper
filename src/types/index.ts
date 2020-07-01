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

export interface ISwiper extends SwiperOptions {
}
