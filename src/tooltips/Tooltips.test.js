import assert from 'assert';

import { Tooltips } from './Tooltips';

const isHidden = (el) => {
  const style = window.getComputedStyle(el);

  return (style.display === `none` || style.visibility === `hidden`);
};

describe(`Tooltip`, () => {
  beforeEach(() => {
    const template = nunjucks.render(`tooltips/Tooltips.test.html`);

    document.body.insertAdjacentHTML(`afterbegin`, template);
  });

  afterEach(() => {
    const tooltips = document.querySelector(`#tooltips`);

    tooltips.parentNode.removeChild(tooltips);
  });

  it(`should initialize with hidden tooltips`, () => {
    const togglerSelector = `.js-tooltip-toggle`;
    const tooltipSelector = `.js-tooltip`;
    const tooltips = document.querySelectorAll(tooltipSelector);

    Tooltips.tooltip({ togglerSelector, tooltipSelector });

    [...tooltips].forEach((tooltip) => {
      assert(isHidden(tooltip));
    });
  });

  it(`should be visible after expanding`, () => {
    const tooltip = document.querySelector(`.js-tooltip`);

    Tooltips.expandTooltip(tooltip);

    assert(!isHidden(tooltip));
  });

  it(`should be hidden after closing`, () => {
    const tooltip = document.querySelector(`.js-tooltip`);

    Tooltips.expandTooltip(tooltip);
    Tooltips.collapseTooltip(tooltip);

    assert(isHidden(tooltip));
  });

  it(`should collapse all tooltips`, () => {
    const togglerSelector = `.js-tooltip-toggle`;
    const tooltipSelector = `.js-tooltip`;
    const tooltips = document.querySelectorAll(tooltipSelector);

    Tooltips.tooltip({ togglerSelector, tooltipSelector });

    // expand all the tooltips
    [...tooltips].forEach((tooltip) => {
      Tooltips.expandTooltip(tooltip);
    });

    // collapse all the tooltips
    Tooltips.collapseOpenTooltips();

    // check that they're closed
    [...tooltips].forEach((tooltip) => {
      assert(isHidden(tooltip));
    });
  });
});
