/**
 * @overview A module that binds a Beacon button, so that it scrolls to a
 * given page section when clicked
 * @module Beacon.js
*/

import pepjs from 'pepjs';
import { ScrollTo } from '../animation/ScrollTo.js';

export const Beacon = {

  /**
   * Binds ScrollTo scrolling animation to Beacon target element
   * @param {number} [scrollOffset=0] - Scroll target offset
   * @returns {void}
  */
  init(scrollOffset = 0) {
    ScrollTo.bindScrollLinks(`.js-beacon`, scrollOffset);
  },
};
