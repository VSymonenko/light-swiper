/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import Swiper from '@swiper-x/core';
import { Slide } from '@/types';

export default {
  title: 'Text slides',
};

export const vanilla = () => {
  const slides: Slide[] = [
    'Slide 1',
    'Slide 2',
    'Slide 3',
  ];

  setTimeout(() => {
    // @ts-ignore
    const swiper = new Swiper('.swiper-container', slides);
  });

  return `<div class=swiper-container>
        </div>`;
};
