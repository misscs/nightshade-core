/**
 * @overview A module that initializes and handles Tooltips on a page
 * @module Tooltips.js
*/
import { Toggler } from '../toggler/Toggler.js';

const Popovers = Object.assign({}, Toggler, {
  popover({togglerSelector, popoverSelector }) {
    this.toggler({togglerSelector, toggleableSelector: popoverSelector});
  },
});

export { Popovers };
