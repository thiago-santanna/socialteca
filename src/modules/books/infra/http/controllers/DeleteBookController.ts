import { Request, Response } from 'express'
import { container } from 'tsyringe'
import DeleteBookService from '../../../service/DeleteBookService'
export default class deleteBooksController{
    public async delete(req: Request, res: Response):Promise<Response>{
        const { id } = req.body
        const deleteBookService = container.resolve(DeleteBookService)
        await deleteBookService.execute(id)
        return res.status(204).send()
    }
    
}