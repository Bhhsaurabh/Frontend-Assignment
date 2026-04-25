import React from 'react'
import { reducer } from './Reducer';
import { useReducer } from 'react';
const App = () => {
    const [state , dispatch] = useReducer(reducer , {count:0});
  return (
    <div>
        <h2>App Component</h2>
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({type:"increment"})}>Increment</button>
        <br />
        <button onClick={() => dispatch({type:"decrement"})}>Decrement</button>
    </div>
  )
}

export default App