/**
 * @overview A module that initializes and handles Popovers on a page
 * @module Popovers.js
*/

export const Popovers = {

  collapsedClass: `is-invisible`,

  /**
   * Queries page for Popovers to be initialized, caching them to variables
   * before calling setup
   * @param {string} togglerSelector Selector for toggler elements that trigger Popovers
   * @param {string} popoverSelector Selector for the Popovers to be handled
   * @returns {void}
  */
  popover({togglerSelector, popoverSelector}) {
    this.togglerEls = document.querySelectorAll(togglerSelector);
    this.popoverEls = document.querySelectorAll(popoverSelector);
    this.popoverSelector = popoverSelector;
    this._setupPopovers();
  },

  /**
   * Sets up all Popovers on the page, adding event listeners to their togglers
   * @returns {void}
   * @private
  */
  _setupPopovers() {
    [...this.togglerEls].forEach((el) => {
      el.setAttribute(`touch-action`, `none`);
      el.addEventListener(`pointerup`, (e) => {
        e.stopPropagation();
        const popoverEl = el.parentNode.querySelector(this.popoverSelector);
        this._setupExpandingAndCollapsing(popoverEl);
      });
    });
    this._handleClickOffPopovers();
  },

  /**
   * Determines whether to expand (show) or collapse (hide) a given Popover
   * @param {object} popoverEl Popover DOM element to be expanded or collapsed
   * @returns {void}
   * @private
  */
  _setupExpandingAndCollapsing(popoverEl) {
    if (popoverEl.classList.contains(this.collapsedClass)) {
      this.collapseOpenPopovers();
      this.expandPopover(popoverEl);
    } else {
      this.collapsePopover(popoverEl);
    }
  },

  /**
   * Handles expanding of a given Popover, collapsing any open Popovers first
   * @param {object} el Popover DOM element to be expanded
   * @returns {void}
  */
  expandPopover(el) {
    el.setAttribute(`aria-expanded`, true);
    el.classList.remove(this.collapsedClass);
  },

  /**
   * Handles collapsing of a given Popover
   * @param {object} el Popover DOM element to be collapsed
   * @returns {void}
  */
  collapsePopover(el) {
    el.setAttribute(`aria-expanded`, false);
    el.classList.add(this.collapsedClass);
  },

  /**
   * Collapses any expanded Popovers on the page
   * @returns {void}
  */
  collapseOpenPopovers() {
    [...this.popoverEls].forEach((el) => {
      if (!el.classList.contains(this.collapsedClass)) {
        this.collapsePopover(el);
      }
    });
  },

  /**
   * Collapses expanded Popovers on the page when a user clicks outside of them
   * @returns {void}
   * @private
  */
  _handleClickOffPopovers() {
    document.addEventListener(`pointerup`, (e) => {
      if (!e.target.classList.contains(`popover`)) {
        this.collapseOpenPopovers();
      }
    });
  },
};
