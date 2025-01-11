import { useState } from "react"
import Bars from "./ProgressBars"


const ProgressBarsWrraper = () => {

    const [isRunning, setIsRunning] = useState(false)
    const [bars, setBars] = useState(0)



    const handleClick = () => {
        setBars(prev => prev + 1)
        setIsRunning(true)
    }

    const handleReset = () => {
        setBars(0)
        setIsRunning(false)
    }
    return (
        <>
            <button onClick={handleClick}>Add</button>
            <button onClick={handleReset}>Reset</button>
            {
                Array(bars).fill(null).map((_,index) => {
                    return <Bars isRunning={isRunning} key={index}/>
                })
            }
        </>
    )
}

export default ProgressBarsWrraper