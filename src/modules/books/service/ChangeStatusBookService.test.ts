import ChangeStatusBookService from './ChangeStatusBookService'
import FakeBookRepository from '../repositories/fake/FakeBookRepository'
import AppError from '../../../shared/errors/AppError'

let fakeBookRepository: FakeBookRepository
let changeStatusBookService: ChangeStatusBookService

describe('ChangeStatusBookService', () => {
    beforeEach(() => {
        fakeBookRepository = new FakeBookRepository
        changeStatusBookService = new ChangeStatusBookService(
            fakeBookRepository
        )
    })

    it('should be able to change status of a book', async () => {
        const book = await fakeBookRepository.create({
            name: 'javaScript basic',
            author: 'John Doe',
            isbn: '12345',
            publication_year: '2009',
            pages: 280,
            synopsis: 'JavaScript básico para iniciantes'
        })
        book.status = 1

        const bookUpdated = await changeStatusBookService.excute(book.id)
        expect(bookUpdated.status).toBe(0)
    })
    it('should not be able to change status of a book', async () => {       
        await expect(
            changeStatusBookService.excute('1020')
        ).rejects.toBeInstanceOf(AppError)
    })
})