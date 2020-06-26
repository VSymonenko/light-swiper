import SwiperOptions from '@/swiper/initOptions';
import { ISwiper, SwiperOptions as Options, CSSSelector } from '@/types';
// import * as t from 'io-ts';
// import { isRight, fold } from 'fp-ts/lib/Either';
// import { pipe } from 'fp-ts/lib/pipeable';

// const str = new t.Type<string, string, unknown>(
//   'string',
//   (input: unknown): input is string => typeof input === 'string',
//   // `t.success` and `t.failure` are helpers used to build `Either` instances
//   (input, context) => (typeof input === 'string' ? t.success(input) : t.failure(input, context)),
//   // `A` and `O` are the same, so `encode` is just the identity function
//   t.identity,
// );

// // failure handler
// const onLeft = (errors: t.Errors): string => `${errors.length} error(s) found`;

// // success handler
// const onRight = (s: string) => `No errors: ${s}`;

class Swiper extends SwiperOptions implements ISwiper {
  protected selector!: CSSSelector;

  constructor(selector: CSSSelector, options?: Options) {
    super();
    // pipe(t.string.decode(selector), fold(onLeft, onRight));
    this.selector = selector;
    if (options) {
      Object.keys(options).forEach((key) => {
        this[key] = options[key];
      });
    }
  }
}

export default Swiper;
