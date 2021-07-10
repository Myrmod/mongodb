import mongoose from 'mongoose'
// import { collections as neededCollections } from './structure.js'
import dotenv from 'dotenv'

const { DB_PORT, DB_NAME, DB_URL, DB_USERNAME, DB_PASSWORD } = dotenv.config().parsed!

export default class DB {
  private static instance: DB
  private static database: mongoose.Connection | undefined

  private constructor() {
    try {
      if (!DB_URL) throw new Error('no database url provided')
      if (!DB_PORT) throw new Error('no database port provided')
      if (!DB_NAME) throw new Error('no database name provided')
      if (!DB_USERNAME) throw new Error('no database username provided')
      if (!DB_PASSWORD) throw new Error('no database password provided')

      ;(async () => {
        console.info(`trying to connect to mongodb://${DB_URL}:${DB_PORT}/${DB_NAME}...`);

        await mongoose.connect(`mongodb://${DB_URL}:${DB_PORT}/${DB_NAME}`, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })

        DB.database = mongoose.connection
        DB.database.on('error', (error) => console.error(error))
        DB.database.once('open', () => console.info('connected to database'))
      })()
    } catch (error) {
      console.error('DB.constructor', error)
    }
  }

  public static async getInstance() {
    if (!DB.instance) DB.instance = new DB()

    return DB.instance
  }

  public getDatabase() {
    return DB.database
  }
}
