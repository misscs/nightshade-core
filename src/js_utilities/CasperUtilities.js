/**
 * @fileoverview Collection of internal functions for writing JS components
 * @module CasperUtilities.js
 * @author Casper Coders
 *
 */

/**
 * Inherit within a JavaScript constructor function.
 * There are considerations in safely inheriting in a prototypal language.
 * `inherit` correctly sets up copies of the parent's properties and an
 * instanitated prototype to reference. See:
 * http://www.bennadel.com/blog/1566-using-super-constructors-is-critical-in-prototypal-inheritance-in-javascript.htm
 * @param {function} Parent - constructor function to inheret from.
 * @param {object} self - `this` object of the child function.
 * @returns {void}
 */
export const inherit = function(Parent, self) {
  Parent.call(self);
  self.prototype = new Parent();
};

/**
 * Create document fragment from a string template.
 * @param {string} templateString - string template to process. Only a single
 * top level element is allowed.
 * @returns {DocumentFragment} fragment containing instantiated DOM nodes
*/
export const createFragment = function(templateString) {
  const fragment = document.createDocumentFragment();
  const wrapper = document.createElement(`div`);

  // Remove wrapping whitespace from the string to avoid stray text nodes
  const trimmedTemplateString = templateString.trim();

  // Transform the string template into DOM nodes
  wrapper.innerHTML = trimmedTemplateString;

  // Only allow a single top level element, for simplicity
  const node = wrapper.children[0];

  // Wrap the elements in a document fragment for easy manipulation
  fragment.appendChild(node);

  return fragment;
};
