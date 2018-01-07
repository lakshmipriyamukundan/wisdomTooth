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
        this.listAll(this.req, this.res);
    }
    listAll(req, res) {
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
            // User.find({}).then(data => {
            //     return res.status(200).send({
            //         status: 'Success',
            //         data: data
            //     })
            // })
        });
    }
}
const userClass = new UserClass();
exports.userClass = userClass;
//# sourceMappingURL=user.js.map