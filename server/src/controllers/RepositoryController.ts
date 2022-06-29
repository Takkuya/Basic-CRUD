import { Request, Response } from 'express'

import User from '../models/user'
import Repository from '../models/repository'

class RepositoryController {
  async index(req: Request, res: Response) {
    try {
      const { user_id } = req.params
      const user = User.findById(user_id)

      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }

      const repositories = await Repository.find({
        userId: user_id,
      })

      return res.json(repositories)
    } catch (err) {
      console.error(err)
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { user_id } = req.params
      const { repositoryName } = req.body

      const user = await User.findById(user_id)

      if (!user) {
        return res.status(404).json({ message: 'User not found' })
      }

      const repository = await Repository.findOne({
        userId: user_id,
        repositoryName: repositoryName,
      })

      //removendo espaços em branco na URL
      const validateRepositoryName = repositoryName.replace(/\s/g, '')

      const url = `/${user.username}/${validateRepositoryName}`

      if (repository) {
        console.log(repository)
        console.log(url)
        return res
          .status(422)
          .json({ message: `Repository ${repositoryName} already exist.` })
      }

      const newRepository = await Repository.create({
        userId: user_id,
        repositoryName,
        url,
      })

      return res.status(201).json(newRepository)
    } catch (err) {
      console.error(err)
      return res.status(500).json({ message: 'Internal server error' })
    }
  }
}

export default new RepositoryController()
