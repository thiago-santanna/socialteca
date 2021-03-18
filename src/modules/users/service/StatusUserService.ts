import {inject, injectable} from 'tsyringe'
import User from '../infra/typeorm/entities/User';
import IUsersRepository from "../repositories/IUsersRepository";

@injectable()
class StatusUserService{
    constructor(
        @inject('UsersRepository')
        private userRepository: IUsersRepository
    ){}

    public async execute(user: User): Promise<User>{
        const userUpdated = await this.userRepository.changeStatus(user)
        return userUpdated
    }
}

export default StatusUserService
