import React from 'react'
import { useState } from 'react'
import './hookusestate.css'


function Hookusestate() {
    const [count, setCount] = useState(0)
    let addval = () => {
        setCount(count+1)}

    function subval() {
        setCount(count-1)
    }
    let reset=()=>{
        setCount(0)
    }

  return (
    <div>Hookusestate
        <h1>Count: {count}</h1>
        <button onClick={addval} className='addbutton'>Add</button>
        <button onClick={subval} className='subbutton'>Subtract</button>
        <button onClick={reset} className='resetbutton'>reset</button>
    </div>
    
  )
}

export default Hookusestate