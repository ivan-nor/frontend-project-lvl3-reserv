/**
 * @jest-environment jsdom
 */

import app from '../src/app/application';

const expected = 'app/application.js is runned';

test('', () => {
  expect(app()).toBe(expected);
});
