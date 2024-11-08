import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import NANGJ from './assets/1.jpg'
import NVGJ from './assets/4.jpg'
import BAKAL from './assets/2.jpg'
import './index.css'
import { useEffect, useState } from "react"

const data = [
    {
        url: NANGJ,
        title: '三次觉醒图',
        des: 'DNF支柱'
    },
    {
        url: NVGJ,
        title: '三次觉醒图',
        des: 'DNF最高人气女角色',
    },
    {
        url: BAKAL,
        title: '巴卡尔',
        des: '暴龙王的支配',
    },

]

const Carousel2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const length = data.length
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % length);
    };
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? length - 1 : prevIndex - 1
        );
    };
    const goTo = (index)=>{
        setCurrentIndex(index)
    }

    useEffect(()=>{
        const timer = setInterval(()=>{
            handleNext()
        },3000)
        return () => clearInterval(timer);
        

    }, [currentIndex])
    return (
        <div className="carousel">
            <div className="slider-container">
                <div className="sliders">
                    {data.map((item, index) => (
                        <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }} key={index}>
                            <img src={item.url} alt={item.des} />
                            <div className="text">
                                <h2>{item.title}</h2>
                                <p>{item.des}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button className="left" onClick={handlePrev}><LeftOutlined /></button>
            <button className="right" onClick={handleNext}><RightOutlined /></button>
            {
                
                    <div className="dots">
                        <ul>
                            {data.map((_,index)=>(
                                <li className={index===currentIndex?'active':''} onClick={()=>goTo(index)} key={index}></li>
                            ))}
                        </ul>
                    </div>
                
            }

        </div>
    )

}

export default Carousel2