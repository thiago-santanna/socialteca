import { ICreateBooksDto, IUpdateBooksDto } from '../../dto/IBooksDTO'
import Book from '../../infra/typeorm/entities/Book'
import IBooksRepository from '../IBooksRepository'

import { uuid } from 'uuidv4'
class FakeBookRepository implements IBooksRepository{
    private books: Book[] = []

    public async findById(id: string): Promise<Book | undefined> {
        const book = this.books.find(book => book.id === id)
        return book
    }
    public async findByName(name: string): Promise<Book | undefined> {
        const book = this.books.find(book => book.name === name)
        return book
    }    
    public async findBooks(data: { name: string; author: string; isbn: string; }): Promise<Book[] | undefined> {
        throw new Error("Method not implemented.");
    }
    public async create(data: ICreateBooksDto): Promise<Book> {
        const book = new Book()
        Object.assign(book, { id: uuid()}, data)

        this.books.push(book)

        return book
    }
    public async update(data: Book): Promise<Book> {
        const indexBook = this.books.findIndex(book => book.id === data.id)
        this.books[indexBook] = data
        return data
    }
    public async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public async changeStatus(data: Book): Promise<Book> {
        throw new Error("Method not implemented.");
    }
    
}

export default FakeBookRepository
