import { expect } from 'chai';
import * as request from 'supertest';
import app from '../src/app';

describe('echo.test', () => {
  const req = request(app);

  it('GET /echo?msg', async () => {
    const msg = 'messgae';
    const res = await req.get(`/echo?msg=${msg}`).expect(200);
    expect(res.body.msg).to.equal(msg);
  })
})