/**
 * @file Intiliaze Nunucks environement for use in Node.
 */

import nunjucks from 'nunjucks';

/* Path must be absolute */
const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(`${__dirname}/src/`));

/* @exportable */
export { env };
