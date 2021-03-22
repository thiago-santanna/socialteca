import { ICreateBooksDto } from '../../../dto/IBooksDTO'
import { getRepository, Repository } from 'typeorm'
import Book from '../../../infra/typeorm/entities/Book'
import IBooksRepository from '../../../repositories/IBooksRepository'

class BookRepository implements IBooksRepository{
    private ormRepository: Repository<Book>

    constructor(){
        this.ormRepository = getRepository(Book)
    }
    public async findById(id: string): Promise<Book | undefined> {
        throw new Error("Method not implemented.");
    }
    public async findByName(name: string): Promise<Book | undefined> {
        const book = await this.ormRepository.findOne({ where:{name} })
        return book
    }
    public async findByIsbn(isbn: string): Promise<Book | undefined> {
        throw new Error('Method not implemented.')
    }    
    public async create(data: ICreateBooksDto): Promise<Book> {
        const book = this.ormRepository.create(data)
        await this.ormRepository.save(book)
        return book
    }
    public async update(data: Book): Promise<Book> {
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
