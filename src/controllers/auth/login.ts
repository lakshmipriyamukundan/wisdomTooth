import { Response, Request } from 'express';
import User from '../../models/user'

class UserClass {

    private isValid : Boolean = true;
    public save(req: Request, res: Response) : void {
        req.checkBody('firstName', 'Invalid firstName').notEmpty();
        req.checkBody('lastName', 'Invalid lastName').notEmpty();
        req.checkBody('email', 'Invalid email').notEmpty().isEmail();
        req.checkBody('password', 'Invalid password').notEmpty();

        req.getValidationResult()
        .then(result => {
            if(!result.isEmpty()){
                this.isValid = false;
                return Promise.reject(result.array())
            }
        })

    }
}