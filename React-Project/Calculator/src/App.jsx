import React from 'react'
import './App.css'
import { useState } from 'react'

const App = () => {

  const [input, setInput] = useState('')
  return (

    <div className='container'>
      <div className='calculator'>
        <form action="">
          <div>
            <input type="text" className='display' value={input} />
          </div>
          <div>
            <input type="button" value="AC" onClick={e=>setInput('')}/>
            <input type="button" value="DE" onClick={e=>setInput(input.slice(0,-1))}/>
            <input type="button" value="." onClick={e => setInput(input + e.target.value)}/>
            <input type="button" value="/" onClick={e => setInput(input + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="7" onClick={e => setInput(input + e.target.value)} />
            <input type="button" value="8" onClick={e => setInput(input + e.target.value)} />
            <input type="button" value="9" onClick={e => setInput(input + e.target.value)}/>
            <input type="button" value="*" onClick={e => setInput(input + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="4" onClick={e => setInput(input + e.target.value)}/>
            <input type="button" value="5" onClick={e => setInput(input + e.target.value)}/>
            <input type="button" value="6" onClick={e => setInput(input + e.target.value)}/>
            <input type="button" value="+" onClick={e => setInput(input + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="1" onClick={e => setInput(input + e.target.value)}/>
            <input type="button" value="2" onClick={e => setInput(input + e.target.value)}/>
            <input type="button" value="3" onClick={e => setInput(input + e.target.value)}/>
            <input type="button" value="-" onClick={e => setInput(input + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="00" onClick={e => setInput(input + e.target.value)}/>
            <input type="button" value="0" onClick={e => setInput(input + e.target.value)}/>
            <input type="button" value="=" className='equal' onClick={e=>setInput(eval(input))}/>

          </div>
        </form>
      </div>

    </div>
  )
}

export default App