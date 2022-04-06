import React, { useState } from 'react';
import './App.css';
import DisplayTodo from './components/Display/DisplayTodo';
import InputField from './components/Input/InputField';
import { Todo } from './model';



const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {

      setTodos([...todos, { id: Date.now(), todo, isCompleted: false }])
      setTodo("")
    }



  }


  return (
    <div className="App">
      <h3 className='heading'>Todo in Typescript</h3>
      <InputField todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <DisplayTodo todos={todos} setTodos={setTodos} />


    </div>
  );
}

export default App;
