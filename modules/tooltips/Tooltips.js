/**
 * @overview A module that initializes and handles Tooltips on a page
 * @module Tooltips.js
*/

import feature from 'viljamis/feature.js';
import pepjs from 'pepjs';

export const Tooltips = {

  collapsedClass: `is-invisible`,

  /**
   * Queries page for Tooltips to be initialized, caching them to variables
   * before calling setup
   * @param {string} Selector for toggler elements that trigger Tooltips
   * @param {string} Selector for the Tooltips to be handled
   * @returns {void}
  */
  tooltip({togglerSelector, tooltipSelector}) {
    console.log(`Setting up Tooltips`);
    this.togglerEls = document.querySelectorAll(togglerSelector);
    this.tooltipEls = document.querySelectorAll(tooltipSelector);
    this.tooltipSelector = tooltipSelector;
    this._setupTooltips();
  },

  /**
   * Sets up all Tooltips on the page, adding listeners to their togglers
   * @returns {void}
   * @private
  */
  _setupTooltips() {
    [...this.togglerEls].forEach((el) => {
      const tooltipEl = el.parentNode.querySelector(this.tooltipSelector);
      el.setAttribute(`touch-action`, `none`);

      if (feature.touch) {
        el.addEventListener(`pointerup`, (e) => {
          e.stopPropagation();
          this._setupExpandingAndCollapsing(tooltipEl);
        });
        this._handleClickOffTooltips();
      } else {
        el.addEventListener(`pointerenter`, () => {
          this.expandTooltip(tooltipEl);
        });
        el.addEventListener(`pointerleave`, () => {
          this.collapseTooltip(tooltipEl);
        });
      }
    });
  },

  /**
   * Determines whether to expand (show) or collapse (hide) a given Tooltip
   * @param {object} Tooltip DOM element to be expanded or collapsed
   * @returns {void}
   * @private
  */
  _setupExpandingAndCollapsing(tooltipEl) {
    if (tooltipEl.classList.contains(this.collapsedClass)) {
      this.collapseOpenTooltips();
      this.expandTooltip(tooltipEl);
    } else {
      this.collapseTooltip(tooltipEl);
    }
  },

  /**
   * Handles expanding of a given Tooltip
   * @param {object} Tooltip DOM element to be expanded
   * @returns {void}
  */
  expandTooltip(el) {
    el.setAttribute(`aria-expanded`, true);
    el.classList.remove(this.collapsedClass);
  },

  /**
   * Handles collapsing of a given Tooltip
   * @param {object} Tooltip DOM element to be collapsed
   * @returns {void}
  */
  collapseTooltip(el) {
    el.setAttribute(`aria-expanded`, false);
    el.classList.add(this.collapsedClass);
  },

  /**
   * Collapses any expanded Tooltips on the page
   * @returns {void}
  */
  collapseOpenTooltips() {
    [...this.tooltipEls].forEach((el) => {
      if (!el.classList.contains(this.collapsedClass)) {
        this.collapseTooltip(el);
      }
    });
  },

  /**
   * Collapses expanded Tooltips on the page when a user clicks outside of them
   * @returns {void}
   * @private
  */
  _handleClickOffTooltips() {
    document.addEventListener(`pointerup`, () => {
      this.collapseOpenTooltips();
    });
  },
};
