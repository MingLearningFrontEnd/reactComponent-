import { useState } from 'react'
import './index.css'

const TodoList = () => {
    // const [todo, setTodo] = useState('')
    // const [list, setList] = useState([])
    

    // const change = (e) => {
    //    setTodo(e.target.value)
       
    // }

    // const add = () => {
    //     let narr = [...list]
    //     narr = [...list, todo]
    //     setList(narr)
    //     setTodo('')
    // }

    // const dele = (index) => {
    //     let narr = [...list]
    //     narr.splice(index, 1)
    //     setList(narr)
    // }

    // return (
    //     <div className="container">
    //         <h1>To do List</h1>
    //         <input placeholder="Please add things" onChange={change} value={todo} />   
    //         <button onClick={() => add(todo)} disabled = {todo.length>0?false:true}>Add</button>
    //         <ul>
    //             {list.map((item, index) => <li key={item}>{item} <button onClick={() => dele(index)}>del</button></li>)}
    //         </ul>
    //     </div>
    // )


    
    const [todo,setTodo] = useState('')
    const [list, setList] = useState([])

    const add = ()=>{
        let narr = [...list,todo]
        setList(narr)
        setTodo('')
    }

    const del = (index)=>{
        let narr = [...list]
        narr.splice(index,1)
        setList(narr)
    }

   return(
    <div className='container'>
        <h1>To do List</h1>
        <input value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button  onClick={add} disabled={todo.length?false:true}>Add</button>
        <ul>
            {
                list.map((item,index)=>(
                    <li key={index}>{item}<button onClick={()=>del(index)}>del</button></li>
                ))
            }
        </ul>
    </div>
   )

}

export default TodoList