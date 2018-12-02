import * as express from 'express'
const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello typescript express!');
});

app.listen(3000, () => {
  console.log('express server start! http://localhost:3000');
});