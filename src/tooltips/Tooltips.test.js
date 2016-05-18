import assert from 'assert';

import { Tooltips } from './Tooltips';
import { Utils } from '../../tests/Utils';

const selectors = {
  toggler: `.js-tooltip-toggle`,
  toggleable: `.js-tooltip`,
  collapsed: `.is-invisible`,
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
    const togglerSelector = selectors.toggler;
    const tooltipSelector = selectors.toggleable;
    const tooltips = document.querySelectorAll(tooltipSelector);

    Tooltips.tooltip({ togglerSelector, tooltipSelector });

    [...tooltips].forEach((tooltip) => {
      assert(Utils.isHidden(tooltip));
    });
  });
});
