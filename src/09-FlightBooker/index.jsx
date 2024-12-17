import { useState } from 'react';
import './index.css'



function FlightBooker() {
    //修改日期，将日期以yy-mm-dd形式输出
    const formatDate = (date) => {
        let year = date.getFullYear()
        let month = (date.getMonth() + 1).toString().padStart(2, '0')
        let day = date.getDate().toString().padStart(2, '0')
        return [year, month, day].join('-')
    }

    //设置航班类型，单程还是往返，来控制input的变化
    const [flightOption, setFlightOption] = useState('one-way')
    //设置起飞日期，初始值是用formatData修改后的现在的日期
    const [depatureDate, setDepatureDate] = useState(formatDate(new Date(Date.now())))
    //设置返回日期，初始值是起飞日期
    const [returnDate, setReturnDate] = useState(depatureDate)


    console.log(depatureDate)
    console.log(returnDate)

    const submitForm = (e) => {
        e.preventDefault()
        if(flightOption === 'one-way'){
            alert(`您的起飞时间是${depatureDate}`)
            return
        }

        alert(`您的起飞时间是${depatureDate}，返回时间是${returnDate}`)
    }

    return (
        <div>
            <form className="flight-booker" onSubmit={submitForm}>
                {/* select是非受控组件，需要双向棒定 */}
                <select
                    //初始值是one-way 
                    value={flightOption}
                    //点击哪个option传入哪个option的value，然后更改select的value
                    onChange={(e) => { setFlightOption(e.target.value) }}
                >

                    <option value='one-way'>One-Way-Flight</option>
                    <option value='return'>With-Return-Flight</option>
                </select>


                <input
                    type='date'
                    min={depatureDate} //depaturedate初始值是今天，所以选择的日期不可以在今天之前
                    onChange={(e) => setDepatureDate(e.target.value)}
                />
                { //flightOption初始值是one-way,点击不同的option，flightoption的值会变，如果变成return，这个input就会出现
                    flightOption === 'return' && (
                        <input type='date'
                            min={depatureDate}//returndate的选择日期最早不可以超过depature的日期
                            onChange={(e) => setReturnDate(e.target.value)}
                        />
                    )
                }
                <button type='submit'>Book</button>
               
            </form>
        </div>
    );
}
export default FlightBooker


/**
 * 逻辑
 * 写一个格式化日期的函数 formatDate，以yyyy-mm-dd形式输出日期
 * 写三个state，一个控制航班的类型，一个是起飞时间，一个是返回时间
 * 用航班类型可以控制 return的input是否显示
 * 起飞时间初始值用formatDate格式过后的new Date()今天的时间
 * 返回时间初始值是起飞时间
 * 用input的min属性传入值，来控制在今天日期之前的时间不可选
 * input的onchange事件e.target.value拿到选中的日期，并且更新起飞时间和返回时间
 */