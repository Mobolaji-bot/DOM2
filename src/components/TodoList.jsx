import {useState} from 'react'

const TodoList = () => {
const [todos, setTodos] = useState([])
const [inputValue, setInputValue] = useState("")

const submit = (e) => {
    e.preventDefault()

    if(inputValue.trim()){
        setTodos([...todos, inputValue])
        setInputValue('')
    }
}
const change = (e) => {
    setInputValue(e.target.value)
}

  return (
   <section>
    <h1>Todo List</h1>
    <form onSubmit={submit}>
        <input type="text" value={inputValue} onChange={change} placeholder='New item' />
        <button type="submit">add</button>
    </form>

    <ul>
        {todos.map((todo, index) =>(
            <li key={index}>{todo}</li>
        ))}
    </ul>
   </section>
  )
}

export default TodoList
