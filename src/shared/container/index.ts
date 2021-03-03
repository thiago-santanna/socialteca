import { container } from 'tsyringe'

// import '@modules/users/providers';
// import './providers';

import IUsersRepository from '../../modules/users/repositories/IUsersRepository'
import UserRepository from '../../modules/users/infra/typeorm/repositories/UserRepository'

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UserRepository
)
