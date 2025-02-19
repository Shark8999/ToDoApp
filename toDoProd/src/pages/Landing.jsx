import { Link } from 'react-router'
const Landing = () => {
  return (
    <div className='flex flex-col min-h-screen justify-center items-center font-bold md:text-4xl text-lg'>
      <p>Your To-Do App</p>
      <p> Register and Start your Experience</p>
      <p>
        <Link className='text-violet-400 md:text-2xl text-base' to='/register'>
          Register
        </Link>
        <span className='md:text-2xl text-base'> Now</span>
      </p>
    </div>
  )
}
export default Landing
