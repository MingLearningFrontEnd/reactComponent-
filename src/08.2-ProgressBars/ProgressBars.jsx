import './ProgressBars.css'
import { useState, useEffect } from "react"

const Bars =({ isRunning})=>{
    const [filled, setFilled] = useState(0)

    useEffect(() => {
        if (isRunning && filled < 100) {
            const timer = setTimeout(() => {
                setFilled(prev => prev + 2)
            }, 10);
            return () => clearInterval(timer)
        }

    },[isRunning, filled])
    return(
        <div className="bar">
            <div className="filled" style={{width:`${filled}%`}}><span>{filled}%</span></div>
        </div>
    )
}

export default Bars