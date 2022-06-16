import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.resolve(process.cwd(), '.env'),
})

import express from 'express'
import cors from 'cors'
import { routes } from './routes'

import { connectDatabase } from './database'
import './database'

export const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)

//conectando ao mongoDB
connectDatabase()

app.listen(5000, () => {
  console.log(`Server running on port ${5000}`)
})
