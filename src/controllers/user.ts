import { RequestHandler } from 'express';
import * as bluebird from 'bluebird'
import User from '../models/User'

class UserClass {

    public static listAll:RequestHandler = async (req, res)=> {
        try{
            const users = await User.find();
            return res.status(200).send({
                status: 'Success',
                data: users
            })
        }catch(err){
            return res.status(500).send({
                status: 'Failed',
                msg:'Something went wrong!!!'
            })
        }
    } 

    // public async save(req: Request, res: Response):                {

    //     try{
           
    //     req.checkBody('firstName', 'Invalid firstName').notEmpty();
    //     req.checkBody('lastName', 'Invalid lastName').notEmpty();
    //     req.checkBody('email', 'Invalid email').notEmpty().isEmail();
    //     req.checkBody('password', 'Invalid password').notEmpty();

    //     let validationResult = await req.getValidationResult();
        
    //     if(!validationResult.isEmpty()){
    //         this.isValid = false;
    //         throw new Error('validation err');
    //     }

    //     const user = new User(req.body);
    //     const savedUser = await user.save();

    //     return res.status(201).send({
    //         status: 'Success',
    //         data: savedUser
    //     });

    //     }catch(err){

    //         if(!this.isValid){
    //             return res.status(400).send({
    //                 status: 'Failed',
    //                 msg: err
    //             })
    //         }

    //         return res.status(500).send({
    //             status: 'Failed',
    //             msg: err
    //         })
    //     }
    // }

   
}

//const userClass = new UserClass();

export { UserClass }