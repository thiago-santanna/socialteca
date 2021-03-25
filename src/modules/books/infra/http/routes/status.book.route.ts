import { Router } from 'express'
import ensureAuthenticated from '../../../../../shared/infra/http/middlewares/ensureAuthenticated'
import StatusBooksController from '../controllers/StatusBooksController'

const statusBookRoute = Router()

const statusBooksController = new StatusBooksController()

statusBookRoute.post(
    '/', 
    ensureAuthenticated,
    statusBooksController.changeStatus
)

export default statusBookRoute
