import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import CreateUserService from '../../../service/CreateUserService'

export default class CreateUserController{
    public async create(req: Request, res: Response): Promise<Response>{
        const { name, email, password, login, status } = req.body

        const createUserService = container.resolve(CreateUserService)

        const user = await createUserService.execute({
            name, email, login, password
        })

        return res.json(classToClass(user))
    }
}
