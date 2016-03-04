/**
 * @fileoverview Gallery powered by Imgix.js
 * @see module: components/Showrooms.js
 *
 * @todo Import Imgix into this module
 */


export const ImgixGallery = {
  init(gallerySelector) {
    imgix.onready(() => {
      imgix.fluid({
        fluidClass: `imgix-fluid--gallery`,
        updateOnResize: true,
        updateOnResizeDown: true,
        updateOnPinchZoom: true,
        pixelStep: 10,
        onLoad: (el) => {
          if(el.getAttribute(`data-index`) === `1`){
            document.querySelector(gallerySelector).classList.add(`is-loaded`);
          }
        },
      });
    });
  },
};
