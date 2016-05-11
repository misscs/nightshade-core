/**
 * @overview A module that initializes the Gallery with Flickity
 * @module Gallery.js
*/

import Flickity from 'flickity';
import { ImgixSettings } from '../media/ImgixSettings.js';

export const Gallery = {

  /**
   * Sets up any galleries on the page
   * @returns {void}
  */
  init() {
    this.galleryEls = document.querySelectorAll(`.js-gallery`);
    this.setupGalleries();
    this.setupImageGalleries();
  },

  /**
   * Instantiates Flickity on each gallery, with their respective options
   * @returns {void}
  */
  setupGalleries() {
    [...this.galleryEls].forEach((el) => {
      const options = JSON.parse(el.getAttribute(`data-options`));
      new Flickity(el, options);
    });
  },

  /**
   * Sets custom imgix settings for gallery images, instantiating Flickity and
   * fading in the gallery once the first image has loaded
   * @returns {void}
  */
  setupImageGalleries() {
    ImgixSettings.init({
      fluidClass: `imgix-fluid--gallery`,
      onLoad: (el) => {
        const currentGallery = el.closest(`.js-gallery--images`);

        if (el === currentGallery.firstElementChild) {
          this.setupGalleries([currentGallery]);
          currentGallery.classList.add(`is-loaded`);
        }
      },
    });
  },
};
