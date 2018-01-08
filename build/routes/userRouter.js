"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
class UserRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    // public sum(req: Request, res: Response):void{
    //    res.status(200).send({
    //        status: 'Success',
    //        data: 'Good Evening'
    //    })
    // }
    routes() {
        // this.router.get('/',this.sum)
        //this.router.get('/save', userClass.save)
        this.router.get('/listAll', user_1.UserClass.listAll);
    }
}
const userRoutes = new UserRouter();
userRoutes.routes();
exports.default = userRoutes.router;
//# sourceMappingURL=userRouter.js.map