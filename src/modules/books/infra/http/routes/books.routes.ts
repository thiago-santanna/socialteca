import { Router } from 'express'
import ensureAuthenticated from '../../../../../shared/infra/http/middlewares/ensureAuthenticated'
import CreateBooksController from '../controllers/CreateBooksController'
import UpdateBooksController from '../controllers/UpdateBooksController'
import FindBooksController from '../controllers/FindBooksController'
import DeleteBookController from '../controllers/DeleteBookController'

const booksRoutes = Router()

const createBooksController = new CreateBooksController()
const updateBooksController = new UpdateBooksController()
const findBooksController = new FindBooksController()
const deleteBooksController = new DeleteBookController()

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

booksRoutes.delete(
    '/',
    ensureAuthenticated,
    deleteBooksController.delete
)



export default booksRoutes
