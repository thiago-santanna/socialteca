import Books from '../infra/typeorm/entities/Books'
import ICreateBooksDTO from '../dto/ICreateBooksDTO'

export interface IBooksRepository{
    findById(id: string): Promise<Books | undefined>
    create(book: ICreateBooksDTO): Promise<Books>
    update(book: ICreateBooksDTO): Promise<Books>
    delete(id: string): Promise<void>
}
