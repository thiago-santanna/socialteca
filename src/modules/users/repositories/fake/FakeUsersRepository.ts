import { uuid } from 'uuidv4'

import IUsersRepository from '../IUsersRepository'
import User from '../../infra/typeorm/entities/User'
import { ICreateUserDTO } from '../../dto/IUserDTO'

class FakeUsersRepository implements IUsersRepository {
    private users: User[] = []

    public async findById(id: string): Promise<User | undefined> {
        const user = this.users.find(user => user.id === id)
        return user
    }

    public async update(user: User): Promise<User> {
        const indexUser = this.users.findIndex(usr => usr.id === user.id)
        this.users[indexUser] = user
        const updatedUser = this.users[indexUser]
        return updatedUser
    }    

    public async create(data: ICreateUserDTO): Promise<User> {
        const user = new User();

        Object.assign(user, {id: uuid() }, data)

        this.users.push(user);

        return user
    }

    public async findByEmail(email: string): Promise<User | undefined> {
        const user = this.users.find(usr => usr.email === email)
        return user
    }

    public async changeStatus(user: User): Promise<User> {
        if(user){
            user.status = user.status === 1 ? 0 : 1
        }
        return user
    }
}

export default FakeUsersRepository
