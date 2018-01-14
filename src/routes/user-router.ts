import { Request, Response, Router } from 'express';
import User from '../models/User';
import { UserClass } from '../controllers/user';
import { MainClass } from '../controllers/main-page';
import { userRules } from '../rules/user-rules';
import { validationResult } from 'express-validator/check';

class UserRouter {

    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }



    public routes(): void {

       // this.router.get('/',this.sum)
       this.router.get('/', MainClass.renderMain);
       this.router.get('/listAll', UserClass.listAll );
       this.router.post('/save', userRules['forRegister'], UserClass.save)
    }
}

const userRoutes = new UserRouter();

userRoutes.routes();

export default userRoutes.router;