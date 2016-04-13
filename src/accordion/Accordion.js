/**
 * @overview An Accordion module comprised of sections that toggle open and close
 * @module Accordion.js
*/

export const Accordion = {

  accordionID: ``,
  accordionSection : `.js-accordion-section`,
  accordionSectionTrigger: `.js-accordion-section-toggle`,
  openClass: `is-open`,

  /**
   * Inits accordion elements
   * @returns {void}
  */
  init(accordionID) {
    this.accordion = document.querySelector(accordionID);
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
   * @returns {void}
  */
  openAccordionSection(section) {
    section.setAttribute(`aria-expanded`, true)
    section.classList.add(this.openClass);
  },

  /**
   * Closes the given Accordion section
   * @returns {void}
  */
  closeAccordionSection(section) {
    section.setAttribute(`aria-expanded`, false)
    section.classList.remove(this.openClass);
  },
};
