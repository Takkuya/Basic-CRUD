import express from 'express'
import TestController from './controllers/TestController'

export const routes = express.Router()

routes.get('/test', TestController.index)
