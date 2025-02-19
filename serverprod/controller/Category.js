import Category from '../model/Category.js'

export const getAllCategories = async (req, res) => {
  try {
    const data = await Category.find({}).populate('userId')
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
export const createCategory = async (req, res) => {
  try {
    const data = await Category.create(req.body)
    res.status(201).json({ data })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
export const getCategory = async (req, res) => {
  try {
    const data = await Category.findById(req.params.id).populate('userId')
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
export const updateCategory = async (req, res) => {
  try {
    const data = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    res.status(201).json({ data })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
export const deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: 'Category deleted !!!' })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
