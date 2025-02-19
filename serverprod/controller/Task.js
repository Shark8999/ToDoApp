import Task from '../model/Task.js'

export const getAllTasks = async (req, res) => {
  try {
    const data = await Task.find({}).populate('userId')
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
export const createTask = async (req, res) => {
  try {
    const data = await Task.create(req.body)
    res.status(201).json({ data })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
export const getTask = async (req, res) => {
  try {
    const data = await Task.findById(req.params.id).populate('userId')
    res.status(200).json({ data })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
export const updateTask = async (req, res) => {
  try {
    const data = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    res.status(201).json({ data })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
export const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: 'Task deleted !!!' })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
