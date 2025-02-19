import jwt from 'jsonwebtoken'
export const auth = async (req, res, next) => {
  const token = req.headers.Authorization
  const decodedToken = token.split(' ')[1]
  if (!decodedToken) {
    throw new Error('No token present!')
  }
  if (!jwt.decode(process.env.JWT_SECRET)) {
    throw new Error('Token not correct')
  }
  next()
}
