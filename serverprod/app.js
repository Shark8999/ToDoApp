import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import UserRoute from './routes/User.js'
import TaskRoute from './routes/Task.js'
import CategoryRoute from './routes/Category.js'
import TagRoute from './routes/Tag.js'
const app = express()
dotenv.config()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(UserRoute)
app.use(TaskRoute)
app.use(CategoryRoute)
app.use(TagRoute)

const start = async () => {
  await mongoose.connect(process.env.MONGO_URI)
  console.log('Database connected...')
  app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
  })
}

start()
