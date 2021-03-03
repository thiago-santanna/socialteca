import 'reflect-metadata';
import { inject, injectable } from 'tsyringe'

import IUsersRepository from '../repositories/IUsersRepository'
import ICreateUserDTO from '../dto/ICreateUserDTO'
import User from '../infra/typeorm/entities/User'

@injectable()
class CreateUserService{
    constructor(
        @inject('UsersRepository')
        private userRepository: IUsersRepository
    ){}

    public async execute(
        { name, email, login, password }:ICreateUserDTO
    ): Promise<User>{
        
        const user = await this.userRepository.create({
            name, email, login, password
        })

        return user
    }
}

export default CreateUserService
