import React from 'react'
import './Contact.css'
import contactimg from "../../assets/contact-img.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { MdOutlineVideoCall } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
function Contact() {
  return (
    <div className='contact-box'>
        <div className='c-left'>
            <div className='c-title'>
                <span>Our Contact Us</span>
                <h1>Easy to contact us</h1>
                <p>We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better</p>
            </div> 
            <div className='c-card-box'>
                <div className='row'>
                    <div className='card'>
                        <div className='upper'>
                            <span className='icon-box'><FaPhoneAlt  /></span>
                            <div className='context'>
                                <p>Call </p>
                                <span>021 123 145 14</span>
                            </div>
                        </div>
                        <div className='btn-box'>
                            <button>Call Now</button>
                            <div></div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='upper'>
                            <span className='icon-box'><AiFillMessage /></span>
                            <div className='context'>
                                <p>Chat</p>
                                <span>021 123 145 14</span>
                            </div>
                        </div>
                        <div className='btn-box'>
                            <button>Chat Now</button>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                <div className='card'>
                        <div className='upper'>
                            <span className='icon-box'><MdOutlineVideoCall /></span>
                            <div className='context'>
                                <p> Video Call</p>
                                <span>021 123 145 14</span>
                            </div>
                        </div>
                        <div className='btn-box'>
                            <button>Video Call Now</button>
                            <div></div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='upper'>
                            <span className='icon-box'><RiMessage2Fill /></span>
                            <div className='context'>
                                <p>Message</p>
                                <span>021 123 145 14</span>
                            </div>
                        </div>
                        <div className='btn-box'>
                            <button>Message Now</button>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='c-right'>
            <div className='c-img-box'>
                <img src={contactimg} alt=''></img>
            </div>
        </div>
    </div>
  )
}
export default Contact