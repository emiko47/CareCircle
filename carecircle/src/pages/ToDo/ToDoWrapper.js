import React, {useState} from 'react'
import { ToDoForm } from './ToDoForm'
import {v4 as uuidv4} from 'uuid';
import {ToDo} from './ToDo';
import { EditToDoForm } from './EditToDoForm';
uuidv4();


 const ToDoWrapper = () => {
  const [toDos, setToDos] = useState([])

  const addToDo = todo => {
    setToDos([...toDos, {id:uuidv4(), task: todo,
      completed: false, isEditing: false}])
  }

  const toggleComplete = id =>{
    setToDos(toDos.map(todo => todo.id === id ?
    {...todo, completed: !todo.completed} : todo))
  }

  const deleteTodo = id => {
    setToDos(toDos.filter(todo => todo.id !== id))
  }

  const editTodo = id => {
    setToDos(toDos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }

  const editTask = (task, id)=> {
    setToDos(toDos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
  }
  
  return (
    <div id='full'>
    <div className ='ToDoWrapper'>
      <h1>Let's Get This!</h1>
      <ToDoForm addToDo={addToDo}/>
      {toDos.map((todo, index)=>(
        todo.isEditing ? (
        <EditToDoForm editToDo={editTask} task={todo}/>

        ): (
        <ToDo task={todo} key={index}
        toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>)
      ))}
      
    </div>
    </div>
  )
}

export default ToDoWrapper;

