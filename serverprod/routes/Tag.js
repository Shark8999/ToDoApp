import express from 'express'

const router = express.Router()

import {
  getAllTags,
  getTag,
  createTag,
  updateTag,
  deleteTag,
} from '../controller/Tag.js'

router.route('/tag').get(getAllTags).post(createTag)
router.route('/tag/:id').get(getTag).put(updateTag).delete(deleteTag)

export default router
