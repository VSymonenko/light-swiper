import { CSSSelector } from '../swiper/src/types';

const startChar = ['.', '#'];
const startMessage = String
  .raw`Selector should be start with '.' or '#' symbol`;

export const isString = (value: string) => {
  if (typeof value === 'string') {
    return true;
  }
  throw new Error(`Value '${value}' should be a string`);
};

export const validateSelector = (value: CSSSelector) => {
  isString(value);
  const valid = startChar.some((x) => !value.indexOf(x));
  if (valid) {
    return valid;
  }
  throw new Error(startMessage);
};
