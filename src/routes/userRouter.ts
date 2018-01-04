import { Request, Response, Router } from 'express'
import { userClass } from '../controllers/auth/login'

class UserRouter {

    public router: Router

    constructor(){
        this.router = Router();
        this.routes();
    }

    public sum():void{
       console.log("dfhgjdsjjds"); 
    }

    public routes():void {
        console.log('>>>>>>>>>>>>>>>.')
        this.router.get('/', this.sum)
       // this.router.post('/create', userClass.save )
    }
}

const userRoutes = new UserRouter();

userRoutes.routes();

export default userRoutes.router