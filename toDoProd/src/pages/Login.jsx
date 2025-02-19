import { Link } from 'react-router'
import { useGlobalContext } from '../contexts/context'
const Login = () => {
  const { email, setEmail, setPassword, password, login, showModal } =
    useGlobalContext()
  return (
    <div className='relative flex flex-col justify-center h-screen overflow-hidden'>
      <div className='relative w-full p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl'>
        <div
          className='absolute top-0 right-1/3 toast'
          style={{ visibility: showModal ? 'visible' : 'hidden' }}
        >
          <div className='alert alert-info'>
            <span>Login Successfully</span>
          </div>
        </div>
        <h1 className='text-3xl font-semibold text-center text-gray-700'>
          Login
        </h1>
        <form className='space-y-4'>
          <div>
            <label className='label'>
              <span className='text-base label-text'>Email</span>
            </label>
            <input
              type='text'
              placeholder='Email Address'
              className='w-full input input-bordered'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              className='w-full input input-bordered'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button
              type='button'
              className='btn btn-block'
              onClick={() => login()}
            >
              Login
            </button>
          </div>
          <span>
            Not yet Signed In ?
            <Link
              to='/register'
              className='text-blue-600 hover:text-blue-800 hover:underline'
            >
              Register
            </Link>
          </span>
        </form>
      </div>
    </div>
  )
}
export default Login
