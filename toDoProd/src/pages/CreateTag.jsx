import { Link } from 'react-router'
import { useGlobalContext } from '../contexts/context.jsx'

import { RxCross2 } from 'react-icons/rx'
import { useEffect } from 'react'
const CreateTag = () => {
  const { tagName, setTagName, createTag, myTag, getTags } = useGlobalContext()
  useEffect(() => {
    getTags()
  }, [])
  return (
    <div className='relative flex flex-col justify-center h-screen overflow-hidden'>
      <div className='relative w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl'>
        <Link to='/dash'>
          <RxCross2 className='absolute top-3 right-3 w-10 h-10 cursor-pointer' />
        </Link>
        <h1 className='text-3xl font-semibold text-center text-gray-700'>
          Tag
        </h1>
        <div className='space-y-4'>
          <div>
            <label className='label'>
              <span className='text-base label-text'>Name</span>
            </label>
            <input
              type='text'
              placeholder='Name'
              className='w-full input input-bordered'
              value={tagName}
              onChange={(e) => setTagName(e.target.value)}
            />
          </div>
          {myTag.map((cat) => {
            return (
              <div className='flex justify-between' key={cat._id}>
                <h1>Name</h1>
                <h1>{cat.name}</h1>
              </div>
            )
          })}
          <div className='flex justify-around'>
            <div>
              <button type='button' className='btn' onClick={() => createTag()}>
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
export default CreateTag
