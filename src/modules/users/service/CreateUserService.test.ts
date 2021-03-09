import CreateUserService from './CreateUserService'
import FakeUsersRepository from '../repositories/fake/FakeUsersRepository'
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider'
import AppError from '../../../shared/errors/AppError'

let fakeUsersRepository: FakeUsersRepository
let fakeHashProvider: FakeHashProvider
let createUserService: CreateUserService

describe('CreateUser', () => {
    beforeEach(() =>{
        fakeUsersRepository = new FakeUsersRepository()
        fakeHashProvider = new FakeHashProvider()

        createUserService = new CreateUserService(
            fakeUsersRepository,
            fakeHashProvider
        )
    })

    it('should be able to create a user', async () => {
        const hashedPassword = await fakeHashProvider.generateHash('123456')

        const user = await createUserService.execute({
            name: 'thiago sama',
            email: 'thiago@sama.com',
            phone: '8192713545',
            password: hashedPassword
        })

        expect(user).toHaveProperty('name')
    })

    it('should be able to the verify exist email and stopapplication', async () => {
        const hashedPassword = await fakeHashProvider.generateHash('123456')

        await createUserService.execute({
            name: 'thiago sama',
            email: 'thiago@sama.com',
            phone: '8192713545',
            password: hashedPassword            
        })

        await expect(
            createUserService.execute({
                name: 'thiago sama',
                email: 'thiago@sama.com',
                phone: '8192713545',
                password: hashedPassword
            })
        ).rejects.toBeInstanceOf(AppError)
    })
})