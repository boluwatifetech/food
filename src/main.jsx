import React from 'react'
import ReactDom from 'react-dom'
import Class from './mainbody'
import './main.css'
function Book(){
  return(
   <div>
   
<Class/>
   </div>
  )
  
}

ReactDom.render(<Book/>,document.getElementById('root'))