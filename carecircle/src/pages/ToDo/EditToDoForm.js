import React, {useState} from 'react'

export const EditToDoForm = ({editToDo, task}) => {
  const [value, setValue] = useState("")

  const handleSubmit = e=> {

    e.preventDefault();
    editToDo(value, task.id);

    setValue("");

  }
  
  return (
    <form className = 'ToDoForm' onSubmit={handleSubmit}>
      <input type ="text" className = 'todo-input' value= {value}
      placeholder = 'Update Task' onChange={(e)=> setValue(e.target.value)}/>
      <button type = 'submit' className = 'todo-btn'>
      Update Task</button>
    </form>
  )
}
