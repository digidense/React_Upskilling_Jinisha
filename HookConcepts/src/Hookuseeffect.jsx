import React, { use } from 'react'
import { useState } from 'react'
import {useEffect} from 'react'
import './hookuseeffect.css'

function Hookuseeffect() {
    const [num, setNum] = React.useState(10)
  
   
   
    useEffect(() => { 
        console.log('UseEffect');
     }, [num])  

  return (
    <div><h1>useEffect</h1>
      <h1>Increase the value</h1>
        <h1>{num}</h1>
        <button onClick={()=>setNum((curval)=>curval+2)} className='addbutton'>Add</button>
    </div>
    
  )
}

export default Hookuseeffect