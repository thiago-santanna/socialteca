import AppError from '../../../shared/errors/AppError'
import User from '../infra/typeorm/entities/User'

import FakeUsersRepository from '../repositories/fake/FakeUsersRepository'
import StatusUserService from '../service/StatusUserService'

let fakeUsersRepository: FakeUsersRepository
let statusUserService: StatusUserService

describe('StatusUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository
    statusUserService = new StatusUserService(fakeUsersRepository)
  })

  it('should be able to change status', async () => {
    const user = await fakeUsersRepository.create({
      name: 'thiago sama',
      email: 'thiago@sama.com',
      phone: '8192713545',
      password: '12345'
    })
    user.status = 1
    const userUpdated = await statusUserService.execute(user.id)    
    expect(userUpdated.status).toBe(0)
  })
})