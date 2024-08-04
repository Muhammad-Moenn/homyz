import React from 'react'
import './Residencies.css'
import { Swiper, SwiperSlide ,useSwiper} from 'swiper/react';
import 'swiper/css';
import carddetail from '../../cardsdetail';
import { SliderSetting } from '../Companies/slidersetting';
// import data from '../../data';
function Residencies() {
  return (
    <div className='residencies-box'>
        <div className='r-title'>
            <span>Best Choices</span>
            <p>Popular Residencies</p>
        </div>
        
        {/* <div className='r-cards-box'> */}
           
         <Swiper className='Swiper' {...SliderSetting}>
         

            {
                carddetail.map((card,i)=>{
                    return(
                        <SwiperSlide className=' SwiperSlid' key={i}>
                          {/* <div className='card'> */}
                            <div className='r-card'>
                                <img src={card.img} alt=''/><br/>
                                <div className='card-info'>
                                <span>$<b>{card.price}</b></span>
                                <h2>{card.name}</h2>
                                <p>{card.detail}</p> 
                                </div>
                            </div>
                          {/* </div> */}
                        </SwiperSlide>
                    )
                })
            }
           <SliderButton className='r-btn'/>
         </Swiper>
        </div>
    // </div>
  )
}
export default Residencies;
const SliderButton = () => {
    const swiper = useSwiper();
    console.log(swiper)
    // if (!swiper) {
    //     return null;
    //   }
    
      return (
        <div className="r-button">
          <button onClick={() => swiper.slidePrev()}>&lt;</button>
          <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
      );
  };
  
  