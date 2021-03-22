import Book from '../infra/typeorm/entities/Book'
import { ICreateBooksDto } from '../dto/IBooksDTO'
export default interface IBooksRepository{
    findById(id: string): Promise<Book | undefined>
    findByName(name: string): Promise<Book | undefined>
    findByIsbn(isbn: string): Promise<Book | undefined>
    create(data: ICreateBooksDto): Promise<Book>
    update(data: Book): Promise<Book>
    delete(id: string): Promise<void>
    changeStatus(data: Book):Promise<Book>
}
