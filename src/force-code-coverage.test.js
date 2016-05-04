// By default, code coverage is calculated only on files that actually have tests.
// This file is to trigger 0% code coverage for files that do not have any tests.
import test from 'ava';
import { resolve } from 'path';
import glob from 'glob';

const badPaths = [
  '.test.js'
];

const globToCover = resolve(__dirname, '**/*.js');

const filesToCover = glob.sync(globToCover).filter((filePath) => {
  return badPaths.every((file) => !filePath.includes(file));
});

filesToCover.forEach((file) => {
  try {
    require(file);
  } catch(error) {
    // ignore the error - we only need to require the file to trigger 0% code coverage
  }
});

test('covered files', t => {
  t.true(filesToCover.length > 0);
});
