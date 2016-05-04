import test from 'ava';
import jsdom from 'jsdom';

import { Accordion } from './Accordion';

test.beforeEach(t => {
  global.document = jsdom.jsdom(`
    <div id="accordion">
      <ul class="accordion-list">
        <li class="accordion-list-item">
          <div class="accordion-section js-accordion-section">
            <div class="accordion-section-toggle js-accordion-section-toggle">
              <h4 class="accordion-section-toggle-content">Header</h4>
            </div>
            <ul class="accordion-section-list js-accordion-section-content">
              <li class="accordion-section-list-item">
                Content
              </li>
            </ul>
          </div>
        </li>
        <li class="accordion-list-item">
          <div class="accordion-section js-accordion-section">
            <div class="accordion-section-toggle js-accordion-section-toggle">
              <h4 class="accordion-section-toggle-content">Header</h4>
            </div>
            <ul class="accordion-section-list js-accordion-section-content">
              <li class="accordion-section-list-item">
                Content
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>`);
});

// @todo: Write real tests
test('Can initialize Accordion', t => {
  Accordion.init('#accordion');
  t.truthy(Accordion.accordion);
  t.is(Accordion.transitionDuration, 300);
});

test('Can initialize Accordion transitionDuration', t => {
  Accordion.init('#accordion', 100);
  t.is(Accordion.transitionDuration, 100);
});
