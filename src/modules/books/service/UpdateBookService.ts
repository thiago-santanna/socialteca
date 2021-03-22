import 'reflect-metadata';
import { inject, injectable } from 'tsyringe'

import IBooksRepository from '../repositories/IBooksRepository'
import Book from '../infra/typeorm/entities/Book'
import AppError from '../../../shared/errors/AppError'

import { IUpdateBooksDto } from '../dto/IBooksDTO'

@injectable()
export default class UpdateUserService{
    constructor(
        @inject('BooksRepository')
        private booksRepository:IBooksRepository
    ){}

    public async execute(
        {id, name, author, isbn, publication_year, pages, synopsis}:IUpdateBooksDto
    ): Promise<Book>{
        const book = await this.booksRepository.findById(id)
        if(!book){
            throw new AppError('Book is not available')
        }

        book.name = name
        book.author = author
        book.isbn = isbn
        book.publication_year = publication_year
        book.pages = pages
        book.synopsis = synopsis

        return await this.booksRepository.update(book)
    }
}
