import ICreateBooksDTO from "modules/books/dto/ICreateBooksDTO";
import Book from "modules/books/infra/typeorm/entities/Book";
import IBooksRepository from "../IBooksRepository";

class FakeBookRepository implements IBooksRepository{
    public async findById(id: string): Promise<Book | undefined> {
        throw new Error("Method not implemented.");
    }
    public async findBooks(data: { name: string; author: string; isbn: string; }): Promise<Book[] | undefined> {
        throw new Error("Method not implemented.");
    }
    public async create(book: ICreateBooksDTO): Promise<Book> {
        throw new Error("Method not implemented.");
    }
    public async update(book: ICreateBooksDTO): Promise<Book> {
        throw new Error("Method not implemented.");
    }
    public async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public async changeStatus(book: Book): Promise<Book> {
        throw new Error("Method not implemented.");
    }
    
}

export default FakeBookRepository
