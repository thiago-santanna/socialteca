import { Sequelize } from 'sequelize'

import dbConfig from '../../config/db-config.js'

const sequelize = new Sequelize(dbConfig.development)

export default sequelize
