/**
 * @overview A module that initializes the Starry Background parallax effect
 * @module StarryBackground.js
*/

export const StarryBackground = {

  /**
   * Finds page modules with the Starry Background selector and triggers setup
   * @returns {void}
  */
  init() {
    this.StarryBackgroundEls = document.querySelectorAll(`.background--starry`);
    this.bigStarSpeed = 1 / 4;
    this.smallStarSpeed = 1 / 6;
    this.setupParallax();
  },

  /**
   * Adds the starry background to each container element on the page, and
   * initializes the parallax effect
   * @returns {void}
  */
  setupParallax() {
    [...this.StarryBackgroundEls].forEach((el) => {
      const elementPosition = el.offsetTop;
      const starsFragment = document.createDocumentFragment();
      const bigStarsEl = document.createElement(`div`);
      const smallStarsEl = document.createElement(`div`);

      bigStarsEl.className = `background-stars background-stars--big`;
      smallStarsEl.className = `background-stars background-stars--small`;
      starsFragment.appendChild(bigStarsEl);
      starsFragment.appendChild(smallStarsEl);

      // Hide the static placeholder background stars
      el.classList.add(`is-stars-loaded`);

      // Make sure existing children in the module sit above the stars
      [...el.children].forEach((childEl) => {
        childEl.classList.add(`background-content`);
      });

      // Append the starry background elements to the module
      el.appendChild(starsFragment);

      // Add scroll listener to trigger parallax effect
      window.addEventListener(`scroll`, (e) => {
        // If element is viewable, change position
        if(el.getBoundingClientRect().top <= window.innerHeight && el.getBoundingClientRect().bottom >= 0) {
          this.updateStarPosition(elementPosition, bigStarsEl, smallStarsEl);
        }
      });
    });
  },

  /**
   * Updates the position of the stars when a user scrolls the page
   * @param {number} Top offset position of container element
   * @param {object} DOM element for the larger stars
   * @param {object} DOM element for the smaller stars
   * @returns {void}
  */
  updateStarPosition(elementPosition, bigStarsEl, smallStarsEl) {
    const pageScrollOffset = window.pageYOffset;
    const elementOffset = elementPosition - pageScrollOffset;

    bigStarsEl.setAttribute(`style`, `transform: translateY(` + (- (elementOffset * this.bigStarSpeed).toFixed(0)) + `px)`);
    smallStarsEl.setAttribute(`style`, `transform: translateY(` + (- (elementOffset * this.smallStarSpeed).toFixed(0)) + `px)`);
  },
};
