export {}

type EnvString = Record<'MONGODB_URI' | 'APP_SECRET', string>

declare global {
  namespace NodeJs {
    interface ProcessEnv extends EnvString {}
  }
}
