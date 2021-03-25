import { Router } from 'express'
import ensureAuthenticated from '../../../../../shared/infra/http/middlewares/ensureAuthenticated'
import CreateBooksController from '../controllers/CreateBooksController'
import UpdateBooksController from '../controllers/UpdateBooksController'

const booksRoutes = Router()

const createBooksController = new CreateBooksController()
const updateBooksController = new UpdateBooksController()

booksRoutes.post(
    '/', 
    ensureAuthenticated, 
    createBooksController.create
)

booksRoutes.put(
    '/',
    ensureAuthenticated,
    updateBooksController.update
)



export default booksRoutes
