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

    console.log(`browser height`, window.innerHeight);

    setTimeout(() => {
      assert.equal(window.pageYOffset + ScrollTo.offset, initialScrollTargetOffset);

      done();
    }, 1000);
  });

  it(`should scroll to element via links`, (done) => {
    ScrollTo.bindScrollLinks(`.scroll-link`);

    const links = document.querySelectorAll(`.scroll-link`);

    const checkLinkClick = (link) => {
      // reset scroll position to top
      window.scrollTo(0, 0);

      // trigger click event
      const event = new Event(`click`);
      link.dispatchEvent(event);

      // check we've scrolled
      const targetId = link.getAttribute(`href`).replace(`#`, ``);
      const scrollTarget = document.querySelector(`#` + targetId);
      const initialScrollTargetOffset = scrollTarget.offsetTop;

      setTimeout(() => {
        assert.equal(window.pageYOffset + ScrollTo.offset, initialScrollTargetOffset);

        done();
      }, 1000);
    };

    [...links].forEach(checkLinkClick);
  });
});
