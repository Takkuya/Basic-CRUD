import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import authConfig from '../config/auth'

export async function auth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(404).json({ message: 'Token was not provided' })
  }

  //separando token do cabeçalho
  const [, token] = authHeader.split(' ')

  const authenticationConfig = authConfig.secret as string

  try {
    //sub => user_id
    const { sub } = jwt.verify(token, authenticationConfig)

    //tirar o erro do "userId' does not exist on type 'Request<ParamsDictionary" preciso mexer nos types do Express
    req.userId = sub as unknown as string
    return next()
  } catch (err) {
    console.error(err)
    return res.status(401).json({ message: 'Invalid Token' })
  }
}
