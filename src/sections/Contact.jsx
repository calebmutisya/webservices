import React from 'react'
import arrow from '../assets/svg/arrows.svg'
import contactbg from '../assets/images/contact-bg.png'

import { MdAttachEmail } from "react-icons/md";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import SendButton from '../components/sendbtn/SendButton';

export default function Contact() {
  return (
    <div className='contact' style={{backgroundImage: `url(${contactbg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className='connected'>
            <h3><img className='arrows' src={arrow} alt=""/> STAY CONNECTED</h3>
            <h2>Let's Work Together!</h2>
            <div>
                <div className='contactdetails'>
                    <div className='iconcont'>
                        <LiaPhoneVolumeSolid className='contacticon' />
                    </div>
                    <div className='infocont'>
                        <p className='contacttitle'>Phone</p>
                        <p className='contactinfo'>+254-741-050-611</p>
                    </div>
                </div>
                <div className='contactdetails'>
                    <div className='iconcont'>
                        <MdAttachEmail className='contacticon'/>
                    </div>
                    <div className='infocont'>
                        <p className='contacttitle'>Email</p>
                        <p className='contactinfo'>musaucodes@gmail.com</p>
                    </div>
                </div> 
            </div>
        </div>
        <div className='contactme'>
            <div className='contactinputs'>
                <input type="text" placeholder='Full Name'/>
                <input type="email" placeholder='Email'/>
                <input type="text" placeholder='Phone Number'/>
            </div>
            <div className='contactmessage'>
                <textarea className='message' placeholder='Enter your message'></textarea>
                <div>
                    <SendButton/>
                </div>
            </div>
        </div>
    </div>
  )
}
