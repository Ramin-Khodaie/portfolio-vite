import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout() {

    const location = useLocation();

    return (
        <div className='h-screen flex flex-col'>
            <Header />
            <div className='flex-1'>
                <Outlet />
            </div>
            {location.pathname !== '/contact' && <Footer />}

        </div>
    )
}

export default Layout