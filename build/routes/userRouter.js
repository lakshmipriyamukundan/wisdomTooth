"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("../models/User");
const user_1 = require("../controllers/user");
class UserRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    sum(req, res) {
        res.status(200).send({
            status: 'Success',
            data: 'Good Evening'
        });
    }
    listAll(req, res) {
        User_1.default.find({}).then(data => {
            return res.status(200).send({
                status: 'Success',
                data: data
            });
        });
    }
    routes() {
        this.router.get('/', this.sum);
        // this.router.get('/', )
        this.router.get('/listAll', user_1.userClass.listAll);
    }
}
const userRoutes = new UserRouter();
userRoutes.routes();
exports.default = userRoutes.router;
//# sourceMappingURL=userRouter.js.map