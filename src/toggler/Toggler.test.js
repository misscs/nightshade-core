import assert from 'assert';

import { Tooltips } from '../tooltips/Tooltips';
import { Popovers } from '../popovers/Popovers';

const togglerPluginNames = [ `Tooltips`, `Popovers` ];

const isHidden = (el) => {
  const style = window.getComputedStyle(el);

  return (style.display === `none` || style.visibility === `hidden`);
};

[...togglerPluginNames].forEach((togglerPluginName) => {
  const Plugin = eval(togglerPluginName);
  const plugin = {
    dir: togglerPlugin.toLowerCase(),
    id: togglerPlugin.toLowerCase(),
    name: togglerPlugin,
    class: togglerPlugin.toLowerCase().replace(/s$/, ``),
  };

  describe(togglerPlugin, () => {
    beforeEach(() => {
      const template = nunjucks.render(`${plugin.dir}/${plugin.name}.test.html`);

      document.body.insertAdjacentHTML(`afterbegin`, template);
    });

    afterEach(() => {
      const togglers = document.querySelector(`#${plugin.id}`);

      togglers.parentNode.removeChild(togglers);
    });

    it(`should initialize with hidden ${plugin.name}`, () => {
      const togglerSelector = `.js-${plugin.class}-toggle`;
      const toggleableSelector = `.js-${plugin.class}`;
      const toggleables = document.querySelectorAll(toggleableSelector);

      Plugin.tooltip({ togglerSelector, toggleableSelector });

      [...toggleables].forEach((toggleable) => {
        assert(isHidden(toggleable));
      });
    });

    it(`should be visible after expanding`, () => {
      const tooltip = document.querySelector(`.js-tooltip`);

      Tooltips.expand(tooltip);

      assert(!isHidden(tooltip));
    });

    it(`should be hidden after closing`, () => {
      const tooltip = document.querySelector(`.js-tooltip`);

      Tooltips.expand(tooltip);
      Tooltips.collapse(tooltip);

      assert(isHidden(tooltip));
    });

    it(`should collapse all tooltips`, () => {
      const togglerSelector = `.js-tooltip-toggle`;
      const tooltipSelector = `.js-tooltip`;
      const tooltips = document.querySelectorAll(tooltipSelector);

      Tooltips.tooltip({ togglerSelector, tooltipSelector });

      // expand all the tooltips
      [...tooltips].forEach((tooltip) => {
        Tooltips.expand(tooltip);
      });

      // collapse all the tooltips
      Tooltips.collapseOpen();

      // check that they're closed
      [...tooltips].forEach((tooltip) => {
        assert(isHidden(tooltip));
      });
    });
  });
});
