import { Request , Response } from 'express';
import User from '../models/User';
import bluebird from 'bluebird';

const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

export class UserClass {

    private isValid: Boolean = true;
    private req: Request ;
    private res: Response;

    // constructor() {
    //     this.listAll(this.req, this.res)
    // }

    public static async listAll(req: Request, res: Response): bluebird {
        try {
            const users = await User.find();
            return res.status(200).send({
                status: 'Success',
                data: users
            });
        } catch (err) {
            return res.status(500).send({
                status: 'Failed',
                msg: 'Something went wrong!!!'
            });
        }
    }

    public static async save(req: Request, res: Response): bluebird                   {

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

        const user = new User(req.body);

        try {
            const userSave = await user.save();
            return res.status(200).send({
                status: 'Success',
                data: userSave
            });
        } catch (err) {
            return res.status(500).send({
                status: 'Failed',
                msg: err
            });
        }

   }


}

// const userClass = new UserClass();

// export { UserClass }