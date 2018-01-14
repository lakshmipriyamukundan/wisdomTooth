import { Request , Response, RequestHandler } from 'express';
import User from '../models/User';
import bluebird from 'bluebird';

const { validationResult } = require('express-validator/check');
const { matchedData } = require('express-validator/filter');

export class UserClass {

    private isValid: Boolean = true;
    private req: Request ;
    private res: Response;

    public static listAll: RequestHandler = async (req, res) => {
    // public static async listAll(req: Request, res: Response): bluebird {
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

    public static save: RequestHandler = async (req, res)                   {

        const validationErrors = validationResult(req);

        if (!validationErrors.isEmpty()) {
            return res.status(422).send({
                status: 'Failed',
                msg: validationErrors.array()
            });
        }
        // finding matched data from req.body
        const data =  matchedData(req);
        const user = new User(data);

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
