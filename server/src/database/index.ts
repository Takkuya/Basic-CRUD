import mongoose, { ConnectOptions } from 'mongoose'

import databaseConfig from '../config/database'

export const connectDatabase = async () => {
  const databaseUri = databaseConfig.url as string

  try {
    const connection = await mongoose.connect(databaseUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions)
  } catch (err) {
    console.error(`Database connection error ${err}`)
  }
}
