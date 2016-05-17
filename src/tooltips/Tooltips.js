/**
 * @overview A module that initializes and handles Tooltips on a page
 * @module Tooltips.js
*/
import { Toggler } from '../toggler/Toggler.js';

const Tooltips = Object.assign({}, Toggler, {
  tooltip({togglerSelector, tooltipSelector }) {
    this.toggler({togglerSelector, toggleableSelector: tooltipSelector, eventType: `hover`});
  },
});

export { Tooltips };
