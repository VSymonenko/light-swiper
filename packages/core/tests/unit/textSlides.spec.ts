import Swiper from '@/swiper';
import { Slide } from '@/types';

let swiper: Swiper;
const el = document.createElement('div');
const classSelector = 'swiper-container';
el.className = classSelector;
document.body.appendChild(el);

beforeEach(() => {
  const slides: Slide[] = ['Slide 1', 'Slide 2', 'Slide 3'];
  swiper = new Swiper(`.${classSelector}`, slides);
});

test('slide property should be text types', () => {
  expect(swiper.slides).toEqual(
    expect.arrayContaining(['Slide 1', 'Slide 2', 'Slide 3']),
  );
});

test('should be changed slides', () => {
  const newSlides = ['New slide 1', 'New slide 2'];
  swiper.slides = newSlides;

  expect(swiper.slides).toEqual(
    expect.arrayContaining(['New slide 1', 'New slide 2']),
  );
});

test('should be render text nodes', () => {
  expect(swiper.slideWrapper).toMatchSnapshot();
});
