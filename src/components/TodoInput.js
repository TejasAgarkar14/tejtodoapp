// import React, { useState } from 'react'

// function TodoInput(props) {
//     const [inputText, setInputText] = useState('');
//   return (
//     <div className="input-container">
//         <input type='text' 
//         className='input-box-todo' 
//         value={inputText}
//         placeholder='Enter Task my boi~' 
//         onChange = {e=> {
//             setInputText(e.target.value)
//         }}/>
        
//         <button className='add-btn' onClick={()=>{
//             props.addList(inputText)
//             setInputText("")
//         }} >+</button>
//         <div>{inputText}</div>
//     </div>
//   )
// }

// export default TodoInput

import React,{useState} from "react";

function TodoInput(props) {
    const [inputText,setInputText] = useState('');
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("")
        }
    }
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter TASK my boi~"
        value={inputText}
        onChange={e=>{
            setInputText(e.target.value)
        }}
        onKeyDown={handleEnterPress}
      />
      <button className="add-btn" 
      onClick={()=>{
        props.addList(inputText)
        setInputText("")
      }}>+</button>      
    </div>
  );
}

export default TodoInput;