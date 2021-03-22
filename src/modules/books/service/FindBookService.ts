import 'reflect-metadata';
import { inject, injectable } from 'tsyringe'

import IBooksRepository from '../repositories/IBooksRepository'
import Book from '../infra/typeorm/entities/Book'
import AppError from '../../../shared/errors/AppError'

@injectable()
class FindBookService{
    @inject('BooksRepository')
    constructor(
        @inject('BooksService')
        private booksRepository: IBooksRepository
    ){}

    public async execute(findValue:string): Promise<Book | undefined>{
        const bookById = await this.booksRepository.findById(findValue)
        if(bookById){
            return bookById
        }

        const bookByName = await this.booksRepository.findByName(findValue)
        if(bookByName){
            return bookByName
        }
        
        const bookByIsbn = await this.booksRepository.findByIsbn(findValue)
        if(bookByIsbn){
            return bookByIsbn
        } 
        
        return undefined
    }

}

export default FindBookService
