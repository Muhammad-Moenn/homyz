import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import { CiMenuFries } from "react-icons/ci";
import { Link } from 'react-scroll';
function Navbar({menu , setmenu}) {
    
    const navref=useRef();
    useEffect(()=>{
      
        window.addEventListener("scroll",()=>{
            if(window.scrollY>80){
                navref.current.classList.add('dark-nav');
            }else{
                navref.current.classList.remove('dark-nav');
            }
        }) 

    },[])
  return (
    <div className='nav-box' ref={navref}>
        <div className='logo'>
            <img src='https://real-estate-web.pages.dev/logo.png' alt='Google Logo'/>
        </div>
        <div>
        <ul className={`links-box ${menu?'visi':' '}`}>
           <li><Link to="residencies-box" smooth={true} offset={0} duration={500}>Residencies</Link></li>
           <li><Link to="value-box" smooth={true} offset={0} duration={500}>Our Value</Link></li>
           <li><Link to="contact-box" smooth={true} offset={0} duration={500}>Contact Us</Link>
           </li>
           <li><Link to="start-box" smooth={true} offset={0} duration={500}>Get Started</Link></li>
           <li><button><Link to="" smooth={true} offset={0} duration={500}>Contact</Link></button></li>
        </ul>
        <div onClick={()=>setmenu(!menu)}><CiMenuFries  className='menu-icon' style={{ color: 'white', fontSize: '24px' }} /></div>
        </div>
    </div>
  )
}

export default Navbar