import { useState, useEffect } from "react"
import './progressBar.css'

const ProgressBar = () => {
    const [filled, setfilled] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        if (isRunning && filled < 100) {
            setTimeout(() => {
                setfilled(pre => pre += 2)
            }, 50)
        }


    }, [filled, isRunning])


    const reset = () => {

        setfilled(0)
        setIsRunning(false)
    }

    return (
        <div>
            <div className="barcontainer">
                <div style={{ height: '100%', width: `${filled}%`, backgroundColor: 'green', transition: 'width 0.1s' }}>
                    <span className="percent">{filled}%</span>
                </div>
            </div>
            <button className='btn' onClick={() => setIsRunning(true)}>Click</button>
            <button className="btn" onClick={reset}>reset</button>
        </div>
    )
}
export default ProgressBar