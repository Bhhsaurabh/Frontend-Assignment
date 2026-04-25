import React from 'react'
import Parent from './pages/Parent'
import Navbar from './Navbar'
import Home from './Home'

const App = () => {
    let userName = "Saurabh"
  return (
    <div>
        <h1>App Component</h1>
        {/* <Parent userName = {userName}/> */}
        <Navbar/>
        <Home/>
    </div>
  )
}

export default App