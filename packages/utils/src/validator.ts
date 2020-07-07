import { CSSSelector } from '@/types';

const startChar = ['.', '#'];
const startMessage = String
  .raw`Selector should be start with '.' or '#' symbol`;

/**
 * If value not a sting type throw type error
 * @param {string} value
 * @returns true | throw new TypeError
 */
export const isString = (value: string) => {
  if (typeof value === 'string') {
    return true;
  }
  throw new TypeError(`Value '${value}' should be a string type`);
};

/**
 * Trhow error if a value is ont CSSSelector
 * @param {CSSSelector} value
 * @returns true | throw new Error
 */
export const validateSelector = (value: CSSSelector) => {
  isString(value);
  const valid = startChar.some((x) => !value.indexOf(x));
  if (valid) {
    return valid;
  }
  throw new Error(startMessage);
};
