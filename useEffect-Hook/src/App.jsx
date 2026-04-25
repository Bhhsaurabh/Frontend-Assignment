import React, { useState } from 'react'
import Basic from './Basic'
import Child from './Child';
import Axios from './Axios';
import AxiosAsync from './AxiosAsync';
const App = () => {
  const [count , setCount] = useState(0);
  const [show , setShow] = useState(true);
  return (
    <div>
      {/* <Basic/> */}
      {/* <button onClick={()=> setCount(count + 1)}>Count: {count}</button>
      <button onClick={()=> setShow(()=>{
        return !show;
      })}>{show ? "Hide" : "Show"}</button>
      {
        show && <Child count={count}/>
      } */}
      {/* <Axios/> */}
      <AxiosAsync/>
    </div>
  )
}

export default App
