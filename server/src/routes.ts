import express from 'express'
import { auth } from './middleware/auth'
import RepositoryController from './controllers/RepositoryController'
import TestController from './controllers/TestController'
import UserController from './controllers/UserController'
import SessionController from './controllers/SessionController'

export const routes = express.Router()

routes.post('/sessions', SessionController.create)
routes.get('/test', TestController.index)

// routes.use(auth)

routes.get('/users', UserController.index)

routes.get('/users/:id', UserController.show)

routes.post('/users', UserController.create)

routes.delete('/users/:id', UserController.delete)

routes.get('/users/:user_id/repositories', RepositoryController.index)

routes.post('/users/:user_id/repositories', RepositoryController.create)

routes.delete('/users/:user_id/repositories/:id', RepositoryController.delete)
