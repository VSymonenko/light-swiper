import { CSSSelector, CSSSelectorType } from '@/types';

/**
 * return specifyed selector type
 * @param {CSSSelector} selector
 * @returns {CSSSelectorType} 'id' | 'class'
 */
export const detectSelector = (
  selector: CSSSelector,
): CSSSelectorType => (!selector.indexOf('#') ? 'id' : 'class');

/**
 * return DOM node by selector
 * @param {CSSSelectorType} type
 * @param {CSSSelector} selector
 * @returns {(HTMLElement | Element | null)} HTMLElement | Element | null
 */
export const getElement = (
  type: CSSSelectorType, selector: CSSSelector,
): HTMLElement | Element | null => (
  type === 'id' ? document.getElementById(selector)
    : document.getElementsByClassName(selector).item(0)
);
