import React, { useState } from 'react';
import './autoCompleteII.css'
import useDebounce  from './useDebounce';

const AutoCompleteII = ({ suggestions }) => {
    const [inputValue, setInputValue] = useState(''); // 当前输入框的值
    const [filteredSuggestions, setFilteredSuggestions] = useState([]); // 过滤后的建议列表
    const [showSuggestions, setShowSuggestions] = useState(false); // 是否显示建议列表
   

    const debouncedFilter = useDebounce((value) => {
        if (value.trim().length > 0) {
            const filtered = suggestions.filter((item) =>
                item.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredSuggestions(filtered);
            setShowSuggestions(true); 
        } else {
            setFilteredSuggestions([]);
            setShowSuggestions(false); 
        }
    }, 100);
 
  


    const handleChange = (e)=>{
        const value = e.target.value;
        setInputValue(value); // 实时更新输入框值
        debouncedFilter(value);//防抖后的过滤数据
    }

    const handleBlur = () => {
        setTimeout(() => setShowSuggestions(false),200)
    }
    return (
        <div className='AutoComplete'>
            <input
                value={inputValue}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {showSuggestions && filteredSuggestions.length > 0 &&
                <ul>
                    {filteredSuggestions.map((item) => {
                        return <li key={item}>{item}</li>
                    })}
                </ul>
            }
        </div>
    );
};

export default AutoCompleteII