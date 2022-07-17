import { Response, Request } from "express"
import User from "../models/user"
import { createPasswordHash } from "../services/auth"

class RepositoryController {
  async index(req: Request, res: Response) {
    try {
      const users = await User.find()
      return res.json(users)
    } catch (err) {
      console.error(err)
      return res.status(500).json({ error: "Internal server error" })
    }
  }

  //mostrar usuário específicio
  async show(req: Request, res: Response) {
    try {
      const { id } = req.params
      const user = await User.findById(id)

      if (!user) {
        return res.status(404).json({ message: "User not found" })
      }

      return res.json(user)
    } catch (err) {
      console.error(err)
      return res.status(500).json({ message: "Internal server error" })
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { username, email, password } = req.body

      const user = await User.findOne({ email })

      if (user) {
        return res
          .status(422)
          .json({ message: `User ${username} already exist` })
      }

      const encryptedPassword = await createPasswordHash(password)

      //criando usuário
      const newUser = await User.create({
        username,
        email,
        password: encryptedPassword,
      })

      return res.status(201).json(newUser)
    } catch (err) {
      console.error(err)
      return res.status(500).json({ message: "Internal server error" })
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params

      const { email, username, password } = req.body

      const user = await User.findById(id)

      if (!user) {
        return res.status(404).json({ message: "User not found" })
      }

      const encryptedPassword = await createPasswordHash(password)

      await user.updateOne({ email, username, password: encryptedPassword })

      return res
        .status(200)
        .json({ message: "Informações alteradas com sucesso!!!!" })
    } catch (err) {
      console.error(err)
      return res.status(500).json({ message: "Internal server error" })
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params

      const user = await User.findById(id)

      if (!user) {
        return res.status(404).json({ message: "User not found" })
      }

      await user.deleteOne()

      return res.status(200).json({ message: "User deleted" })
    } catch (err) {}
  }
}

export default new RepositoryController()
