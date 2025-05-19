import React from 'react'
import { useState } from 'react'
import './App.css'

const App = () => {

  const [count, setCount] = useState(0)

  function decrease() {
    if (count > 0) {
      setCount((curr) => curr - 1)
    }
    else {
      alert('Count cannot be less than 0')
    }
  }

  return (
    <div className='container'>
      <h1 className='heading'>Counter</h1>
      <h2 className='output'>{count}</h2>
      <button className='increase-btn' onClick={() => setCount((curr) => curr + 1)}>➕Increase</button>
      <button className='decrease-btn' onClick={decrease }>➖Decrease</button>
      <button className='reset-btn' onClick={() => setCount(0)}> 🔄Reset</button>
    </div>
  )
}

export default App