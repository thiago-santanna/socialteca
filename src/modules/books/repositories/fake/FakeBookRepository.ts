import { ICreateBooksDto, IFindBooks } from '../../dto/IBooksDTO'
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
    public async findByIsbn(isbn: string): Promise<Book | undefined> {
        const book = this.books.find(book => book.isbn === isbn)
        return book
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
        const indexBook = this.books.findIndex(book => book.id === id)
        this.books.splice(indexBook, 1)               
    }
    public async changeStatus(data: Book): Promise<Book> {
        const indexBook = this.books.findIndex(book => book.id === data.id)
        this.books[indexBook].status = this.books[indexBook].status === 1 ? 0 : 1
        return this.books[indexBook]
    }    
}

export default FakeBookRepository
