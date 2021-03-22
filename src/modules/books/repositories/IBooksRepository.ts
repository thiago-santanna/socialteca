import Books from '../infra/typeorm/entities/Books'
import ICreateBooksDTO from '../dto/ICreateBooksDTO'

type IFindBooks = {
    name: string
    author: string
    isbn: string
}
export interface IBooksRepository{
    findById(id: string): Promise<Books | undefined>
    findBooks(data:IFindBooks): Promise<Books[] | undefined>
    create(book: ICreateBooksDTO): Promise<Books>
    update(book: ICreateBooksDTO): Promise<Books>
    delete(id: string): Promise<void>
    changeStatus(book:Books):Promise<Books>
}
