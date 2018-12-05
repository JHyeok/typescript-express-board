import * as bodyParser from 'body-parser';
import * as express from 'express';
import lineRouter from './routes/line';

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

  private router(): void {
    this.app.use('/', lineRouter);
    this.app.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.send('Hello, TypeScript-express');
      console.log('done!');
    });
  }
}

export default App;

// TODO : error handler 적용
/*
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
*/
