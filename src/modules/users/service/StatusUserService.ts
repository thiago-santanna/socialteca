import {inject, injectable} from 'tsyringe'
import User from '../infra/typeorm/entities/User'
import IUsersRepository from "../repositories/IUsersRepository"
import AppError from '../../../shared/errors/AppError'

@injectable()
class StatusUserService{
    constructor(
        @inject('UsersRepository')
        private userRepository: IUsersRepository
    ){}

    public async execute(id: string): Promise<User>{
        const user = await this.userRepository.findById(id)
        if(!user){
            throw new AppError('User does not exists')
        }
        const userUpdated = await this.userRepository.changeStatus(user)
        return userUpdated
    }
}

export default StatusUserService
