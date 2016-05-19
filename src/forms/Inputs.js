/**
 * @overview A module that sets up form input behaviors and visual states
 * @module Inputs.js
*/

export const Inputs = {

  /**
   * Query DOM for form fields and setup their behaviors
   * @returns {void}
  */
  init() {
    this.formFields = document.querySelectorAll(`.form-field`);
    this.setupFloatLabels();
  },

  /**
   * Add event listeners to all form fields to float input labels above the
   * content when text is entered
   * @returns {void}
  */
  setupFloatLabels() {
    [...this.formFields].forEach((el) => {
      const input = el.querySelector(`.form-input`);
      const checkForInput = () => {
        if (input.value) {
          el.classList.add(`has-text`);
        } else {
          el.classList.remove(`has-text`);
        }
      };

      input.addEventListener(`keyup`, checkForInput);
      checkForInput();
    });
  },
};
