import { Router } from 'express'

import ensureAuthenticated from '../../../../../shared/infra/http/middlewares/ensureAuthenticated'

const booksRoutes = Router()

export default booksRoutes
