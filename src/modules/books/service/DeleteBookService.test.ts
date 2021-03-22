import DeleteBookService from './DeleteBookService'
import FakeBookRepository from '../repositories/fake/FakeBookRepository'
import AppError from '../../../shared/errors/AppError'

let deleteBookService: DeleteBookService
let fakeBookRepository: FakeBookRepository

describe('DeleteBookService', () => {
    beforeEach(() => {
        fakeBookRepository = new FakeBookRepository
        deleteBookService = new DeleteBookService(
            fakeBookRepository
        )
    })

    it('should delete book', async () => {
        const book = await fakeBookRepository.create({
            name: 'javaScript basic',
            author: 'John Doe',
            isbn: '12345',
            publication_year: '2009',
            pages: 280,
            synopsis: 'JavaScript básico para iniciantes'
        })

        await deleteBookService.execute(book.id)
        const bookTest = await fakeBookRepository.findById(book.id)
        expect(bookTest).toBeUndefined()
    })

    it('should not delete a book not found', async () =>{
        await expect(
            deleteBookService.execute('1020')
        ).rejects.toBeInstanceOf(AppError)
    })   
})