import React from 'react'
import GranChild from './GranChild'

const Child = (prop) => {
  let {userName} = prop;
  return (
    <div>
        <h1>Child Component</h1>
        <GranChild userName={userName}/>
    </div>
  )
}

export default Child