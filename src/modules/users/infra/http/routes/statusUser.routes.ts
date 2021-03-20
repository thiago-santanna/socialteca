import { Router } from 'express'
import StatusUserControllers from '../controllers/StatusUserController'
import ensureAuthenticated from '../../../../../shared/infra/http/middlewares/ensureAuthenticated'

const statusRoutes = Router()
const statusUserControllers = new StatusUserControllers()

statusRoutes.use(ensureAuthenticated)
statusRoutes.post('/', 
    ensureAuthenticated,
    statusUserControllers.statusUserChange
)

export default statusRoutes