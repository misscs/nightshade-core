import assert from 'assert';

import { ScrollTo } from './ScrollTo';

describe(`ScrollTo`, () => {
  beforeEach(() => {
    const template = nunjucks.render(`animation/ScrollTo.test.html`);

    document.body.insertAdjacentHTML(`afterbegin`, template);
  });

  afterEach(() => {
    const fixture = document.querySelector(`#scroll-to`);

    fixture.parentNode.removeChild(fixture);
  });

  // @todo Add tests for setting scrollTarget, offset and speed

  it(`should scroll to element`, (done) => {
    const scrollTarget = document.querySelector(`#target`);
    const initialScrollTargetOffset = scrollTarget.offsetTop;

    ScrollTo.scroll({ scrollTarget });

    setTimeout(() => {
      assert(window.pageYOffset + ScrollTo.offset >= initialScrollTargetOffset);

      done();
    }, 1000);
  });
});
