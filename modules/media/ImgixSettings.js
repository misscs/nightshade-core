/**
 * @overview Default settings for all Imgix media
 * @module media/ImgixSettings.js
 *
 * @todo Refactor init.
*/


import imgix from 'imgix.js';

export const ImgixSettings = {

  init(opts = {}) {

    /**
     * Standard settings for Imgix shared across all images
    */
    this.defaultSettings = {
      fluidClass: `imgix-fluid`,
      updateOnResize: true,
      updateOnResizeDown: true,
      updateOnPinchZoom: true,
      pixelStep: 10,
      autoInsertCSSBestPractices: true,
    };

    /* Global array of imgix objects for access later. */
    window.imgixObjectArray = window.imgixObjectArray || [];

    const newSettings = this.defaultSettings;

    for (const key in opts) {
      if (opts.hasOwnProperty(key)) {
        newSettings[key] = opts[key];
      }
    }

    this.setImgix(newSettings);
  },

  /**
   * Sets Imigx.js settings on Imgix objects (images)
   * @param {object} Hash of Imgix settings
   * @returns {void}
  */
  setImgix(settings) {
    imgix.onready(function() {
      window.imgixObjectArray.push(imgix.fluid(settings));
    });
  },

};
