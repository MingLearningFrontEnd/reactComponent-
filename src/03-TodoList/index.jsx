import { useState, useCallback } from 'react'
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



    //下面是有debounce的写法，多写一个state，一个是用来展示input的state，一个是debounce逻辑的state

    const [todo, setTodo] = useState('')
    const [list, setList] = useState([])//debounce逻辑
    const [imTodo, setImTodo] = useState('')//input中展示的
    const add = () => {
        let narr = [...list, todo || imTodo]
        setList(narr)
        setImTodo('')
        setTodo('')
    }

    const del = (index) => {
        let narr = [...list]
        narr.splice(index, 1)
        setList(narr)
    }

    const debounce = (fn, delay = 100) => {
        let timer = null
        return function () {
            if (timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(() => {
                fn.apply(this, arguments)
                timer = null
            }, delay)
        }
    }


    const handleInputChange = useCallback(
        debounce((value) => {
            setTodo(value);
        }, 300),
        []
    );

    console.log(todo)
    return (
        <div className='container'>
            <h1>To do List</h1>
            <input value={imTodo} onChange={(e) => {
                const value = e.target.value
                setImTodo(value)
                handleInputChange(value)}} />
            <button onClick={add} disabled={imTodo.length ? false : true}>Add</button>
            <ul>
                {
                    list.map((item, index) => (
                        <li key={index}>{item}<button onClick={() => del(index)}>del</button></li>
                    ))
                }
            </ul>
        </div>
    )

}

export default TodoList