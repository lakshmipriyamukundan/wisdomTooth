"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const validator = require("express-validator");
const helmet = require("helmet");
const mongoose = require("mongoose");
const logger = require("morgan");
const bluebird = require("bluebird");
const userRouter_1 = require("./routes/userRouter");
class Server {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    // application config
    config() {
        const MONGO_URI = 'mongodb://localhost/tes';
        mongoose.Promise = bluebird;
        mongoose.connect(MONGO_URI, { useMongoClient: true })
            .then(() => {
            console.log(`Mongoose connected to ` + MONGO_URI);
            /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
        }).catch(err => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            // process.exit();
        });
        // express middleware
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(validator);
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
    routes() {
        // const router: express.Router = express.Router();
        // this.app.use('/', router);
        this.app.use('/api/v1/users', userRouter_1.default);
    }
}
// export
exports.default = new Server().app;
//# sourceMappingURL=server.js.map