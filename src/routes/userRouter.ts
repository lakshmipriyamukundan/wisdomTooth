import { Request, Response, Router } from 'express';
import User from '../models/User';
import { UserClass } from '../controllers/user';
import { MainClass } from '../controllers/main-page';

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
       this.router.post('/save', UserClass.save );
    }
}

const userRoutes = new UserRouter();

userRoutes.routes();

export default userRoutes.router;