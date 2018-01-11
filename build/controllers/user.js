"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
class UserClass {
    constructor() {
        this.isValid = true;
        // public static async save(req: Request, res: Response): bluebird                   {
        //     const isValid: Boolean = false;
        //     req.checkBody('firstName', 'Invalid firstName').notEmpty();
        //     req.checkBody('lastName', 'Invalid lastName').notEmpty();
        //     req.checkBody('email', 'Invalid email').notEmpty().isEmail();
        //     req.checkBody('password', 'Invalid password').notEmpty();
        //     req.getValidationResult()
        //     .then(result => {
        //         if (!result.isEmpty()) {
        //             return Promise.reject(result.array());
        //         }
        //         const user = new User(req.body);
        //         user.save().then(data => {
        //             return res.status(201).send({
        //                 status: 'Success',
        //                 msg: 'Successfully Added'
        //             });
        //         });
        //     })
        //     .catch(err => {
        //         if (!isValid) {
        //             return res.status(400).send({
        //                 status: 'Failed',
        //                 msg: err
        //             });
        //         }
        //     });
        // }
    }
    // constructor() {
    //     this.listAll(this.req, this.res)
    // }
    static listAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield User_1.default.find();
                return res.status(200).send({
                    status: 'Success',
                    data: users
                });
            }
            catch (err) {
                return res.status(500).send({
                    status: 'Failed',
                    msg: 'Something went wrong!!!'
                });
            }
        });
    }
}
exports.UserClass = UserClass;
// const userClass = new UserClass();
// export { UserClass } 
//# sourceMappingURL=user.js.map