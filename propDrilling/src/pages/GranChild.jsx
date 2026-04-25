import React from 'react'

const GranChild = (prop) => {
  let {userName} = prop;
  return (
    <div>
        <h1>GranChild Component</h1>
        <h2>Hello {userName}!</h2>
      
      </div>

  )
}

export default GranChild