import 'reflect-metadata'
import { inject, injectable } from 'tsyringe'
import IUsersRepository from '../repositories/IUsersRepository'
import IHashProvider from '../providers/HashProvider/models/IHashProvider'
import AppError from '../../../shared/errors/AppError'
import User from '../infra/typeorm/entities/User'

interface iRequest{
    id: string
    name: string
    phone: string
    email: string
}

@injectable()
class UpdateUserService{
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,

        @inject('HashProvider')
        private hashProvider: IHashProvider
    ){}

    public async execute({id, name, phone, email}:iRequest): Promise<User>{
        const user = await this.usersRepository.findById(id)

        if(!user){
            throw new AppError('User not found')
        }

        user.name = name
        user.phone = phone
        user.email = email

        return this.usersRepository.update(user)
    }
}

export default UpdateUserService
