import React, { useEffect } from 'react'
import './Hero.css'
import { MdLocationPin } from "react-icons/md";
import heroimg from '../../assets/hero-img.jpg';
import CountUp from 'react-countup';
import { motion } from "framer-motion"
function Hero({menu,setmenu}) {

 
  const Clickhandle=()=>{
    if(menu===true){
      setmenu(!menu);
    }
  }
 
  return (
    <div className='hero-box' onClick={()=>Clickhandle()}>
        <div className='hero-left'>
            <div className='hero-title'>
                
            <motion.h1 
            initial={{y:'3rem' , opacity:"0"}}
            animate={{y:'0' , opacity:"1"}}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              delay: 0.5,
              
            }}
            >Discover<div className='orange-circle'></div><br/>
               Most Suitable<br/>
               Property
            </motion.h1>
            <p>Find a variety of properties that suit you very easilty<br/>
            Forget all difficulties in finding a residence for you</p>
            </div>
            
            

            <div className='search-box'>
              <MdLocationPin  style={{color:'rgba(23, 130, 252, 0.849)',fontSize:'30'}}/>
              <input type='text' placeholder='Enter your location'></input>
              <button>Search</button>
            </div>

            <div className='stats-box'>
                <div className='stats-item'>
                   <div className='pp-box'>
                   <CountUp className='countv' start={8800} end={9000} duration={4}/>
                   <span>+</span>
                   </div>
                   <p>Premium Product</p>
                </div>
                <div className='stats-item'>
                   <div className='pp-box'>
                   <CountUp className='countv' start={1950} end={2000} duration={4}/>
                   <span>+</span>
                   </div>
                   <p>Happy Customer</p>
                </div>
                <div className='stats-item'>
                   <div className='pp-box'>
                   <CountUp className='countv'  end={28} duration={4}/>
                   <span>+</span>
                   </div>
                   <p>Awards Winning</p>
                </div>
            </div>
        </div>
        <div className='hero-right'>
            <motion.div className='h-img-box'
            initial={{x:'7rem' , opacity:"0"}}
            animate={{x:'0' , opacity:"1"}}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              // delay: 0.5,
              
            }}
            >
                <img src={heroimg} alt=''></img>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero;