import { uuid } from 'uuidv4'

import IUsersRepository from '../IUsersRepository'
import User from '../../infra/typeorm/entities/User'
import ICreateUserDTO from '../../dto/ICreateUserDTO'

class FakeUsersRepository implements IUsersRepository {
    private users: User[] = []

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
}

export default FakeUsersRepository
