import { Link } from 'react-router'
const Navbar = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='navbar-center'>
          <a className='btn btn-ghost text-xl'>
            <Link to='/'>My ToDo</Link>
          </a>
        </div>
      </div>
      <div className='navbar-end'>
        <Link className='btn btn-active mr-6' to='/login'>
          Login
        </Link>
      </div>
    </div>
  )
}
export default Navbar
