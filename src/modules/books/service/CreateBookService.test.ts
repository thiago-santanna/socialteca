import CreateBookService from './CreateBookService'
import FakeBookRepository from '../repositories/fake/FakeBookRepository'
import AppError from '../../../shared/errors/AppError'

let fakeBookRepository: FakeBookRepository
let createBookService: CreateBookService

describe('CreateBookService', () => {
    beforeEach(() => {
        fakeBookRepository = new FakeBookRepository()
        createBookService = new CreateBookService()
    })

    it('should be able to crea book', () => {})
})