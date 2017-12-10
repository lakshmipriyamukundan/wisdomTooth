"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserClass {
    constructor() {
        this.isValid = true;
    }
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
        });
    }
}
//# sourceMappingURL=login.js.map