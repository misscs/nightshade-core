/**
 * @overview A module that toggles element visibility
 * @module Toggler.js
*/

import feature from 'feature.js';

export const Toggler = {
  /**
   * Queries page for Togglers to be initialized, caching them to variables
   * before calling setup
   * @param {string} togglerSelector Selector for toggler elements that trigger Togglers
   * @param {string} toggleableSelector Selector for the element to be toggled
   * @returns {void}
  */
  toggler({togglerSelector, toggleableSelector}) {
    this.collapsedClass = `is-invisible`;
    this.togglerEls = document.querySelectorAll(togglerSelector);
    this.toggleableEls = document.querySelectorAll(toggleableSelector);
    this.toggleableSelector = toggleableSelector;
    this._setupTogglers();
  },

  /**
   * Sets up all Toggles on the page, adding event listeners to their togglers
   * @returns {void}
   * @private
  */
  _setupTogglers() {
    [...this.togglerEls].forEach((el) => {
      const toggleableEl = el.parentNode.querySelector(this.toggleableSelector);
      el.setAttribute(`touch-action`, `none`);

      if (feature.touch) {
        el.addEventListener(`pointerup`, (e) => {
          e.stopPropagation();
          this._setupExpandingAndCollapsing(toggleableEl);
        });
        this._handleClickOff();
      } else {
        el.addEventListener(`pointerenter`, () => {
          this.expand(toggleableEl);
        });
        el.addEventListener(`pointerleave`, () => {
          this.collapse(toggleableEl);
        });
      }
    });
  },

  /**
   * Determines whether to expand (show) or collapse (hide) a given Toggler
   * @param {object} toggleableEl Toggler DOM element to be expanded or collapsed
   * @returns {void}
   * @private
  */
  _setupExpandingAndCollapsing(toggleableEl) {
    if (toggleableEl.classList.contains(this.collapsedClass)) {
      this.collapseOpen();
      this.expand(toggleableEl);
    } else {
      this.collapse(toggleableEl);
    }
  },

  /**
   * Handles expanding of a given Toggler
   * @param {object} el Toggleable DOM element to be expanded
   * @returns {void}
  */
  expand(el) {
    el.setAttribute(`aria-expanded`, true);
    el.classList.remove(this.collapsedClass);
  },

  /**
   * Handles collapsing of a given Toggler
   * @param {object} el Toggleable DOM element to be collapsed
   * @returns {void}
  */
  collapse(el) {
    el.setAttribute(`aria-expanded`, false);
    el.classList.add(this.collapsedClass);
  },

  /**
   * Collapses any expanded Togglers on the page
   * @returns {void}
  */
  collapseOpen() {
    [...this.toggleableEls].forEach((el) => {
      if (!el.classList.contains(this.collapsedClass)) {
        this.collapse(el);
      }
    });
  },

  /**
   * Collapses expanded Togglers on the page when a user clicks outside of them
   * @returns {void}
   * @private
  */
  _handleClickOff() {
    document.addEventListener(`pointerup`, () => {
      this.collapseOpen();
    });
  },
};
