import 'reflect-metadata';
import { inject, injectable } from 'tsyringe'
import IBooksRepository from '../repositories/IBooksRepository'
import Book from '../infra/typeorm/entities/Book'
import { isUuid } from 'uuidv4'
import AppError from '../../../shared/errors/AppError'

@injectable()
class ChangeStatusBookService{
    constructor(
        @inject('BooksRepository')
        private booksRepository:IBooksRepository
    ){}

    public async excute(id: string):Promise<Book>{
        if(!isUuid){
            throw new AppError('Id not a Uuid valid');
        }

        const book = await this.booksRepository.findById(id);
        if(!book){
            throw new AppError('Book not found')
        }
        return await this.booksRepository.changeStatus(book)
    }
}

export default ChangeStatusBookService
