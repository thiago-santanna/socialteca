import { Router } from 'express'

import db from '../../../db/index.js'

const routes = Router()

routes.get('/', async (req, res) => {
    try {
        await db.authenticate();
        res.json({message:'Connection has been established successfully.'})
    } catch (error) {
        res.json({message: 'Unable to connect to the database: ' + error})
    }
})

export default routes
