import {Request, Response} from 'express'
import { container } from 'tsyringe'
import UpdateUserService from '../../../service/UpdateUserService'
export default class UpdatesUserController{
    public async update(req: Request, res: Response): Promise<Response>{
        const {id, name, phone, email} = req.body
        const updateUserService = container.resolve(UpdateUserService)
        const user = await updateUserService.execute({id, name, phone, email})
        return res.json(user)
    }
}