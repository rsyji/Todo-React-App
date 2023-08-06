import React, { useState } from 'react'
import todologo from '../images/todologo.png'

const Todo = () => {
  const [input, setInput]= useState('')
  const [listArray, setListArray]= useState([])
  const handleDelete = (id)=>{
    const updatedList = listArray.filter((item,index)=>{
      return index!==id
    })
    setListArray(updatedList)
  }

  const clickHandler= ()=>{
    if(input){
      setListArray([...listArray,input])
      setInput('')
    }
    else{
      alert("enter valid data")
    }
    
  }
  return (
    <>
    <div className='main-container'>
        <div className='chiild-constainer'>
            <figure>
                <img className='todo-image' src={todologo} alt='todologo'/>
                <figcaption className='todo-caption'>Enter Task Here 👌</figcaption>
            </figure>
            <div className='input-field'>
                <input type='text' placeholder='✍️ Enter Text here' value={input} onChange={e=>setInput(e.target.value)}/><button className='add-btn' onClick={clickHandler}>+</button>
            </div>
            <div className='items'>
              {
                listArray.map((item,index)=>{
                  return(
                    <div className='content' key={index}>
                    <h3 className='list-item'>{item}</h3><button className='delete-btn' onClick={()=>handleDelete(index)}>X</button>
                    </div>
                  )
                })
              }
              <button onClick={()=>setListArray([])}>Clear All</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Todo