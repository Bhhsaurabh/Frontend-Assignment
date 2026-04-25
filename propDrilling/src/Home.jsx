import React, { useContext } from 'react'
import ThemeContext from './ThemeContex'
const Home = () => {
    let {theme} = useContext(ThemeContext);
  return (
    <div>
        <h1 className='bg-red-100'>Home Component</h1>
        <p>Theme: {theme}</p>
    </div>
  )
}

export default Home