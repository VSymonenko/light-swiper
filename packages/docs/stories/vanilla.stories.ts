/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import Swiper from '@swiper-x/core';
import { SwiperOptions, SlideItem } from '@/types';

export default {
  title: 'Vanilla usage',
};

export const basic = () => {
  setTimeout(() => {
    // attach swiper after container mounted
    // @ts-ignore
    const swiper = new Swiper('.swiper-container');
    // eslint-disable-next-line no-console
    console.log(swiper);
  });
  return `<div class=swiper-container>
            <div>slide 1</div>
            <div>slide 2</div>
            <div>slide 3</div>
        </div>`;
};

export const withSlides = () => {
  setTimeout(() => {
    // attach swiper after container mounted
    // @ts-ignore
    const swiper = new Swiper('.swiper-container', []);
  });
  return `<div class=swiper-container>
        </div>`;
};

export const updateSlides = () => {
  // update slides at your convenience
  setTimeout(() => {
    // attach swiper after container mounted
    const swiper = new Swiper('.swiper-container', []);
    setTimeout(() => {
      swiper.slides = [];
    }, 2000);
  });
  return `<div class=swiper-container>
        </div>`;
};

export const lockSlides = () => {
  const config: SwiperOptions = {
    lock: true,
  };

  setTimeout(() => {
    // attach swiper after container mounted
    // @ts-ignore
    const swiper = new Swiper('.swiper-container', [], config);
  });
  return `<div class=swiper-container>
        </div>`;
};

export const fadeEffect = () => {
  // change slides with fade in / fade out effect
  const config: SwiperOptions = {
    effect: 'fade',
  };

  setTimeout(() => {
    // attach swiper after container mounted
    // @ts-ignore
    const swiper = new Swiper('.swiper-container', [], config);
  });
  return `<div class=swiper-container>
        </div>`;
};

export const lazyLoadImage = () => {
  setTimeout(() => {
    // attach swiper after container mounted
    // @ts-ignore
    const swiper = new Swiper('.swiper-container');
  });
  return `<div class=swiper-container>
        </div>`;
};

export const video = () => {
  setTimeout(() => {
    // attach swiper after container mounted
    // @ts-ignore
    const swiper = new Swiper('.swiper-container');
  });
  return `<div class=swiper-container>
        </div>`;
};

export const configSensitivity = () => {
  // increase / decrease "Delta"
  // Delta is a distance travelled on swiping
  const config: SwiperOptions = {
    sensitivity: 1.2,
  };

  setTimeout(() => {
    // attach swiper after container mounted
    // @ts-ignore
    const swiper = new Swiper('.swiper-container', [], config);
  });
  return `<div class=swiper-container>
        </div>`;
};

export const activeClass = () => {
  // customize active element styles
  const config: SwiperOptions = {
    activeClass: 'custom-class',
  };

  setTimeout(() => {
    // attach swiper after container mounted
    // @ts-ignore
    const swiper = new Swiper('.swiper-container', [], config);
  });
  return `<div class=swiper-container>
        </div>`;
};

export const configHeight = () => {
  // default height is full
  const config: SwiperOptions = {
    height: 300,
  };

  setTimeout(() => {
    // attach swiper after container mounted
    // @ts-ignore
    const swiper = new Swiper('.swiper-container', [], config);
  });
  return `<div class=swiper-container>
        </div>`;
};

export const configWidth = () => {
  // default width is full
  const config: SwiperOptions = {
    width: 300,
  };

  setTimeout(() => {
    // attach swiper after container mounted
    // @ts-ignore
    const swiper = new Swiper('.swiper-container', [], config);
  });
  return `<div class=swiper-container>
        </div>`;
};

export const loopMode = () => {
  // infinity loop
  const config: SwiperOptions = {
    loop: true,
  };

  setTimeout(() => {
    // attach swiper after container mounted
    // @ts-ignore
    const swiper = new Swiper('.swiper-container', [], config);
  });
  return `<div class=swiper-container>
        </div>`;
};

