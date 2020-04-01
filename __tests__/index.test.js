// import jumbotron from '../src/app/jumbotron';
// import path from 'path';
import app from '../src/app';

const expected = 'app/index.js is runned';

test('', () => {
  expect(app()).toBe(expected);
});
