import React from 'react'
import { Routes , Route} from 'react-router'
import { Link } from 'react-router'
// import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Dashboard from './nestedPages/Dashboard'
import Profile from './nestedPages/Profile'
import Setting from './nestedPages/Setting'
import Home from './nestedPages/Home'

const App = () => {
  return (
    <div>
         {/* link is used to where to redirect
        <Link to= '/' >Home </Link>
        <Link to= '/about' >About </Link>
        <Link to= '/contact' >Contact </Link>
     {/* routes are used to what to render */}
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path= '/dashboard' element = {<Dashboard/>}>
          <Route path='profile' element = {<Profile/>} />
          <Route path='setting' element = {<Setting/>} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
