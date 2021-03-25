import { Router } from 'express'
import ensureAuthenticated from '../../../../../shared/infra/http/middlewares/ensureAuthenticated'
import CreateBooksController from '../controllers/CreateBooksController'
import UpdateBooksController from '../controllers/UpdateBooksController'
import FindBooksController from '../controllers/FindBooksController'

const booksRoutes = Router()

const createBooksController = new CreateBooksController()
const updateBooksController = new UpdateBooksController()
const findBooksController = new FindBooksController()

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

booksRoutes.get(
    '/',
    ensureAuthenticated,
    findBooksController.find
)



export default booksRoutes
