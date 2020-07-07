import { detectSelector, getElement } from '@/index';

describe('should be detect type of selector', () => {
  test('type selector should be is id', () => {
    expect(detectSelector('#test')).toEqual('id');
  });

  test('type selector should be is class', () => {
    expect(detectSelector('.test')).toEqual('class');
  });
});

describe('should be return e DOM element', () => {
  test('should return HTMLElement', () => {
    const id = 'test';
    const div = document.createElement('div');
    div.id = id;
    document.body.appendChild(div);
    const element = getElement('id', `#${id}`);

    expect(element).toBeInstanceOf(HTMLElement);

    expect(element).toEqual(div);

    expect(element).toMatchSnapshot();
  });

  test('should be return Element', () => {
    const swiperClass = 'test';
    const div = document.createElement('div');
    div.className = swiperClass;
    document.body.appendChild(div);
    const element = getElement('class', `.${swiperClass}`);

    expect(element).toBeInstanceOf(HTMLDivElement);

    expect(element).toEqual(div);

    expect(element).toMatchSnapshot();
  });

  test('should be a null', () => {
    const element = getElement('class', '');

    expect(element).toBeNull();
  });
});
