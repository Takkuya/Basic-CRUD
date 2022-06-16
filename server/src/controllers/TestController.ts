import { Request, Response } from 'express'

class TestController {
  async index(req: Request, res: Response) {
    return res.json({ Hello: 'Hello World' })
  }
}

export default new TestController()
