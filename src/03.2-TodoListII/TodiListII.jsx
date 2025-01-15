import React, { useCallback, useState } from "react";
import './todolist.css'
const TodoListII = () => {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState("");

  const handleInputChange = (e) => { //onchange绑定input值 ，并且将值debounce，debounce里可以写请求
    const value = e.target.value
    setTodo(value) //实时更新input值
    afterDebounce(value) //debounce值，可以以后发请求
  }

  const debounce = (fn, delay = 300) => {
    let timer = null
    return function (...args) {
      if (!timer) clearInterval(timer)
      timer = setInterval(() => {
        fn.apply(this, [...args])
        timer = null;
      }, delay)
    }
  }

  const add = () => {//点击add，会将list展开并加上done这个属性
    setList([...list, { done: false, value: todo }]) //重点是这，加了个done属性
    setTodo('')
  }

  const afterDebounce = useCallback(() => {
    debounce((value) => {
      console.log(`Processed input: ${value}`);  //以后可以在这里发送请求
    }, 300)
  }, [])

  //加了点击list可以划掉计划
  const toggleDone = (index) => { //切换要划掉的list的done值，取反
    setList(list.map((tasks, currentIndex) => {
      //map所有list值，然后他的index和传入的index值相等的那一项就是我们点击的那一项，
      //然后展开那一项的值并且修改done值，取反
      //如果不是那一项 就保持不变
      return currentIndex === index ? { ...tasks, done: !tasks.done } : tasks
    }))
  }

  const del = (index) => {
    const narr = [...list]
    narr.splice(index, 1)
    setList(narr)
  }

  return (
    <div className='container'>
      <h1>To do List</h1>
      <input value={todo} onChange={handleInputChange} />
      <button onClick={add} className="add" disabled={todo ? false : true}>Add</button>
      <ul >
        {
          list.map((item, index) => {
            return (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between',marginTop:10 }}>
                <li key={index}
                  onClick={() => toggleDone(index)}
                  style={{
                    textDecoration: item.done ? 'line-through' : 'none',
                    color: item.done ? 'gray' : 'black',
                    cursor: 'pointer'
                  }}>
                  {item.value}
                </li>
                <button onClick={() => del(index)} className="del">del</button>
              </div>
            )


          })
        }
      </ul>
    </div>
  );
};

export default TodoListII;


