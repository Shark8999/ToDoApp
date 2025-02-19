import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
const Container = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
export default Container
