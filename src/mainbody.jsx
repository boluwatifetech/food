import React, { useState, useReducer } from 'react'

import Model from './model'

const reducer=(state,action)=>{
if(action.type==='ADDVALUE'){
    const newPerson=[...state.people,action.payload]
    return{
        ...state,
        people:newPerson,
        isModelOpen:true,
        modelContent:'items added',
    }
}
if(action.type==='REMOVEALL'){
    return{
        ...state,
        people:[],
    }
}
if(action.type==='NOVALUE'){
    return{
        ...state,
        isModelOpen:true,
        modelContent:'please input  a value',
        color:'red',
    }
}
if(action.type==='CLOSEMODEL'){
    return{
        ...state,
        isModelOpen:false,
    }
}
if(action.type==='REMOVE'){
    const newPerson=state.people.filter((person)=>person.id !==action.payload)
    return{
 ...state,
 people:newPerson,
 
    }
}
}
const defaultState={
    people:[],
    isModelOpen:false,
    modelContent:'',
    color:'green'
}
function Class(){
    const [name,setName]=useState('')
    const [state,dispatch]=useReducer(reducer,defaultState)

    const handleSubmit=(e)=>{
e.preventDefault()
if(name){
    const newPeople={id:new Date().getTime().toString(),name}
    dispatch({type:'ADDVALUE', payload:newPeople})
    setName('')
}
else{
dispatch({type:'NOVALUE'})
}

    }
    const closeModel=()=>{
        dispatch({type:'CLOSEMODEL'})
    }
    return(
        <div>
        {state.isModelOpen && <Model closeModel={closeModel} modelContent={state.modelContent}/>}
        <div className='form'>
        <div className="cover-form">
            <form onSubmit={handleSubmit}>
                <input type='text' value={name} onChange={(e)=> setName(e.target.value) }/>
<button>add todo</button>
            </form>
            
            </div>
            </div>
            <div className='map-tho'>
                {state.people.map((person)=>{
                    return(
                        <div key={person.id} className="map">
                            <h2>{person.name}</h2>
<button onClick={()=>dispatch({type:'REMOVE',payload:person.id})}>remove</button>
                        </div>
                    )
                })}
            </div>
        <div className='bottom-btn'>
            <button onClick={()=> dispatch({type:'REMOVEALL'})}>remove all</button>
        </div>
        </div>
    )
}



export default Class;