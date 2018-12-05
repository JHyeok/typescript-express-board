import { expect } from 'chai';
import * as request from 'supertest';
import App from '../src/app';

describe('line.test', () => {
  const req = request(new App().app);

  it('GET /line?msg', async () => {
    const msg = 'messgae';
    const res = await req.get(`/line?msg=${msg}`).expect(200);
    expect(res.body.msg).to.equal(msg);
  });
});
