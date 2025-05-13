import React from 'react'

const Parent = ({ count, setCount }) => {

    const addCount=()=>{
        setCount(count+1)
        console.log("Parent component");
        
    }
  return (
    <div>
          <p>{count}</p>
        <button onClick={addCount}>check</button>
    </div>
  )
}

export default Parent