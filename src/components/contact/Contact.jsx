import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import  { useRef } from 'react';
// import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    //emailjs.sendForm('service_5o8yn7a', 'template_mzkty0e', form.current, 'Hq_EvGwJv0JZgklKq')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Let's keep in touch</h5>
      <h2>Contact Me!</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>german.af86@gmail.com</h5>
            <a href="mailto:german.af86@gmail.com">Send a message</a>
          </article>

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Germán Flores</h5>
            <a href="https://m.me/germanflores">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+54 3416067016</h5>
            <a href="https://api.whatsapp.com/send?phone=543416067016" target="_blank">Send a message</a>
          </article>
        </div>

        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact