import assert from 'assert';

import { Popovers } from './Popovers';
import { Utils } from '../../tests/Utils';

const selectors = {
  toggler: `.js-popover-toggle`,
  toggleable: `.js-popover`,
  collapsed: `.is-invisible`,
};

describe(`Popover`, () => {
  beforeEach(() => {
    const template = nunjucks.render(`popovers/Popovers.test.html`);

    document.body.insertAdjacentHTML(`afterbegin`, template);
  });

  afterEach(() => {
    const popovers = document.querySelector(`#popovers`);

    popovers.parentNode.removeChild(popovers);
  });

  it(`should initialize with hidden popovers`, () => {
    const togglerSelector = selectors.toggler;
    const popoverSelector = selectors.toggleable;
    const popovers = document.querySelectorAll(popoverSelector);

    Popovers.popover({ togglerSelector, popoverSelector });

    [...popovers].forEach((popover) => {
      assert(Utils.isHidden(popover));
    });
  });
});
