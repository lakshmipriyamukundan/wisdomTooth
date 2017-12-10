import { Response, Request } from 'express';
import User from '../../models/user'

class UserClass {

    private isValid : Boolean = true;

    // constructor() {
    //     this.save(req: Request, res: Response);
    // }

    public save(req: Request, res: Response) : void                   {

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

            let user = new User(req.body);

            user.save().then(data => {
                return res.status(201).send({
                    status: 'Success',
                    msg: 'Successfully Added'
                })
            })

        })
        .catch(err => {
            if(!this.isValid){
                return res.status(400).send({
                    status: 'Failed',
                    msg: err
                })
            }
        })

    }
}

const userClass = new UserClass();

export default userClass.save(req, res);