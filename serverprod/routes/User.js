import express from 'express'

const router = express.Router()

import { getAllUsers, register, login } from '../controller/User.js'

router.route('/users').get(getAllUsers)
router.route('/login').post(login)
router.route('/register').post(register)

export default router
