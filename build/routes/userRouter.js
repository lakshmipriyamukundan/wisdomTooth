"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class UserRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    sum() {
        console.log("dfhgjdsjjds");
    }
    routes() {
        console.log('>>>>>>>>>>>>>>>.');
        this.router.get('/', this.sum);
        // this.router.post('/create', userClass.save )
    }
}
const userRoutes = new UserRouter();
userRoutes.routes();
exports.default = userRoutes.router;
//# sourceMappingURL=userRouter.js.map