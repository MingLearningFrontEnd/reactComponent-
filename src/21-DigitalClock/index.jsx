import { useEffect, useState } from "react"
import './index.css'




const  DigitalClock =()=>{
    
    const configTime = (date)=>{
        let hour = date.getHours()
        let minutes = date.getMinutes().toString().padStart(2,'0')
        let seconds = date.getSeconds().toString().padStart(2,'0')
        return [hour,minutes, seconds].join(':')
    }
    const [currentTime ,setCurrentTime] = useState()



    useEffect(()=>{
        setInterval(()=>{
            setCurrentTime(configTime(new Date()))
        },1000)
       
    },[currentTime])

    return(
        <div className="digitalClock">
            <div className="timedisplay">
                {currentTime}
            </div>
        </div>
    )
}

export default DigitalClock