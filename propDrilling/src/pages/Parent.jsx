import React from 'react'
import Child from './Child'

const Parent = (prop) => {
    let {userName} = prop;
  return (
    <div>
        <h1>Parent Component</h1>
        <Child userName={userName}/>
    </div>
  )
}

export default Parent