"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import { userClass } from '../controllers/auth/login'
class UserRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    sum(req, res) {
        console.log("dfhgjdsjjds");
        res.status(200).send({
            status: 'Success',
            data: 'Good Evening'
        });
    }
    routes() {
        console.log('>>>>>>>>>>>>>>>.');
        this.router.get('/ww', this.sum);
        // this.router.get('/', )
        // this.router.post('/create', userClass.save )
    }
}
const userRoutes = new UserRouter();
userRoutes.routes();
exports.default = userRoutes.router;
//# sourceMappingURL=userRouter.js.map