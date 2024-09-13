import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import App from '../App'
import About from '../pages/about'
import Contact from '../pages/contact'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <App />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
])

export default router