import AppError from '../../../shared/errors/AppError'

import FakeUsersRepository from '../repositories/fake/FakeUsersRepository'
import StatusUserService from '../service/StatusUserService'

let fakeUsersRepository: FakeUsersRepository
let statusUserService: StatusUserService

describe('StatusUser', async () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository
    statusUserService = new StatusUserService(fakeUsersRepository)
  })

  it('should be able to change status', async () => {})

  it('shold not be able to change status without the user', async () => {})
})