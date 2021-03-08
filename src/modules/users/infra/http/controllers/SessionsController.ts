import { Request, Response} from 'express'
import { container } from  'tsyringe'
import { classToClass } from 'class-transformer'

export default class SessionsController {
    public async create(req: Request, res: Response):Promise<void> {
        const {login, password} = req.body
    }
}