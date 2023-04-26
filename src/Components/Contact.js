import React, {useRef} from 'react'
import './Style.css'
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tejatip', 'template_60kkapp', form.current, 'kR48ftg9S7GcjG4Fn')
      .then((result) => {
          alert("Message sent successfully.");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='contact'>
      <form ref={form} onSubmit={sendEmail}>
        <h1>Contact us</h1>
        <p>Please enter the details below with your message. We wiil respond you shortly.</p>
        <label htmlFor="name">Name</label>
        <input type='text' name='name' placeholder='Your Name...' required />

        <label htmlFor="email">E-Mail</label>
        <input type='email' name='email' placeholder='Your E-mail...' required />

        <label htmlFor="number">Number</label>
        <input type='number' name='number' placeholder='Your Number...' required />

        <label htmlFor="message">Message</label>
        <textarea id="text" name="message" placeholder="Write something.." required ></textarea>

        <button className="Submitbutton" type="submit" value="Send">Submit</button>


      </form>
    </div>

  )
}
