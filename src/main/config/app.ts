import express from 'express'
import setupmiddleware from './middeware'
import setupRoutes from './routes'
const app = express()

setupmiddleware(app)
setupRoutes(app)

export default app
