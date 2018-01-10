import { Request , Response } from 'express';

export class MainClass {

    public static renderMain (req: Request, res: Response): void {
        res.render('index', {title: 'Views'} );
    }
}