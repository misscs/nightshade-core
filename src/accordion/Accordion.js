/**
 * @overview An Accordion module comprised of sections that toggle open and close
 * @module Accordion.js
*/

export const Accordion = {

  accordionSection : `.js-accordion-section`,
  accordionSectionTrigger: `.js-accordion-section-toggle`,
  openClass: `is-accordion-open`,

  /**
   * Inits accordion elements
   * @param {string} accordionEl Accordion DOM Element
   * @returns {void}
  */
  init(accordionEl) {
    this.accordion = document.querySelector(accordionEl);
    this.accordionSections = this.accordion.querySelectorAll(this.accordionSection);

    [...this.accordionSections].forEach((el) => {
      let trigger = el.querySelector(this.accordionSectionTrigger);

      trigger.setAttribute(`touch-action`, `none`);
      el.setAttribute(`aria-expanded`, false)

      trigger.addEventListener(`pointerup`, (e) => {
        e.stopPropagation();

        if (el.classList.contains(this.openClass)) {
          this.closeAccordionSection(el);
        } else {
          this.openAccordionSection(el);
        }
      });
    });
  },

  /**
   * Opens the given Accordion section
   * @param {object} section DOM element to toggle state class on
   * @returns {void}
  */
  openAccordionSection(section) {
    section.setAttribute(`aria-expanded`, true)
    section.classList.add(this.openClass);
  },

  /**
   * Closes the given Accordion
   * @param {object} section DOM element to toggle state class on
   * @returns {void}
  */
  closeAccordionSection(section) {
    section.setAttribute(`aria-expanded`, false)
    section.classList.remove(this.openClass);
  },
};
