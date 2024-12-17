import { useState } from 'react'
import './index.css'

const data = [
    {
        TabTitle: '首页',
        TabContent: '我是首页内容'
    },
    {
        TabTitle: '朋友',
        TabContent: '我是朋友页内容'
    },
    {
        TabTitle: '消息',
        TabContent: '我是消息页内容'
    },
    {
        TabTitle: '我的',
        TabContent: '我是我的页内容'
    },

]
const Tabs = () => {
    const [currentIndex,setCurrentIndex] = useState(0)
   

    const handleClick =(index)=>{
        setCurrentIndex(index)
    }
    return (
        <div className="tabs">
            <div className='tab-header'>
                {data.map((item, index) => (
                    <div className={`tabbtn ${index === currentIndex?'active':''}`} key={index} onClick={()=>handleClick(index)}>
                        {item.TabTitle}
                    </div>
                ))}
            </div>
            <div className="content">{data[currentIndex].TabContent}</div>
        </div>
    )
}


// const Tabs = ()=>{
//     const [currentIndex,setCurrentIndex] = useState(0)
//     const handleClick=(index)=>{
//         setCurrentIndex(index)
//     }
//     return(
//         <div className='tabs'>
//             <div className='tab-header'>
//                 {data.map((item,index)=>(
//                     <div key={index} className={currentIndex===index?'tabbtn active':'tabbtn'} onClick={()=>handleClick(index)} >
//                         {item.TabTitle}
//                     </div>
//                 ))}
//             </div>
//             <div className='content'>
//                 {data[currentIndex].TabContent}
//             </div>
//         </div>
//     )
// }

export default Tabs