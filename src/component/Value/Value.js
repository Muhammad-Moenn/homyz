import React, {  useState } from 'react'
import './value.css'
import valueimg from '../../assets/value-img.jpg'
import data  from '../../data.js'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
function Value() {

 const [changeicon,setchangeicon]=useState(false)



  
  return (
    <div className='value-box'>
        <div className='value-left'>
            <div className='img-box'>
            <img src={valueimg} alt=''></img>
            </div>
        </div>
        <div className='value-right'>
            <div className='value-title'>
                <span>Our Value</span>
                <h1>Value We Give to You</h1>
                <p>We always ready to help by providijng the best services for you.
                We beleive a good blace to live can make your life better</p>
            </div>
            <div className='dropdown-box'>
              <Accordion className='dropdown'
              allowMultipleExpanded={false}
              preExpanded={[0]}>
               {
                data.map((dropdown,i)=>{
                    return(
                      <AccordionItem className='Accordion-item' key={i}>
                      <div  key={i}>
                       <AccordionItemHeading>
                        <AccordionItemButton  className='accordion-btn'>
                        <div onClick={()=>setchangeicon(!changeicon)} className='dropdown-heading'>
                        <div className='icon'>{dropdown.icon}</div>
                        <h3 className='heading'>{dropdown.heading}</h3>
                        <div  className='icon'>{changeicon?<IoIosArrowDown />: <IoIosArrowUp />}</div>
                       
                        </div>
                        </AccordionItemButton>
                        </AccordionItemHeading> 
                        <AccordionItemPanel>
                        <p >{dropdown.detail}</p>
                        </AccordionItemPanel>
                      </div>
                      </AccordionItem>
                    )
                })
               }
               </Accordion>
            </div>
        </div>
    </div>
  )
}

export default Value