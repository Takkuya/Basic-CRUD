let secret = ''

//garantir que nunca vai passar um tipo de dado undefined, e sim um tipo de dado vazio, typescript restrict mode (restrict no check)
if (process.env.APP_SECRET) {
  secret = process.env.APP_SECRET
} else {
  throw new Error('No app secret defined')
}

export default {
  secret: secret,
  // secret: process.env.APP_SECRET || '',
  expiresIn: '7d',
}
