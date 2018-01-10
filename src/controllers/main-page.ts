import { Request , Response } from 'express';

export class mainClass {

    public static renderMain (req: Request, res: Response): void {
        res.render('index',{title: "Views"})
    }
}