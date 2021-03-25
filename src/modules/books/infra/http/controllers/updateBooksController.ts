import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'
import { IUpdateBooksDto } from '../../../dto/IBooksDTO'

import UpdateUserService from '../../../service/UpdateBookService'

export default class updateBooksController{
    public async update(req: Request, res: Response): Promise<Response>{
        const {
            id,
            name, 
            author, 
            isbn, 
            publication_year, 
            pages, 
            synopsis
        }:IUpdateBooksDto = req.body

        const updateBooksService = container.resolve(UpdateUserService)
        const book = await updateBooksService.execute({
            id,
            name, 
            author, 
            isbn, 
            publication_year, 
            pages, 
            synopsis
        })

        return res.json(classToClass(book))
    }
}