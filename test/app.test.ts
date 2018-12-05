import { expect } from 'chai';
import * as request from 'supertest';
import App from '../src/app';

describe('app.test', () => {
  const req = request(new App().app);

  // write test case
  it('GET /', async () => {
    const res = await req.get('/').expect(200);
    expect(res.text).to.equal('Hello, TypeScript-express');
  });
  /* TODO : error handler 적용시 테스트 케이스 주석 풀기
  it('GET /not_found', async () => {
    const res = await req.get('/not_found').expect(404);
    expect(res.body.message).to.equal('Not Found');
  });
  */
});
