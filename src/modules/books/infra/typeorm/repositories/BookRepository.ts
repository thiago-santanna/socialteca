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
        const book = await this.ormRepository.findOne({ where:{id} })
        return book
    }
    public async findByName(name: string): Promise<Book | undefined> {
        const book = await this.ormRepository.findOne({ where:{name} })
        return book
    }
    public async findByIsbn(isbn: string): Promise<Book | undefined> {
        const book = await this.ormRepository.findOne({ where:{isbn} })
        return book
    }    
    public async create(data: ICreateBooksDto): Promise<Book> {
        const book = this.ormRepository.create(data)
        await this.ormRepository.save(book)
        return book
    }
    public async update(data: Book): Promise<Book> {
        return await this.ormRepository.save(data)
    }
    public async delete(data: Book): Promise<void> {
        await this.ormRepository.delete(data)
    }
    public async changeStatus(data: Book): Promise<Book> {
        data.status = data.status === 1 ? 0 : 1
        return this.ormRepository.save(data)
    }
}

export default BookRepository
