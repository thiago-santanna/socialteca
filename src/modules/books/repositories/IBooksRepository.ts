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
    create(data: ICreateBooksDTO): Promise<Book>
    update(data: ICreateBooksDTO): Promise<Book>
    delete(id: string): Promise<void>
    changeStatus(data:Book):Promise<Book>
}
