import { Link } from 'react-router'
import { RxCross2 } from 'react-icons/rx'
import { useGlobalContext } from '../contexts/context.jsx'
import { useEffect } from 'react'
const AddTask = () => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    status,
    setStatus,
    priority,
    setPriority,
    category,
    setCategory,
    tag,
    setTag,
    getCategories,
    getTags,
    createTask,
    myTag,
    myCategory,
  } = useGlobalContext()
  useEffect(() => {
    getCategories()
    getTags()
  }, [])
  return (
    <div className='relative flex flex-col justify-center h-screen overflow-hidden'>
      <div className='relative w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl'>
        <Link to='/dash'>
          <RxCross2 className='absolute top-3 right-3 w-10 h-10 cursor-pointer' />
        </Link>
        <h1 className='text-3xl font-semibold text-center text-gray-700'>
          Add Task
        </h1>
        <div className='space-y-4'>
          <div>
            <label className='label'>
              <span className='text-base label-text'>Title</span>
            </label>
            <input
              type='text'
              placeholder='Title'
              className='w-full input input-bordered'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'>Description</span>
            </label>
            <input
              type='text'
              placeholder='Description'
              className='w-full input input-bordered'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'>Status</span>
            </label>
            <select
              className='select select-bordered w-full max-w-xs'
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value='To-Do'>To-Do</option>
              <option value='In Progress'>In Progress</option>
              <option value='Done'>Done</option>
            </select>
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'>Priority</span>
            </label>
            <select
              className='select select-bordered w-full max-w-xs'
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'>Category</span>
            </label>
            <select
              className='select select-bordered w-full max-w-xs'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {myCategory.map((cat) => {
                return (
                  <option key={cat._id} value={cat.name}>
                    {cat.name}
                  </option>
                )
              })}
            </select>
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'>Tags</span>
            </label>
            <select
              className='select select-bordered w-full max-w-xs'
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            >
              {myTag.map((cat) => {
                return (
                  <option key={cat._id} value={cat.name}>
                    {cat.name}
                  </option>
                )
              })}
            </select>
          </div>
          <div className='flex justify-around'>
            <div>
              <button
                type='button'
                className='btn'
                onClick={() => createTask()}
              >
                Save
              </button>
            </div>
            <div>
              <button className='btn btn-block'>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AddTask
