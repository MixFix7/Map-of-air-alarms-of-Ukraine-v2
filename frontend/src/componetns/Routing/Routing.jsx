import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../Home'
import Footer from '../Home/Footer'
import Map from '../Home/Map'


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/footer",
        element: <Footer/>
    },
    {
        path: "/map",
        element: <Map/>
    }
])

export default router