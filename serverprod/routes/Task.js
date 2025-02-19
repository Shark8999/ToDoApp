import express from 'express'

const router = express.Router()

import {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from '../controller/Task.js'

router.route('/task').get(getAllTasks).post(createTask)
router.route('/task/:id').get(getTask).put(updateTask).delete(deleteTask)

export default router
