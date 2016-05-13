import assert from 'assert';

import { Accordion } from './Accordion';

const isHidden = (el) => {
  const style = window.getComputedStyle(el);

  return (style.display === `none`);
};

describe(`Accordion`, () => {
  before(() => {
    const template = nunjucks.render(`accordion/Accordion.test.html`);

    document.body.insertAdjacentHTML(`afterbegin`, template);
  });

  after(() => {
    const accordion = document.querySelector(`#accordion`);

    accordion.parentNode.removeChild(accordion);
  });

  it(`should initialize`, () => {
    Accordion.init(`#accordion`);

    assert(Accordion.accordion);
    assert.equal(Accordion.transitionDuration, 300);
  });

  it(`should initialize with custom transitionDuration`, () => {
    Accordion.init(`#accordion`, 100);

    assert.equal(Accordion.transitionDuration, 100);
  });

  it(`should initialize with hidden sectionContent`, () => {
    Accordion.init(`#accordion`);

    const sectionContents = document.querySelectorAll(`.js-accordion-section-content`);

    [...sectionContents].forEach((sectionContent) => {
      assert(isHidden(sectionContent));
    });
  });

  it(`can open accordion section`, (done) => {
    Accordion.init(`#accordion`, 0);

    const section = document.querySelector(`.js-accordion-section`);
    const sectionContent = document.querySelector(`.js-accordion-section-content`);

    // open the accordion
    Accordion.toggleAccordionSection(section, sectionContent);

    setTimeout(() => {
      assert(!isHidden(sectionContent));
      done();
    }, 50);
  });

  it(`can close accordion section`, (done) => {
    const section = document.querySelector(`.js-accordion-section`);
    const sectionContent = document.querySelector(`.js-accordion-section-content`);

    // close the accordion
    Accordion.toggleAccordionSection(section, sectionContent);

    setTimeout(() => {
      assert(isHidden(sectionContent));
      done();
    }, 50);
  });
});
