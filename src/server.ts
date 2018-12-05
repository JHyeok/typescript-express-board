import App from './app';
import * as express from 'express';

const PORT = 3000;
const app: express.Application = new App().app;

app.listen(PORT, () => {
  console.log(`express server start! http://localhost:${PORT}`);
});
