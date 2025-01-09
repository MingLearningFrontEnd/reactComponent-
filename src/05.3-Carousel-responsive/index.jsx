import {useState,useEffect} from 'react'
import './index.css'
import { use } from 'react';

const images = [
    {
      src: 'https://picsum.photos/id/600/600/400',
      alt: 'Forest',
    },
    {
      src: 'https://picsum.photos/id/100/600/400',
      alt: 'Beach',
    },
    {
      src: 'https://picsum.photos/id/200/600/400',
      alt: 'Yak',
    },
    {
      src: 'https://picsum.photos/id/300/600/400',
      alt: 'Hay',
    },
    {
      src: 'https://picsum.photos/id/400/600/400',
      alt: 'Plants',
    },
    {
      src: 'https://picsum.photos/id/500/600/400',
      alt: 'Building',
    },
  ];
const CarouselResponsive = ()=>{
    const [currentIndex, setCurrentIndex] = useState(0)
    const length = images.length
    const handleNext=()=>{
        setCurrentIndex(currentIndex===length-1?0: currentIndex+1)
    }
    const handlePrev=()=>{
        setCurrentIndex(currentIndex===0?length-1: currentIndex-1)
    }
    const goTo = (index)=>{
        setCurrentIndex(index)
    }
    useEffect(()=>{
        let timer = setInterval(()=>{
            handleNext()
        },3000)
        return ()=>{
            clearInterval(timer)
        }
    },[currentIndex])
    return(
        <div className='container'>
            <div className='slides'  style={{transform:`translateX(-${currentIndex*100}%)`}}>
                {images.map(({src,alt})=>{
                return <img src={src}
                    alt={alt}
                     key={src}
                    
                />
                })}
            </div>
            <div className='button next' onClick={handleNext}>next</div>
            <div className='button prev' onClick={handlePrev}>prev</div>
            <div className='dots'>
                <ul>
                {images.map((_,index)=>{
                    return<li key={index} onClick={()=>goTo(index)} className={currentIndex===index?'active':''}></li>
                })}
                </ul>
                
            </div>
        </div>
    )
}

export default CarouselResponsive