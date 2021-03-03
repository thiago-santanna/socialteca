import {Request, Response} from 'express'

export default class UpdatesUserController{
    public async update(req: Request, res: Response): Promise<void>{
        res.json({message: 'OK put'})
    }
}