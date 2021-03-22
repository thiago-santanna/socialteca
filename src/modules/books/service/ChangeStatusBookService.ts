import 'reflect-metadata';
import { inject, injectable } from 'tsyringe'

import IBooksRepository from '../repositories/IBooksRepository'
import Book from '../infra/typeorm/entities/Book'
import AppError from '../../../shared/errors/AppError'

@injectable()
class ChangeStatusBookService{
    constructor(
        @inject('BooksRepository')
        private booksRepository:IBooksRepository
    ){}

    public async excute(id: string):Promise<Book>{
        const book = await this.booksRepository.findById(id);
        if(!book){
            throw new AppError('Book not found')
        }
        return await this.booksRepository.changeStatus(book)
    }
}

export default ChangeStatusBookService
