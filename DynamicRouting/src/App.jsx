import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import User from './pages/User'
const App = () => {
    let router = createBrowserRouter([
        {
            path:"/",
            element:<Home/>
        },
        {
           path:"/user/:id",
           element:<User/>
        }
    ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App