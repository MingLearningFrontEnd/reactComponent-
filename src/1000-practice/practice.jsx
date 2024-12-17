import { useState } from "react"



const Practice = () => {
    const [flightOption,setFlightOption] = useState('one-way')
   
  
    return (
        <div>
            <select 
            name="" 
            id=""
            value={flightOption}
            onChange = {(e)=>setFlightOption(e.target.value)}
            >
                <option value='one-way'>one-way</option>
                <option value='return'>return flight</option>

            </select>
            <input  type="text"/>
            {
                flightOption==='return' &&<input  type="text"/>
            }
            
        </div>


    )
}

export default Practice