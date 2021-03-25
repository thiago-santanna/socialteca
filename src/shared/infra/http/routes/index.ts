import { Router } from 'express';

import userRoutes from '../../../../modules/users/infra/http/routes/user.routes'
import sessionsRoutes from '../../../../modules/users/infra/http/routes/sessions.routes'
import statusUserRoutes from '../../../../modules/users/infra/http/routes/statusUser.routes'

import booksRoutes from '../../../../modules/books/infra/http/routes/books.routes'
import bookStatus from '../../../../modules/books/infra/http/routes/status.book.route'

const routes = Router();

routes.use('/sessions', sessionsRoutes)
routes.use('/users', userRoutes)
routes.use('/users/status', statusUserRoutes)
routes.use('/books', booksRoutes)
routes.use('/books/status', bookStatus)

export default routes;
