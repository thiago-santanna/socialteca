import { Router } from 'express';

import userRoutes from '../../../../modules/users/infra/http/routes/user.routes'
import sessionsRoutes from '../../../../modules/users/infra/http/routes/sessions.routes'
import statusUserRoutes from '../../../../modules/users/infra/http/routes/statusUser.routes'

const routes = Router();

routes.use('/users', userRoutes)
routes.use('/sessions', sessionsRoutes)
routes.use('/statusUser', statusUserRoutes)

export default routes;
