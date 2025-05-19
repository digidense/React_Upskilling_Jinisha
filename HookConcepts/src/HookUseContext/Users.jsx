import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App'

const Users = () => {
  const {theme, setTheme}= useContext(ThemeContext)

  const changeTheme=()=>(setTheme(curr=>curr==='light'?'dark':'light'))

  return (
    <div>
      <h1 style={{color:'blue'}}> <u>Change the Theme</u></h1>
      <h2 style={{backgroundColor:theme==='light'?'#ffffff':'#000000',
        color:theme==='light'?'#000000':'#ffffff',
        height:"40px",width:"400px",padding:"20px"
      }}>So the Selected Theme is {theme}</h2>
      <button onClick={changeTheme}>Click me</button>
      
    </div>
    
  
  )
}

export default Users