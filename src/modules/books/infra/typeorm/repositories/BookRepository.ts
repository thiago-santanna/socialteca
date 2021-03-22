import ICreateBooksDTO from '../../../dto/ICreateBooksDTO'
import Book from '../../../infra/typeorm/entities/Book'
import IBooksRepository from '../../../repositories/IBooksRepository'

class BookRepository implements IBooksRepository{
    public async findById(id: string): Promise<Book | undefined> {
        throw new Error("Method not implemented.");
    }
    public async findBooks(data: { name: string; author: string; isbn: string; }): Promise<Book[] | undefined> {
        throw new Error("Method not implemented.");
    }
    public async create(data: ICreateBooksDTO): Promise<Book> {
        throw new Error("Method not implemented.");
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

export default BookRepository
