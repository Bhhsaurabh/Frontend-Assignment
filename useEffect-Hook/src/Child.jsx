import React, { useEffect } from 'react'

const Child = (prop) => {
    let count = prop.count;
    useEffect(()=>{
        console.log(count);
        console.log("Effect invoked!");
        let interval = setInterval(()=>{
            console.log("Interval executed!");
        }, 1000);

        return ()=>{
            console.log("Clean up function invoked!");
            clearInterval(interval);
        }
    },[count])
  return (
    <div>
      Child
      <p> {count}</p>
    </div>
  )
}

export default Child
