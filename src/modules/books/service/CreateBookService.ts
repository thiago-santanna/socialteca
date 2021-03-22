import 'reflect-metadata';
import { inject, injectable } from 'tsyringe'

import IBooksRepository from '../repositories/IBooksRepository'
import ICreateBookDTO from '../dto/ICreateBooksDTO'
import Book from '../infra/typeorm/entities/Book'

import AppError from '../../../shared/errors/AppError'

@injectable()
class CreateBookService{
    constructor(
        @inject('BooksRepository')
        private bookRepository: IBooksRepository
    ){}

    public async service(data: ICreateBookDTO): Promise<void>{}

}

export default CreateBookService
