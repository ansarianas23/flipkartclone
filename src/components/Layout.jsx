import Footer from './Footer'
import { Outlet, useLocation } from 'react-router-dom'
import MaxWidthContainer from './MaxWidthContainer';

import Header from './Header'



function Layout() {

  const location = useLocation();
  const { pathname } = location;


  return (
    <div className='bg-[#f1f2f4]'>
        <div className={`w-full ${pathname=="/home" || pathname=="/"? "bg-white" : "bg-flipkart-blue"} sticky top-0 z-20`}>
          <MaxWidthContainer>
            <Header/>
          </MaxWidthContainer>
        </div>

        <div className='min-h-[61vh]'>
          <MaxWidthContainer>
            <Outlet/>
          </MaxWidthContainer>
        </div>

        {pathname !== "/cart" && <div className=''>
          <Footer/>
        </div>}
        
    </div>
  )
}

export default Layout
