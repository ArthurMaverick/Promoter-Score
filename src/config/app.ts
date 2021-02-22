import express from 'express'
import setupmiddleware from './middeware'
import setupRoutes from './routes'
export const app = express()

setupmiddleware(app)
setupRoutes(app)
