import { Request, Response} from 'express'
import { container } from  'tsyringe'
import { classToClass } from 'class-transformer'

import SessionsUserService from '../../../service/SessionsUserService'
export default class SessionsController {
    public async create(req: Request, res: Response):Promise<Response> {
        const {email, password} = req.body

        const sessionsuserService = container.resolve(SessionsUserService)

        const { user, token } = await sessionsuserService.execute({
            email,
            password
        })

        return res.json({user: classToClass(user), token})
    }
}