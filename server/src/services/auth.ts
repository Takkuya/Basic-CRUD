import bcrypt, { compare } from 'bcryptjs'

interface CheckPassword {
  user: {
    email: string
    password: string
  }
  password: string
}

export const createPasswordHash = async (password: string) => {
  return bcrypt.hash(password, 8)
}

export const checkPassword = async ({ user, password }: CheckPassword) => {
  return await compare(password, user.password)
}
