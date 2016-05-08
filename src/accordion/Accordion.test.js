import test from 'ava';
import jsdom from 'jsdom';
import nunjucks from 'nunjucks';
import { Accordion } from './Accordion';

import {env} from '../../nunjucks-helper.js';


test.beforeEach(t => {
  global.document = jsdom.jsdom(env.render('accordion/Accordion.test.html'));
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
