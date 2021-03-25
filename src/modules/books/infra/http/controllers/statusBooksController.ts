import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import ChangeStatusBookService from '../../../service/ChangeStatusBookService'

export default class statusBooksController{
    public async changeStatus(req: Request, res: Response): Promise<Response>{
        const { id } = req.body
        const changeStatusBooksService = container.resolve(ChangeStatusBookService)
        const book = await changeStatusBooksService.excute(id)
        return res.json(classToClass(book))
    }
}