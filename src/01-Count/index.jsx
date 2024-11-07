import { useState } from "react"

const Count = ()=>{
   const [count, setCount]= useState(0)

//    const add = ()=>{
//     setCount(count+1)
//    }
//    const sub = ()=>{
//     setCount(count-1)
//    }


//因为数据更新时异步的，多次更新会被合并，如果有需要多次更新，可以这样写
   const add = ()=>{
    setCount((prev)=>{
       return prev+1
    })
   }

   const sub = ()=>{
    setCount((prev)=>{
        return prev-1 
    })
   }


    return(
        <>
        <h1>{count}</h1>
        <button onClick={add}>+1</button>
        <button onClick={sub}>-1</button>
        </>
        
    )
}

export default Count