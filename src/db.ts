import * as Bookshelf from 'bookshelf';
import * as Knex from 'knex';
import * as MockKnex from 'mock-knex';

const connection = require('../knexfile');
const env = process.env.NODE_ENV || 'development';

export const knex = Knex(connection[env]);

if (env === 'test') {
  MockKnex.mock(knex);
}

export default Bookshelf(knex);


