import 'reflect-metadata';
import { inject, injectable } from 'tsyringe'

import IBooksRepository from '../repositories/IBooksRepository'
import AppError from '../../../shared/errors/AppError'

@injectable()
class DeleteBookService{
    constructor(
        @inject('BooksRepository')
        private bookRepository: IBooksRepository
    ){}

    public async execute(id: string):Promise<void>{
        const book = await this.bookRepository.findById(id)
        if(!book){
            throw new AppError('it is not possible to delete a book that does not exist')
        }
        await this.bookRepository.delete(id)
    }
}

export default DeleteBookService