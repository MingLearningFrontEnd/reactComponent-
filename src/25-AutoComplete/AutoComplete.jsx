import React, { useState } from 'react';
import './autoComplete.css'
const AutoComplete = ({ suggestions }) => {
    const [inputValue, setInputValue] = useState(''); // 当前输入框的值
    const [filteredSuggestions, setFilteredSuggestions] = useState([]); // 过滤后的建议列表
    const [showSuggestions, setShowSuggestions] = useState(false); // 是否显示建议列表

    const handleChange = (e) => {
        let value = e.target.value
        setInputValue(value)
        if (value.trim().length > 0) {
            const filterd = suggestions.filter((item) => {
                return item.toLowerCase().includes(value.toLowerCase())
            })
            setFilteredSuggestions(filterd)
            setShowSuggestions(true)
        } else {
            setShowSuggestions(false)
        }
    }

    const hanldeBlur = () => {
        setTimeout(() => setShowSuggestions(false), 100)
    }

    return (
        <div className='AutoComplete'>
            <input
                value={inputValue}
                onChange={handleChange}
                onBlur={hanldeBlur}
            />

            {showSuggestions &&
                filteredSuggestions.length > 0
                &&
                <ul>
                    {
                        filteredSuggestions.map((item) => {
                            return <li key={item}>{item}</li>
                        })
                    }
                </ul>
            }
        </div>
    );
};

export default AutoComplete