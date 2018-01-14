import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as validator from 'express-validator';
import * as helmet from 'helmet';
import * as mongoose from 'mongoose';
import * as logger from 'morgan';
import * as path from 'path';
import * as bluebird from 'bluebird';

import UserRouter from './routes/user-router';

class Server {

  // set app to be of type express.Application
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  // application config
  public config(): void {

    const MONGO_URI: string = 'mongodb://localhost/tes';
     (<any>mongoose).Promise = bluebird;
    mongoose.connect(MONGO_URI, {useMongoClient: true})
    .then(() => {
      console.log( `Mongoose connected to ` + MONGO_URI );
      /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
    ).catch(err => {
      console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
      // process.exit();
    });

    // express middleware
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(validator());
    this.app.use(cookieParser());
    this.app.use(logger('dev'));
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());
    this.app.set('view engine', 'ejs');

    // cors
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
      res.header('Access-Control-Allow-Credentials', 'true');
      next();
    });

  }

  // application routes
  public routes(): void {
    // const router: express.Router = express.Router();

    // this.app.use('/', router);
    this.app.use('/api/v1/users', UserRouter);

  }
}

// export
export default new Server().app;