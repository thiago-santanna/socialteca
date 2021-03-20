import { Router } from 'express'

import CreateUserController from '../controllers/CreateUserController'
import UpdateUserController from '../controllers/UpdateUserController'

import ensureAuthenticated from '../middwares/ensureAuthenticated'

const userRoutes = Router()

const createUserController = new CreateUserController()
const updateUserController = new UpdateUserController()

userRoutes.post('/', createUserController.create)

userRoutes.put('/',ensureAuthenticated, updateUserController.update)

export default userRoutes
