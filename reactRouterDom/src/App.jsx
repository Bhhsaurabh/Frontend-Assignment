// import React from 'react'
// import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// import Home from './pages/Home';
// import About from './pages/About';
// import Dashboard from './pages/Dashboard';
// const App = () => {
//     let router1 = createBrowserRouter([
//         { // pass in the form of array of objects
//         path: "/",
//         element: <Home/>,
//         children:[
//             {
//                 path:"dashboard",
//                 element:<Dashboard/>
//             }
//         ]
//         },
//         {
//             path:"/about",
//             element:<About/>
//         }
// ]);
//   return (
//    <RouterProvider router={router1} />
//   )
// }

// export default App

//? --- protected routing ---

import React from 'react'
import Home from './auth/Home'
import Login from './auth/Login'
import Dashboard from './auth/Dashboard'
import Protect from './auth/Protect'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
const App = () => {
    let router = createBrowserRouter([
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/dashboard",
            element:<Protect><Dashboard/></Protect>

        }
    ])
  return (
    <RouterProvider router={router} />
  )
}

export default App