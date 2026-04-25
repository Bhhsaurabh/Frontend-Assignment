import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Axios = () => {
  const [data , setData] = useState([])
  useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/posts').then((res) =>{
        setData(res.data)
      }).catch((err)=>{
        console.log(err);
      });
  },[])
  return (
    <div>
      <h1>Axios</h1>
      {
        data.map((item)=>{
          return <p key={item.id}>{item.title}</p>
        })
      }
    </div>
  )
}

export default Axios


