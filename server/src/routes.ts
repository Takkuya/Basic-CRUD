import express from 'express'
import RepositoryController from './controllers/RepositoryController'
import TestController from './controllers/TestController'
import UserController from './controllers/UserController'

export const routes = express.Router()

routes.get('/test', TestController.index)

routes.get('/users', UserController.index)

routes.post('/users', UserController.create)

routes.delete('/users/:id', UserController.delete)

routes.get('/users/:user_id/repositories', RepositoryController.index)

routes.post('/users/:user_id/repositories', RepositoryController.create)
