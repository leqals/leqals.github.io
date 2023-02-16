import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser'


function Contact() {

  const formRef = useRef(null)

  const sendMail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })}

      const handleSubmit = (e) => {
        e.preventDefault()
        
      }

  return (
    
    <div className='contact-wrapper' id='contact'>
      
      <div className="contact-form">

        <div className="form-container flex column center">
          <form onSubmit={sendMail} ref={formRef}>
            <div className="user-info">
              <div className="username">
                {/* <label htmlFor="sender_name">Name</label> */}
                <input type="text" name='sender_name' id='sender_name' placeholder='Enter name' required/>
              </div>
              <div className="email">
                {/* <label htmlFor="sender_name">Email</label> */}
                <input type="email" name='sender_email' id='sender_email' placeholder='Enter email address' required/>
              </div>
            </div>
            <div className="msg">
              {/* <label htmlFor="message">Message</label> */}
              <textarea type="text" name='message' id='message' defaultValue='type your message here...' required></textarea>
            </div>
            <div className="submit">
              <button type='submit' className='submit-btn' onSubmit={handleSubmit}>send</button>
            </div>
          </form>
        </div>

      </div>
  </div>
    
  )
}

export default Contact

