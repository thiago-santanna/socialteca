import { container } from 'tsyringe'

import '../../modules/users/providers';

import IUsersRepository from '../../modules/users/repositories/IUsersRepository'
import UserRepository from '../../modules/users/infra/typeorm/repositories/UserRepository'

import IUserTokensRepository from '../../modules/users/repositories/IUserTokensRepository'
import UserTokensRepository from '../../modules/users/infra/typeorm/repositories/UserTokensRepository';

import IBooksRepository from '../../modules/books/repositories/IBooksRepository'
import BookRepository from '../../modules/books/infra/typeorm/repositories/BookRepository'

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UserRepository
)

container.registerSingleton<IUserTokensRepository>(
    'UserTokensRepository',
    UserTokensRepository,
  );

container.registerSingleton<IBooksRepository>(
    'BooksRepository',
    BookRepository
)
