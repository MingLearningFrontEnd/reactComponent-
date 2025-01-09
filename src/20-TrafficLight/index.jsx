import './index.css'
import { useState,useEffect } from 'react'

const TrafficLight = () => {
    const [currentLight, setCurrentLight] = useState('red')

    useEffect(()=>{
        let timer 
        if(currentLight === 'red'){
            timer = setTimeout(()=>setCurrentLight('green'),4000)
        }else if(currentLight === 'green'){
            timer = setTimeout(()=>setCurrentLight('yellow'),3000)
        } else if(currentLight ==='yellow'){
            timer  = setTimeout(()=>setCurrentLight('red'),1000)
        }

        return ()=>clearTimeout(timer)

    },[currentLight])



    return (
        <div className="trafficLight">
            <div className=" lights green" style={{backgroundColor:currentLight=== 'green'?'green':'grey'}}></div>
            <div className=" lights yellow" style={{backgroundColor:currentLight=== 'yellow'?'yellow':'grey'}}></div>
            <div className=" lights red" style={{backgroundColor:currentLight=== 'red'?'red':'grey'}}></div>
        </div>
    )
}

export default TrafficLight