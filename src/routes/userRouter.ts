import { Request, Response, Router } from 'express'
import User from '../models/User'
import { userClass } from '../controllers/user'

class UserRouter {

    public router: Router

    constructor(){
        this.router = Router();
        this.routes();
    }

    public sum(req: Request, res: Response):void{
      
       res.status(200).send({
           status: 'Success',
           data: 'Good Evening'
       })
    }

    public listAll(req: Request, res: Response) {
        User.find({}).then(data => {
            return res.status(200).send({
                status: 'Success',
                data: data
            })
        })
    }

    public routes():void {
        
        this.router.get('/',this.sum)
       // this.router.get('/', )
       this.router.get('/listAll', userClass.listAll )
    }
}

const userRoutes = new UserRouter();

userRoutes.routes();

export default userRoutes.router