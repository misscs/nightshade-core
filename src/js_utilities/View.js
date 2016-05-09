/**
 * @overview Base module for Casper.com views.
 * @module View.js
*/

import { createFragment } from 'CasperUtilities.js';

/**
 * Base constructor function for Casper Views.
 * Provides methods to initialize and destroy Views. Instantiate a view with
 * the `new` keyword.
 * @param {string} el - selector or DOM node to insert the view into
 * @param {object} model - optional data object to associate with the view
 * @returns {void}
 */
export const View = function(el, model) {
  let isDestroyed = false;
  let fragment;

  // Transform `this.el` selector string into a live node reference
  const initEl = () => {
    if (!(this.el instanceof HTMLElement)) {
      this.el = document.querySelector(this.el);
    }
  };

  // Create document fragment from evalutated `this.template` function and
  // replace `this.template` with a reference to it
  const initTemplate = () => {
    const templateString = this.template();
    fragment = createFragment(templateString);

    // Create a shallow copy that references fragment nodes
    // http://stackoverflow.com/a/13347298/530653
    this.template = [].slice.call(fragment.childNodes, 0)[0];
  };

  // Transform `this.ui` selectors into live node references
  const initUI = () => {
    Object.keys(this.ui).forEach((key) => {
      this.ui[key] = fragment.querySelector(this.ui[key]);
    });
  };

  // Use `this.events` configuration to bind events to `this.ui` nodes
  const bindEvents = () => {
    this.events.forEach((event) => {
      this.ui[event.ui].addEventListener(event.event, this[event.callback]);
    });
  };

  // Use `this.events` configuration to unbind events created with `bindEvents`
  const unbindEvents = () => {
    this.events.forEach((event) => {
      this.ui[event.ui].removeEventListener(event.event, this[event.callback]);
    });
  };

  // Append the document fragment to `this.el` node
  const insertIntoDOM = () => {
    this.el.appendChild(fragment);
  };

  // Selector or DOM node the view will be injected into
  this.el = el;

  // Data associated with the view
  this.model = model;

  // Function that returns a template string for the view
  this.template = () => ``;

  // Object of template selectors to be manipulated by the view
  // Example: { close: `.module-closebutton` }
  this.ui = {};

  // Array of objects to set up and destroy event bindings
  // ui: String that matches a property key in `this.ui`
  // event: event name
  // callback: String that matches a method on the view
  // Example: {
  //   ui: `close`, // references this.ui.close
  //   event: `close`, // event
  //   callback: `hide`, // references this.hide()
  // }
  this.events = [];

  // Initialize the View
  // Call this on the last line of child views.
  this.init = () => {
    initEl();
    initTemplate();
    initUI();
    bindEvents();
    insertIntoDOM();
  };

  // Clean up the view to prevent memory leaks
  // When we're done with the module we need to remove its nodes from the DOM,
  // unbind events, and delete references to DOM nodes so the browser's garbage
  // collector can free memory for us.
  // @@@ TODO: Should this revert template and ui to their string values?
  this.destroy = () => {
    // Remove circular references (bindings)
    unbindEvents();

    // Remove view from the DOM
    this.el.removeChild(this.template);

    // Remove references to DOM nodes so they can be garbage collected
    delete this.template;
    delete this.ui;
    delete this.el;
    isDestroyed = true;
  };

  this.isDestroyed = function() {
    return isDestroyed;
  };
};
