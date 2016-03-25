/**
 * @overview A module that initializes the Gallery with Flickity
 * @module Gallery.js
*/

import Flickity from 'flickity';

export const Gallery = {

  /**
   * Sets up any galleries on the page
   * @returns {void}
  */
  init() {
    this.galleryEls = document.querySelectorAll(`.js-gallery`);
    this.setupGalleries();
  },

  /**
   * Instantiates Flickity on each gallery, with their respective options
   * @returns {void}
  */
  setupGalleries() {
    [...this.galleryEls].forEach((el) => {
      const options = JSON.parse(el.dataset.options);
      new Flickity(el, options);
    });
  },
};
