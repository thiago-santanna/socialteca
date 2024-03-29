import { ICreateUserDTO } from '../dto/IUserDTO'
import User from '../infra/typeorm/entities/User'

export default interface IUsersRepository{
    findById(id: string): Promise<User | undefined>
    findByEmail(email: string): Promise<User | undefined>
    create(data: ICreateUserDTO): Promise<User>
    update(user: User): Promise<User>
    changeStatus(user:User):Promise<User>
}
