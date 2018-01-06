"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
class UserClass {
    constructor() {
        this.isValid = true;
        this.listAll(this.req, this.res);
    }
    listAll(req, res) {
        User_1.default.find({}).then(data => {
            return res.status(200).send({
                status: 'Success',
                data: data
            });
        });
    }
}
const userClass = new UserClass();
exports.userClass = userClass;
//# sourceMappingURL=user.js.map