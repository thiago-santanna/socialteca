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

    public async findByEmail(email: string): Promise<User | undefined> {
        const user = this.ormRepository.findOne({
            where: { email }
        })

        return user
    }

    public async findById(id: string): Promise<User | undefined> {
        const user = await this.ormRepository.findOne({
            where: { id }
        })

        return user
    }

    public async update(user: User): Promise<User> {
        return this.ormRepository.save(user)
    }    

    public async changeStatus(id: string):Promise<User | undefined> {
        const user = await this.ormRepository.findOne({
            where: { id }
        })

        if(!user) return user

        user.status = user.status === 1 ? 0 : 1
        return this.ormRepository.save(user)        
    }

}

export default UserRepository
