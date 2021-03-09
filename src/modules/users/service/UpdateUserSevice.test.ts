import UpdateUserService from './UpdateUserService'
import FakeUsersRepository from '../repositories/fake/FakeUsersRepository'
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider'
import AppError from '../../../shared/errors/AppError'

let fakeUsersRepository: FakeUsersRepository
let fakeHashProvider: FakeHashProvider
let updateUserService: UpdateUserService

describe('UpdateUser', () => {
    beforeEach(() =>{
        fakeUsersRepository = new FakeUsersRepository()
        fakeHashProvider = new FakeHashProvider()

        updateUserService = new UpdateUserService(
            fakeUsersRepository,
            fakeHashProvider
        )
    })

    it('should be able to update a user', async () =>{
        const user = await fakeUsersRepository.create({
            name: 'thiago sama',
            email: 'thiago@sama.com',
            phone: '8192713545',
            password: '1020tr'
        })

        const updatedUser = await updateUserService.execute({
            id: user.id,
            name: 'thiago silva',
            email: 'thiagosilva@teste.com',
            phone: '81979009739'
        })

        expect(updatedUser.name).toBe('thiago silva')
        expect(updatedUser.email).toBe('thiagosilva@teste.com')
        expect(updatedUser.phone).toBe('81979009739')
    })

    
})
