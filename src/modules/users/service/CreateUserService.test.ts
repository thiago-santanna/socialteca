import crypto from 'crypto'
import CreateUserService from './CreateUserService'
import FakeUsersRepository from '../repositories/fake/FakeUsersRepository'
import AppError from '../../../shared/errors/AppError'

let fakeUsersRepository: FakeUsersRepository
let createUserService: CreateUserService    

const generate = () => {
    return crypto.randomBytes(20).toString('hex')
}

describe('CreateUser', () => {
    beforeEach(() =>{
        fakeUsersRepository = new FakeUsersRepository()
        createUserService = new CreateUserService(
            fakeUsersRepository
        )
    })

    it('should be able to create a user', async () => {
        const user = await createUserService.execute({
            name: 'thiago sama',
            email: 'thiago@sama.com',
            login: 'thiagosama',
            password: '123'
        })

        expect(user).toHaveProperty('name')
    })

    it('should be able to the verify exist email and stopapplication', async () => {
        await createUserService.execute({
            name: 'thiago sama',
            email: 'thiago@sama.com',
            login: 'thiagosama',
            password: '123'            
        })

        await expect(
            createUserService.execute({
                name: 'thiago sama',
                email: 'thiago@sama.com',
                login: 'thiagosama',
                password: '123'
            })
        ).rejects.toBeInstanceOf(AppError)
    })
})