/**
 * @overview A module that binds links in a ScrollTo Nav, so that they scroll to
 * their corresponding sections when clicked
 * @module ScrollToNav.js
*/

import pepjs from 'pepjs';
import { ScrollTo } from '../animation/ScrollTo.js';

export const ScrollToNav = {

  /**
   * Binds ScrollTo scrolling animation to nav link target elements
   * @param {number} [scrollOffset=0] - Scroll target offset
   * @returns {void}
  */
  init(scrollOffset = 0) {
    ScrollTo.bindScrollLinks(`.js-scrollto-nav-link`, scrollOffset);
  },
};
