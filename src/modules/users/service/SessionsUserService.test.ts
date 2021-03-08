import AppError from '../../../shared/errors/AppError'

import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider'
import FakeUsersRepository from '../repositories/fake/FakeUsersRepository'
import SessionsUserService from '../service/SessionsUserService'

let fakeUsersRepository: FakeUsersRepository
let fakeHashProvider: FakeHashProvider
let sessionsUserService: SessionsUserService

describe('SessionsUser', () => {
    beforeEach(() =>{
        fakeUsersRepository = new FakeUsersRepository
        fakeHashProvider = new FakeHashProvider

        sessionsUserService = new SessionsUserService(
            fakeUsersRepository,
            fakeHashProvider
        )
    })

    it('should be able to authenticate', async () =>{
        const hashedPassword = await fakeHashProvider.generateHash('123456')
        const user = await fakeUsersRepository.create({
            name: 'thiago sama',
            email: 'thiago@sama.com',
            phone: '81992713545',
            password: hashedPassword
        })

        const response = await sessionsUserService.execute({
            email: 'thiago@sama.com',
            password: hashedPassword
        })

        expect(response).toHaveProperty('token')
        expect(response.user).toEqual(user)
    })
})