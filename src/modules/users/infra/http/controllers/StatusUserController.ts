import { Request, Response} from 'express'
import {container} from  'tsyringe'

import StatusUserService from '../../../service/StatusUserService'

export default class StatusUserController{
    public async statusUserChange(req: Request, res: Response):Promise<void>{
        const { statusUser } = req.body
        res.status(204).send()
    }
}