import * as bodyParser from 'body-parser';
import * as express from 'express';
import echoRouter from './routes/echo';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.router();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false}));
  }
  // TODO : 리스폰 값 오류 체크
  private router(): void {
    this.app.get('/', (req: express.Request, res: express.Response) => {
      res.send('Hi, Class');
      console.log(res.send.toString);
    });
    this.app.use('/', echoRouter);
  }
}

export default new App().app;

// TODO : error handler 적용
/*
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

export default app;*/
