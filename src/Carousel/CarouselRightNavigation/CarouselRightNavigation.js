import React, { useState ,useEffect} from 'react';
import { useSwiper } from 'swiper/react';
import { ReactComponent as RightArrow } from '../../assets/RightArrow.svg'
import styles from './CarouselRightNavigation.module.css';
//import Swiper from 'swiper';

const CarouselRightNavigation = () => {
    const swiper=useSwiper();
   
    const [isEnd,setIsEnd]=useState(swiper.isEnd);
    useEffect(()=>{
        swiper.on("slideChange",function(){
            setIsEnd(swiper.isEnd);
        })
    },[])
  return (
    <div className={styles.rightnavigation}>
      {!isEnd && <RightArrow onClick={()=>swiper.slideNext()}/> }
    </div>
  );
}

export default CarouselRightNavigation;
