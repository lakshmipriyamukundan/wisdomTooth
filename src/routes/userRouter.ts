import { Router } from 'express'

class UserRouter {

    router: Router

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.post('/create', )
    }
}