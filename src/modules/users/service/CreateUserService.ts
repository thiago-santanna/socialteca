import 'reflect-metadata';
import { inject, injectable } from 'tsyringe'

import IUsersRepository from '../repositories/IUsersRepository'
import ICreateUserDTO from '../dto/ICreateUserDTO'
import User from '../infra/typeorm/entities/User'

import AppError from '../../../shared/errors/AppError'
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

@injectable()
class CreateUserService{
    constructor(
        @inject('UsersRepository')
        private userRepository: IUsersRepository,

        @inject('HashProvider')
        private hashProvider: IHashProvider
    ){}

    public async execute({ name, email, phone, password }:ICreateUserDTO): Promise<User>{
        const userExists = await this.userRepository.findByEmail(email)

        if(userExists){
            throw new AppError('E-mail address already exists')
        }

        const hashedPassword = await this.hashProvider.generateHash(password)
        
        const user = await this.userRepository.create({
            name, 
            email, 
            phone, 
            password:hashedPassword
        })

        return user
    }
}

export default CreateUserService
