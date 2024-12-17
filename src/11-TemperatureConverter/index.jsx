import { useState } from "react"
import './index.css'
const TemperatureConveter = () => {
    const [cTem, setCTem] = useState('')
    const [fTem, setFTem] = useState('')

 
    const handleCTem = (e) => {
        const value = e.target.value
        setCTem(value)
        if(value === ''){
            setFTem('')
        }else{
            setFTem((value*9)/5 +32)
        }
    }

    const handleFTem = (e)=>{
        const value = e.target.value
        if(value === ''){
            setCTem('')
        }else{
            setCTem(((value - 32) * 5) / 9)
        }
        setFTem(value)
    }
    return (
        <div className="outer">
            <div className="container">
                <input type="number" onChange={(e) => handleCTem(e)} value={cTem} />
                <div className="font">Celsius</div>
            </div>

            <span>=</span>

            <div className="container">
                <input type="number" onChange={(e) => handleFTem(e)}  value={fTem}/>
                <div className="font">Fahrenheit</div>
            </div>
        </div>
    )

}

export default TemperatureConveter


/**
 * 设计两个state，一个摄氏度，一个华氏度，
 * 得到摄氏度和华氏度的计算公式，
 * 将input改为受控组件， 对应的input的value改为对应的state值，在用onchange事件获取，事件对象 e的值，并将他更新到state中，从而input的value就会改变，实现非受控组件变成受控组件
 * 
 * 逻辑点：这里获得事件对象的值之后需要更新两个state，一个是事件对象的值，一个是根据计算公式就算出来的值
 */