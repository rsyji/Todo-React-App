import React from 'react'
import todologo from '../images/todologo.png'

const Todo = () => {
  return (
    <>
    <div className='main-container'>
        <div className='chiild-constainer'>
            <figure>
                <img className='todo-image' src={todologo} alt='todologo'/>
                <figcaption className='todo-caption'>Enter Task Here 👌</figcaption>
            </figure>

        </div>
    </div>
    </>
  )
}

export default Todo