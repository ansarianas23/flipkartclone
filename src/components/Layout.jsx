import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='bg-[#f1f2f4]'>
      <div className='sticky top-0 z-20'>
        <Navbar/>
      </div>

      <div>
        <Outlet/>
      </div>

      {/* <div className=''>
        <Footer/>
      </div> */}
        
    </div>
  )
}

export default Layout
