import { Router } from 'express'
import ensureAuthenticated from '../../../../../shared/infra/http/middlewares/ensureAuthenticated'
import CreateBooksController from '../controllers/CreateBooksController'

const booksRoutes = Router()

const createBooksController = new CreateBooksController()

booksRoutes.post(
    '/', 
    ensureAuthenticated, 
    createBooksController.create
)



export default booksRoutes
