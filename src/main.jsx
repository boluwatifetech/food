import React from 'react'
import ReactDom from 'react-dom'
import Nav from './navbar'
import Class from './mainbody'
import Food from './list'
import './main.css'
function Book(){
  return(
    <div>
  
<Nav/>
<div className='head'>
<h1>about us</h1>
</div>

<div className='map-cover'>
{Food.map((foods)=>{
  return(
    <div>
    <Class foods={foods} key={foods.id}/>
    </div>
  )
})}
</div>
    </div>
  )
  
}

ReactDom.render(<Book/>,document.getElementById('root'))