import { useState } from 'react'
import './index.css'

const NavBar = () => {
    let [val, setVal] = useState(1)

    const change = (num) => {
        setVal(val = num)
    }

    return (
        <ul className=''>
            <li onClick={() => change(1)} className={val === 1 ? 'act' : ''}>首页</li>
            <li onClick={() => change(2)} className={val === 2 ? 'act' : ''}>产品</li>
            <li onClick={() => change(3)} className={val === 3 ? 'act' : ''}>咨询</li>
            <li onClick={() => change(4)} className={val === 4 ? 'act' : ''}>我们</li>
        </ul>

    )
}
export default NavBar