import React from 'react'

function Class(props){
    const {image,name,word}=props.foods
    return(
        <div className='flex-item'>
        
<h1>{image}</h1>
<h1>{name}</h1>
<p>{word}</p>
        </div>
    )
}
export default Class;