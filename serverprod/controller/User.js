import User from '../model/User.js'
import jwt from 'jsonwebtoken'
export const getAllUsers = async (req, res) => {
  try {
    const data = await User.find({})
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body
    if (!name && !email && !password) {
      throw new Error('Insert all fields!!!')
    }
    const data = await User.create(req.body)
    res.status(201).json({ data })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email && !password) {
      throw new Error('Insert all fields!!!')
    }
    const user = await User.findOne({ email })
    if (!user) {
      throw new Error('No user with this email')
    }
    if (!user.comparePassword(password)) {
      throw new Error('Password does not match')
    }
    const token = jwt.sign({ id: user._id, email }, process.env.JWT_SECRET)
    res.status(200).json({ token, id: user._id })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
