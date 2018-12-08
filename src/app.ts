import * as bodyParser from 'body-parser';
import * as express from 'express';
import lineRouter from './routes/line';

interface Err extends Error {
  status: number;
  data?: any;
}

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.router();
    this.errorHandler();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false}));
  }

  private errorHandler(): void {
    this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      const err = new Error('Not Found') as Err;
      err.status = 404;
      next(err);
    });

    // error handler
    this.app.use((err: Err, req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.status(err.status || 500);
      res.json({
        message: err.message,
        data: err.data,
      });
    });
  }

  private router(): void {
    this.app.use('/', lineRouter);
    this.app.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.send('Hello, TypeScript-express');
    });
  }
}

export default App;
