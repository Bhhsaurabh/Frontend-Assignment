import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    let [user , setUser] = useState(null)
    let{id} = useParams()
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data)=> setUser(data))

    }, [id])
  return (
    <div>
        <h1>User Details</h1>
        {
            user ? (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )
        }

    </div>
  )
}

export default User