import express from 'express'

const router = express.Router()

import {
  getAllCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from '../controller/Category.js'

router.route('/category').get(getAllCategories).post(createCategory)
router
  .route('/category/:id')
  .get(getCategory)
  .put(updateCategory)
  .delete(deleteCategory)

export default router
