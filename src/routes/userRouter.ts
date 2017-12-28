import { Router } from 'express'
import { userClass } from '../controllers/auth/login'

class UserRouter {

    router: Router

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.post('/create', userClass.save )
    }
}