import { Router } from 'express';

import userRoutes from '../../../../modules/users/infra/http/routes/user.routes'
import sessionsRoutes from '../../../../modules/users/infra/http/routes/sessions.routes'
import statusUserRoutes from '../../../../modules/users/infra/http/routes/statusUser.routes'

import booksRoutes from '../../../../modules/books/infra/http/routes/books.routes'

const routes = Router();

routes.use('/users', userRoutes)
routes.use('/sessions', sessionsRoutes)
routes.use('/status', statusUserRoutes)
routes.use('books', booksRoutes)

export default routes;
