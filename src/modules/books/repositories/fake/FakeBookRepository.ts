import ICreateBooksDTO from '../../dto/ICreateBooksDTO'
import Book from '../../infra/typeorm/entities/Book'
import IBooksRepository from '../IBooksRepository'

import { uuid } from 'uuidv4'
import AppError from '../../../../shared/errors/AppError'

class FakeBookRepository implements IBooksRepository{
    private books: Book[] = []

    public async findById(id: string): Promise<Book | undefined> {
        const book = this.books.find(book => book.id === id)
        return book
    }
    public async findBooks(data: { name: string; author: string; isbn: string; }): Promise<Book[] | undefined> {
        throw new Error("Method not implemented.");
    }
    public async create(data: ICreateBooksDTO): Promise<Book> {
        const bookSaved = this.books.find(book => book.name === data.name)

        if(bookSaved){
            throw new AppError('Book already is saved')
        }

        const book = new Book()
        Object.assign(book, { id: uuid()}, data)

        this.books.push(book)

        return book
    }
    public async update(data: ICreateBooksDTO): Promise<Book> {
        throw new Error("Method not implemented.");
    }
    public async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public async changeStatus(data: Book): Promise<Book> {
        throw new Error("Method not implemented.");
    }
    
}

export default FakeBookRepository
