import { useEffect } from 'react'
import TaskItem from '../components/TaskItem.jsx'
import { Link, useNavigate } from 'react-router'
import { useGlobalContext } from '../contexts/context.jsx'
const Dashboard = () => {
  const navigate = useNavigate()
  const { getAllTasks, tasks } = useGlobalContext()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
    getAllTasks()
  }, [])

  return (
    <div className='relative flex flex-col justify-center h-screen overflow-hidden'>
      <div className='w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl'>
        <div className='flex justify-around'>
          <button className='btn'>
            <Link to='/add-category'>Category</Link>
          </button>
          <h1 className='text-3xl font-semibold text-center text-gray-700'>
            To Do
          </h1>

          <Link className='btn' to='/add-tag'>
            Tag
          </Link>
        </div>
        <label className='input input-bordered flex items-center gap-2 my-10'>
          <input type='text' className='grow' placeholder='Search' />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
            fill='currentColor'
            className='h-4 w-4 opacity-70'
          >
            <path
              fillRule='evenodd'
              d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
              clipRule='evenodd'
            />
          </svg>
        </label>

        <Link
          className='btn btn-outline w-full mb-10 bg-black text-white'
          to='/add-task'
        >
          Add Task
        </Link>

        {tasks.map((task) => {
          return (
            <div
              className='flex flex-col cursor-pointer'
              key={task._id}
              onClick={() => navigate(`/task-detail/${task._id}`)}
            >
              <TaskItem
                title={task.title}
                status={task.status}
                due={task.createdAt}
                priority={task.priority}
              />
            </div>
          )
        })}
        <div className='join grid grid-cols-2'>
          <button className='join-item btn btn-outline'>Previous page</button>
          <button className='join-item btn btn-outline'>Next page</button>
        </div>
      </div>
    </div>
  )
}
export default Dashboard
