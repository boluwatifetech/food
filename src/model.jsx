import React,{useEffect} from 'react';
import './main.css';
 function Model({modelContent,closeModel}) {
useEffect(()=>{
  setTimeout(()=>{
closeModel()
  },3000)
})
  return (
    <div>
     <h4 className='model-content'>{modelContent}</h4>
    </div>
  );
}
export default Model