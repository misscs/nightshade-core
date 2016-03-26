/**
 * @overview An animation module that smoothly scrolls to a given page position
 * @module ScrollTo.js
*/

export const ScrollTo = {

  /**
   * Initiates a smooth scrolling animation to a specified page element
   * @param {object} DOM element to scroll to
   * @param {number} Element position offset (optional)
   * @param {number} Speed of animation in ms (optional, default: 1000)
   * @returns {void}
  */
  scroll({scrollTarget, offset, speed}) {
    this.offset = offset || 0;
    this.targetPosition = scrollTarget.offsetTop - this.offset;
    this.scrollPosition = window.scrollY;
    this.speed = speed || 1000;
    this.time = Math.max(0.1, Math.min(Math.abs(this.scrollPosition - this.targetPosition) / this.speed, 0.8));
    this.currentTime = 0;

    // Start scrolling animation
    this._tick();
  },

  /**
   * Returns a position based easing value using the easeInOutQuint curve
   * @param {number} Position
   * @returns {void}
   * @private
  */
  _ease(position) {
    if ((position /= 0.5) < 1) {
      return 0.5 * Math.pow(position, 5);
    }
    return 0.5 * (Math.pow((position - 2), 5) + 2);
  },

  /**
   * Animates each scrolling tick until the target is reached
   * @returns {void}
   * @private
  */
  _tick() {
    this.currentTime += 1 / 60;
    const position = this.currentTime / this.time;
    const ease = this._ease(position);

    if (position < 1) {
      window.requestAnimationFrame(this._tick.bind(this));
      window.scrollTo(0, this.scrollPosition + ((this.targetPosition - this.scrollPosition) * ease));
    } else {
      window.scrollTo(0, this.targetPosition);
    }
  }
};
