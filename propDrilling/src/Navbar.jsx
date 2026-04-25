import React, { useContext } from 'react'
import ThemeContext from './ThemeContex';
const Navbar = () => {
    let{theme , toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{padding:'20px' , backgroundColor: theme === "light" ? "#f0f0f0" : "#333", color: theme === "light" ? "#000" : "#fff"}}>
        
        <h1>Navbar Component</h1>
        <button  className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={toggleTheme}>Toggle Theme</button>

    </div>
  )
}

export default Navbar