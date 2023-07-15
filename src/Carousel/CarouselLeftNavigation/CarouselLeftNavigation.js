import React, { useState ,useEffect} from 'react';
import { useSwiper } from 'swiper/react';
import { ReactComponent as LeftArrow } from '../../assets/LeftArrow.svg'
import styles from './CarouselLeftNavigation.module.css';
//import Swiper from 'swiper';

const CarouselLeftNavigation = () => {
    const swiper=useSwiper();
    
    const [isBegining,setIsBegining]=useState(swiper.isBeginning);
    useEffect(()=>{
        swiper.on("slideChange",function(){
            setIsBegining(swiper.isBeginning);
        })
    },[])
  return (
    <div className={styles.leftnavigation}>
      {!isBegining && <LeftArrow onClick={()=>swiper.slidePrev()}/> }
    </div>
  );
}

export default CarouselLeftNavigation;
