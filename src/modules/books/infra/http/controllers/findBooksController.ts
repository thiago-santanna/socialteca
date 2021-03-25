import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import FindBookService from '../../../service/FindBookService'

type FindBook = {
    findValue: string
}

export default class findBooksController{
    public async find(req: Request, res: Response): Promise<Response>{
        const { findValue }:FindBook = req.body

        const findBooksService = container.resolve(FindBookService)
        const book = await findBooksService.execute(findValue)

        if(book !== undefined)
            return res.json(classToClass(book))
        
        return res.status(404).json({message: "Book is not found"})
    }
}