import React from 'react'
import { Todo } from '../../model';

interface Props{
    todos:Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const DisplayTodo = ({todos,setTodos}:Props) => {
  return (
      <>
   <h3>Display</h3>
   {
       todos.map(todo=><li>{todo.todo}</li>)
   }
   </>
  )
}

export default DisplayTodo