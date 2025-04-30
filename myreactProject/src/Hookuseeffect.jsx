import React, { use } from 'react'
import { useState } from 'react'
import {useEffect} from 'react'

function Hookuseeffect() {
    const [num, setNum] = React.useState(10)
  
   
   
    useEffect(() => { 
        console.log('UseEffect');
     }, [num])  

  return (
    <div><h1>useEffect</h1>
        <h1>{num}</h1>
        <button onClick={()=>setNum((curval)=>curval+2)}>Add</button>
    </div>
    
  )
}

export default Hookuseeffect