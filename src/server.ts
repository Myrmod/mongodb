import express from 'express'
import initializeServer from './initializeServer.js'
import * as http from 'http'
import cors from 'cors'

try {
  const app = express()
  const server = http.createServer(app)
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())
  app.use(cors())

  const port = process.env.VIRTUAL_PORT || 4000

  initializeServer().then(() => {

    server.listen(port, () => {
      console.info(`Server listening on port ${port}`)
    })
  })
} catch (error) {
  console.error('global error', error)
}
