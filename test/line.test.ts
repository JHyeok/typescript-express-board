import { expect } from 'chai';
import * as request from 'supertest';
import App from '../src/app';
import * as MockKnex from 'mock-knex';

describe('line.test', () => {
  const tracker = MockKnex.getTracker();
  const req = request(new App().app);

  beforeEach(() => {
    tracker.install();
  });

  afterEach(() => {
    tracker.uninstall();
  });

  it('GET /line?msg', async () => {
    tracker.on('query', (query) => {
      expect(query.method).to.equal('insert');
      query.response([]);
    });

    const msg = 'lineMessgae';
    const res = await req.get(`/line?msg=${msg}`).expect(200);
    expect(res.body.line).to.equal(msg);
  });
});
