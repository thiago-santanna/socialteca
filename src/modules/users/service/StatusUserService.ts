import {inject, injectable} from 'tsyringe'
import User from '../infra/typeorm/entities/User';
import IUsersRepository from "../repositories/IUsersRepository";
import AppError from '../../../shared/errors/AppError'

@injectable()
class StatusUserService{
    constructor(
        @inject('UsersRepository')
        private userRepository: IUsersRepository
    ){}

    public async execute({}): Promise<void>{

    }
}

export default StatusUserService
