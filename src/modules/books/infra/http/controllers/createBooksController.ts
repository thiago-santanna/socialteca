import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import CreateBookService from '../../../service/CreateBookService'

export default class CreateBooksController{
    public async create(req: Request, res: Response): Promise<Response>{
        const {
            name, 
            author, 
            isbn, 
            publication_year, 
            pages, 
            synopsis
        } = req.body

        const createBookService = container.resolve(CreateBookService)
        const book = await createBookService.service(
            {
                name, 
                author, 
                isbn, 
                publication_year, 
                pages, 
                synopsis
            }
        )

        return res.json(classToClass(book))
    }
}