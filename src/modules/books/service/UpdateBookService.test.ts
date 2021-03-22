import UpdateUserService from './UpdateBookService'
import FakeBookRepository from '../repositories/fake/FakeBookRepository'
import AppError from '../../../shared/errors/AppError'

let fakeBookRepository: FakeBookRepository
let updateBookService: UpdateUserService

describe('UpdateBook', () => {
    beforeEach(() => {
        fakeBookRepository = new FakeBookRepository
        updateBookService = new UpdateUserService(
            fakeBookRepository
        )
    })

    it('should be able to update a book', async () => {
        const book = await fakeBookRepository.create({
            name: 'javaScript basic',
            author: 'John Doe',
            isbn: '12345',
            publication_year: '2009',
            pages: 280,
            synopsis: 'JavaScript básico para iniciantes'
        })

        const bookUpdated = await updateBookService.execute({
            id: book.id,
            name: 'javaScript basic',
            author: 'John Doe Alterado',
            isbn: '12345',
            publication_year: '2009',
            pages: 280,
            synopsis: 'JavaScript básico para iniciantes'
        })
        expect(bookUpdated.author).toBe('John Doe Alterado')
    })

    it('should not be able update a book is not existent', async() => {       
        await expect(
            updateBookService.execute({
                id: '1020',
                name: 'javaScript basic',
                author: 'John Doe Alterado',
                isbn: '12345',
                publication_year: '2009',
                pages: 280,
                synopsis: 'JavaScript básico para iniciantes'
            })
        ).rejects.toBeInstanceOf(AppError)
    })
})