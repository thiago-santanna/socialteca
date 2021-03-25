import 'reflect-metadata';
import { inject, injectable } from 'tsyringe'
import { isUuid } from 'uuidv4'

import IBooksRepository from '../repositories/IBooksRepository'
import Book from '../infra/typeorm/entities/Book'

@injectable()
class FindBookService{
    @inject('BooksRepository')
    constructor(
        @inject('BooksRepository')
        private booksRepository: IBooksRepository
    ){}

    public async execute(findValue:string): Promise<Book | undefined>{
        const bookByName = await this.booksRepository.findByName(findValue)
        if(bookByName){
            return bookByName
        }
        
        const bookByIsbn = await this.booksRepository.findByIsbn(findValue)
        if(bookByIsbn){
            return bookByIsbn
        }

        if(!isUuid(findValue)){
            return  undefined
        }
        
        const bookById = await this.booksRepository.findById(findValue)
        if(bookById){
            return bookById
        }        
        
        return undefined
    }
}

export default FindBookService
