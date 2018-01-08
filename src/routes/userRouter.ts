import { Request, Response, Router } from 'express'
import User from '../models/User'
import { UserClass } from '../controllers/user'

class UserRouter {

    public router: Router

    constructor(){
        this.router = Router();
        this.routes();
    }

    // public sum(req: Request, res: Response):void{
      
    //    res.status(200).send({
    //        status: 'Success',
    //        data: 'Good Evening'
    //    })
    // }

    public routes():void {
        
       // this.router.get('/',this.sum)
        //this.router.get('/save', userClass.save)
        this.router.get('/listAll', UserClass.listAll)
    }
}

const userRoutes = new UserRouter();

userRoutes.routes();

export default userRoutes.router