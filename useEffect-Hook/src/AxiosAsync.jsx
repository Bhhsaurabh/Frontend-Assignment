import axios from 'axios'
import React, { useState, useEffect } from 'react'

const AxiosAsync = () => {
    const [user , setUser] = useState([]);
    useEffect(()=>{
        let fetchData = async ()=>{
            try{
                let res = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setUser(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchData();
    },[])
  return (
    <div>
      {
        user.map((item)=>{
          return <p key={item.id}>{item.title}</p>
        })
      }
    </div>
  )
}

export default AxiosAsync
