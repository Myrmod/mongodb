import database from './database/initialize.js'

export default async function initializeServer() {
  try {
    const db = await database.getInstance()
  } catch (error) {
    console.error('database initialization', error)
  }
}
