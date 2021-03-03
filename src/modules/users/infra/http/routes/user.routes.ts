import { Router } from 'express'

import CreateUserController from '../controllers/CreateUserController'
import UpdateUserController from '../controllers/UpdateUserController'

const userRoutes = Router()

const createUserController = new CreateUserController()
const updateUserController = new UpdateUserController()

userRoutes.post('/', createUserController.create)

userRoutes.put('/', updateUserController.update)

export default userRoutes
