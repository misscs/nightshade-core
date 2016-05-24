/**
 * @overview Fetch an SVG spritesheet and append it to the DOM. This allows us
 * to use `<use>` elements and target sprites with CSS in all modern browsers.
 * @module SpriteFetcher.js
 * @TODO: Use the new `fetch` API once Polyfill.io polyfills for ie9 and
 * Safari correctly.
 */

export const SpriteFetcher = {
  container: null,

  /**
   * Add the container and SVG spritesheet to the page
   * @param {string} spriteUrl - URL to a spritesheet
   * @returns {void}
  */
  init(spriteUrl) {
    this.initContainer();
    this.inline(spriteUrl);
  },

  /**
   * Create a container element to hold the spritesheet
   * @returns {void}
  */
  initContainer() {
    this.container = document.createElement(`div`);
    this.container.classList.add(`sprite-container`, `is-hidden`);
    this.container.id = `sprite-container`;

    // Insert container as the first child of the body element
    document.body.insertBefore(this.container, window.document.body.firstChild);
  },

  /**
   * Fetch a spritesheet and insert into the container element
   * @param {string} spriteUrl - URL to a spritesheet
   * @returns {void}
  */
  inline(spriteUrl) {
    let ajax;

    // For IE9, use XDomainRequest. Set event handlers and use setTimeout to
    // avoid intermittent failure (http://stackoverflow.com/a/18392382/530653).
    if (window.XDomainRequest) {
      ajax = new XDomainRequest();
      ajax.onprogress = () => { return; };
      ajax.ontimeout = () => { return; };
      ajax.onerror = () => { return; };
    }
    // For standards browsers use XMLHttpRequest
    else {
      ajax = new XMLHttpRequest();
    }

    ajax.onload = () => {
      this.container.innerHTML += ajax.responseText;
    };

    ajax.open(`GET`, spriteUrl);

    setTimeout(function() {
      ajax.send();
    }, 0);
  },
};
