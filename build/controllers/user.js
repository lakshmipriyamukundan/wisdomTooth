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
const { body, validationResult } = require('express-validator/check');
const { sanitizeBody, matchedData } = require('express-validator/filter');
class UserClass {
    constructor() {
        this.isValid = true;
    }
    static save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Validate
            body('firstName', 'FirstName must be specified').isLength({ min: 1 }).trim();
            body('lastName', 'LastName must be specified').isLength({ min: 1 }).trim();
            body('email', 'Email must be specified').isLength({ min: 1 }).trim();
            body('password', 'Password must be specified').isLength({ min: 1 }).trim();
            // Sanitize
            sanitizeBody('firstName').trim().escape();
            sanitizeBody('lastName').trim().escape();
            sanitizeBody('email').trim().escape();
            sanitizeBody('password').trim().escape();
            const validationErrors = validationResult(req);
            if (!validationErrors.isEmpty()) {
                return res.status(200).send({
                    status: 'Failed',
                    msg: validationErrors
                });
            }
            // finding matched data from req.body
            const data = matchedData(req);
            const user = new User_1.default(data);
            try {
                const userSave = yield user.save();
                return res.status(200).send({
                    status: 'Success',
                    data: userSave
                });
            }
            catch (err) {
                return res.status(500).send({
                    status: 'Failed',
                    msg: err
                });
            }
        });
    }
}
UserClass.listAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
    // public static async listAll(req: Request, res: Response): bluebird {
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
exports.UserClass = UserClass;
//# sourceMappingURL=user.js.map