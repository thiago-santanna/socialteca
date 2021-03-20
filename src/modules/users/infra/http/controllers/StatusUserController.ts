import { Request, Response} from 'express'
import { classToClass } from 'class-transformer'
import {container} from  'tsyringe'
import StatusUserService from '../../../service/StatusUserService'

export default class StatusUserController{
    public async statusUserChange(req: Request, res: Response):Promise<Response>{
        const {id} = req.body
        const statusUserService = container.resolve(StatusUserService)
        const user = await statusUserService.execute(id)
        return res.json(classToClass(user))
    }
}