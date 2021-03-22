import CreateBookService from './CreateBookService'
import FakeBookRepository from '../repositories/fake/FakeBookRepository'
import AppError from '../../../shared/errors/AppError'

let fakeBookRepository: FakeBookRepository
let createBookService: CreateBookService

describe('CreateBookService', () => {
    beforeEach(() => {
        fakeBookRepository = new FakeBookRepository()
        createBookService = new CreateBookService(fakeBookRepository)
    })

    it('should be able to create book', async () => {
        const book = await createBookService.service({
            name: 'javaScript basic',
            author: 'John Doe',
            isbn: '12345',
            publication_year: '2009',
            pages: 280,
            synopsis: 'JavaScript básico para iniciantes'
        })

        expect(book).toHaveProperty('name')
    })

    it('should not be able to create a book already saved', async () => {
        await createBookService.service({
            name: 'javaScript basic',
            author: 'John Doe',
            isbn: '12345',
            publication_year: '2009',
            pages: 280,
            synopsis: 'JavaScript básico para iniciantes'
        })

        await expect(
            createBookService.service({
                name: 'javaScript basic',
                author: 'John Doe',
                isbn: '12345',
                publication_year: '2009',
                pages: 280,
                synopsis: 'JavaScript básico para iniciantes'
            })
        ).rejects.toBeInstanceOf(AppError)
    })    

})