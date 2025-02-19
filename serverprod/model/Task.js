import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['Todo', 'In Progress', 'Done'],
      required: true,
    },
    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High'],
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
)

export default mongoose.model('Task', TaskSchema)
