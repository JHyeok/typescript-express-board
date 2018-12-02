import * as express from 'express';
import echoRouter from './routes/echo';

const app = express();

// const Router: express.Router = express.Router();
app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello typescript express!');
});

app.use('/', echoRouter);

interface Err extends Error {
  status: number;
  data?: any;
}

// 404 error 잡아서 error handler 로 전달
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  const err = new Error('Not Found') as Err;
  err.status = 404;
  next(err);
});

// error handler
app.use((err: Err, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    data: err.data,
  });
});

export default app;
