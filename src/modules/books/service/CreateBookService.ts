import 'reflect-metadata';
import { inject, injectable } from 'tsyringe'

import IBooksRepository from '../repositories/IBooksRepository'
import { ICreateBooksDto } from '../dto/IBooksDTO'
import Book from '../infra/typeorm/entities/Book'
import AppError from '../../../shared/errors/AppError'

@injectable()
class CreateBookService{
    constructor(
        @inject('BooksRepository')
        private bookRepository: IBooksRepository
    ){}

    public async service(
        {name, author, isbn, publication_year, pages, synopsis}: ICreateBooksDto
    ): Promise<Book>{
        const bookAlready = await this.bookRepository.findByName(name);
        if(bookAlready){
            throw new AppError('Book already is saved')
        }

        const book = await this.bookRepository.create({
            name, author, isbn, publication_year, pages, synopsis
        })
        return book
    }

}

export default CreateBookService
