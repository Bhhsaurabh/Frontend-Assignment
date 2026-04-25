import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <Link to="/user/1">Go to User 1</Link>
        <br />
        <Link to="/user/2">Go to User 2</Link>
    </div>
  )
}

export default Home