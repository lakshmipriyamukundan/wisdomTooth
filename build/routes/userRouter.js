"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const main_page_1 = require("../controllers/main-page");
class UserRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        // this.router.get('/',this.sum)
        this.router.get('/', main_page_1.MainClass.renderMain);
        this.router.get('/listAll', user_1.UserClass.listAll);
        // this.router.post('/save', UserClass.save );
    }
}
const userRoutes = new UserRouter();
userRoutes.routes();
exports.default = userRoutes.router;
//# sourceMappingURL=userRouter.js.map