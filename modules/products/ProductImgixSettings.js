/**
 * @overview A module that applies specific settings to product page images
 * @module products/ProductImgixSettings.js
 *
 * @todo Can we leverage global default settings?
 * @todo Break each imgix.fluid call to its own function?
*/


export const ProductImgixSettings = {

  init() {
    imgix.onready(function() {
      imgix.fluid({
        fluidClass: `imgix-fluid--product-page`,
        updateOnResize: true,
        updateOnResizeDown: true,
        updateOnPinchZoom: true,
        pixelStep: 10,
        onChangeParamOverride: (w)=> {
          const fluidParams = {
            w,
          };

          return fluidParams;
        },
      });

      imgix.fluid({
        fluidClass: `imgix-fluid--lifestyle`,
        updateOnResize: true,
        updateOnResizeDown: true,
        updateOnPinchZoom: true,
        pixelStep: 10,
        autoInsertCSSBestPractices: true,
        onChangeParamOverride: (w, h)=> {
          let fluidParams = {};

          if (window.matchMedia(`(min-width: 600px)`).matches){
            fluidParams = {
              w,
              h,
              auto: `format`,
            };
          } else {
            fluidParams = {
              w,
              h,
              fit: `crop`,
              auto: `format`,
            };
          }
          return fluidParams;
        },
      });
    });
  },
};

