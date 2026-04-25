import React, { useEffect, useState } from 'react'

const Basic = () => {
    const [todo , setTodo] = useState([]);
    const [count , setCount] = useState(0);
    useEffect(()=>{
       async function fectchData(){
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        setTodo(data);
        console.log(data);
       }
         fectchData();
    },[count])
    
  return (
    <div>
      <button onClick={()=>setCount(count + 1)}>Count: {count}</button>
      {
        todo.slice(0 , count ).map((todo) => (
            <div key = {todo.id}>
               <h2>Id : {todo.id}</h2> 
               <h2>Title : {todo.title}</h2> 
               <h2>Completed : {todo.completed ? "Yes" : "No"}</h2> 
            </div>
        ))  
      }
    </div>
  )
}

export default Basic;