export const customNavigations = () => {
  // costomize navigation icons
  // cosutmize margin from the edges of the container
  const config: SwiperOptions = {
    navigation: {
      icons: {
        next: '=>',
        previous: '<=',
      },
      calibration: 45,
    },
  };

  setTimeout(() => {
    // attach swiper after container mounted
    // @ts-ignore
    const swiper = new Swiper('.swiper-container', [], config);
  });
  return `<div class=swiper-container>
        </div>`;
};

export const hideNavigations = () => {
  const config: SwiperOptions = {
    navigation: false,
  };

  setTimeout(() => {
    // attach swiper after container mounted
    // @ts-ignore
    const swiper = new Swiper('.swiper-container', [], config);
  });
  return `<div class=swiper-container>
        </div>`;
};

export const hidePagination = () => {
  const config: SwiperOptions = {
    pagination: false,
  };

  setTimeout(() => {
    // attach swiper after container mounted
    // @ts-ignore
    const swiper = new Swiper('.swiper-container', [], config);
  });
  return `<div class=swiper-container>
        </div>`;
};

export const slidesPerView = () => {
  // default value is 1
  const config: SwiperOptions = {
    slidesPerView: 3,
  };

  setTimeout(() => {
    // attach swiper after container mounted
    // @ts-ignore
    const swiper = new Swiper('.swiper-container', [], config);
  });
  return `<div class=swiper-container>
        </div>`;
};

export const spaceBetweenSlides = () => {
  // default value is 15px
  const config: SwiperOptions = {
    spaceBetweenSlides: 30,
  };

  setTimeout(() => {
    // attach swiper after container mounted
    // @ts-ignore
    const swiper = new Swiper('.swiper-container', [], config);
  });
  return `<div class=swiper-container>
        </div>`;
};

export const customAnimationSpeed = () => {
  // default value is 300 ms
  const config: SwiperOptions = {
    speed: 500,
  };

  setTimeout(() => {
    // attach swiper after container mounted
    // @ts-ignore
    const swiper = new Swiper('.swiper-container', [], config);
  });
  return `<div class=swiper-container>
        </div>`;
};

export const changeStartIndex = () => {
  // default value is 0
  const config: SwiperOptions = {
    index: 2,
  };

  setTimeout(() => {
    // attach swiper after container mounted
    // @ts-ignore
    const swiper = new Swiper('.swiper-container', [], config);
  });
  return `<div class=swiper-container>
        </div>`;
};

export const breakpoints = () => {
  // adapt slides per view for different screens
  // key is a screen reslution
  const config: SwiperOptions = {
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
        spaceBetweenSlides: 20,
      },
      1280: {
        slidesPerView: 3,
        spaceBetweenSlides: 30,
      },
    },
  };

  setTimeout(() => {
    // attach swiper after container mounted
    // @ts-ignore
    const swiper = new Swiper('.swiper-container', [], config);
  });
  return `<div class=swiper-container>
        </div>`;
};

export const template = () => {
  // custom slides item view
  const config: SwiperOptions = {
    template: (ctx: SlideItem) => {
      const slide = document.createElement('img');
      // @ts-ignore loading supported by the last standard
      // eslint-disable-next-line max-len
      // see https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-loading
      slide.loading = 'lazy';
      slide.src = ctx.link;
      return slide;
    },
  };

  setTimeout(() => {
    // attach swiper after container mounted
    // @ts-ignore
    const swiper = new Swiper('.swiper-container', [], config);
  });
  return `<div class=swiper-container>
        </div>`;
};

export const updateSwiper = () => {
  // you can modify all props
  setTimeout(() => {
    // attach swiper after container mounted
    // @ts-ignore
    const swiper = new Swiper('.swiper-container');
    swiper.lock = true;
    // swiper.effect = 'fade';
    // swiper.sensitivity = 1.5;
    // swiper.activeClass = 'new-class';
    // swiper.width = 800;
    // swiper.height = 443;
    // swiper.loop = true;
    // swiper.navigation = false;
    // swiper.pagination = false;
    // swiper.slidesPerView = 2;
    // swiper.spaceBetweenSlides = 30;
    // swiper.speed = 335;
    // swiper.breakpoints = {
    //   500: {
    //     slidesPerView: 2,
    //     spaceBetweenSlides: 40,
    //   },
    // };
    // swiper.index = 1;
  });
  return `<div class=swiper-container>
        </div>`;
};
