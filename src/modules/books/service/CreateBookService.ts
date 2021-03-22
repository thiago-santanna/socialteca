import 'reflect-metadata';
import { inject, injectable } from 'tsyringe'

import IBooksRepository from '../repositories/IBooksRepository'
import ICreateBookDTO from '../dto/ICreateBooksDTO'
import Book from '../infra/typeorm/entities/Book'
@injectable()
class CreateBookService{
    constructor(
        @inject('BooksRepository')
        private bookRepository: IBooksRepository
    ){}

    public async service(
        {name, author, isbn, publication_year, pages, synopsis}: ICreateBookDTO
    ): Promise<Book>{
        const book = await this.bookRepository.create({
            name, author, isbn, publication_year, pages, synopsis
        })
        return book
    }

}

export default CreateBookService
