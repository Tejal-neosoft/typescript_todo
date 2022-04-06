import React from 'react'
import '../style.css'

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    addTodo:(e:React.FormEvent)=>void;
}
const InputField = ({todo,setTodo,addTodo}:Props) => {
  return (
    <form className='input' onSubmit={addTodo}>
        <input type="text" placeholder='Enter a task' className='input__box' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button type='submit' className='input_submit' > Go</button>
    </form>
  )
}

export default InputField