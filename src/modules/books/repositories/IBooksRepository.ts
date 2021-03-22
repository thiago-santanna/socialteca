import Book from '../infra/typeorm/entities/Book'
import ICreateBooksDTO from '../dto/ICreateBooksDTO'

type IFindBooks = {
    name: string
    author: string
    isbn: string
}
export default interface IBooksRepository{
    findById(id: string): Promise<Book | undefined>
    findBooks(data:IFindBooks): Promise<Book[] | undefined>
    create(book: ICreateBooksDTO): Promise<Book>
    update(book: ICreateBooksDTO): Promise<Book>
    delete(id: string): Promise<void>
    changeStatus(book:Book):Promise<Book>
}
