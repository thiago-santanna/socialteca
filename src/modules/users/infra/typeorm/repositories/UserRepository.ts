import { getRepository, Repository } from 'typeorm'
import ICreateUserDTO from '../../../dto/ICreateUserDTO'
import IUserRepository from '../../../repositories/IUsersRepository'
import User from '../entities/User'

class UserRepository implements IUserRepository{
    private ormRepository: Repository<User>

    constructor(){
        this.ormRepository = getRepository(User)
    }
    public async create(data: ICreateUserDTO): Promise<User> {
        const user = this.ormRepository.create(data)

        await this.ormRepository.save(user)

        return user
    }

}

export default UserRepository
