import { RequestHandler } from 'express';
import User from '../models/User';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import * as jwtConstant from '../../src/jwt-token.json';

const { validationResult } = require('express-validator/check');
const { matchedData } = require('express-validator/filter');

const tokensecret = (<any>jwtConstant).tokensecret;
const saltRounds = (<any>jwtConstant).saltRounds;

export class UserClass {

    // private tokensecret = (<any>jwtConstant).tokensecret;
    // private saltRounds = (<any>jwtConstant).saltRounds;

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

    public static save: RequestHandler = async (req, res) => {

        const validationErrors = validationResult(req);

        if (!validationErrors.isEmpty()) {
            return res.status(422).send({
                status: 'Failed',
                msg: validationErrors.array()
            });
        }
        // finding matched data from req.body
        const data =  matchedData(req);

        try {

            const hashedPassword = await bcrypt.hash(data.password, saltRounds);
            data.password = hashedPassword;
            // console.log(hashedPassword)
            const user = new User(data);
            const userSave = await user.save();
            const id = userSave._id;
            const email = data.email;
            const token = await jwt.sign({id, email}, tokensecret);

            return res.status(200).send({
                status: 'Success',
                data: userSave,
                token: token
            });

        } catch (err) {

            console.log(err);
            return res.status(500).send({
                status: 'Failed',
                msg: err
            });

        }

   }

public static login: RequestHandler = async (req, res) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
        return res.status(422).send({
            status: 'Failed',
            msg: validationErrors.array()
        });
    }
    // finding matched data from req.body
    const data =  matchedData(req);

    const user = await User.findOne({ email: req.body.email }).exec();

    if (!user) {
        return res.status(400).send({
            status: 'Failed',
            msg: 'Invalid password or email'
        });
    }

    return res.status(200).send({
        status: 'Success',
        data: user
    })

   }


}
