import Navbar from './Navbar'
import NavBarTRy from './NavBarTRy'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import  Container  from '../components/Container'

function Layout() {
  return (
    <div className='bg-[#f1f2f4]'>
        <div className='w-full bg-white sticky top-0 z-20'>
          <Container>
            <Navbar/>
            {/* <NavBarTRy/> */}
          </Container>
        </div>

        <div className='min-h-[61vh]'>
          <Container>
            <Outlet/>
          </Container>
        </div>

        <div className=''>
          <Footer/>
        </div>
        
    </div>
  )
}

export default Layout
