import Tag from '../model/Tag.js'

export const getAllTags = async (req, res) => {
  try {
    const data = await Tag.find({}).populate('userId')
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
export const createTag = async (req, res) => {
  try {
    const data = await Tag.create(req.body)
    res.status(201).json({ data })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
export const getTag = async (req, res) => {
  try {
    const data = await Tag.findById(req.params.id).populate('userId')
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
export const updateTag = async (req, res) => {
  try {
    const data = await Tag.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    res.status(201).json({ data })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
export const deleteTag = async (req, res) => {
  try {
    await Tag.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: 'Tag deleted !!!' })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
