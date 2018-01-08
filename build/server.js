"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
const logger = require("morgan");
const eValidator = require("express-validator");
class Server {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    // application config
    config() {
        const MONGO_URI = 'mongodb://localhost/tes';
        mongoose.connect(MONGO_URI || process.env.MONGODB_URI);
        console.log('Mongo connected to ', MONGO_URI);
        // express middleware
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(eValidator);
        this.app.use(cookieParser());
        this.app.use(logger('dev'));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
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
        const router = express.Router();
        this.app.use('/1', (req, res) => { res.send("ok"); });
        // this.app.use('/api/v1/users', UserRouter);
    }
}
// export
exports.default = new Server().app;
//# sourceMappingURL=server.js.map