import { Request, Response, Router } from 'express'
//import { userClass } from '../controllers/auth/login'

class UserRouter {

    public router: Router

    constructor(){
        this.router = Router();
        this.routes();
    }

    public sum(req: Request, res: Response):void{
       console.log("dfhgjdsjjds"); 
       res.status(200).send({
           status: 'Success',
           data: 'Good Evening'
       })
    }

    public routes():void {
        console.log('>>>>>>>>>>>>>>>.')
        this.router.get('/',this.sum)
       // this.router.get('/', )
       // this.router.post('/create', userClass.save )
    }
}

const userRoutes = new UserRouter();

userRoutes.routes();

export default userRoutes.router