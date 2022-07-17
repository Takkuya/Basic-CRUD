import { Request, Response } from "express"

import jwt from "jsonwebtoken"
import User from "../models/user"
import { checkPassword } from "../services/auth"
import authConfig from "../config/auth"

class SessionController {
  async create(req: Request, res: Response) {
    try {
      const { email, password } = req.body

      const user = await User.findOne({ email })

      if (!user) {
        return res.status(401).json({ message: "User or password invalid" })
      }

      const checkingPassword = await checkPassword({ user, password })
      if (!checkingPassword) {
        return res.status(401).json({ message: "User or password invalid" })
      }

      //pegando id e username do user
      const { id, username } = user

      return res.json({
        user: {
          id,
          username,
          email,
        },
        token: jwt.sign(
          {
            id,
          },
          authConfig.secret,
          {
            expiresIn: authConfig.expiresIn,
          }
        ),
      })
    } catch (err) {
      console.error(err)
      return res.status(500).json({ message: "Internal server error" })
    }
  }
}

export default new SessionController()
