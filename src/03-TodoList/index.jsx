import { useState } from 'react'
import './index.css'

const TodoList = () => {
    const [todo, setTodo] = useState('')
    const [list, setList] = useState([])
    

    const change = (e) => {
       setTodo(e.target.value)
       
    }

    const add = () => {
        let narr = [...list]
        narr = [...list, todo]
        setList(narr)
        setTodo('')
    }

    const dele = (index) => {
        let narr = [...list]
        narr.splice(index, 1)
        setList(narr)
    }

    return (
        <div className="container">
            <h1>To do List</h1>
            <input placeholder="Please add things" onChange={change} value={todo} />   {/* value获得change后的数据 之后才能将数据清空*/}
            <button onClick={() => add(todo)} disabled = {todo.length>0?false:true}>Add</button>
            <ul>
                {list.map((item, index) => <li key={item}>{item} <button onClick={() => dele(index)}>del</button></li>)}
            </ul>
        </div>
    )

   
}

export default TodoList