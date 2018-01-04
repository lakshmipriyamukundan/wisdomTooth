"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../models/User");
class UserClass {
    constructor() {
        this.isValid = true;
    }
    // constructor() {
    //     this.save(req: Request, res: Response);
    // }
    save(req, res) {
        req.checkBody('firstName', 'Invalid firstName').notEmpty();
        req.checkBody('lastName', 'Invalid lastName').notEmpty();
        req.checkBody('email', 'Invalid email').notEmpty().isEmail();
        req.checkBody('password', 'Invalid password').notEmpty();
        req.getValidationResult()
            .then(result => {
            if (!result.isEmpty()) {
                this.isValid = false;
                return Promise.reject(result.array());
            }
            let user = new User_1.default(req.body);
            user.save().then(data => {
                return res.status(201).send({
                    status: 'Success',
                    msg: 'Successfully Added'
                });
            });
        })
            .catch(err => {
            if (!this.isValid) {
                return res.status(400).send({
                    status: 'Failed',
                    msg: err
                });
            }
        });
    }
}
const userClass = new UserClass();
exports.userClass = userClass;
//# sourceMappingURL=login.js.map