import { useState,useEffect } from 'react'
import './index.css'


const AnalogClock = ()=>{
const [time, setTime] = useState(new Date())

// console.log(time.getHours())
useEffect(()=>{
    setInterval(()=>{
        setTime(new Date())
    },1000)
},[])



return(
    <div className='analogClock'>
        <div className='dot'></div>
        <div className='tewlve'>12</div>
        <div className='three'>3</div>
        <div className='six'>6</div>
        <div className='nine'>9</div>
        <div className='hr-hand' style={{transform:`rotate(${time.getHours()*30}deg)`}} ></div>
        <div className='mins-hand' style={{transform:`rotate(${time.getMinutes()*6}deg)`}} ></div>
        <div className='sec-hand' style={{transform:`rotate(${time.getSeconds()*6}deg)`}} ></div>

    </div>
)
}

export default AnalogClock
