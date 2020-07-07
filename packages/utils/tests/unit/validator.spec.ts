import { isString, validateSelector } from '../../src';

describe('should be check string type', () => {
  test('should be pass string', () => {
    const str = 'test string';
    expect(isString(str)).toBeTruthy();
    expect(isString(str)).toMatchSnapshot();
  });

  test('should be thtrow error when pass wrong type argument', () => {
    const types = [
      null,
      undefined,
      0,
      BigInt(Number.MAX_SAFE_INTEGER),
      true,
      Symbol('test'),
      {},
      ['array'],
    ];
    types.forEach((type) => {
      expect(() => {
        // @ts-ignore
        expect(isString(type));
      }).toThrowError();

      expect(() => {
        // @ts-ignore
        expect(isString(type));
      }).toThrowErrorMatchingSnapshot();
    });
  });
});

describe('should be validate selector', () => {
  test('should be valid id type selector', () => {
    const id = '#swiper';
    expect(validateSelector(id)).toBeTruthy();
    expect(validateSelector(id)).toMatchSnapshot();
  });

  test('shouled be valid class type selector', () => {
    const className = '.swiper';
    expect(validateSelector(className)).toBeTruthy();
  });
  test('should be throw error', () => {
    const wrongSelector = 'wrong-selector';
    expect(() => validateSelector(wrongSelector)).toThrowError();
    expect(() => {
      validateSelector(wrongSelector);
    }).toThrowErrorMatchingSnapshot();
  });
});
