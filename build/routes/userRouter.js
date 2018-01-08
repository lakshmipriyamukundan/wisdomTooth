"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
class UserRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        // this.router.get('/',this.sum)
        // this.router.get('/', )
        this.router.get('/listAll', user_1.UserClass.listAll);
    }
}
const userRoutes = new UserRouter();
userRoutes.routes();
exports.default = userRoutes.router;
//# sourceMappingURL=userRouter.js.map