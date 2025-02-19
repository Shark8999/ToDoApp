import { Link } from 'react-router'
import { RxCross2 } from 'react-icons/rx'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { useGlobalContext } from '../contexts/context'
import { useNavigate } from 'react-router'
const TaskDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { getTask, task, deleteTask } = useGlobalContext()
  useEffect(() => {
    getTask(id)
  }, [])
  return (
    <div className='relative flex flex-col justify-center h-screen overflow-hidden'>
      <div className='relative w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl'>
        <Link to='/dash'>
          <RxCross2 className='absolute top-3 right-3 w-10 h-10 cursor-pointer' />
        </Link>
        <h1 className='text-3xl font-semibold text-center text-gray-700'>
          Task {id}
        </h1>
        <div className='space-y-4'>
          <div>
            <label className='label'>
              <span className='text-base label-text'>Title : {task.title}</span>
            </label>
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'>
                Description : {task.description}
              </span>
            </label>
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'>
                dueDate : {task.createdAt}
              </span>
            </label>
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'>Status:{task.status}</span>
            </label>
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'>
                Priority : {task.priority}
              </span>
            </label>
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'>
                Category : {task.category}
              </span>
            </label>
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'>Tags:{task.tag}</span>
            </label>
          </div>
          <div className='flex justify-around'>
            <div>
              <button
                className='btn'
                onClick={() => navigate(`/edit-task/${id}`)}
              >
                Edit
              </button>
            </div>
            <div>
              <button className='btn btn-block' onClick={() => deleteTask(id)}>
                Delete
              </button>
            </div>
            <div>
              <button className='btn btn-block'>Mark Complete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default TaskDetail
